const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const rootImagesDir = path.join(__dirname, '..', 'IMAGES');
const shopTsPath = path.join(__dirname, '..', 'src', 'types', 'shop.ts');

function normalizeName(name) {
    let normalized = name.toLowerCase().replace(/[\s\(\)]+/g, '_');
    normalized = normalized.replace(/\.jpe?g\.jpe?g$/i, '.jpg');
    normalized = normalized.replace(/\.jpe?g\.jpeg$/i, '.jpg');
    normalized = normalized.replace(/\.png\.jpeg$/i, '.jpg');
    normalized = normalized.replace(/\.jpeg$/i, '.jpg');
    normalized = normalized.replace(/\.png$/i, '.png');
    return normalized;
}

// 1. Sync Ready to Wear folder (source of truth is IMAGES/Ready to wear)
const rtwSrc = path.join(rootImagesDir, 'Ready to wear');
const rtwDest = path.join(publicDir, 'collections', 'ready_to_wear');
const srcFiles = fs.readdirSync(rtwSrc).map(f => normalizeName(f));
const destFiles = fs.readdirSync(rtwDest);

destFiles.forEach(file => {
    if (!srcFiles.includes(file)) {
        console.log(`Deleting removed asset: ${file}`);
        fs.unlinkSync(path.join(rtwDest, file));
    }
});

// 2. Update shop.ts
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

// Remove invalid images
products.forEach(p => {
    p.images = p.images.filter(img => fs.existsSync(path.join(publicDir, img)));
    if (p.images.length === 0) p.deleted = true;
});

// Re-apply merges (Ready to Wear 2,3,4,5 into 1)
function findByPattern(cat, pattern) {
    return products.find(p => p.category === cat && !p.deleted && p.images.some(img => img.includes(pattern)));
}

const target = findByPattern('Ready to Wear', 'a1.');
if (target) {
    ['a2.', 'a3.', 'a4.', 'a5.'].forEach(patt => {
        const source = findByPattern('Ready to Wear', patt);
        if (source && source !== target) {
            target.images = Array.from(new Set([...target.images, ...source.images]));
            source.deleted = true;
        }
    });
}

// Re-apply Birthday Outfit merges if needed
const boMerges = [
    { from: ['birthday_outfit_2.', 'birthday_outfit_3.', 'birthday_outfit_4.'], to: 'birthday_outfit_1.' },
    { from: ['birthday_outfit_14.'], to: 'birthday_outfit_6.' },
    { from: ['birthday_outfit_11.', 'birthday_outfit_12.', 'birthday_outfit_13.'], to: 'birthday_outfit_5.' },
    { from: ['birthday_outfit_8.'], to: 'birthday_outfit_7.' }
];
boMerges.forEach(m => {
    const targetBo = findByPattern('Birthday Outfit', m.to);
    if (!targetBo) return;
    m.from.forEach(patt => {
        const sourceBo = findByPattern('Birthday Outfit', patt);
        if (sourceBo && sourceBo !== targetBo) {
            targetBo.images = Array.from(new Set([...targetBo.images, ...sourceBo.images]));
            sourceBo.deleted = true;
        }
    });
});

// Final Name fixes
products.forEach(p => {
    if (p.deleted) return;
    if (p.category === 'Birthday Outfit') {
        const m = p.images[0].match(/birthday_outfit_(\d+)\./);
        if (m) p.name = `Birthday Outfit ${m[1]}`;
    }
    if (p.category === 'Ready to Wear') {
        const m = p.images[0].match(/a(\d+)\./);
        if (m) p.name = `Ready to Wear ${m[1]}`;
        const m2 = p.images[0].match(/ready_to_wear_(\d+)\./);
        if (m2) p.name = `Ready to Wear ${m2[1]}`;
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
console.log("Re-sync and Merge complete!");
