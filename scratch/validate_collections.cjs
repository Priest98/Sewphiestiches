const fs = require('fs');
const path = require('path');

const collectionsTsPath = path.join(__dirname, '..', 'src', 'components', 'sewphie', 'Collections.tsx');
const content = fs.readFileSync(collectionsTsPath, 'utf8');

const imagePathRegex = /"(?:\/collections\/[^"]+)"/g;
const matches = content.match(imagePathRegex) || [];

console.log(`Found ${matches.length} image references in Collections.tsx.`);

const publicDir = path.join(__dirname, '..', 'public');
let brokenCount = 0;

matches.forEach(match => {
    const imgPath = match.replace(/"/g, '');
    const absolutePath = path.join(publicDir, imgPath);
    
    if (!fs.existsSync(absolutePath)) {
        console.error(`[BROKEN] ${imgPath}`);
        brokenCount++;
    }
});

if (brokenCount === 0) {
    console.log("All image paths in Collections.tsx are valid!");
} else {
    console.log(`Found ${brokenCount} broken image paths in Collections.tsx.`);
}
