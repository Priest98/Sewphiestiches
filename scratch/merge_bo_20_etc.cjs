const fs = require('fs');
const path = require('path');

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

function findByName(num) {
    return products.find(p => p.category === "Birthday Outfit" && p.name === `Birthday Outfit ${num}`);
}

const target = findByName(20);
if (target) {
    [21, 22].forEach(num => {
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
console.log("Birthday Outfit 22, 21 merged into 20.");
