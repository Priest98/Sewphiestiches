const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public', 'collections');
const shopTsPath = path.join(__dirname, '..', 'src', 'types', 'shop.ts');
const collectionsTsPath = path.join(__dirname, '..', 'src', 'components', 'sewphie', 'Collections.tsx');
const academyTsPath = path.join(__dirname, '..', 'src', 'pages', 'AcademyPage.tsx');

const mapping = {};

function normalizeName(name) {
    // Remove double extensions like .JPG.jpeg
    let normalized = name.replace(/\.JPG\.jpeg$/i, '.jpg');
    normalized = normalized.replace(/\.jpeg$/i, '.jpg');
    normalized = normalized.replace(/\.PNG$/i, '.png');
    
    // Replace spaces and special chars with underscores
    normalized = normalized.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_\.]/g, '');
    
    return normalized;
}

function processDir(dir, relativePath = '') {
    if (!fs.existsSync(dir)) return;
    
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const rel = path.join(relativePath, file).replace(/\\/g, '/');
        
        if (fs.statSync(fullPath).isDirectory()) {
            // Normalize directory name too?
            const normDir = normalizeName(file);
            const newDirPath = path.join(dir, '..', normDir);
            
            // For now let's just process children
            processDir(fullPath, path.join(relativePath, file));
        } else {
            const normFile = normalizeName(file);
            const newFullPath = path.join(dir, normFile);
            
            if (fullPath !== newFullPath) {
                console.log(`Renaming: ${rel} -> ${normFile}`);
                fs.renameSync(fullPath, newFullPath);
            }
            
            // Store mapping for code replacement
            const oldKey = ('/collections/' + rel).replace(/\/\//g, '/');
            const newKey = ('/collections/' + relativePath + '/' + normFile).replace(/\\/g, '/').replace(/\/\//g, '/');
            mapping[oldKey] = newKey;
        }
    });
}

console.log("Normalizing files in public/collections...");
processDir(publicDir);

// Also normalize the folder names in public/collections
const folders = fs.readdirSync(publicDir);
folders.forEach(folder => {
    const fullPath = path.join(publicDir, folder);
    if (fs.statSync(fullPath).isDirectory()) {
        const normFolder = normalizeName(folder);
        const newPath = path.join(publicDir, normFolder);
        if (fullPath !== newPath) {
            console.log(`Renaming folder: ${folder} -> ${normFolder}`);
            // If the new path already exists (due to case sensitivity on Windows), we might need to handle it
            if (fs.existsSync(newPath) && fullPath.toLowerCase() === newPath.toLowerCase()) {
                const tempPath = fullPath + '_temp';
                fs.renameSync(fullPath, tempPath);
                fs.renameSync(tempPath, newPath);
            } else {
                fs.renameSync(fullPath, newPath);
            }
            
            // Update mapping keys that start with this folder
            for (let key in mapping) {
                if (key.startsWith(`/collections/${folder}/`)) {
                    const newKey = key.replace(`/collections/${folder}/`, `/collections/${normFolder}/`);
                    mapping[key] = newKey;
                }
            }
        }
    }
});

console.log("Finished normalization. Mapping size:", Object.keys(mapping).length);

// Update code files
[shopTsPath, collectionsTsPath, academyTsPath].forEach(filePath => {
    if (!fs.existsSync(filePath)) return;
    console.log(`Updating ${filePath}...`);
    let content = fs.readFileSync(filePath, 'utf8');
    let updated = content;
    
    // Sort keys by length descending to avoid partial replacements
    const sortedKeys = Object.keys(mapping).sort((a, b) => b.length - a.length);
    
    sortedKeys.forEach(oldPath => {
        const newPath = mapping[oldPath];
        // Use a global regex to replace all occurrences
        // Escaping spaces and special chars for regex
        const escaped = oldPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(escaped, 'g');
        updated = updated.replace(regex, newPath);
    });
    
    if (content !== updated) {
        fs.writeFileSync(filePath, updated);
        console.log(`  Saved changes to ${filePath}`);
    } else {
        console.log(`  No changes needed for ${filePath}`);
    }
});
