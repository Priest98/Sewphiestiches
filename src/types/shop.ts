export type Category = 'Aso oke' | 'Asoebi' | 'Birthday Outfit' | 'Corporate Suit' | 'Pre Wedding Look' | 'Ready to Wear' | 'Reception Dress' | 'Wedding Ball Gown' | 'Wedding Look' | 'Civil Wedding Dress' | 'Street Wear';

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
    name: "Aso oke 1",
    price: 250000,
    category: "Aso oke" as Category,
    isCustom: true,
    description: "Luxury aso oke crafted to perfection.",
    images: [
  "/collections/aso_oke/img_8305.jpg",
  "/collections/aso_oke/img_8308.jpg",
  "/collections/aso_oke/img_8310.jpg",
  "/collections/aso_oke/img_8313.jpg"
],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "aso-oke-2",
    name: "Aso oke 2",
    price: 250000,
    category: "Aso oke" as Category,
    isCustom: true,
    description: "Luxury aso oke crafted to perfection.",
    images: [
  "/collections/aso_oke/img_8971.jpg"
],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "aso-oke-3",
    name: "Aso oke 3",
    price: 250000,
    category: "Aso oke" as Category,
    isCustom: true,
    description: "Luxury aso oke crafted to perfection.",
    images: [
  "/collections/aso_oke/img_9584.jpg",
  "/collections/aso_oke/img_9585.jpg"
],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "aso-oke-4",
    name: "Aso oke 4",
    price: 250000,
    category: "Aso oke" as Category,
    isCustom: true,
    description: "Luxury aso oke crafted to perfection.",
    images: [
  "/collections/aso_oke/img_9706.jpg",
  "/collections/aso_oke/img_9707.jpg",
  "/collections/aso_oke/img_9718.jpg",
  "/collections/aso_oke/img_9719.jpg",
  "/collections/aso_oke/img_9730.jpg"
],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "asoebi-1",
    name: "Asoebi 1",
    price: 75000,
    category: "Asoebi" as Category,
    isCustom: true,
    description: "Luxury asoebi crafted to perfection.",
    images: [
  "/collections/asoebi/img_0333.jpg"
],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "asoebi-2",
    name: "Asoebi 2",
    price: 75000,
    category: "Asoebi" as Category,
    isCustom: true,
    description: "Luxury asoebi crafted to perfection.",
    images: [
  "/collections/asoebi/img_4453.jpg"
],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "asoebi-3",
    name: "Asoebi 3",
    price: 75000,
    category: "Asoebi" as Category,
    isCustom: true,
    description: "Luxury asoebi crafted to perfection.",
    images: [
  "/collections/asoebi/img_4490.jpg"
],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "asoebi-4",
    name: "Asoebi 4",
    price: 75000,
    category: "Asoebi" as Category,
    isCustom: true,
    description: "Luxury asoebi crafted to perfection.",
    images: [
  "/collections/asoebi/img_4500.jpg",
  "/collections/asoebi/img_4502.jpg"
],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "asoebi-5",
    name: "Asoebi 5",
    price: 75000,
    category: "Asoebi" as Category,
    isCustom: true,
    description: "Luxury asoebi crafted to perfection.",
    images: [
  "/collections/asoebi/img_9429.jpg"
],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "asoebi-6",
    name: "Asoebi 6",
    price: 75000,
    category: "Asoebi" as Category,
    isCustom: true,
    description: "Luxury asoebi crafted to perfection.",
    images: [
  "/collections/asoebi/img_9537.jpg",
  "/collections/asoebi/img_9540.jpg"
],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "asoebi-7",
    name: "Asoebi 7",
    price: 75000,
    category: "Asoebi" as Category,
    isCustom: true,
    description: "Luxury asoebi crafted to perfection.",
    images: [
  "/collections/asoebi/img_9733.jpg",
  "/collections/asoebi/img_9734.jpg"
],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "asoebi-8",
    name: "Asoebi 8",
    price: 75000,
    category: "Asoebi" as Category,
    isCustom: true,
    description: "Luxury asoebi crafted to perfection.",
    images: [
  "/collections/asoebi/img_9097.jpg",
  "/collections/asoebi/img_9099.jpg",
  "/collections/asoebi/img_9100.jpg",
  "/collections/asoebi/img_9102.jpg"
],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "corporate-suit-1",
    name: "Corporate Suit 1",
    price: 100000,
    category: "Corporate Suit" as Category,
    isCustom: true,
    description: "Luxury corporate suit crafted to perfection.",
    images: [
  "/collections/corporate_suit/corporate_suit_1.png"
],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "corporate-suit-2",
    name: "Corporate Suit 2",
    price: 120000,
    category: "Corporate Suit" as Category,
    isCustom: true,
    description: "Luxury corporate suit crafted to perfection.",
    images: [
  "/collections/corporate_suit/corporate_suit_2.jpg"
],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "corporate-suit-3",
    name: "Corporate Suit 3",
    price: 120000,
    category: "Corporate Suit" as Category,
    isCustom: true,
    description: "Luxury corporate suit crafted to perfection.",
    images: [
  "/collections/corporate_suit/img_5818.jpg",
  "/collections/corporate_suit/img_5822.jpg"
],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "pre-wedding-look-1",
    name: "Pre Wedding Look 1",
    price: 150000,
    category: "Pre Wedding Look" as Category,
    isCustom: true,
    description: "Luxury pre wedding look crafted to perfection.",
    images: [
  "/collections/pre_wedding_look/img_1751.jpg"
],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "pre-wedding-look-2",
    name: "Pre Wedding Look 2",
    price: 200000,
    category: "Pre Wedding Look" as Category,
    isCustom: true,
    description: "Luxury pre wedding look crafted to perfection.",
    images: [
  "/collections/pre_wedding_look/img_9033.jpg"
],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "pre-wedding-look-3",
    name: "Pre Wedding Look 3",
    price: 70000,
    category: "Pre Wedding Look" as Category,
    isCustom: true,
    description: "Luxury pre wedding look crafted to perfection.",
    images: [
  "/collections/pre_wedding_look/img_9054.jpg"
],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "pre-wedding-look-4",
    name: "Pre Wedding Look 4",
    price: 70000,
    category: "Pre Wedding Look" as Category,
    isCustom: true,
    description: "Luxury pre wedding look crafted to perfection.",
    images: [
  "/collections/pre_wedding_look/img_9055.jpg"
],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "pre-wedding-look-5",
    name: "Pre Wedding Look 5",
    price: 70000,
    category: "Pre Wedding Look" as Category,
    isCustom: true,
    description: "Luxury pre wedding look crafted to perfection.",
    images: [
  "/collections/pre_wedding_look/img_9056.jpg"
],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "pre-wedding-look-6",
    name: "Pre Wedding Look 6",
    price: 70000,
    category: "Pre Wedding Look" as Category,
    isCustom: true,
    description: "Luxury pre wedding look crafted to perfection.",
    images: [
  "/collections/pre_wedding_look/img_9057.jpg"
],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "pre-wedding-look-7",
    name: "Pre Wedding Look 7",
    price: 70000,
    category: "Pre Wedding Look" as Category,
    isCustom: true,
    description: "Luxury pre wedding look crafted to perfection.",
    images: [
  "/collections/pre_wedding_look/img_9058.jpg"
],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "pre-wedding-look-8",
    name: "Pre Wedding Look 8",
    price: 70000,
    category: "Pre Wedding Look" as Category,
    isCustom: true,
    description: "Luxury pre wedding look crafted to perfection.",
    images: [
  "/collections/pre_wedding_look/img_9059.jpg"
],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "ready-to-wear-1",
    name: "Ready to Wear 1",
    price: 50000,
    category: "Ready to Wear" as Category,
    isCustom: true,
    description: "Luxury ready to wear crafted to perfection.",
    images: [
  "/collections/ready_to_wear/a1.jpg",
  "/collections/ready_to_wear/a2.jpg",
  "/collections/ready_to_wear/a3.jpg",
  "/collections/ready_to_wear/a4.jpg",
  "/collections/ready_to_wear/a5.jpg"
],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "ready-to-wear-2",
    name: "Ready to Wear 2",
    price: 180000,
    category: "Ready to Wear" as Category,
    isCustom: true,
    description: "Luxury ready to wear crafted to perfection.",
    images: [
  "/collections/ready_to_wear/d1.jpg",
  "/collections/ready_to_wear/d2.jpg"
],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "ready-to-wear-3",
    name: "Ready to Wear 3",
    price: 60000,
    category: "Ready to Wear" as Category,
    isCustom: true,
    description: "Luxury ready to wear crafted to perfection.",
    images: [
  "/collections/ready_to_wear/img_1383.jpg"
],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "ready-to-wear-4",
    name: "Ready to Wear 4",
    price: 60000,
    category: "Ready to Wear" as Category,
    isCustom: true,
    description: "Luxury ready to wear crafted to perfection.",
    images: [
  "/collections/ready_to_wear/ready_to_wear_5.jpg",
  "/collections/ready_to_wear/ready_to_wear_6.jpg",
  "/collections/ready_to_wear/ready_to_wear_7.jpg",
  "/collections/ready_to_wear/ready_to_wear_8.jpg"
],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "reception-dress-1",
    name: "Reception Dress 1",
    price: 200000,
    category: "Reception Dress" as Category,
    isCustom: true,
    description: "Luxury reception dress crafted to perfection.",
    images: [
  "/collections/reception_dress/img_9300.jpg",
  "/collections/reception_dress/img_9574.jpg"
],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "reception-dress-2",
    name: "Reception Dress 2",
    price: 300000,
    category: "Reception Dress" as Category,
    isCustom: true,
    description: "Luxury reception dress crafted to perfection.",
    images: [
  "/collections/reception_dress/img_9685.jpg",
  "/collections/reception_dress/img_9687.jpg",
  "/collections/reception_dress/img_9689.jpg",
  "/collections/reception_dress/img_9690.jpg"
],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "reception-dress-3",
    name: "Reception Dress 3",
    price: 700000,
    category: "Reception Dress" as Category,
    isCustom: true,
    description: "Luxury reception dress crafted to perfection.",
    images: [
  "/collections/reception_dress/reception_dress_3.jpg",
  "/collections/reception_dress/img_7700.jpg",
  "/collections/reception_dress/img_7698.jpg",
  "/collections/reception_dress/reception_dress_4.jpg"
],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "reception-dress-4",
    name: "Reception Dress 4",
    price: 500000,
    category: "Reception Dress" as Category,
    isCustom: true,
    description: "Luxury reception dress crafted to perfection.",
    images: [
  "/collections/reception_dress/reception_dress_5.jpg",
  "/collections/reception_dress/img_7701.jpg",
  "/collections/reception_dress/img_7694.jpg"
],
    measurements: ["Bust","Waist","Hip"]
  },
  {
id: "wedding-ball-gown-1",
    name: "Wedding Ball Gown 1",
    price: 1500000,
    category: "Wedding Ball Gown" as Category,
    isCustom: true,
    description: "Luxury wedding ball gown crafted to perfection.",
    images: [
  "/collections/wedding_ball_gown/img_2246.jpg",
  "/collections/wedding_ball_gown/img_2247.jpg",
  "/collections/wedding_ball_gown/img_2248.jpg",
  "/collections/wedding_ball_gown/img_2253.jpg",
  "/collections/wedding_ball_gown/img_2257.jpg"
],
    measurements: ["Bust","Waist","Hip"]
  },
  {
id: "wedding-ball-gown-2",
    name: "Wedding Ball Gown 2",
    price: 1500000,
    category: "Wedding Ball Gown" as Category,
    isCustom: true,
    description: "Luxury wedding ball gown crafted to perfection.",
    images: [
  "/collections/wedding_ball_gown/img_7004.jpg",
  "/collections/wedding_ball_gown/img_6970.jpg",
  "/collections/wedding_ball_gown/img_6974.jpg",
  "/collections/wedding_ball_gown/img_6979.jpg",
  "/collections/wedding_ball_gown/img_6990.jpg",
  "/collections/wedding_ball_gown/img_7002.jpg"
],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "wedding-look-1",
    name: "Wedding Look 1",
    price: 91000,
    category: "Wedding Look" as Category,
    isCustom: true,
    description: "Luxury wedding look crafted to perfection.",
    images: [
  "/collections/wedding_look/img_1748.jpg",
  "/collections/wedding_look/img_1749.jpg"
],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "wedding-look-2",
    name: "Wedding Look 2",
    price: 93000,
    category: "Wedding Look" as Category,
    isCustom: true,
    description: "Luxury wedding look crafted to perfection.",
    images: [
  "/collections/wedding_look/img_2177.jpg"
],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "wedding-look-3",
    name: "Wedding Look 3",
    price: 96000,
    category: "Wedding Look" as Category,
    isCustom: true,
    description: "Luxury wedding look crafted to perfection.",
    images: [
  "/collections/wedding_look/img_2246.jpg",
  "/collections/wedding_look/img_2247.jpg",
  "/collections/wedding_look/img_2248.jpg"
],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "wedding-look-4",
    name: "Wedding Look 4",
    price: 96000,
    category: "Wedding Look" as Category,
    isCustom: true,
    description: "Luxury wedding look crafted to perfection.",
    images: [
  "/collections/wedding_look/wedding_look_5.jpg"
],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "pre-wedding-look-9",
    name: "Pre Wedding Look 9",
    price: 1500000,
    category: "Pre Wedding Look" as Category,
    isCustom: true,
    description: "Luxury pre wedding look crafted to perfection.",
    images: [
  "/collections/pre_wedding_look/img_6973.jpg",
  "/collections/pre_wedding_look/img_6989.jpg"
],
    measurements: ["Bust","Waist","Hip"]
  },
  {
id: "wedding-ball-gown-3",
    name: "Wedding Ball Gown 3",
    price: 1500000,
    category: "Wedding Ball Gown" as Category,
    isCustom: true,
    description: "Luxury wedding ball gown crafted to perfection.",
    images: [
  "/collections/wedding_ball_gown/img_6985.jpg"
],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "wedding-look-5",
    name: "Wedding Look 5",
    price: 75000,
    category: "Wedding Look" as Category,
    isCustom: true,
    description: "Luxury wedding look crafted to perfection.",
    images: [
  "/collections/wedding_look/img_2252.jpg",
  "/collections/wedding_look/img_2253.jpg",
  "/collections/wedding_look/img_2255.jpg"
],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "wedding-look-6",
    name: "Wedding Look 6",
    price: 75000,
    category: "Wedding Look" as Category,
    isCustom: true,
    description: "Luxury wedding look crafted to perfection.",
    images: [
  "/collections/wedding_look/img_6971.jpg",
  "/collections/wedding_look/img_6994.jpg",
  "/collections/wedding_look/img_7003.jpg",
  "/collections/wedding_look/img_7004.jpg"
],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "birthday-outfit-1",
    name: "Birthday Outfit 1",
    price: 130000,
    category: "Birthday Outfit" as Category,
    isCustom: true,
    description: "Luxury birthday outfit crafted to perfection.",
    images: [
  "/collections/birthday_outfit/birthday_outfit_1.png",
  "/collections/birthday_outfit/birthday_outfit_2.png",
  "/collections/birthday_outfit/birthday_outfit_3.png"
],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "birthday-outfit-2",
    name: "Birthday Outfit 2",
    price: 150000,
    category: "Birthday Outfit" as Category,
    isCustom: true,
    description: "Luxury birthday outfit crafted to perfection.",
    images: [
  "/collections/birthday_outfit/birthday_outfit_4.jpg",
  "/collections/birthday_outfit/img_5433.jpg",
  "/collections/birthday_outfit/img_5424.png",
  "/collections/birthday_outfit/birthday_outfit_10.png",
  "/collections/birthday_outfit/birthday_outfit_5.jpg"
],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "birthday-outfit-3",
    name: "Birthday Outfit 3",
    price: 130000,
    category: "Birthday Outfit" as Category,
    isCustom: true,
    description: "Luxury birthday outfit crafted to perfection.",
    images: [
  "/collections/birthday_outfit/birthday_outfit_6.jpg",
  "/collections/birthday_outfit/birthday_outfit_9.png",
  "/collections/birthday_outfit/birthday_outfit_8.png",
  "/collections/birthday_outfit/birthday_outfit_7.png"
],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "birthday-outfit-4",
    name: "Birthday Outfit 4",
    price: 150000,
    category: "Birthday Outfit" as Category,
    isCustom: true,
    description: "Luxury birthday outfit crafted to perfection.",
    images: [
  "/collections/birthday_outfit/birthday_outfit_11.jpg",
  "/collections/birthday_outfit/birthday_outfit_12.jpg"
],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "birthday-outfit-5",
    name: "Birthday Outfit 5",
    price: 150000,
    category: "Birthday Outfit" as Category,
    isCustom: true,
    description: "Luxury birthday outfit crafted to perfection.",
    images: [
  "/collections/birthday_outfit/birthday_outfit_13.jpg",
  "/collections/birthday_outfit/birthday_outfit_14.jpg"
],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "birthday-outfit-6",
    name: "Birthday Outfit 6",
    price: 130000,
    category: "Birthday Outfit" as Category,
    isCustom: true,
    description: "Luxury birthday outfit crafted to perfection.",
    images: [
  "/collections/birthday_outfit/img_5464.png",
  "/collections/birthday_outfit/img_5466.png",
  "/collections/birthday_outfit/img_5467.png"
],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "birthday-outfit-7",
    name: "Birthday Outfit 7",
    price: 130000,
    category: "Birthday Outfit" as Category,
    isCustom: true,
    description: "Luxury birthday outfit crafted to perfection.",
    images: [
  "/collections/birthday_outfit/img_9802.jpg",
  "/collections/birthday_outfit/img_9804.jpg",
  "/collections/birthday_outfit/img_9807.jpg"
],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "civil-wedding-dress-1",
    name: "Civil Wedding Dress 1",
    price: 70000,
    category: "Civil Wedding Dress" as Category,
    isCustom: true,
    description: "Luxury civil wedding dress crafted to perfection.",
    images: [
  "/collections/civil_wedding_dress/IMG_1835.JPG.jpeg",
  "/collections/civil_wedding_dress/IMG_1836.JPG.jpeg",
  "/collections/civil_wedding_dress/IMG_1838.JPG.jpeg",
  "/collections/civil_wedding_dress/IMG_1839.JPG.jpeg"
],
    measurements: ["Bust","Waist","Hip"]
  },
  {
id: "street-wear-1",
    name: "Street Wear 1",
    price: 200000,
    category: "Street Wear" as Category,
    isCustom: true,
    description: "Luxury street wear crafted to perfection.",
    images: [
  "/collections/street_wear/img_7566.jpg",
  "/collections/street_wear/img_7571.jpg",
  "/collections/street_wear/img_7576.jpg",
  "/collections/street_wear/img_7579.jpg"
],
    measurements: ["Bust","Waist","Hip"]
  }
];
