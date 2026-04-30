import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product, OrderDetails } from '../types/shop';

export interface CartItem extends Product {
  quantity: number;
}

interface ShopState {
  selectedProduct: Product | null;
  orderDetails: Partial<OrderDetails>;
  isCheckoutOpen: boolean;
  
  // Cart
  cart: CartItem[];
  isCartOpen: boolean;
  
  setSelectedProduct: (product: Product | null) => void;
  setOrderDetails: (details: Partial<OrderDetails>) => void;
  setCheckoutOpen: (isOpen: boolean) => void;
  resetOrder: () => void;
  
  // Cart Actions
  setCartOpen: (isOpen: boolean) => void;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

export const useShopStore = create<ShopState>()(
  persist(
    (set, get) => ({
      selectedProduct: null,
      orderDetails: {},
      isCheckoutOpen: false,
      cart: [],
      isCartOpen: false,

      setSelectedProduct: (product) => set({ selectedProduct: product }),
      setOrderDetails: (details) => set((state) => ({ 
        orderDetails: { ...state.orderDetails, ...details } 
      })),
      setCheckoutOpen: (isOpen) => set({ isCheckoutOpen: isOpen }),
      resetOrder: () => set({ selectedProduct: null, orderDetails: {}, isCheckoutOpen: false }),
      
      setCartOpen: (isOpen) => set({ isCartOpen: isOpen }),
      
      addToCart: (product) => {
        const { cart } = get();
        const existingItem = cart.find(item => item.id === product.id);
        
        if (existingItem) {
          set({
            cart: cart.map(item => 
              item.id === product.id 
                ? { ...item, quantity: item.quantity + 1 } 
                : item
            )
          });
        } else {
          set({ cart: [...cart, { ...product, quantity: 1 }] });
        }
      },
      
      removeFromCart: (productId) => {
        set({ cart: get().cart.filter(item => item.id !== productId) });
      },
      
      updateQuantity: (productId, quantity) => {
        if (quantity < 1) return;
        set({
          cart: get().cart.map(item => 
            item.id === productId ? { ...item, quantity } : item
          )
        });
      },
      
      clearCart: () => set({ cart: [] })
    }),
    {
      name: 'sewphie-cart-storage',
      // only persist cart data
      partialize: (state) => ({ cart: state.cart }),
    }
  )
);
