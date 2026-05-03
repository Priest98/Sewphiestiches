const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const shopTsPath = path.join(__dirname, '..', 'src', 'types', 'shop.ts');
const collectionsTsPath = path.join(__dirname, '..', 'src', 'components', 'sewphie', 'Collections.tsx');
const academyTsPath = path.join(__dirname, '..', 'src', 'pages', 'AcademyPage.tsx');

let brokenCount = 0;

function validatePaths(filePath, pattern) {
    if (!fs.existsSync(filePath)) return;
    const content = fs.readFileSync(filePath, 'utf8');
    const matches = content.match(pattern) || [];
    
    matches.forEach(match => {
        const p = match.slice(1, -1);
        const absolutePath = path.join(publicDir, p);
        if (!fs.existsSync(absolutePath)) {
            console.error(`[BROKEN] in ${path.basename(filePath)}: ${p}`);
            brokenCount++;
        }
    });
}

console.log("Validating all image references...");
validatePaths(shopTsPath, /"\/collections\/[^"]+"/g);
validatePaths(collectionsTsPath, /"\/collections\/[^"]+"/g);
validatePaths(academyTsPath, /"\/(?:collections|academy|lookbook)\/[^"]+"/g);

if (brokenCount === 0) {
    console.log("SUCCESS: All image references are valid!");
} else {
    console.error(`FAILURE: Found ${brokenCount} broken image references.`);
    process.exit(1);
}
