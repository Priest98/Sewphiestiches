import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "./Logo";
import { Menu, X, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useShopStore } from "@/store/useShopStore";
import { CartDrawer } from "../shop/CartDrawer";

const links = [
  { href: "/collection", label: "Collection" },
  { href: "#about", label: "About Me" },
  { href: "/academy", label: "Academy" },
  { href: "/lookbook", label: "Lookbook" },
  { href: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const { cart, setCartOpen } = useShopStore();
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const getHref = (anchor: string) => (isHome ? anchor : `/${anchor}`);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-[100] transition-all duration-700 ${
        scrolled
          ? "glass-luxury-dark py-3 shadow-luxury"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Logo variant="light" size={scrolled ? "sm" : "md"} />

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.href.startsWith("/") ? l.href : getHref(l.href)}
              onClick={(e) => {
                if (l.href.startsWith("#") && isHome) {
                  e.preventDefault();
                  const target = document.querySelector(l.href);
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                    // Also update URL hash without jump
                    window.history.pushState(null, "", getHref(l.href));
                  }
                }
              }}
              className="text-[0.65rem] uppercase tracking-[0.3em] transition-colors duration-300 text-cream hover:text-gold"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <button 
            onClick={() => setCartOpen(true)}
            className="relative p-2 text-cream hover:text-gold transition-colors"
            aria-label="Open cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartItemCount > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-gold text-bottle-deep text-[0.6rem] font-bold rounded-full flex items-center justify-center translate-x-1 -translate-y-1">
                {cartItemCount}
              </span>
            )}
          </button>
          <a
            href="https://wa.me/2349065368362?text=I'd like to book a consultation"
            className="inline-flex text-[0.6rem] uppercase tracking-luxury border border-gold/40 px-6 py-2.5 btn-pill text-gold hover:bg-gold hover:text-bottle-deep transition-all"
          >
            Book Consultation
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="lg:hidden flex items-center gap-3">
          <button 
            onClick={() => setCartOpen(true)}
            className="relative p-2 text-gold transition-colors"
            aria-label="Open cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartItemCount > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-gold text-bottle-deep text-[0.6rem] font-bold rounded-full flex items-center justify-center translate-x-1 -translate-y-1">
                {cartItemCount}
              </span>
            )}
          </button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setOpen(true)}
            className="text-gold p-2"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </motion.button>
        </div>
      </div>

      {/* Mobile drawer menu */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[150] bg-black/60 backdrop-blur-md lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-[200] w-[85%] max-w-sm glass-luxury-dark shadow-2xl lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-8 border-b border-white/5">
                <Logo variant="light" size="sm" />
                <motion.button 
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setOpen(false)} 
                  className="text-gold p-2" 
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </motion.button>
              </div>

              <nav className="flex flex-col p-10 gap-10">
                {links.map((l, i) => (
                  <motion.div
                    key={l.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={l.href.startsWith("/") ? l.href : getHref(l.href)}
                      onClick={(e) => {
                        setOpen(false);
                        if (l.href.startsWith("#") && isHome) {
                          e.preventDefault();
                          setTimeout(() => {
                            const target = document.querySelector(l.href);
                            if (target) {
                              target.scrollIntoView({ behavior: "smooth" });
                              window.history.pushState(null, "", getHref(l.href));
                            }
                          }, 300); // Wait for mobile drawer to animate out
                        }
                      }}
                      className="font-display text-4xl text-cream hover:text-gold transition-colors flex items-center justify-between group"
                    >
                      {l.label}
                      <span className="h-px w-0 bg-gold group-hover:w-12 transition-all duration-500" />
                    </Link>
                  </motion.div>
                ))}

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-12"
                >
                  <a
                    href="https://wa.me/2349065368362?text=I'd like to book a consultation"
                    onClick={() => setOpen(false)}
                    className="w-full text-center text-[0.65rem] uppercase tracking-luxury border border-gold text-gold p-5 btn-pill hover:bg-gold hover:text-bottle-deep transition-all block"
                  >
                    Book Consultation
                  </a>
                </motion.div>
              </nav>

              <div className="mt-auto p-12 border-t border-white/5">
                <p className="text-[0.6rem] uppercase tracking-widest text-gold/40">Sewphie Stitches · Atelier Line 01</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <CartDrawer />
    </header>
  );
};
