import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/sewphie/Navbar";
import { Footer } from "@/components/sewphie/Footer";
import { MOCK_PRODUCTS, Product } from "@/types/shop";
import { useShopStore } from "@/store/useShopStore";
import { useNavigate, useLocation } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import { CustomCursor } from "@/components/sewphie/CustomCursor";
import { ScrollProgress } from "@/components/sewphie/ScrollProgress";
import { useState, useMemo, useEffect } from "react";

export default function Collection() {
  const { setSelectedProduct, addToCart } = useShopStore();
  const navigate = useNavigate();
  const location = useLocation();

  const categories = useMemo(() => {
    const cats = Array.from(new Set(MOCK_PRODUCTS.map(p => p.category)));
    return ["All", ...cats].sort();
  }, []);

  const [activeCategory, setActiveCategory] = useState<string>("All");

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const paramCategory = searchParams.get("category");
    if (paramCategory && categories.includes(paramCategory)) {
      setActiveCategory(paramCategory);
    }
  }, [location.search, categories]);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") return MOCK_PRODUCTS;
    return MOCK_PRODUCTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  const handleViewProduct = (product: Product) => {
    setSelectedProduct(product);
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="min-h-screen bg-cream text-bottle-deep font-sans">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="container">
          <header className="mb-12 text-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[0.65rem] uppercase tracking-luxury text-gold mb-4"
            >
              The Curated Collection
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl text-bottle-deep"
            >
              Essential <span className="italic text-bottle-soft">Elegance.</span>
            </motion.h1>
          </header>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16 px-4">
            {categories.map((category, idx) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.05 }}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-3 rounded-full text-[0.65rem] uppercase tracking-widest transition-all duration-300 border ${
                  activeCategory === category
                    ? "bg-bottle-deep text-gold border-bottle-deep shadow-luxury scale-105"
                    : "bg-transparent text-bottle-deep/60 border-bottle-deep/10 hover:border-gold hover:text-bottle-deep"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            <AnimatePresence>
              {filteredProducts.map((product, i) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group cursor-pointer"
                  onClick={() => handleViewProduct(product)}
                >
                  <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-bottle-deep/5 shadow-soft hover:shadow-luxury transition-all duration-700">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-bottle-deep/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex gap-2">
                      <button 
                        onClick={() => handleViewProduct(product)}
                        className="flex-1 bg-gradient-gold text-bottle-deep py-4 text-[0.65rem] uppercase tracking-luxury font-medium hover:brightness-110 transition-all"
                      >
                        View Details
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          addToCart(product);
                          toast.success("Added to cart");
                        }}
                        className="w-14 shrink-0 flex items-center justify-center bg-white text-bottle-deep hover:bg-gold transition-colors"
                        title="Add to Cart"
                      >
                        <ShoppingBag className="w-5 h-5" />
                      </button>
                    </div>
                    {product.isCustom && (
                      <div className="absolute top-4 right-4 bg-bottle-deep/80 backdrop-blur-md text-gold text-[0.5rem] uppercase tracking-widest px-3 py-1">
                        Custom Couture
                      </div>
                    )}
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[0.6rem] uppercase tracking-widest text-gold mb-1">{product.category}</p>
                      <h3 className="font-display text-2xl text-bottle-deep group-hover:text-gold transition-colors">{product.name}</h3>
                    </div>
                    <p className="font-display text-xl text-bottle-deep/70">
                      {product.isCustom ? `From ₦${product.price.toLocaleString()}` : `₦${product.price.toLocaleString()}`}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
