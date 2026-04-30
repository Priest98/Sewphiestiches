const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const TARGET_DIRS = [
  'public/collections',
  'public/lookbook',
  'public/academy'
];

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;

  const stats = fs.statSync(filePath);
  const sizeMB = stats.size / (1024 * 1024);

  // If already small (< 500KB), skip unless it's a huge resolution
  if (sizeMB < 0.5) {
      console.log(`Skipping ${filePath} (already small: ${sizeMB.toFixed(2)}MB)`);
      return;
  }

  console.log(`Optimizing ${filePath} (${sizeMB.toFixed(2)}MB)...`);

  const tmpPath = filePath + '.tmp';
  
  try {
    let pipeline = sharp(filePath);
    
    // Resize to max 2000px width/height while maintaining aspect ratio
    pipeline = pipeline.resize(2000, 2000, {
      fit: 'inside',
      withoutEnlargement: true
    });

    if (ext === '.png') {
      await pipeline.png({ quality: 85, compressionLevel: 9 }).toFile(tmpPath);
    } else {
      await pipeline.jpeg({ quality: 80, progressive: true }).toFile(tmpPath);
    }

    const newStats = fs.statSync(tmpPath);
    const newSizeMB = newStats.size / (1024 * 1024);

    if (newStats.size < stats.size) {
      try {
        fs.renameSync(tmpPath, filePath);
      } catch (renameErr) {
        if (renameErr.code === 'EPERM') {
          console.log(`  Rename failed (EPERM), trying copy fallback...`);
          fs.copyFileSync(tmpPath, filePath);
          fs.unlinkSync(tmpPath);
        } else {
          throw renameErr;
        }
      }
      console.log(`  Done! Reduced to ${newSizeMB.toFixed(2)}MB (${Math.round((1 - newStats.size / stats.size) * 100)}% saving)`);
    } else {
      fs.unlinkSync(tmpPath);
      console.log(`  Optimization didn't reduce size for ${filePath}, keeping original.`);
    }
  } catch (err) {
    console.error(`  Error optimizing ${filePath}:`, err);
    if (fs.existsSync(tmpPath)) fs.unlinkSync(tmpPath);
  }
}

async function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      await walkDir(fullPath);
    } else {
      await optimizeImage(fullPath);
    }
  }
}

async function run() {
  console.log('Starting Image Optimization...');
  for (const dir of TARGET_DIRS) {
    const absoluteDir = path.resolve(process.cwd(), dir);
    if (fs.existsSync(absoluteDir)) {
      console.log(`Processing directory: ${dir}`);
      await walkDir(absoluteDir);
    }
  }
  console.log('Finished Optimization!');
}

run();
