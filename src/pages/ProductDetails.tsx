import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/sewphie/Navbar";
import { Footer } from "@/components/sewphie/Footer";
import { MOCK_PRODUCTS, Product } from "@/types/shop";
import { useShopStore } from "@/store/useShopStore";
import { CustomCursor } from "@/components/sewphie/CustomCursor";
import { ScrollProgress } from "@/components/sewphie/ScrollProgress";
import { ChevronLeft, ChevronRight, Ruler, ShieldCheck, Heart, Share2 } from "lucide-react";
import { toast } from "sonner";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setSelectedProduct, addToCart, setCartOpen } = useShopStore();
  const [product, setProduct] = useState<Product | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  useEffect(() => {
    const found = MOCK_PRODUCTS.find((p) => p.id === id);
    if (found) {
      setProduct(found);
      setSelectedProduct(found);
    }
  }, [id, setSelectedProduct]);

  if (!product) return null;

  const handleOrder = () => {
    if (!selectedSize && product.sizes) {
      alert("Please select a size first");
      return;
    }
    addToCart(product);
    toast.success("Added to cart");
    setCartOpen(true);
  };

  return (
    <div className="min-h-screen bg-cream text-bottle-deep font-sans">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      <main className="pt-24 pb-32">
        <div className="container px-4 md:px-6">
          <button 
            onClick={() => navigate(`/collection?category=${encodeURIComponent(product.category)}`)}
            className="flex items-center gap-2 text-[0.65rem] uppercase tracking-luxury text-gold mb-12 hover:translate-x-[-4px] transition-transform"
          >
            <ChevronLeft className="w-3 h-3" /> Back to Collection
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Gallery Left */}
            <div className="lg:col-span-7">
              <div className="sticky top-32">
                <div className="relative aspect-[4/5] overflow-hidden bg-bottle-deep/5 mb-6">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeImage}
                      src={product.images[activeImage]}
                      alt={product.name}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8 }}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>
                  
                  {product.images.length > 1 && (
                    <div className="absolute inset-x-0 bottom-8 flex justify-center gap-3">
                      {product.images.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveImage(i)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            activeImage === i ? "bg-gold w-8" : "bg-white/40"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-4 gap-4">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`aspect-square overflow-hidden border ${
                        activeImage === i ? "border-gold" : "border-transparent"
                      }`}
                    >
                      <img src={img} className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Info Right */}
            <div className="lg:col-span-5 py-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-[0.7rem] uppercase tracking-[0.3em] text-gold mb-4">{product.category} · Heritage</p>
                  <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-bottle-deep leading-tight">
                    {product.name}
                  </h1>
                </div>
                <div className="flex gap-4">
                  <button className="p-3 rounded-full bg-white shadow-soft hover:text-gold transition-colors"><Heart className="w-5 h-5" /></button>
                  <button className="p-3 rounded-full bg-white shadow-soft hover:text-gold transition-colors"><Share2 className="w-5 h-5" /></button>
                </div>
              </div>

              <p className="text-3xl font-display text-bottle-deep mb-8">
                ₦{product.price.toLocaleString()}
              </p>

              <div className="space-y-10 mb-12">
                <div>
                  <h3 className="text-[0.65rem] uppercase tracking-widest text-bottle-soft font-bold mb-4">The Story</h3>
                  <p className="text-lg font-light leading-relaxed text-bottle-deep/80 italic">
                    "{product.description}"
                  </p>
                </div>

                {product.colors && (
                  <div>
                    <h3 className="text-[0.65rem] uppercase tracking-widest text-bottle-soft font-bold mb-4">Available Palette</h3>
                    <div className="flex gap-3">
                      {product.colors.map(c => (
                        <button 
                          key={c}
                          onClick={() => setSelectedColor(c)}
                          className={`px-6 py-3 text-[0.65rem] uppercase tracking-luxury transition-all ${
                            selectedColor === c ? "bg-bottle-deep text-white" : "bg-white border border-bottle-deep/10 text-bottle-deep"
                          }`}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {product.sizes && (
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-[0.65rem] uppercase tracking-widest text-bottle-soft font-bold">Selection</h3>
                      <button className="flex items-center gap-2 text-[0.6rem] uppercase tracking-widest text-gold-deep hover:text-gold transition-colors">
                        <Ruler className="w-3 h-3" /> Size Guide
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {product.sizes.map(s => (
                        <button 
                          key={s}
                          onClick={() => setSelectedSize(s)}
                          className={`w-12 h-12 flex items-center justify-center text-[0.7rem] transition-all ${
                            selectedSize === s ? "bg-bottle-deep text-white rounded-full scale-110 shadow-luxury" : "bg-white border border-bottle-deep/10 text-bottle-deep hover:border-gold"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <button
                  onClick={handleOrder}
                  className="w-full bg-gradient-gold text-bottle-deep py-6 text-[0.7rem] uppercase tracking-[0.4em] font-bold shadow-luxury hover:scale-[1.01] hover:shadow-[0_20px_40px_rgba(212,175,55,0.3)] transition-all duration-500"
                >
                  {product.isCustom ? "Add Custom Design to Cart" : "Add to Cart"}
                </button>
                <button
                  className="w-full border border-bottle-deep/10 py-6 text-[0.6rem] uppercase tracking-luxury text-bottle-soft hover:bg-white transition-all flex items-center justify-center gap-3"
                >
                  <ShieldCheck className="w-4 h-4 text-gold" /> Authentic Craftsmanship Verified
                </button>
              </div>

              <div className="mt-12 pt-12 border-t border-bottle-deep/5 space-y-6">
                <details className="group">
                  <summary className="flex justify-between items-center list-none cursor-pointer text-[0.7rem] uppercase tracking-wider font-medium text-bottle-soft">
                    Measurements & Customization
                    <span className="transition-transform group-open:rotate-180">+</span>
                  </summary>
                  <div className="pt-6 text-sm font-light leading-relaxed text-bottle-deep/70">
                    For custom orders, our master tailors require zero-error measurements. We recommend booking a professional measurement session at our studio or following our luxury guide.
                  </div>
                </details>
                <details className="group">
                  <summary className="flex justify-between items-center list-none cursor-pointer text-[0.7rem] uppercase tracking-wider font-medium text-bottle-soft">
                    Shipping & Returns
                    <span className="transition-transform group-open:rotate-180">+</span>
                  </summary>
                  <div className="pt-6 text-sm font-light leading-relaxed text-bottle-deep/70">
                    Complimentary secure shipping within Nigeria. International shipping available. Due to the bespoke nature, custom pieces are final sale.
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
