import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const AcademyPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("AcademyPopup: Waiting to trigger...");
    const timer = window.setTimeout(() => {
      console.log("AcademyPopup: Triggering open");
      setIsOpen(true);
    }, 5000); // Set to 5 seconds as requested

    return () => window.clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleExplore = () => {
    handleClose();
    navigate("/academy");
  };

  const handleEnroll = () => {
    handleClose();
    navigate("/academy");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-bottle-deep/40 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl bg-bottle-deep rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)] flex flex-col md:flex-row border border-gold/10"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-black/20 text-white/70 hover:text-white hover:bg-black/40 transition-all flex items-center justify-center backdrop-blur-md"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left: Image Container */}
            <div className="relative w-full md:w-1/2 min-h-[250px] md:min-h-[500px] bg-bottle-deep/40">
              <img
                src="/lookbook/IMG_5464_optimized.jpg"
                alt="Sewphie Stitches Lookbook piece"
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bottle-deep/80 via-transparent to-transparent md:bg-gradient-to-r" />
              
              {/* Badge Overlay */}
              <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-gold/90 backdrop-blur-md text-bottle-deep px-4 py-2 rounded-full shadow-lg">
                <Sparkles className="w-4 h-4" />
                <span className="text-[0.65rem] uppercase tracking-widest font-bold">Limited Slots</span>
              </div>
            </div>

            {/* Right: Text Content */}
            <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col justify-center text-left">
              <div className="inline-flex items-center gap-3 text-gold text-[0.6rem] uppercase tracking-luxury font-medium mb-6">
                <span className="w-8 h-px bg-gold/50" />
                <span>Admission Open 2024</span>
              </div>
              
              <h2 className="font-display text-3xl md:text-5xl text-white leading-tight mb-6">
                Learn the Art of <br />
                <span className="italic text-gold">Luxury Fashion.</span>
              </h2>
              
              <p className="text-cream/70 text-base md:text-lg font-light leading-relaxed mb-10 max-w-sm">
                Enroll in our award-winning program. Master precision, structure, and high-end couture.
              </p>

              <div className="flex flex-col gap-4">
                <button
                  onClick={handleEnroll}
                  className="w-full bg-gradient-gold text-bottle-deep py-4 text-xs uppercase tracking-luxury shadow-luxury hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  Enroll Now
                </button>
                <button
                  onClick={handleExplore}
                  className="w-full border border-gold/30 text-gold py-4 text-xs uppercase tracking-luxury hover:bg-gold hover:text-bottle-deep transition-all duration-300"
                >
                  Explore Academy
                </button>
              </div>
              
              <p className="mt-8 text-white/30 text-[0.6rem] uppercase tracking-widest text-center">
                Ilorin • Kwara State • Nigeria
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
