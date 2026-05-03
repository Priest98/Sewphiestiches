const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const imagesDir = path.join(__dirname, '..', 'IMAGES');
const shopTsPath = path.join(__dirname, '..', 'src', 'types', 'shop.ts');

const toDelete = [
    'Ready to wear/B1.jpeg', 'Ready to wear/B2.jpeg', 'Ready to wear/B3.jpeg', 'Ready to wear/B4.jpeg', 'Ready to wear/B5.jpeg',
    'Ready to wear/C1.PNG', 'Ready to wear/C2.PNG', 'Ready to wear/C3.PNG',
    'Ready to wear/IMG_5464.PNG', 'Ready to wear/IMG_5498.jpg', 'Ready to wear/IMG_5505.jpg',
    'collections/ready_to_wear/b1.jpg', 'collections/ready_to_wear/b2.jpg', 'collections/ready_to_wear/b3.jpg', 'collections/ready_to_wear/b4.jpg', 'collections/ready_to_wear/b5.jpg',
    'collections/ready_to_wear/c1.png', 'collections/ready_to_wear/c2.png', 'collections/ready_to_wear/c3.png',
    'collections/ready_to_wear/img_5464.png', 'collections/ready_to_wear/img_5498.jpg', 'collections/ready_to_wear/img_5505.jpg'
];

toDelete.forEach(relPath => {
    const fullPath = path.join(relPath.startsWith('collections') ? publicDir : imagesDir, relPath);
    if (fs.existsSync(fullPath)) {
        console.log(`Deleting: ${relPath}`);
        fs.unlinkSync(fullPath);
    }
});

// Update shop.ts
let content = fs.readFileSync(shopTsPath, 'utf8');
const productsMatch = content.match(/export const MOCK_PRODUCTS: Product\[\] = (\[[\s\S]*?\]);/);
const objectRegex = /\{[\s\S]*?\}/g;
const matches = productsMatch[1].match(objectRegex);
let products = matches.map(m => {
    const id = m.match(/id:\s*"([^"]+)"/)[1];
    const name = m.match(/name:\s*"([^"]+)"/)[1];
    const images = m.match(/images:\s*\[([\s\S]*?)\]/)[1]
        .match(/"([^"]+)"/g).map(s => s.slice(1, -1));
    const category = m.match(/category:\s*"([^"]+)"/)[1];
    const price = parseInt(m.match(/price:\s*(\d+)/)[1]);
    return { id, name, images, category, price };
});

// Remove invalid images and unmerge Birthday Outfit 9/10
products.forEach(p => {
    p.images = p.images.filter(img => fs.existsSync(path.join(publicDir, img)));
    if (p.images.length === 0) p.deleted = true;
});

// Specific fix for Birthday Outfit 9 (unmerge 10 if it's in there)
const bo9 = products.find(p => p.name === "Birthday Outfit 9" && p.category === "Birthday Outfit");
if (bo9) {
    const img10 = bo9.images.find(img => img.includes('birthday_outfit_10.'));
    if (img10) {
        bo9.images = bo9.images.filter(img => img !== img10);
        // Ensure Birthday Outfit 10 exists
        if (!products.some(p => p.name === "Birthday Outfit 10")) {
            products.push({
                id: 'birthday-outfit-10',
                name: 'Birthday Outfit 10',
                price: 75000,
                category: 'Birthday Outfit',
                images: [img10]
            });
        }
    }
}

const remaining = products.filter(p => !p.deleted);
const newArrayStr = remaining.map(p => `  {
    id: "${p.id}",
    name: "${p.name}",
    price: ${p.price || 75000},
    category: "${p.category}" as Category,
    isCustom: true,
    description: "Luxury ${p.category.toLowerCase()} crafted to perfection.",
    images: ${JSON.stringify(p.images, null, 2)},
    measurements: ["Bust","Waist","Hip"]
  }`).join(',\n');

const updatedContent = content.replace(/(export const MOCK_PRODUCTS: Product\[\] = \[)[\s\S]*?(\];)/, `$1\n${newArrayStr}\n$2`);
fs.writeFileSync(shopTsPath, updatedContent);
console.log("Manual fix complete!");
