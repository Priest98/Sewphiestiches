const fs = require('fs');
const path = require('path');

const publicCollectionsDir = path.join(__dirname, '..', 'public', 'collections');
const shopTsPath = path.join(__dirname, '..', 'src', 'types', 'shop.ts');

const folderToCategory = {
    'aso_oke': 'Aso oke',
    'asoebi': 'Asoebi',
    'birthday_outfit': 'Birthday Outfit',
    'corporate_suit': 'Corporate Suit',
    'pre_wedding_look': 'Pre Wedding Look',
    'ready_to_wear': 'Ready to Wear',
    'reception_dress': 'Reception Dress',
    'wedding_ball_gown': 'Wedding Ball Gown',
    'wedding_look': 'Wedding Look'
};

// Read existing shop.ts
const existingContent = fs.readFileSync(shopTsPath, 'utf8');

// Simple regex to extract image paths currently in MOCK_PRODUCTS
const existingImagePaths = [];
const imageMatches = existingContent.match(/"\/collections\/[^"]+"/g) || [];
imageMatches.forEach(match => {
    existingImagePaths.push(match.slice(1, -1));
});

console.log(`Currently mapped images: ${existingImagePaths.length}`);

const newProducts = [];
const categories = Object.keys(folderToCategory);

categories.forEach(folder => {
    const dir = path.join(publicCollectionsDir, folder);
    if (!fs.existsSync(dir)) return;
    
    const files = fs.readdirSync(dir).filter(f => f.match(/\.(jpg|jpeg|png|webp|avif)$/i));
    files.forEach((file, index) => {
        const imagePath = `/collections/${folder}/${file}`;
        
        // Only detect NEW images
        if (!existingImagePaths.includes(imagePath)) {
            const categoryLabel = folderToCategory[folder];
            const id = `${folder.replace(/_/g, '-')}-new-${Date.now()}-${index}`;
            const name = `${categoryLabel} New ${index + 1}`;
            const price = 75000; // Default price for new items
            
            newProducts.push({
                id,
                name,
                price,
                category: categoryLabel,
                isCustom: true,
                description: `Custom ${categoryLabel.toLowerCase()} crafted to perfection.`,
                images: [imagePath],
                measurements: ["Bust", "Waist", "Hip"]
            });
        }
    });
});

if (newProducts.length === 0) {
    console.log("No new images detected.");
    process.exit(0);
}

console.log(`Detected ${newProducts.length} new images.`);

// Create the new products string
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

// Append to MOCK_PRODUCTS
// Find the last ] before the end of the MOCK_PRODUCTS array
const updatedContent = existingContent.replace(/(export const MOCK_PRODUCTS: Product\[\] = \[[\s\S]*?)(\s*\];)/, (match, p1, p2) => {
    return `${p1},\n${newProductsString}${p2}`;
});

fs.writeFileSync(shopTsPath, updatedContent);
console.log(`Successfully appended ${newProducts.length} new products to shop.ts`);
