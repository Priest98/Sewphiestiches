import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, ArrowRight, Trash2 } from 'lucide-react';
import { useShopStore } from '@/store/useShopStore';

export const CartDrawer = () => {
  const { cart, isCartOpen, setCartOpen, removeFromCart, updateQuantity, setCheckoutOpen } = useShopStore();

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckout = () => {
    setCartOpen(false);
    setCheckoutOpen(true);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
            className="fixed inset-0 z-[200] bg-bottle-deep/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 z-[210] w-full max-w-md bg-cream shadow-2xl flex flex-col border-l border-gold/10"
          >
            <div className="flex items-center justify-between p-6 bg-bottle-deep text-cream border-b border-gold/20">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-gold" />
                <h2 className="font-display text-xl uppercase tracking-widest">Your Cart</h2>
              </div>
              <button 
                onClick={() => setCartOpen(false)}
                className="p-2 hover:bg-white/5 rounded-full transition-colors text-gold"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-bottle-deep/40 space-y-4">
                  <ShoppingBag className="w-16 h-16 opacity-20" />
                  <p className="font-light text-lg">Your cart is empty.</p>
                  <button 
                    onClick={() => setCartOpen(false)}
                    className="text-xs uppercase tracking-luxury text-gold underline underline-offset-4"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="flex gap-4 p-4 bg-white border border-bottle-deep/5 shadow-sm">
                    <div className="w-24 h-32 shrink-0 bg-bottle-deep/5">
                      <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col justify-between flex-1 py-1">
                      <div>
                        <p className="text-[0.55rem] uppercase tracking-widest text-gold mb-1">{item.category}</p>
                        <h3 className="font-display text-lg text-bottle-deep leading-tight mb-2">{item.name}</h3>
                        <p className="text-bottle-deep/70 font-light">₦{item.price.toLocaleString()}</p>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center border border-bottle-deep/10 bg-cream">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 hover:bg-bottle-deep hover:text-cream transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-xs font-medium">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 hover:bg-bottle-deep hover:text-cream transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-red-400 hover:bg-red-50 hover:text-red-600 transition-colors rounded-full"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 bg-white border-t border-bottle-deep/5 shadow-[0_-10px_40px_rgba(0,0,0,0.03)]">
                <div className="flex items-center justify-between mb-6 text-bottle-deep">
                  <span className="text-sm uppercase tracking-widest font-medium">Subtotal</span>
                  <span className="font-display text-2xl">₦{cartTotal.toLocaleString()}</span>
                </div>
                <button 
                  onClick={handleCheckout}
                  className="w-full bg-gradient-gold text-bottle-deep py-5 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.2em] font-bold shadow-luxury hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:-translate-y-1 transition-all"
                >
                  Proceed to Checkout <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
