export type Category = 'Aso Oke' | 'Asoebi' | 'Birthday Outfit' | 'Civil Wedding Dress' | 'Corporate Suit' | 'Pre Wedding Look' | 'Ready To Wear' | 'Reception Dress' | 'Wedding Ball Gown' | 'Wedding Look' | 'Streetwear';

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

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "aso-oke-1",
    name: "Aso Oke 1",
    price: 250000,
    category: "Aso Oke" as Category,
    isCustom: true,
    description: "Custom aso oke crafted to perfection.",
    images: [
      "/collections/Aso oke/IMG_9706.JPG.jpeg",
      "/collections/Aso oke/IMG_9707.JPG.jpeg",
      "/collections/Aso oke/IMG_9718.JPG.jpeg",
      "/collections/Aso oke/IMG_9719.JPG.jpeg",
      "/collections/Aso oke/IMG_9730.JPG.jpeg"
    ],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "aso-oke-2",
    name: "Aso Oke 2",
    price: 250000,
    category: "Aso Oke" as Category,
    isCustom: true,
    description: "Custom aso oke crafted to perfection.",
    images: [
      "/collections/Aso oke/IMG_8305.JPG.jpeg",
      "/collections/Aso oke/IMG_8308.JPG.jpeg",
      "/collections/Aso oke/IMG_8310.JPG.jpeg",
      "/collections/Aso oke/IMG_8313.JPG.jpeg"
    ],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "aso-oke-5",
    name: "Aso Oke 5",
    price: 250000,
    category: "Aso Oke" as Category,
    isCustom: true,
    description: "Custom aso oke crafted to perfection.",
    images: ["/collections/Aso oke/IMG_8971.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "aso-oke-6",
    name: "Aso Oke 6",
    price: 250000,
    category: "Aso Oke" as Category,
    isCustom: true,
    description: "Custom aso oke crafted to perfection.",
    images: ["/collections/Aso oke/IMG_9429.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "aso-oke-7",
    name: "Aso Oke 7",
    price: 250000,
    category: "Aso Oke" as Category,
    isCustom: true,
    description: "Custom aso oke crafted to perfection.",
    images: [
      "/collections/Aso oke/IMG_9584.JPG.jpeg",
      "/collections/Aso oke/IMG_9585.JPG.jpeg"
    ],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "birthday-outfit-1",
    name: "Birthday Outfit 1",
    price: 150000,
    category: "Birthday Outfit" as Category,
    isCustom: true,
    description: "Custom birthday outfit crafted to perfection.",
    images: [
      "/collections/Birthday outfit/IMG_5423.JPG.jpeg",
      "/collections/Birthday outfit/IMG_5427.JPG.jpeg"
    ],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "birthday-outfit-3",
    name: "Birthday Outfit 3",
    price: 130000,
    category: "Birthday Outfit" as Category,
    isCustom: true,
    description: "Custom birthday outfit crafted to perfection.",
    images: [
      "/collections/Birthday outfit/IMG_6887.JPG.jpeg",
      "/collections/Birthday outfit/IMG_6907.JPG.jpeg"
    ],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "birthday-outfit-5",
    name: "Birthday Outfit 5",
    price: 150000,
    category: "Birthday Outfit" as Category,
    isCustom: true,
    description: "Custom birthday outfit crafted to perfection.",
    images: [
      "/collections/Birthday outfit/IMG_7786.JPG.jpeg",
      "/collections/Birthday outfit/IMG_7787.JPG.jpeg"
    ],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "birthday-outfit-7",
    name: "Birthday Outfit 7",
    price: 300000,
    category: "Reception Dress" as Category,
    isCustom: true,
    description: "Custom birthday outfit crafted to perfection.",
    images: [
      "/collections/Birthday outfit/IMG_9685.JPG.jpeg",
      "/collections/Birthday outfit/IMG_9687.JPG.jpeg",
      "/collections/Birthday outfit/IMG_9689.JPG.jpeg",
      "/collections/Birthday outfit/IMG_9690.JPG.jpeg"
    ],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "corporate-suit-1",
    name: "Corporate Suit 1",
    price: 120000,
    category: "Corporate Suit" as Category,
    isCustom: true,
    description: "Custom corporate suit crafted to perfection.",
    images: [
      "/collections/Corporate Suit/Corporate suit 1.PNG",
      "/collections/Corporate Suit/Corporate suit 2.jpeg"
    ],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "pre-wedding-look-1",
    name: "Pre Wedding Look 1",
    price: 150000,
    category: "Pre Wedding Look" as Category,
    isCustom: true,
    description: "Custom pre wedding look crafted to perfection.",
    images: ["/collections/Pre wedding look/IMG_1751.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "pre-wedding-look-2",
    name: "Pre Wedding Look 2",
    price: 200000,
    category: "Pre Wedding Look" as Category,
    isCustom: true,
    description: "Custom pre wedding look crafted to perfection.",
    images: ["/collections/Pre wedding look/IMG_9033.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "pre-wedding-look-3",
    name: "Pre Wedding Look 3",
    price: 70000,
    category: "Pre Wedding Look" as Category,
    isCustom: true,
    description: "Custom pre wedding look crafted to perfection.",
    images: [
      "/collections/Pre wedding look/IMG_9054.JPG.jpeg",
      "/collections/Pre wedding look/IMG_9058.JPG.jpeg",
      "/collections/Pre wedding look/IMG_9059.JPG.jpeg"
    ],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "pre-wedding-look-4",
    name: "Pre Wedding Look 4",
    price: 70000,
    category: "Pre Wedding Look" as Category,
    isCustom: true,
    description: "Custom pre wedding look crafted to perfection.",
    images: [
      "/collections/Pre wedding look/IMG_9055.JPG.jpeg",
      "/collections/Pre wedding look/IMG_9057.JPG.jpeg"
    ],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "pre-wedding-look-5",
    name: "Pre Wedding Look 5",
    price: 70000,
    category: "Pre Wedding Look" as Category,
    isCustom: true,
    description: "Custom pre wedding look crafted to perfection.",
    images: ["/collections/Pre wedding look/IMG_9056.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },

  {
    id: "ready-to-wear-1",
    name: "Ready To Wear 1",
    price: 50000,
    category: "Ready To Wear" as Category,
    isCustom: true,
    description: "Custom ready to wear crafted to perfection.",
    images: [
      "/collections/Ready to wear/A1.jpeg",
      "/collections/Ready to wear/A2.jpeg",
      "/collections/Ready to wear/A3.jpeg",
      "/collections/Ready to wear/A4.jpeg",
      "/collections/Ready to wear/A5.jpeg"
    ],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "civil-wedding-dress-1",
    name: "Civil Wedding Dress 1",
    price: 70000,
    category: "Civil Wedding Dress" as Category,
    isCustom: true,
    description: "Custom civil wedding dress crafted to perfection.",
    images: [
      "/collections/Ready to wear/B1.jpeg",
      "/collections/Ready to wear/B2.jpeg",
      "/collections/Ready to wear/B3.jpeg",
      "/collections/Ready to wear/B4.jpeg",
      "/collections/Ready to wear/B5.jpeg"
    ],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "ready-to-wear-3",
    name: "Ready To Wear 3",
    price: 180000,
    category: "Ready To Wear" as Category,
    isCustom: true,
    description: "Custom ready to wear crafted to perfection.",
    images: [
      "/collections/Ready to wear/D1.jpeg",
      "/collections/Ready to wear/D2.jpeg"
    ],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "ready-to-wear-4",
    name: "Ready To Wear 4",
    price: 60000,
    category: "Ready To Wear" as Category,
    isCustom: true,
    description: "Custom ready to wear crafted to perfection.",
    images: ["/collections/Ready to wear/IMG_1383.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "asoebi-1",
    name: "Asoebi 1",
    price: 76000,
    category: "Asoebi" as Category,
    isCustom: true,
    description: "Custom asoebi crafted to perfection.",
    images: ["/collections/Reception Dress/IMG_0333.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "asoebi-2",
    name: "Asoebi 2",
    price: 69000,
    category: "Asoebi" as Category,
    isCustom: true,
    description: "Custom asoebi crafted to perfection.",
    images: ["/collections/Reception Dress/IMG_4453.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "asoebi-3",
    name: "Asoebi 3",
    price: 74000,
    category: "Asoebi" as Category,
    isCustom: true,
    description: "Custom asoebi crafted to perfection.",
    images: ["/collections/Reception Dress/IMG_4490.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "asoebi-4",
    name: "Asoebi 4",
    price: 56000,
    category: "Asoebi" as Category,
    isCustom: true,
    description: "Custom asoebi crafted to perfection.",
    images: [
      "/collections/Reception Dress/IMG_4500.JPG.jpeg",
      "/collections/Reception Dress/IMG_4502.JPG.jpeg"
    ],
    measurements: ["Bust", "Waist", "Hip"]
  },

  {
    id: "reception-dress-6",
    name: "Reception Dress 6",
    price: 72000,
    category: "Reception Dress" as Category,
    isCustom: true,
    description: "Custom reception dress crafted to perfection.",
    images: [
      "/collections/Reception Dress/IMG_9300.JPG.jpeg",
      "/collections/Reception Dress/IMG_9574.JPG.jpeg"
    ],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "asoebi-5",
    name: "Asoebi 5",
    price: 70000,
    category: "Asoebi" as Category,
    isCustom: true,
    description: "Custom asoebi crafted to perfection.",
    images: [
      "/collections/Reception Dress/IMG_9537.JPG.jpeg",
      "/collections/Reception Dress/IMG_9540.JPG.jpeg",
      "/collections/Reception Dress/IMG_9543.JPG.jpeg"
    ],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "asoebi-6",
    name: "Asoebi 6",
    price: 75000,
    category: "Asoebi" as Category,
    isCustom: true,
    description: "Custom asoebi crafted to perfection.",
    images: [
      "/collections/Reception Dress/IMG_9733.JPG.jpeg",
      "/collections/Reception Dress/IMG_9734.JPG.jpeg"
    ],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "wedding-ball-gown-1",
    name: "Wedding Ball Gown 1",
    price: 1500000,
    category: "Wedding Ball Gown" as Category,
    isCustom: true,
    description: "Custom wedding ball gown crafted to perfection.",
    images: [
      "/collections/Wedding ball gown/IMG_2246.JPG.jpeg",
      "/collections/Wedding ball gown/IMG_2247.JPG.jpeg",
      "/collections/Wedding ball gown/IMG_2248.JPG.jpeg",
      "/collections/Wedding ball gown/IMG_2253.JPG.jpeg"
    ],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "wedding-ball-gown-5",
    name: "Wedding Ball Gown 5",
    price: 1500000,
    category: "Wedding Ball Gown" as Category,
    isCustom: true,
    description: "Custom wedding ball gown crafted to perfection.",
    images: ["/collections/Wedding ball gown/IMG_7004.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "wedding-look-1",
    name: "Wedding Look 1",
    price: 71000,
    category: "Wedding Look" as Category,
    isCustom: true,
    description: "Custom wedding look crafted to perfection.",
    images: [
      "/collections/Wedding look/IMG_1748.JPG.jpeg",
      "/collections/Wedding look/IMG_1749.JPG.jpeg"
    ],
    measurements: ["Bust", "Waist", "Hip"]
  },

  {
    id: "wedding-look-3",
    name: "Wedding Look 3",
    price: 130000,
    category: "Wedding Look" as Category,
    isCustom: true,
    description: "Custom wedding look crafted to perfection.",
    images: ["/collections/Wedding look/IMG_2177.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "wedding-look-4",
    name: "Wedding Look 4",
    price: 68000,
    category: "Wedding Look" as Category,
    isCustom: true,
    description: "Custom wedding look crafted to perfection.",
    images: [
      "/collections/Wedding look/IMG_2246.JPG.jpeg",
      "/collections/Wedding look/IMG_2247.JPG.jpeg",
      "/collections/Wedding look/IMG_2248.JPG.jpeg",
      "/collections/Wedding look/IMG_2253.JPG.jpeg"
    ],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "ready-to-wear-5",
    name: "Luxury Silk Set",
    price: 45000,
    category: "Ready To Wear" as Category,
    isCustom: false,
    description: "Elegant silk set for effortless sophistication.",
    images: ["/collections/Ready to wear/C1.PNG", "/collections/Ready to wear/C2.PNG", "/collections/Ready to wear/C3.PNG"],
  },

  {
    id: "streetwear-1",
    name: "Urban Graffiti Hoodie",
    price: 35000,
    category: "Streetwear" as Category,
    isCustom: false,
    description: "High-end streetwear hoodie with signature artistry.",
    images: ["/collections/Streetwear/IMG_7566.JPG.jpeg", "/collections/Streetwear/IMG_7571.JPG.jpeg"],
  },
  {
    id: "streetwear-2",
    name: "Signature Cargo Pants",
    price: 40000,
    category: "Streetwear" as Category,
    isCustom: false,
    description: "Durable and stylish cargo pants for the urban designer.",
    images: ["/collections/Streetwear/IMG_7575.JPG.jpeg", "/collections/Streetwear/IMG_7576.JPG.jpeg"],
  },
  {
    id: "asoebi-new-1",
    name: "Premium Lace Asoebi",
    price: 120000,
    category: "Reception Dress" as Category,
    isCustom: true,
    description: "Exquisite lace asoebi for a regal presence.",
    images: ["/collections/Asoebi/IMG_6958.JPG.jpeg", "/collections/Asoebi/IMG_6959.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  }
];
