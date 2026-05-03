const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const shopTsPath = path.join(__dirname, '..', 'src', 'types', 'shop.ts');

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

// Remove all Birthday Outfit items for a clean reset
let nonBoProducts = products.filter(p => p.category !== "Birthday Outfit");

const boImagesDir = path.join(publicDir, 'collections', 'birthday_outfit');
const boFiles = fs.readdirSync(boImagesDir).filter(f => f.match(/\.(png|jpg|jpeg|webp)$/i));

const boProducts = [];
// Create individual products for 1-14
for (let i = 1; i <= 14; i++) {
    const file = boFiles.find(f => f.startsWith(`birthday_outfit_${i}.`));
    if (file) {
        boProducts.push({
            id: `birthday-outfit-${i}`,
            name: `Birthday Outfit ${i}`,
            price: 75000,
            category: "Birthday Outfit",
            images: [`/collections/birthday_outfit/${file}`]
        });
    }
}

// Add any other images (like img_5424 etc.) as individual products too
const newBoFiles = boFiles.filter(f => !f.startsWith('birthday_outfit_'));
let nextNum = 15;
newBoFiles.forEach(file => {
    boProducts.push({
        id: `birthday-outfit-new-${nextNum}`,
        name: `Birthday Outfit ${nextNum}`,
        price: 75000,
        category: "Birthday Outfit",
        images: [`/collections/birthday_outfit/${file}`]
    });
    nextNum++;
});

const allProducts = [...nonBoProducts, ...boProducts];

const newArrayStr = allProducts.map(p => `  {
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
console.log("Birthday Outfit fully unmerged and reset to individual items.");
