export type Category = 'Aso oke' | 'Asoebi' | 'Birthday Outfit' | 'Corporate Suit' | 'Pre Wedding Look' | 'Ready to Wear' | 'Reception Dress' | 'Wedding Ball Gown' | 'Wedding Look';

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
    category: "Aso oke" as Category,
    isCustom: true,
    description: "Custom aso oke crafted to perfection.",
    images: [
      "/collections/aso_oke/img_8305.jpg",
      "/collections/aso_oke/img_8308.jpg",
      "/collections/aso_oke/img_8310.jpg",
      "/collections/aso_oke/img_8313.jpg"
    ],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "aso-oke-5",
    name: "Aso Oke 5",
    price: 250000,
    category: "Aso oke" as Category,
    isCustom: true,
    description: "Custom aso oke crafted to perfection.",
    images: ["/collections/aso_oke/img_8971.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "aso-oke-6",
    name: "Aso Oke 6",
    price: 250000,
    category: "Aso oke" as Category,
    isCustom: true,
    description: "Custom aso oke crafted to perfection.",
    images: [
      "/collections/aso_oke/img_9584.jpg",
      "/collections/aso_oke/img_9585.jpg"
    ],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "aso-oke-8",
    name: "Aso Oke 8",
    price: 250000,
    category: "Aso oke" as Category,
    isCustom: true,
    description: "Custom aso oke crafted to perfection.",
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
    description: "Custom asoebi crafted to perfection.",
    images: ["/collections/asoebi/img_0333.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "asoebi-2",
    name: "Asoebi 2",
    price: 75000,
    category: "Asoebi" as Category,
    isCustom: true,
    description: "Custom asoebi crafted to perfection.",
    images: ["/collections/asoebi/img_4453.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "asoebi-3",
    name: "Asoebi 3",
    price: 75000,
    category: "Asoebi" as Category,
    isCustom: true,
    description: "Custom asoebi crafted to perfection.",
    images: ["/collections/asoebi/img_4490.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "asoebi-4",
    name: "Asoebi 4",
    price: 75000,
    category: "Asoebi" as Category,
    isCustom: true,
    description: "Custom asoebi crafted to perfection.",
    images: ["/collections/asoebi/img_4500.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "asoebi-5",
    name: "Asoebi 5",
    price: 75000,
    category: "Asoebi" as Category,
    isCustom: true,
    description: "Custom asoebi crafted to perfection.",
    images: ["/collections/asoebi/img_4502.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "asoebi-6",
    name: "Asoebi 6",
    price: 75000,
    category: "Asoebi" as Category,
    isCustom: true,
    description: "Custom asoebi crafted to perfection.",
    images: ["/collections/asoebi/img_9429.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "asoebi-7",
    name: "Asoebi 7",
    price: 75000,
    category: "Asoebi" as Category,
    isCustom: true,
    description: "Custom asoebi crafted to perfection.",
    images: ["/collections/asoebi/img_9537.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "asoebi-8",
    name: "Asoebi 8",
    price: 75000,
    category: "Asoebi" as Category,
    isCustom: true,
    description: "Custom asoebi crafted to perfection.",
    images: ["/collections/asoebi/img_9540.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "asoebi-9",
    name: "Asoebi 9",
    price: 75000,
    category: "Asoebi" as Category,
    isCustom: true,
    description: "Custom asoebi crafted to perfection.",
    images: ["/collections/asoebi/img_9733.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "asoebi-10",
    name: "Asoebi 10",
    price: 75000,
    category: "Asoebi" as Category,
    isCustom: true,
    description: "Custom asoebi crafted to perfection.",
    images: ["/collections/asoebi/img_9734.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "birthday-outfit-1",
    name: "Birthday Outfit 5",
    price: 70000,
    category: "Birthday Outfit" as Category,
    isCustom: true,
    description: "Custom birthday outfit crafted to perfection.",
    images: ["/collections/birthday_outfit/birthday_outfit_1.png"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "birthday-outfit-2",
    name: "Birthday Outfit 6",
    price: 67000,
    category: "Birthday Outfit" as Category,
    isCustom: true,
    description: "Custom birthday outfit crafted to perfection.",
    images: ["/collections/birthday_outfit/birthday_outfit_10.png"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "birthday-outfit-3",
    name: "Birthday Outfit 7",
    price: 53000,
    category: "Birthday Outfit" as Category,
    isCustom: true,
    description: "Custom birthday outfit crafted to perfection.",
    images: ["/collections/birthday_outfit/birthday_outfit_11.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "birthday-outfit-4",
    name: "Birthday Outfit 8",
    price: 58000,
    category: "Birthday Outfit" as Category,
    isCustom: true,
    description: "Custom birthday outfit crafted to perfection.",
    images: ["/collections/birthday_outfit/birthday_outfit_12.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "birthday-outfit-5",
    name: "Birthday Outfit 9",
    price: 84000,
    category: "Birthday Outfit" as Category,
    isCustom: true,
    description: "Custom birthday outfit crafted to perfection.",
    images: ["/collections/birthday_outfit/birthday_outfit_13.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "birthday-outfit-6",
    name: "Birthday Outfit 10",
    price: 92000,
    category: "Birthday Outfit" as Category,
    isCustom: true,
    description: "Custom birthday outfit crafted to perfection.",
    images: ["/collections/birthday_outfit/birthday_outfit_14.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "birthday-outfit-7",
    name: "Birthday Outfit 11",
    price: 84000,
    category: "Birthday Outfit" as Category,
    isCustom: true,
    description: "Custom birthday outfit crafted to perfection.",
    images: ["/collections/birthday_outfit/birthday_outfit_2.png"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "birthday-outfit-8",
    name: "Birthday Outfit 12",
    price: 68000,
    category: "Birthday Outfit" as Category,
    isCustom: true,
    description: "Custom birthday outfit crafted to perfection.",
    images: ["/collections/birthday_outfit/birthday_outfit_3.png"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "birthday-outfit-9",
    name: "Birthday Outfit 13",
    price: 89000,
    category: "Birthday Outfit" as Category,
    isCustom: true,
    description: "Custom birthday outfit crafted to perfection.",
    images: ["/collections/birthday_outfit/birthday_outfit_4.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "birthday-outfit-10",
    name: "Birthday Outfit 14",
    price: 50000,
    category: "Birthday Outfit" as Category,
    isCustom: true,
    description: "Custom birthday outfit crafted to perfection.",
    images: ["/collections/birthday_outfit/birthday_outfit_5.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "birthday-outfit-11",
    name: "Birthday Outfit 1",
    price: 96000,
    category: "Birthday Outfit" as Category,
    isCustom: true,
    description: "Custom birthday outfit crafted to perfection.",
    images: ["/collections/birthday_outfit/birthday_outfit_6.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "birthday-outfit-12",
    name: "Birthday Outfit 2",
    price: 74000,
    category: "Birthday Outfit" as Category,
    isCustom: true,
    description: "Custom birthday outfit crafted to perfection.",
    images: ["/collections/birthday_outfit/birthday_outfit_7.png"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "birthday-outfit-13",
    name: "Birthday Outfit 3",
    price: 85000,
    category: "Birthday Outfit" as Category,
    isCustom: true,
    description: "Custom birthday outfit crafted to perfection.",
    images: ["/collections/birthday_outfit/birthday_outfit_8.png"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "birthday-outfit-14",
    name: "Birthday Outfit 4",
    price: 80000,
    category: "Birthday Outfit" as Category,
    isCustom: true,
    description: "Custom birthday outfit crafted to perfection.",
    images: ["/collections/birthday_outfit/birthday_outfit_9.png"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "corporate-suit-1",
    name: "Corporate Suit 1",
    price: 54000,
    category: "Corporate Suit" as Category,
    isCustom: true,
    description: "Custom corporate suit crafted to perfection.",
    images: ["/collections/corporate_suit/corporate_suit_1.png"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "corporate-suit-2",
    name: "Corporate Suit 2",
    price: 99000,
    category: "Corporate Suit" as Category,
    isCustom: true,
    description: "Custom corporate suit crafted to perfection.",
    images: ["/collections/corporate_suit/corporate_suit_2.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "pre-wedding-look-1",
    name: "Pre Wedding Look 1",
    price: 84000,
    category: "Pre Wedding Look" as Category,
    isCustom: true,
    description: "Custom pre wedding look crafted to perfection.",
    images: ["/collections/pre_wedding_look/img_1751.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "pre-wedding-look-2",
    name: "Pre Wedding Look 2",
    price: 92000,
    category: "Pre Wedding Look" as Category,
    isCustom: true,
    description: "Custom pre wedding look crafted to perfection.",
    images: ["/collections/pre_wedding_look/img_9033.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "pre-wedding-look-3",
    name: "Pre Wedding Look 3",
    price: 77000,
    category: "Pre Wedding Look" as Category,
    isCustom: true,
    description: "Custom pre wedding look crafted to perfection.",
    images: ["/collections/pre_wedding_look/img_9054.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "pre-wedding-look-4",
    name: "Pre Wedding Look 4",
    price: 54000,
    category: "Pre Wedding Look" as Category,
    isCustom: true,
    description: "Custom pre wedding look crafted to perfection.",
    images: ["/collections/pre_wedding_look/img_9055.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "pre-wedding-look-5",
    name: "Pre Wedding Look 5",
    price: 62000,
    category: "Pre Wedding Look" as Category,
    isCustom: true,
    description: "Custom pre wedding look crafted to perfection.",
    images: ["/collections/pre_wedding_look/img_9056.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "pre-wedding-look-6",
    name: "Pre Wedding Look 6",
    price: 87000,
    category: "Pre Wedding Look" as Category,
    isCustom: true,
    description: "Custom pre wedding look crafted to perfection.",
    images: ["/collections/pre_wedding_look/img_9057.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "pre-wedding-look-7",
    name: "Pre Wedding Look 7",
    price: 50000,
    category: "Pre Wedding Look" as Category,
    isCustom: true,
    description: "Custom pre wedding look crafted to perfection.",
    images: ["/collections/pre_wedding_look/img_9058.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "pre-wedding-look-8",
    name: "Pre Wedding Look 8",
    price: 68000,
    category: "Pre Wedding Look" as Category,
    isCustom: true,
    description: "Custom pre wedding look crafted to perfection.",
    images: ["/collections/pre_wedding_look/img_9059.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "ready-to-wear-1",
    name: "Ready To Wear 1",
    price: 76000,
    category: "Ready to Wear" as Category,
    isCustom: true,
    description: "Custom ready to wear crafted to perfection.",
    images: ["/collections/ready_to_wear/a1.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "ready-to-wear-2",
    name: "Ready To Wear 2",
    price: 58000,
    category: "Ready to Wear" as Category,
    isCustom: true,
    description: "Custom ready to wear crafted to perfection.",
    images: ["/collections/ready_to_wear/a2.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "ready-to-wear-3",
    name: "Ready To Wear 3",
    price: 53000,
    category: "Ready to Wear" as Category,
    isCustom: true,
    description: "Custom ready to wear crafted to perfection.",
    images: ["/collections/ready_to_wear/a3.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "ready-to-wear-4",
    name: "Ready To Wear 4",
    price: 75000,
    category: "Ready to Wear" as Category,
    isCustom: true,
    description: "Custom ready to wear crafted to perfection.",
    images: ["/collections/ready_to_wear/a4.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "ready-to-wear-5",
    name: "Ready To Wear 5",
    price: 95000,
    category: "Ready to Wear" as Category,
    isCustom: true,
    description: "Custom ready to wear crafted to perfection.",
    images: ["/collections/ready_to_wear/a5.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "ready-to-wear-6",
    name: "Ready To Wear 6",
    price: 60000,
    category: "Ready to Wear" as Category,
    isCustom: true,
    description: "Custom ready to wear crafted to perfection.",
    images: ["/collections/ready_to_wear/b1.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "ready-to-wear-7",
    name: "Ready To Wear 7",
    price: 96000,
    category: "Ready to Wear" as Category,
    isCustom: true,
    description: "Custom ready to wear crafted to perfection.",
    images: ["/collections/ready_to_wear/b2.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "ready-to-wear-8",
    name: "Ready To Wear 8",
    price: 90000,
    category: "Ready to Wear" as Category,
    isCustom: true,
    description: "Custom ready to wear crafted to perfection.",
    images: ["/collections/ready_to_wear/b3.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "ready-to-wear-9",
    name: "Ready To Wear 9",
    price: 85000,
    category: "Ready to Wear" as Category,
    isCustom: true,
    description: "Custom ready to wear crafted to perfection.",
    images: ["/collections/ready_to_wear/b4.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "ready-to-wear-10",
    name: "Ready To Wear 10",
    price: 88000,
    category: "Ready to Wear" as Category,
    isCustom: true,
    description: "Custom ready to wear crafted to perfection.",
    images: ["/collections/ready_to_wear/b5.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "ready-to-wear-11",
    name: "Ready To Wear 11",
    price: 58000,
    category: "Ready to Wear" as Category,
    isCustom: true,
    description: "Custom ready to wear crafted to perfection.",
    images: ["/collections/ready_to_wear/c1.png"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "ready-to-wear-12",
    name: "Ready To Wear 12",
    price: 54000,
    category: "Ready to Wear" as Category,
    isCustom: true,
    description: "Custom ready to wear crafted to perfection.",
    images: ["/collections/ready_to_wear/c2.png"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "ready-to-wear-13",
    name: "Ready To Wear 13",
    price: 59000,
    category: "Ready to Wear" as Category,
    isCustom: true,
    description: "Custom ready to wear crafted to perfection.",
    images: ["/collections/ready_to_wear/c3.png"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "ready-to-wear-14",
    name: "Ready To Wear 14",
    price: 87000,
    category: "Ready to Wear" as Category,
    isCustom: true,
    description: "Custom ready to wear crafted to perfection.",
    images: ["/collections/ready_to_wear/d1.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "ready-to-wear-15",
    name: "Ready To Wear 15",
    price: 80000,
    category: "Ready to Wear" as Category,
    isCustom: true,
    description: "Custom ready to wear crafted to perfection.",
    images: ["/collections/ready_to_wear/d2.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "ready-to-wear-16",
    name: "Ready To Wear 16",
    price: 99000,
    category: "Ready to Wear" as Category,
    isCustom: true,
    description: "Custom ready to wear crafted to perfection.",
    images: ["/collections/ready_to_wear/img_1383.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "ready-to-wear-17",
    name: "Ready To Wear 17",
    price: 82000,
    category: "Ready to Wear" as Category,
    isCustom: true,
    description: "Custom ready to wear crafted to perfection.",
    images: ["/collections/ready_to_wear/img_5464.png"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "ready-to-wear-18",
    name: "Ready To Wear 18",
    price: 92000,
    category: "Ready to Wear" as Category,
    isCustom: true,
    description: "Custom ready to wear crafted to perfection.",
    images: ["/collections/ready_to_wear/ready_to_wear_5.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "ready-to-wear-19",
    name: "Ready To Wear 19",
    price: 55000,
    category: "Ready to Wear" as Category,
    isCustom: true,
    description: "Custom ready to wear crafted to perfection.",
    images: ["/collections/ready_to_wear/ready_to_wear_6.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "ready-to-wear-20",
    name: "Ready To Wear 20",
    price: 75000,
    category: "Ready to Wear" as Category,
    isCustom: true,
    description: "Custom ready to wear crafted to perfection.",
    images: ["/collections/ready_to_wear/ready_to_wear_7.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "ready-to-wear-21",
    name: "Ready To Wear 21",
    price: 91000,
    category: "Ready to Wear" as Category,
    isCustom: true,
    description: "Custom ready to wear crafted to perfection.",
    images: ["/collections/ready_to_wear/ready_to_wear_8.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "reception-dress-1",
    name: "Reception Dress 1",
    price: 90000,
    category: "Reception Dress" as Category,
    isCustom: true,
    description: "Custom reception dress crafted to perfection.",
    images: ["/collections/reception_dress/img_9300.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "reception-dress-2",
    name: "Reception Dress 2",
    price: 64000,
    category: "Reception Dress" as Category,
    isCustom: true,
    description: "Custom reception dress crafted to perfection.",
    images: ["/collections/reception_dress/img_9574.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "reception-dress-3",
    name: "Reception Dress 3",
    price: 73000,
    category: "Reception Dress" as Category,
    isCustom: true,
    description: "Custom reception dress crafted to perfection.",
    images: ["/collections/reception_dress/img_9685.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "reception-dress-4",
    name: "Reception Dress 4",
    price: 68000,
    category: "Reception Dress" as Category,
    isCustom: true,
    description: "Custom reception dress crafted to perfection.",
    images: ["/collections/reception_dress/img_9687.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "reception-dress-5",
    name: "Reception Dress 5",
    price: 67000,
    category: "Reception Dress" as Category,
    isCustom: true,
    description: "Custom reception dress crafted to perfection.",
    images: ["/collections/reception_dress/img_9689.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "reception-dress-6",
    name: "Reception Dress 6",
    price: 54000,
    category: "Reception Dress" as Category,
    isCustom: true,
    description: "Custom reception dress crafted to perfection.",
    images: ["/collections/reception_dress/img_9690.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "reception-dress-7",
    name: "Reception Dress 7",
    price: 87000,
    category: "Reception Dress" as Category,
    isCustom: true,
    description: "Custom reception dress crafted to perfection.",
    images: ["/collections/reception_dress/reception_dress_3.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "reception-dress-8",
    name: "Reception Dress 8",
    price: 66000,
    category: "Reception Dress" as Category,
    isCustom: true,
    description: "Custom reception dress crafted to perfection.",
    images: ["/collections/reception_dress/reception_dress_4.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "reception-dress-9",
    name: "Reception Dress 9",
    price: 98000,
    category: "Reception Dress" as Category,
    isCustom: true,
    description: "Custom reception dress crafted to perfection.",
    images: ["/collections/reception_dress/reception_dress_5.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "wedding-ball-gown-1",
    name: "Wedding Ball Gown 1",
    price: 93000,
    category: "Wedding Ball Gown" as Category,
    isCustom: true,
    description: "Custom wedding ball gown crafted to perfection.",
    images: ["/collections/wedding_ball_gown/img_2246.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "wedding-ball-gown-2",
    name: "Wedding Ball Gown 2",
    price: 87000,
    category: "Wedding Ball Gown" as Category,
    isCustom: true,
    description: "Custom wedding ball gown crafted to perfection.",
    images: ["/collections/wedding_ball_gown/img_2247.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "wedding-ball-gown-3",
    name: "Wedding Ball Gown 3",
    price: 97000,
    category: "Wedding Ball Gown" as Category,
    isCustom: true,
    description: "Custom wedding ball gown crafted to perfection.",
    images: ["/collections/wedding_ball_gown/img_2248.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "wedding-ball-gown-4",
    name: "Wedding Ball Gown 4",
    price: 74000,
    category: "Wedding Ball Gown" as Category,
    isCustom: true,
    description: "Custom wedding ball gown crafted to perfection.",
    images: ["/collections/wedding_ball_gown/img_2253.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "wedding-ball-gown-5",
    name: "Wedding Ball Gown 5",
    price: 67000,
    category: "Wedding Ball Gown" as Category,
    isCustom: true,
    description: "Custom wedding ball gown crafted to perfection.",
    images: ["/collections/wedding_ball_gown/img_7004.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "wedding-look-1",
    name: "Wedding Look 1",
    price: 91000,
    category: "Wedding Look" as Category,
    isCustom: true,
    description: "Custom wedding look crafted to perfection.",
    images: ["/collections/wedding_look/img_1748.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "wedding-look-2",
    name: "Wedding Look 2",
    price: 52000,
    category: "Wedding Look" as Category,
    isCustom: true,
    description: "Custom wedding look crafted to perfection.",
    images: ["/collections/wedding_look/img_1749.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "wedding-look-3",
    name: "Wedding Look 3",
    price: 93000,
    category: "Wedding Look" as Category,
    isCustom: true,
    description: "Custom wedding look crafted to perfection.",
    images: ["/collections/wedding_look/img_2177.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "wedding-look-4",
    name: "Wedding Look 4",
    price: 96000,
    category: "Wedding Look" as Category,
    isCustom: true,
    description: "Custom wedding look crafted to perfection.",
    images: ["/collections/wedding_look/img_2246.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "wedding-look-5",
    name: "Wedding Look 5",
    price: 75000,
    category: "Wedding Look" as Category,
    isCustom: true,
    description: "Custom wedding look crafted to perfection.",
    images: ["/collections/wedding_look/img_2247.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "wedding-look-6",
    name: "Wedding Look 6",
    price: 84000,
    category: "Wedding Look" as Category,
    isCustom: true,
    description: "Custom wedding look crafted to perfection.",
    images: ["/collections/wedding_look/img_2248.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "wedding-look-7",
    name: "Wedding Look 7",
    price: 95000,
    category: "Wedding Look" as Category,
    isCustom: true,
    description: "Custom wedding look crafted to perfection.",
    images: ["/collections/wedding_look/img_2253.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "wedding-look-8",
    name: "Wedding Look 8",
    price: 96000,
    category: "Wedding Look" as Category,
    isCustom: true,
    description: "Custom wedding look crafted to perfection.",
    images: ["/collections/wedding_look/wedding_look_5.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "birthday-outfit-new-1777794915335-106",
    name: "Birthday Outfit New",
    price: 75000,
    category: "Birthday Outfit" as Category,
    isCustom: true,
    description: "Luxury birthday outfit couture.",
    images: ["/collections/birthday_outfit/img_5424.png"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "birthday-outfit-new-1777794915446-128",
    name: "Birthday Outfit New",
    price: 75000,
    category: "Birthday Outfit" as Category,
    isCustom: true,
    description: "Luxury birthday outfit couture.",
    images: ["/collections/birthday_outfit/img_5433.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "birthday-outfit-new-1777794920804-903",
    name: "Birthday Outfit New",
    price: 75000,
    category: "Birthday Outfit" as Category,
    isCustom: true,
    description: "Luxury birthday outfit couture.",
    images: ["/collections/birthday_outfit/img_5464.png"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "birthday-outfit-new-1777794924713-694",
    name: "Birthday Outfit New",
    price: 75000,
    category: "Birthday Outfit" as Category,
    isCustom: true,
    description: "Luxury birthday outfit couture.",
    images: ["/collections/birthday_outfit/img_5466.png"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "birthday-outfit-new-1777794929237-321",
    name: "Birthday Outfit New",
    price: 75000,
    category: "Birthday Outfit" as Category,
    isCustom: true,
    description: "Luxury birthday outfit couture.",
    images: ["/collections/birthday_outfit/img_5467.png"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "birthday-outfit-new-1777794930000-597",
    name: "Birthday Outfit New",
    price: 75000,
    category: "Birthday Outfit" as Category,
    isCustom: true,
    description: "Luxury birthday outfit couture.",
    images: ["/collections/birthday_outfit/img_9802.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "birthday-outfit-new-1777794931966-843",
    name: "Birthday Outfit New",
    price: 75000,
    category: "Birthday Outfit" as Category,
    isCustom: true,
    description: "Luxury birthday outfit couture.",
    images: ["/collections/birthday_outfit/img_9804.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "birthday-outfit-new-1777794934609-329",
    name: "Birthday Outfit New",
    price: 75000,
    category: "Birthday Outfit" as Category,
    isCustom: true,
    description: "Luxury birthday outfit couture.",
    images: ["/collections/birthday_outfit/img_9807.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "corporate-suit-new-1777794936246-723",
    name: "Corporate Suit New",
    price: 75000,
    category: "Corporate Suit" as Category,
    isCustom: true,
    description: "Luxury corporate suit couture.",
    images: ["/collections/corporate_suit/img_5818.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "corporate-suit-new-1777794937610-84",
    name: "Corporate Suit New",
    price: 75000,
    category: "Corporate Suit" as Category,
    isCustom: true,
    description: "Luxury corporate suit couture.",
    images: ["/collections/corporate_suit/img_5822.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "pre-wedding-look-new-1777794938749-434",
    name: "Pre Wedding Look New",
    price: 75000,
    category: "Pre Wedding Look" as Category,
    isCustom: true,
    description: "Luxury pre wedding look couture.",
    images: ["/collections/pre_wedding_look/img_6973.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "pre-wedding-look-new-1777794939900-209",
    name: "Pre Wedding Look New",
    price: 75000,
    category: "Pre Wedding Look" as Category,
    isCustom: true,
    description: "Luxury pre wedding look couture.",
    images: ["/collections/pre_wedding_look/img_6989.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "ready-to-wear-new-1777794941626-265",
    name: "Ready to Wear New",
    price: 75000,
    category: "Ready to Wear" as Category,
    isCustom: true,
    description: "Luxury ready to wear couture.",
    images: ["/collections/ready_to_wear/img_5498.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "ready-to-wear-new-1777794943283-471",
    name: "Ready to Wear New",
    price: 75000,
    category: "Ready to Wear" as Category,
    isCustom: true,
    description: "Luxury ready to wear couture.",
    images: ["/collections/ready_to_wear/img_5505.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "reception-dress-new-1777794945865-592",
    name: "Reception Dress New",
    price: 75000,
    category: "Reception Dress" as Category,
    isCustom: true,
    description: "Luxury reception dress couture.",
    images: ["/collections/reception_dress/img_7694.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "reception-dress-new-1777794947792-416",
    name: "Reception Dress New",
    price: 75000,
    category: "Reception Dress" as Category,
    isCustom: true,
    description: "Luxury reception dress couture.",
    images: ["/collections/reception_dress/img_7698.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "reception-dress-new-1777794949799-138",
    name: "Reception Dress New",
    price: 75000,
    category: "Reception Dress" as Category,
    isCustom: true,
    description: "Luxury reception dress couture.",
    images: ["/collections/reception_dress/img_7700.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "reception-dress-new-1777794951615-765",
    name: "Reception Dress New",
    price: 75000,
    category: "Reception Dress" as Category,
    isCustom: true,
    description: "Luxury reception dress couture.",
    images: ["/collections/reception_dress/img_7701.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "wedding-ball-gown-new-1777794952501-599",
    name: "Wedding Ball Gown New",
    price: 75000,
    category: "Wedding Ball Gown" as Category,
    isCustom: true,
    description: "Luxury wedding ball gown couture.",
    images: ["/collections/wedding_ball_gown/img_2257.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "wedding-ball-gown-new-1777794953620-306",
    name: "Wedding Ball Gown New",
    price: 75000,
    category: "Wedding Ball Gown" as Category,
    isCustom: true,
    description: "Luxury wedding ball gown couture.",
    images: ["/collections/wedding_ball_gown/img_6970.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "wedding-ball-gown-new-1777794954755-968",
    name: "Wedding Ball Gown New",
    price: 75000,
    category: "Wedding Ball Gown" as Category,
    isCustom: true,
    description: "Luxury wedding ball gown couture.",
    images: ["/collections/wedding_ball_gown/img_6974.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "wedding-ball-gown-new-1777794955753-313",
    name: "Wedding Ball Gown New",
    price: 75000,
    category: "Wedding Ball Gown" as Category,
    isCustom: true,
    description: "Luxury wedding ball gown couture.",
    images: ["/collections/wedding_ball_gown/img_6979.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "wedding-ball-gown-new-1777794956945-844",
    name: "Wedding Ball Gown New",
    price: 75000,
    category: "Wedding Ball Gown" as Category,
    isCustom: true,
    description: "Luxury wedding ball gown couture.",
    images: ["/collections/wedding_ball_gown/img_6985.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "wedding-ball-gown-new-1777794958012-28",
    name: "Wedding Ball Gown New",
    price: 75000,
    category: "Wedding Ball Gown" as Category,
    isCustom: true,
    description: "Luxury wedding ball gown couture.",
    images: ["/collections/wedding_ball_gown/img_6990.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "wedding-ball-gown-new-1777794959102-92",
    name: "Wedding Ball Gown New",
    price: 75000,
    category: "Wedding Ball Gown" as Category,
    isCustom: true,
    description: "Luxury wedding ball gown couture.",
    images: ["/collections/wedding_ball_gown/img_7002.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "wedding-look-new-1777794960300-823",
    name: "Wedding Look New",
    price: 75000,
    category: "Wedding Look" as Category,
    isCustom: true,
    description: "Luxury wedding look couture.",
    images: ["/collections/wedding_look/img_2252.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "wedding-look-new-1777794961206-453",
    name: "Wedding Look New",
    price: 75000,
    category: "Wedding Look" as Category,
    isCustom: true,
    description: "Luxury wedding look couture.",
    images: ["/collections/wedding_look/img_2255.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "wedding-look-new-1777794962216-990",
    name: "Wedding Look New",
    price: 75000,
    category: "Wedding Look" as Category,
    isCustom: true,
    description: "Luxury wedding look couture.",
    images: ["/collections/wedding_look/img_6971.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "wedding-look-new-1777794963281-185",
    name: "Wedding Look New",
    price: 75000,
    category: "Wedding Look" as Category,
    isCustom: true,
    description: "Luxury wedding look couture.",
    images: ["/collections/wedding_look/img_6994.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "wedding-look-new-1777794964296-947",
    name: "Wedding Look New",
    price: 75000,
    category: "Wedding Look" as Category,
    isCustom: true,
    description: "Luxury wedding look couture.",
    images: ["/collections/wedding_look/img_7003.jpg"],
    measurements: ["Bust","Waist","Hip"]
  },
  {
    id: "wedding-look-new-1777794965499-98",
    name: "Wedding Look New",
    price: 75000,
    category: "Wedding Look" as Category,
    isCustom: true,
    description: "Luxury wedding look couture.",
    images: ["/collections/wedding_look/img_7004.jpg"],
    measurements: ["Bust","Waist","Hip"]
  }
];
