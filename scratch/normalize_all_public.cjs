const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const targetDirs = ['collections', 'academy', 'lookbook'];

function normalizeName(name) {
    let normalized = name.replace(/\.JPG\.jpeg$/i, '.jpg');
    normalized = normalized.replace(/\.jpeg$/i, '.jpg');
    normalized = normalized.replace(/\.PNG$/i, '.png');
    normalized = normalized.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_\.]/g, '');
    return normalized;
}

function processDir(dir) {
    if (!fs.existsSync(dir)) return;
    
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stats = fs.statSync(fullPath);
        
        const normName = normalizeName(file);
        const newFullPath = path.join(dir, normName);
        
        if (fullPath !== newFullPath) {
            console.log(`Renaming: ${fullPath} -> ${newFullPath}`);
            if (fs.existsSync(newFullPath) && fullPath.toLowerCase() === newFullPath.toLowerCase()) {
                const tempPath = fullPath + '_temp';
                fs.renameSync(fullPath, tempPath);
                fs.renameSync(tempPath, newFullPath);
            } else {
                fs.renameSync(fullPath, newFullPath);
            }
        }
        
        if (stats.isDirectory()) {
            processDir(newFullPath);
        }
    });
}

targetDirs.forEach(target => {
    const fullTarget = path.join(publicDir, target);
    console.log(`Normalizing directory: ${fullTarget}`);
    processDir(fullTarget);
});
