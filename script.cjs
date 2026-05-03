const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'IMAGES');
const destDir = path.join(__dirname, 'public', 'collections');

if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

const foldersToSync = [
  'Aso oke',
  'Birthday outfit',
  'Corporate Suit',
  'Pre wedding look',
  'Ready to wear',
  'Reception Dress',
  'Wedding ball gown',
  'Wedding look'
];

let productsContent = `export type Category = 'Aso Oke' | 'Birthday Outfit' | 'Corporate Suit' | 'Pre Wedding Look' | 'Ready To Wear' | 'Reception Dress' | 'Wedding Ball Gown' | 'Wedding Look';

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  category: Category;
  isCustom: boolean;
  colors?: string[];
  sizes?: string[];
  measurements?: string[];
}

export interface OrderDetails {
  customerName: string;
  email: string;
  phone: string;
  address: string;
  size?: string;
  color?: string;
  measurements?: Record<string, string>;
  notes?: string;
}

export const MOCK_PRODUCTS: Product[] = [\n`;

let productId = 1;

for (const folder of foldersToSync) {
  const sourceFolder = path.join(srcDir, folder);
  if (!fs.existsSync(sourceFolder)) {
    console.log('Missing folder:', folder);
    continue;
  }
  
  const destFolder = path.join(destDir, folder);
  if (!fs.existsSync(destFolder)) fs.mkdirSync(destFolder, { recursive: true });

  const files = fs.readdirSync(sourceFolder).filter(f => {
    const ext = path.extname(f).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
  });
  const imagePaths = [];

  for (const file of files) {
    fs.copyFileSync(path.join(sourceFolder, file), path.join(destFolder, file));
    imagePaths.push(`/collections/${folder}/${file}`);
  }

  for (let i = 0; i < imagePaths.length; i++) {
    const categoryName = folder.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    
    productsContent += `  {
    id: "${folder.replace(/\s+/g, '-').toLowerCase()}-${i+1}",
    name: "${categoryName} ${i+1}",
    price: ${categoryName === 'Aso Oke' ? 250000 : Math.floor(Math.random() * 50) * 1000 + 50000},
    category: "${categoryName}" as Category,
    isCustom: true,
    description: "Custom ${categoryName.toLowerCase()} crafted to perfection.",
    images: ["${imagePaths[i]}"],
    measurements: ["Bust", "Waist", "Hip"]
  },\n`;
  }
}

productsContent += '];\n';

fs.writeFileSync(path.join(__dirname, 'src', 'types', 'shop.ts'), productsContent);
console.log('Done!');
