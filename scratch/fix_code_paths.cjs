const fs = require('fs');
const path = require('path');

const shopTsPath = path.join(__dirname, '..', 'src', 'types', 'shop.ts');
const collectionsTsPath = path.join(__dirname, '..', 'src', 'components', 'sewphie', 'Collections.tsx');
const academyTsPath = path.join(__dirname, '..', 'src', 'pages', 'AcademyPage.tsx');

function normalizePath(p) {
    const parts = p.split('/');
    return parts.map(part => {
        if (!part || ['collections', 'academy', 'lookbook'].includes(part)) return part;
        let normalized = part.replace(/\.JPG\.jpeg$/i, '.jpg');
        normalized = normalized.replace(/\.jpeg$/i, '.jpg');
        normalized = normalized.replace(/\.PNG$/i, '.png');
        normalized = normalized.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_\.]/g, '');
        return normalized;
    }).join('/');
}

[shopTsPath, collectionsTsPath, academyTsPath].forEach(filePath => {
    if (!fs.existsSync(filePath)) return;
    console.log(`Fixing paths in ${filePath}...`);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Match strings starting with /collections/, /academy/, or /lookbook/
    const updated = content.replace(/"\/(?:collections|academy|lookbook)\/[^"]+"/g, (match) => {
        const p = match.slice(1, -1);
        const normalized = normalizePath(p);
        if (p !== normalized) {
            console.log(`  ${p} -> ${normalized}`);
        }
        return `"${normalized}"`;
    });
    
    if (content !== updated) {
        fs.writeFileSync(filePath, updated);
        console.log(`  Saved ${filePath}`);
    } else {
        console.log(`  No changes needed in ${filePath}`);
    }
});
