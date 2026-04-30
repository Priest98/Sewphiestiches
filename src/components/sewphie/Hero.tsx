import { useState, useRef, useEffect } from "react";
import heroImg from "@/assets/img_7004.jpg";
import academyImg from "@/assets/A1.jpeg";
import { TypewriterText } from "./TypewriterText";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: heroImg,
    eyebrow: "Sewphie Stitches · Est. Kwara State",
    phrases: ["Crafting Timeless Elegance...", "For Women Who Command Presence.", "Luxury Fashion. Perfected."],
    description: "Luxury pieces designed for women who understand the power of presence. Every stitch is intentional. Every design, unforgettable.",
    ctas: [
      { text: "Explore Collections", href: "#collections", variant: "primary", cursor: "Discover" },
      { text: "Book Consultation", href: "#contact", variant: "secondary", cursor: "Book" }
    ]
  },
  {
    image: academyImg,
    eyebrow: "Sewphie Fashion Academy · Master the Craft",
    phrases: ["Learn the Art of Luxury Fashion.", "Pattern Making. Couture. Business.", "Train for Global Excellence."],
    description: "Join Kwara's premier fashion house. From foundation pattern making to advanced bridal couture, we train the next generation of industry leaders.",
    ctas: [
      { text: "View Programs", href: "/academy", variant: "primary", cursor: "Learn" },
      { text: "Enroll Now", href: "/academy", variant: "secondary", cursor: "Enroll" }
    ]
  }
];

export const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [typingComplete, setTypingComplete] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [activeSlide, isPaused]);

  const handleNext = () => {
    setTypingComplete(false);
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setTypingComplete(false);
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const current = slides[activeSlide];

  return (
    <section 
      ref={containerRef} 
      id="top" 
      className="relative h-screen min-h-[700px] w-full overflow-hidden bg-bottle-deep"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Images with AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={activeSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <motion.div style={{ y, opacity }} className="h-full w-full">
            <img
              src={current.image}
              alt={current.eyebrow}
              className="h-full w-full object-cover object-center"
              width={1080}
              height={1920}
              loading="eager"
              decoding="async"
              fetchpriority="high"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 container h-full flex flex-col justify-end pb-24 md:pb-32 items-center md:items-start text-center md:text-left">
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl flex flex-col items-center md:items-start"
          >
            <p className="text-cream/80 text-xs md:text-sm uppercase tracking-luxury mb-6 flex items-center gap-4">
              <span className="h-px w-10 gold-line" />
              {current.eyebrow}
              <span className="h-px w-10 gold-line md:hidden" />
            </p>
            
            <div className="min-h-[140px] md:min-h-[160px] lg:min-h-[180px] flex items-end justify-center md:justify-start">
              <motion.h1 
                className="font-display text-4xl md:text-6xl lg:text-7xl text-gold leading-[1.2] tracking-widest uppercase"
                animate={{ opacity: typingComplete ? 0.8 : 1 }}
                transition={{ duration: 1.5 }}
              >
                <TypewriterText 
                  phrases={current.phrases} 
                  onComplete={() => setTypingComplete(true)} 
                />
              </motion.h1>
            </div>

            <motion.p 
              className="mt-8 text-cream/80 text-base md:text-lg max-w-xl font-light leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: typingComplete ? 1 : 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              {current.description}
            </motion.p>

            <motion.div 
              className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: (typingComplete || activeSlide > 0) ? 1 : 0, y: (typingComplete || activeSlide > 0) ? 0 : 20 }}
              transition={{ duration: 1, delay: activeSlide > 0 ? 0.2 : 0.8 }}
            >
              {current.ctas.map((cta, idx) => (
                <a
                  key={idx}
                  href={cta.href}
                  data-cursor={cta.cursor}
                  className={`group inline-flex items-center justify-center px-10 py-5 text-[0.65rem] uppercase tracking-luxury btn-pill transition-all duration-500 ${
                    cta.variant === 'primary' 
                      ? "bg-gradient-gold text-bottle-deep shadow-luxury hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]" 
                      : "border border-gold/60 text-cream hover:bg-gold/10 hover:border-gold"
                  }`}
                >
                  <motion.span whileTap={{ scale: 0.96 }} className="flex items-center gap-3">
                    {cta.text}
                    {cta.variant === 'primary' && (
                      <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                    )}
                  </motion.span>
                </a>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Controls (Desktop) */}
      <div className="absolute inset-y-0 left-0 right-0 z-20 pointer-events-none hidden md:flex items-center justify-between px-10">
        <button 
          onClick={handlePrev}
          className="pointer-events-auto p-4 text-cream/20 hover:text-gold transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button 
          onClick={handleNext}
          className="pointer-events-auto p-4 text-cream/20 hover:text-gold transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>

      {/* Slide Indicators (Dots) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setTypingComplete(false); setActiveSlide(i); }}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              activeSlide === i ? "bg-gold w-8" : "bg-cream/20"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* scroll cue (only on slide 0 or shared) */}
      <motion.div 
        className="absolute bottom-20 md:bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4 text-cream/50 pointer-events-none opacity-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: typingComplete ? 0.4 : 0 }}
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-gradient-to-b from-gold/40 to-transparent" 
        />
      </motion.div>
    </section>
  );
};
