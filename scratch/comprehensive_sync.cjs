const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const rootImagesDir = path.join(__dirname, '..', 'IMAGES');
const publicDir = path.join(__dirname, '..', 'public');
const shopTsPath = path.join(__dirname, '..', 'src', 'types', 'shop.ts');

const mapping = {
    'Aso oke': 'collections/aso_oke',
    'Asoebi': 'collections/asoebi',
    'Birthday outfit': 'collections/birthday_outfit',
    'Corporate Suit': 'collections/corporate_suit',
    'Pre wedding look': 'collections/pre_wedding_look',
    'Ready to wear': 'collections/ready_to_wear',
    'Reception Dress': 'collections/reception_dress',
    'Wedding ball gown': 'collections/wedding_ball_gown',
    'Wedding look': 'collections/wedding_look',
    'Academy': 'academy',
    'Look book': 'lookbook'
};

const folderToCategoryLabel = {
    'collections/aso_oke': 'Aso oke',
    'collections/asoebi': 'Asoebi',
    'collections/birthday_outfit': 'Birthday Outfit',
    'collections/corporate_suit': 'Corporate Suit',
    'collections/pre_wedding_look': 'Pre Wedding Look',
    'collections/ready_to_wear': 'Ready to Wear',
    'collections/reception_dress': 'Reception Dress',
    'collections/wedding_ball_gown': 'Wedding Ball Gown',
    'collections/wedding_look': 'Wedding Look'
};

function normalizeName(name) {
    let normalized = name.toLowerCase().replace(/[\s\(\)]+/g, '_');
    normalized = normalized.replace(/\.jpe?g\.jpe?g$/i, '.jpg');
    normalized = normalized.replace(/\.jpe?g\.jpeg$/i, '.jpg');
    normalized = normalized.replace(/\.png\.jpeg$/i, '.jpg');
    normalized = normalized.replace(/\.jpeg$/i, '.jpg');
    normalized = normalized.replace(/\.png$/i, '.png');
    return normalized;
}

async function optimizeImage(src, dest) {
    const ext = path.extname(dest).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
        fs.copyFileSync(src, dest);
        return;
    }

    try {
        let pipeline = sharp(src).resize(2000, 2000, { fit: 'inside', withoutEnlargement: true });
        if (ext === '.png') {
            await pipeline.png({ quality: 85, compressionLevel: 9 }).toFile(dest);
        } else {
            await pipeline.jpeg({ quality: 80, progressive: true }).toFile(dest);
        }
        console.log(`  Optimized and saved: ${path.basename(dest)}`);
    } catch (err) {
        console.error(`  Error optimizing ${src}:`, err);
        fs.copyFileSync(src, dest);
    }
}

async function run() {
    console.log("Starting comprehensive sync...");

    const existingContent = fs.readFileSync(shopTsPath, 'utf8');
    const existingImagePaths = (existingContent.match(/"\/collections\/[^"]+"/g) || []).map(m => m.slice(1, -1));

    const newProducts = [];

    for (const [srcFolder, destRelPath] of Object.entries(mapping)) {
        const srcPath = path.join(rootImagesDir, srcFolder);
        const destPath = path.join(publicDir, destRelPath);

        if (!fs.existsSync(srcPath)) continue;
        if (!fs.existsSync(destPath)) fs.mkdirSync(destPath, { recursive: true });

        console.log(`Processing ${srcFolder} -> ${destRelPath}...`);
        const files = fs.readdirSync(srcPath);

        for (const file of files) {
            const fullSrc = path.join(srcPath, file);
            if (fs.statSync(fullSrc).isDirectory()) continue;
            if (!file.match(/\.(jpg|jpeg|png|webp|avif)$/i)) continue;

            const normalizedFile = normalizeName(file);
            const fullDest = path.join(destPath, normalizedFile);
            const publicPath = `/${destRelPath}/${normalizedFile}`;

            if (!fs.existsSync(fullDest)) {
                console.log(`New image detected: ${file} -> ${normalizedFile}`);
                await optimizeImage(fullSrc, fullDest);

                if (folderToCategoryLabel[destRelPath]) {
                    const category = folderToCategoryLabel[destRelPath];
                    const id = `${destRelPath.split('/').pop().replace(/_/g, '-')}-new-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
                    newProducts.push({
                        id,
                        name: `${category} New`,
                        price: 75000,
                        category: category,
                        isCustom: true,
                        description: `Luxury ${category.toLowerCase()} couture.`,
                        images: [publicPath],
                        measurements: ["Bust", "Waist", "Hip"]
                    });
                }
            } else if (folderToCategoryLabel[destRelPath] && !existingImagePaths.includes(publicPath)) {
                // Already in public but not in shop.ts
                console.log(`Image exists in public but not in shop.ts: ${publicPath}`);
                const category = folderToCategoryLabel[destRelPath];
                const id = `${destRelPath.split('/').pop().replace(/_/g, '-')}-new-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
                newProducts.push({
                    id,
                    name: `${category} New`,
                    price: 75000,
                    category: category,
                    isCustom: true,
                    description: `Luxury ${category.toLowerCase()} couture.`,
                    images: [publicPath],
                    measurements: ["Bust", "Waist", "Hip"]
                });
            }
        }
    }

    if (newProducts.length > 0) {
        console.log(`Appending ${newProducts.length} new products to shop.ts...`);
        const newProductsString = newProducts.map(p => `  {
    id: "${p.id}",
    name: "${p.name}",
    price: ${p.price},
    category: "${p.category}" as Category,
    isCustom: ${p.isCustom},
    description: "${p.description}",
    images: ["${p.images[0]}"],
    measurements: ${JSON.stringify(p.measurements)}
  }`).join(',\n');

        const updatedContent = existingContent.replace(/(export const MOCK_PRODUCTS: Product\[\] = \[[\s\S]*?)(\s*\];)/, (match, p1, p2) => {
            return `${p1},\n${newProductsString}${p2}`;
        });

        fs.writeFileSync(shopTsPath, updatedContent);
        console.log("shop.ts updated.");
    } else {
        console.log("No new images to append to shop.ts.");
    }

    console.log("Comprehensive sync finished!");
}

run();
