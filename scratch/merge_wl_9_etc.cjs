const fs = require('fs');
const path = require('path');

const shopTsPath = path.join(__dirname, '..', 'src', 'types', 'shop.ts');
let content = fs.readFileSync(shopTsPath, 'utf8');

const productsMatch = content.match(/export const MOCK_PRODUCTS: Product\[\] = (\[[\s\S]*?\]);/);
const objectRegex = /\{[\s\S]*?\}/g;
const matches = productsMatch[1].match(objectRegex);
let products = matches.map(m => {
    const id = m.match(/id:\s*"([^"]+)"/)[1];
    const nameMatch = m.match(/name:\s*"([^"]+)"/);
    const name = nameMatch ? nameMatch[1] : "";
    const imagesMatch = m.match(/images:\s*\[([\s\S]*?)\]/);
    const images = imagesMatch ? imagesMatch[1].match(/"([^"]+)"/g).map(s => s.slice(1, -1)) : [];
    const categoryMatch = m.match(/category:\s*"([^"]+)"/);
    const category = categoryMatch ? categoryMatch[1] : "";
    const priceMatch = m.match(/price:\s*(\d+)/);
    const price = priceMatch ? parseInt(priceMatch[1]) : 75000;
    return { id, name, images, category, price };
});

function findByName(num) {
    return products.find(p => p.category === "Wedding Look" && p.name === `Wedding Look ${num}`);
}

const target = findByName(9);
if (target) {
    [7, 10].forEach(num => {
        const source = findByName(num);
        if (source && source !== target) {
            target.images = Array.from(new Set([...target.images, ...source.images]));
            source.deleted = true;
        }
    });
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
console.log("Wedding Look 10, 7 merged into 9.");
