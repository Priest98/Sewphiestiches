export type Category = 'Aso Oke' | 'Birthday Outfit' | 'Corporate Suit' | 'Pre Wedding Look' | 'Ready To Wear' | 'Reception Dress' | 'Wedding Ball Gown' | 'Wedding Look';

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
    images: ["/collections/Aso oke/IMG_8305.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "aso-oke-2",
    name: "Aso Oke 2",
    price: 250000,
    category: "Aso Oke" as Category,
    isCustom: true,
    description: "Custom aso oke crafted to perfection.",
    images: ["/collections/Aso oke/IMG_8308.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "aso-oke-3",
    name: "Aso Oke 3",
    price: 250000,
    category: "Aso Oke" as Category,
    isCustom: true,
    description: "Custom aso oke crafted to perfection.",
    images: ["/collections/Aso oke/IMG_8310.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "aso-oke-4",
    name: "Aso Oke 4",
    price: 250000,
    category: "Aso Oke" as Category,
    isCustom: true,
    description: "Custom aso oke crafted to perfection.",
    images: ["/collections/Aso oke/IMG_8313.JPG.jpeg"],
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
    images: ["/collections/Aso oke/IMG_9584.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "aso-oke-8",
    name: "Aso Oke 8",
    price: 250000,
    category: "Aso Oke" as Category,
    isCustom: true,
    description: "Custom aso oke crafted to perfection.",
    images: ["/collections/Aso oke/IMG_9585.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "aso-oke-9",
    name: "Aso Oke 9",
    price: 250000,
    category: "Aso Oke" as Category,
    isCustom: true,
    description: "Custom aso oke crafted to perfection.",
    images: ["/collections/Aso oke/IMG_9706.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "aso-oke-10",
    name: "Aso Oke 10",
    price: 250000,
    category: "Aso Oke" as Category,
    isCustom: true,
    description: "Custom aso oke crafted to perfection.",
    images: ["/collections/Aso oke/IMG_9707.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "aso-oke-11",
    name: "Aso Oke 11",
    price: 250000,
    category: "Aso Oke" as Category,
    isCustom: true,
    description: "Custom aso oke crafted to perfection.",
    images: ["/collections/Aso oke/IMG_9718.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "aso-oke-12",
    name: "Aso Oke 12",
    price: 250000,
    category: "Aso Oke" as Category,
    isCustom: true,
    description: "Custom aso oke crafted to perfection.",
    images: ["/collections/Aso oke/IMG_9719.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "aso-oke-13",
    name: "Aso Oke 13",
    price: 250000,
    category: "Aso Oke" as Category,
    isCustom: true,
    description: "Custom aso oke crafted to perfection.",
    images: ["/collections/Aso oke/IMG_9730.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "birthday-outfit-1",
    name: "Birthday Outfit 1",
    price: 51000,
    category: "Birthday Outfit" as Category,
    isCustom: true,
    description: "Custom birthday outfit crafted to perfection.",
    images: ["/collections/Birthday outfit/birthday outfit  6.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "birthday-outfit-2",
    name: "Birthday Outfit 2",
    price: 63000,
    category: "Birthday Outfit" as Category,
    isCustom: true,
    description: "Custom birthday outfit crafted to perfection.",
    images: ["/collections/Birthday outfit/IMG_5423.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "birthday-outfit-3",
    name: "Birthday Outfit 3",
    price: 58000,
    category: "Birthday Outfit" as Category,
    isCustom: true,
    description: "Custom birthday outfit crafted to perfection.",
    images: ["/collections/Birthday outfit/IMG_5427.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "birthday-outfit-4",
    name: "Birthday Outfit 4",
    price: 56000,
    category: "Birthday Outfit" as Category,
    isCustom: true,
    description: "Custom birthday outfit crafted to perfection.",
    images: ["/collections/Birthday outfit/IMG_6887.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "birthday-outfit-5",
    name: "Birthday Outfit 5",
    price: 65000,
    category: "Birthday Outfit" as Category,
    isCustom: true,
    description: "Custom birthday outfit crafted to perfection.",
    images: ["/collections/Birthday outfit/IMG_6907.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "birthday-outfit-6",
    name: "Birthday Outfit 6",
    price: 68000,
    category: "Birthday Outfit" as Category,
    isCustom: true,
    description: "Custom birthday outfit crafted to perfection.",
    images: ["/collections/Birthday outfit/IMG_7786.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "birthday-outfit-7",
    name: "Birthday Outfit 7",
    price: 61000,
    category: "Birthday Outfit" as Category,
    isCustom: true,
    description: "Custom birthday outfit crafted to perfection.",
    images: ["/collections/Birthday outfit/IMG_7787.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "birthday-outfit-8",
    name: "Birthday Outfit 8",
    price: 68000,
    category: "Birthday Outfit" as Category,
    isCustom: true,
    description: "Custom birthday outfit crafted to perfection.",
    images: ["/collections/Birthday outfit/IMG_9685.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "birthday-outfit-9",
    name: "Birthday Outfit 9",
    price: 99000,
    category: "Birthday Outfit" as Category,
    isCustom: true,
    description: "Custom birthday outfit crafted to perfection.",
    images: ["/collections/Birthday outfit/IMG_9687.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "birthday-outfit-10",
    name: "Birthday Outfit 10",
    price: 67000,
    category: "Birthday Outfit" as Category,
    isCustom: true,
    description: "Custom birthday outfit crafted to perfection.",
    images: ["/collections/Birthday outfit/IMG_9689.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "birthday-outfit-11",
    name: "Birthday Outfit 11",
    price: 97000,
    category: "Birthday Outfit" as Category,
    isCustom: true,
    description: "Custom birthday outfit crafted to perfection.",
    images: ["/collections/Birthday outfit/IMG_9690.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "corporate-suit-1",
    name: "Corporate Suit 1",
    price: 76000,
    category: "Corporate Suit" as Category,
    isCustom: true,
    description: "Custom corporate suit crafted to perfection.",
    images: ["/collections/Corporate Suit/Corporate suit 2.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "pre-wedding-look-1",
    name: "Pre Wedding Look 1",
    price: 76000,
    category: "Pre Wedding Look" as Category,
    isCustom: true,
    description: "Custom pre wedding look crafted to perfection.",
    images: ["/collections/Pre wedding look/IMG_1751.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "pre-wedding-look-2",
    name: "Pre Wedding Look 2",
    price: 79000,
    category: "Pre Wedding Look" as Category,
    isCustom: true,
    description: "Custom pre wedding look crafted to perfection.",
    images: ["/collections/Pre wedding look/IMG_9033.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "pre-wedding-look-3",
    name: "Pre Wedding Look 3",
    price: 53000,
    category: "Pre Wedding Look" as Category,
    isCustom: true,
    description: "Custom pre wedding look crafted to perfection.",
    images: ["/collections/Pre wedding look/IMG_9054.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "pre-wedding-look-4",
    name: "Pre Wedding Look 4",
    price: 93000,
    category: "Pre Wedding Look" as Category,
    isCustom: true,
    description: "Custom pre wedding look crafted to perfection.",
    images: ["/collections/Pre wedding look/IMG_9055.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "pre-wedding-look-5",
    name: "Pre Wedding Look 5",
    price: 69000,
    category: "Pre Wedding Look" as Category,
    isCustom: true,
    description: "Custom pre wedding look crafted to perfection.",
    images: ["/collections/Pre wedding look/IMG_9056.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "pre-wedding-look-6",
    name: "Pre Wedding Look 6",
    price: 86000,
    category: "Pre Wedding Look" as Category,
    isCustom: true,
    description: "Custom pre wedding look crafted to perfection.",
    images: ["/collections/Pre wedding look/IMG_9057.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "pre-wedding-look-7",
    name: "Pre Wedding Look 7",
    price: 53000,
    category: "Pre Wedding Look" as Category,
    isCustom: true,
    description: "Custom pre wedding look crafted to perfection.",
    images: ["/collections/Pre wedding look/IMG_9058.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "pre-wedding-look-8",
    name: "Pre Wedding Look 8",
    price: 99000,
    category: "Pre Wedding Look" as Category,
    isCustom: true,
    description: "Custom pre wedding look crafted to perfection.",
    images: ["/collections/Pre wedding look/IMG_9059.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "ready-to-wear-1",
    name: "Ready To Wear 1",
    price: 97000,
    category: "Ready To Wear" as Category,
    isCustom: true,
    description: "Custom ready to wear crafted to perfection.",
    images: ["/collections/Ready to wear/A1.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "ready-to-wear-2",
    name: "Ready To Wear 2",
    price: 88000,
    category: "Ready To Wear" as Category,
    isCustom: true,
    description: "Custom ready to wear crafted to perfection.",
    images: ["/collections/Ready to wear/A2.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "ready-to-wear-3",
    name: "Ready To Wear 3",
    price: 54000,
    category: "Ready To Wear" as Category,
    isCustom: true,
    description: "Custom ready to wear crafted to perfection.",
    images: ["/collections/Ready to wear/A3.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "ready-to-wear-4",
    name: "Ready To Wear 4",
    price: 80000,
    category: "Ready To Wear" as Category,
    isCustom: true,
    description: "Custom ready to wear crafted to perfection.",
    images: ["/collections/Ready to wear/A4.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "ready-to-wear-5",
    name: "Ready To Wear 5",
    price: 53000,
    category: "Ready To Wear" as Category,
    isCustom: true,
    description: "Custom ready to wear crafted to perfection.",
    images: ["/collections/Ready to wear/A5.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "ready-to-wear-6",
    name: "Ready To Wear 6",
    price: 78000,
    category: "Ready To Wear" as Category,
    isCustom: true,
    description: "Custom ready to wear crafted to perfection.",
    images: ["/collections/Ready to wear/B1.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "ready-to-wear-7",
    name: "Ready To Wear 7",
    price: 56000,
    category: "Ready To Wear" as Category,
    isCustom: true,
    description: "Custom ready to wear crafted to perfection.",
    images: ["/collections/Ready to wear/B2.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "ready-to-wear-8",
    name: "Ready To Wear 8",
    price: 83000,
    category: "Ready To Wear" as Category,
    isCustom: true,
    description: "Custom ready to wear crafted to perfection.",
    images: ["/collections/Ready to wear/B3.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "ready-to-wear-9",
    name: "Ready To Wear 9",
    price: 59000,
    category: "Ready To Wear" as Category,
    isCustom: true,
    description: "Custom ready to wear crafted to perfection.",
    images: ["/collections/Ready to wear/B4.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "ready-to-wear-10",
    name: "Ready To Wear 10",
    price: 51000,
    category: "Ready To Wear" as Category,
    isCustom: true,
    description: "Custom ready to wear crafted to perfection.",
    images: ["/collections/Ready to wear/B5.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "ready-to-wear-11",
    name: "Ready To Wear 11",
    price: 72000,
    category: "Ready To Wear" as Category,
    isCustom: true,
    description: "Custom ready to wear crafted to perfection.",
    images: ["/collections/Ready to wear/D1.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "ready-to-wear-12",
    name: "Ready To Wear 12",
    price: 61000,
    category: "Ready To Wear" as Category,
    isCustom: true,
    description: "Custom ready to wear crafted to perfection.",
    images: ["/collections/Ready to wear/D2.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "ready-to-wear-13",
    name: "Ready To Wear 13",
    price: 93000,
    category: "Ready To Wear" as Category,
    isCustom: true,
    description: "Custom ready to wear crafted to perfection.",
    images: ["/collections/Ready to wear/IMG_1383.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "ready-to-wear-14",
    name: "Ready To Wear 14",
    price: 89000,
    category: "Ready To Wear" as Category,
    isCustom: true,
    description: "Custom ready to wear crafted to perfection.",
    images: ["/collections/Ready to wear/ready to wear 5.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "ready-to-wear-15",
    name: "Ready To Wear 15",
    price: 50000,
    category: "Ready To Wear" as Category,
    isCustom: true,
    description: "Custom ready to wear crafted to perfection.",
    images: ["/collections/Ready to wear/ready to wear 6.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "ready-to-wear-16",
    name: "Ready To Wear 16",
    price: 95000,
    category: "Ready To Wear" as Category,
    isCustom: true,
    description: "Custom ready to wear crafted to perfection.",
    images: ["/collections/Ready to wear/ready to wear 7.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "ready-to-wear-17",
    name: "Ready To Wear 17",
    price: 93000,
    category: "Ready To Wear" as Category,
    isCustom: true,
    description: "Custom ready to wear crafted to perfection.",
    images: ["/collections/Ready to wear/ready to wear 8.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "reception-dress-1",
    name: "Reception Dress 1",
    price: 79000,
    category: "Reception Dress" as Category,
    isCustom: true,
    description: "Custom reception dress crafted to perfection.",
    images: ["/collections/Reception Dress/IMG_0333.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "reception-dress-2",
    name: "Reception Dress 2",
    price: 72000,
    category: "Reception Dress" as Category,
    isCustom: true,
    description: "Custom reception dress crafted to perfection.",
    images: ["/collections/Reception Dress/IMG_4453.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "reception-dress-3",
    name: "Reception Dress 3",
    price: 88000,
    category: "Reception Dress" as Category,
    isCustom: true,
    description: "Custom reception dress crafted to perfection.",
    images: ["/collections/Reception Dress/IMG_4490.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "reception-dress-4",
    name: "Reception Dress 4",
    price: 90000,
    category: "Reception Dress" as Category,
    isCustom: true,
    description: "Custom reception dress crafted to perfection.",
    images: ["/collections/Reception Dress/IMG_4500.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "reception-dress-5",
    name: "Reception Dress 5",
    price: 50000,
    category: "Reception Dress" as Category,
    isCustom: true,
    description: "Custom reception dress crafted to perfection.",
    images: ["/collections/Reception Dress/IMG_4502.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "reception-dress-6",
    name: "Reception Dress 6",
    price: 79000,
    category: "Reception Dress" as Category,
    isCustom: true,
    description: "Custom reception dress crafted to perfection.",
    images: ["/collections/Reception Dress/IMG_9300.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "reception-dress-7",
    name: "Reception Dress 7",
    price: 54000,
    category: "Reception Dress" as Category,
    isCustom: true,
    description: "Custom reception dress crafted to perfection.",
    images: ["/collections/Reception Dress/IMG_9537.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "reception-dress-8",
    name: "Reception Dress 8",
    price: 61000,
    category: "Reception Dress" as Category,
    isCustom: true,
    description: "Custom reception dress crafted to perfection.",
    images: ["/collections/Reception Dress/IMG_9540.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "reception-dress-9",
    name: "Reception Dress 9",
    price: 65000,
    category: "Reception Dress" as Category,
    isCustom: true,
    description: "Custom reception dress crafted to perfection.",
    images: ["/collections/Reception Dress/IMG_9543.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "reception-dress-10",
    name: "Reception Dress 10",
    price: 70000,
    category: "Reception Dress" as Category,
    isCustom: true,
    description: "Custom reception dress crafted to perfection.",
    images: ["/collections/Reception Dress/IMG_9574.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "reception-dress-11",
    name: "Reception Dress 11",
    price: 98000,
    category: "Reception Dress" as Category,
    isCustom: true,
    description: "Custom reception dress crafted to perfection.",
    images: ["/collections/Reception Dress/IMG_9733.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "reception-dress-12",
    name: "Reception Dress 12",
    price: 83000,
    category: "Reception Dress" as Category,
    isCustom: true,
    description: "Custom reception dress crafted to perfection.",
    images: ["/collections/Reception Dress/IMG_9734.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "reception-dress-13",
    name: "Reception Dress 13",
    price: 59000,
    category: "Reception Dress" as Category,
    isCustom: true,
    description: "Custom reception dress crafted to perfection.",
    images: ["/collections/Reception Dress/reception dress 3.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "reception-dress-14",
    name: "Reception Dress 14",
    price: 55000,
    category: "Reception Dress" as Category,
    isCustom: true,
    description: "Custom reception dress crafted to perfection.",
    images: ["/collections/Reception Dress/reception dress 4.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "reception-dress-15",
    name: "Reception Dress 15",
    price: 80000,
    category: "Reception Dress" as Category,
    isCustom: true,
    description: "Custom reception dress crafted to perfection.",
    images: ["/collections/Reception Dress/reception dress 5.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "wedding-ball-gown-1",
    name: "Wedding Ball Gown 1",
    price: 87000,
    category: "Wedding Ball Gown" as Category,
    isCustom: true,
    description: "Custom wedding ball gown crafted to perfection.",
    images: ["/collections/Wedding ball gown/IMG_2246.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "wedding-ball-gown-2",
    name: "Wedding Ball Gown 2",
    price: 69000,
    category: "Wedding Ball Gown" as Category,
    isCustom: true,
    description: "Custom wedding ball gown crafted to perfection.",
    images: ["/collections/Wedding ball gown/IMG_2247.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "wedding-ball-gown-3",
    name: "Wedding Ball Gown 3",
    price: 51000,
    category: "Wedding Ball Gown" as Category,
    isCustom: true,
    description: "Custom wedding ball gown crafted to perfection.",
    images: ["/collections/Wedding ball gown/IMG_2248.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "wedding-ball-gown-4",
    name: "Wedding Ball Gown 4",
    price: 88000,
    category: "Wedding Ball Gown" as Category,
    isCustom: true,
    description: "Custom wedding ball gown crafted to perfection.",
    images: ["/collections/Wedding ball gown/IMG_2253.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "wedding-ball-gown-5",
    name: "Wedding Ball Gown 5",
    price: 98000,
    category: "Wedding Ball Gown" as Category,
    isCustom: true,
    description: "Custom wedding ball gown crafted to perfection.",
    images: ["/collections/Wedding ball gown/IMG_7004.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "wedding-look-1",
    name: "Wedding Look 1",
    price: 69000,
    category: "Wedding Look" as Category,
    isCustom: true,
    description: "Custom wedding look crafted to perfection.",
    images: ["/collections/Wedding look/IMG_1748.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "wedding-look-2",
    name: "Wedding Look 2",
    price: 80000,
    category: "Wedding Look" as Category,
    isCustom: true,
    description: "Custom wedding look crafted to perfection.",
    images: ["/collections/Wedding look/IMG_1749.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "wedding-look-3",
    name: "Wedding Look 3",
    price: 67000,
    category: "Wedding Look" as Category,
    isCustom: true,
    description: "Custom wedding look crafted to perfection.",
    images: ["/collections/Wedding look/IMG_2177.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "wedding-look-4",
    name: "Wedding Look 4",
    price: 63000,
    category: "Wedding Look" as Category,
    isCustom: true,
    description: "Custom wedding look crafted to perfection.",
    images: ["/collections/Wedding look/IMG_2246.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "wedding-look-5",
    name: "Wedding Look 5",
    price: 96000,
    category: "Wedding Look" as Category,
    isCustom: true,
    description: "Custom wedding look crafted to perfection.",
    images: ["/collections/Wedding look/IMG_2247.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "wedding-look-6",
    name: "Wedding Look 6",
    price: 71000,
    category: "Wedding Look" as Category,
    isCustom: true,
    description: "Custom wedding look crafted to perfection.",
    images: ["/collections/Wedding look/IMG_2248.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "wedding-look-7",
    name: "Wedding Look 7",
    price: 61000,
    category: "Wedding Look" as Category,
    isCustom: true,
    description: "Custom wedding look crafted to perfection.",
    images: ["/collections/Wedding look/IMG_2253.JPG.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
  {
    id: "wedding-look-8",
    name: "Wedding Look 8",
    price: 60000,
    category: "Wedding Look" as Category,
    isCustom: true,
    description: "Custom wedding look crafted to perfection.",
    images: ["/collections/Wedding look/Wedding look 5.jpeg"],
    measurements: ["Bust", "Waist", "Hip"]
  },
];
