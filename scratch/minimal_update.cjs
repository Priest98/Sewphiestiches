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

products.forEach(p => {
    p.images = p.images.filter(img => fs.existsSync(path.join(publicDir, img)));
    if (p.images.length === 0) p.deleted = true;
});

function findByPattern(cat, pattern) {
    return products.find(p => p.category === cat && !p.deleted && p.images.some(img => img.includes(pattern)));
}

// Birthday Outfit merges
const boMerges = [
    { from: ['birthday_outfit_2.', 'birthday_outfit_3.', 'birthday_outfit_4.'], to: 'birthday_outfit_1.' },
    { from: ['birthday_outfit_14.'], to: 'birthday_outfit_6.' },
    { from: ['birthday_outfit_11.', 'birthday_outfit_12.', 'birthday_outfit_13.'], to: 'birthday_outfit_5.' },
    { from: ['birthday_outfit_8.'], to: 'birthday_outfit_7.' }
];

boMerges.forEach(m => {
    const target = findByPattern('Birthday Outfit', m.to);
    if (!target) return;
    m.from.forEach(patt => {
        const source = findByPattern('Birthday Outfit', patt);
        if (source && source !== target) {
            target.images = Array.from(new Set([...target.images, ...source.images]));
            source.deleted = true;
        }
    });
});

const rtwMerges = [{ from: ['a2.', 'a3.', 'a4.', 'a5.'], to: 'a1.' }];
rtwMerges.forEach(m => {
    const target = findByPattern('Ready to Wear', m.to);
    if (!target) return;
    m.from.forEach(patt => {
        const source = findByPattern('Ready to Wear', patt);
        if (source && source !== target) {
            target.images = Array.from(new Set([...target.images, ...source.images]));
            source.deleted = true;
        }
    });
});

products.forEach(p => {
    if (p.deleted) return;
    if (p.category === 'Birthday Outfit') {
        const m = p.images[0].match(/birthday_outfit_(\d+)\./);
        if (m) p.name = `Birthday Outfit ${m[1]}`;
    }
});

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
console.log("Minimal update complete!");
