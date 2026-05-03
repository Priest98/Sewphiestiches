const fs = require('fs');
const path = require('path');

// Mocking the Category type and MOCK_PRODUCTS from the file content
// I will read the file and extract the MOCK_PRODUCTS array using regex or simple parsing
const shopTsPath = path.join(__dirname, '..', 'src', 'types', 'shop.ts');
const shopTsContent = fs.readFileSync(shopTsPath, 'utf8');

// Use a simple regex to find all image paths
const imagePathRegex = /"(?:\/collections\/[^"]+)"/g;
const matches = shopTsContent.match(imagePathRegex) || [];

console.log(`Found ${matches.length} image references.`);

const publicDir = path.join(__dirname, '..', 'public');
let brokenCount = 0;

matches.forEach(match => {
    const imgPath = match.replace(/"/g, '');
    const absolutePath = path.join(publicDir, imgPath);
    
    if (!fs.existsSync(absolutePath)) {
        console.error(`[BROKEN] ${imgPath}`);
        brokenCount++;
        
        // Try to find if it's a case sensitivity issue or space issue
        const dir = path.dirname(absolutePath);
        if (fs.existsSync(dir)) {
            const files = fs.readdirSync(dir);
            const base = path.basename(absolutePath);
            const suggestion = files.find(f => f.toLowerCase() === base.toLowerCase());
            if (suggestion) {
                console.log(`  Suggestion: ${path.join(path.dirname(imgPath), suggestion).replace(/\\/g, '/')}`);
            } else {
                // Check if it's a double extension issue or something similar
                console.log(`  Directory exists but file not found. Files in ${path.dirname(imgPath)}:`);
                // console.log(`    ${files.slice(0, 5).join(', ')}...`);
            }
        } else {
            console.log(`  Directory does not exist: ${path.dirname(imgPath)}`);
            // Check if parent directory exists to see if the category folder name is wrong
            const parentDir = path.dirname(dir);
            if (fs.existsSync(parentDir)) {
                const folders = fs.readdirSync(parentDir);
                const categoryFolder = path.basename(dir);
                const suggestion = folders.find(f => f.toLowerCase() === categoryFolder.toLowerCase());
                if (suggestion) {
                    console.log(`  Suggested category folder: ${suggestion}`);
                }
            }
        }
    }
});

if (brokenCount === 0) {
    console.log("All image paths are valid!");
} else {
    console.log(`Found ${brokenCount} broken image paths.`);
}
