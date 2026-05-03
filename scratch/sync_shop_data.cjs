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

// Read existing shop.ts to preserve some data
const existingContent = fs.readFileSync(shopTsPath, 'utf8');
const productsMatch = existingContent.match(/export const MOCK_PRODUCTS: Product\[\] = (\[[\s\S]*\]);/);
let existingProducts = [];
if (productsMatch) {
    try {
        const prodBlocks = productsMatch[1].match(/\{[\s\S]*?\}/g) || [];
        existingProducts = prodBlocks.map(block => {
            const id = (block.match(/id:\s*"([^"]+)"/) || [])[1];
            const name = (block.match(/name:\s*"([^"]+)"/) || [])[1];
            const price = parseInt((block.match(/price:\s*(\d+)/) || [])[1]);
            const image = (block.match(/images:\s*\["([^"]+)"\]/) || [])[1];
            return { id, name, price, image };
        });
    } catch (e) {
        console.error("Failed to parse existing products", e);
    }
}

function getExistingData(imagePath) {
    return existingProducts.find(p => p.image === imagePath);
}

const newProducts = [];
const categories = Object.keys(folderToCategory);

categories.forEach(folder => {
    const dir = path.join(publicCollectionsDir, folder);
    if (!fs.existsSync(dir)) return;
    
    const files = fs.readdirSync(dir).filter(f => f.match(/\.(jpg|jpeg|png|webp|avif)$/i));
    files.forEach((file, index) => {
        const imagePath = `/collections/${folder}/${file}`;
        const existing = getExistingData(imagePath);
        
        const categoryLabel = folderToCategory[folder];
        const id = `${folder.replace(/_/g, '-')}-${index + 1}`;
        const name = existing ? existing.name : `${categoryLabel} ${index + 1}`;
        const price = existing ? existing.price : 75000;
        
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
    });
});

const newType = `export type Category = ${Object.values(folderToCategory).map(c => `'${c}'`).join(' | ')};`;

let newContent = existingContent.replace(/export type Category = [^;]+;/, newType);

const productsString = `export const MOCK_PRODUCTS: Product[] = [\n${newProducts.map(p => `  {
    id: "${p.id}",
    name: "${p.name}",
    price: ${p.price},
    category: "${p.category}" as Category,
    isCustom: ${p.isCustom},
    description: "${p.description}",
    images: ["${p.images[0]}"],
    measurements: ${JSON.stringify(p.measurements)}
  }`).join(',\n')}\n];`;

newContent = newContent.replace(/export const MOCK_PRODUCTS: Product\[\] = \[[\s\S]*\];/, productsString);

fs.writeFileSync(shopTsPath, newContent);
console.log(`Generated ${newProducts.length} products in shop.ts with correct category names.`);
