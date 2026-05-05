// Product types for Sewphie Stitches - Last updated: 2026-05-05
import { MOCK_PRODUCTS } from "@/data/products";

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

export { MOCK_PRODUCTS };
