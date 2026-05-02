import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2 } from "lucide-react";
import { useShopStore } from "@/store/useShopStore";

export const WaitlistPopup = () => {
  const { isWaitlistOpen: isOpen, setWaitlistOpen: setIsOpen } = useShopStore();
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    program: "Beginner"
  });

  useEffect(() => {
    // Only auto-show on landing page if not already shown this session
    const hasShown = sessionStorage.getItem("waitlist-shown");
    if (window.location.pathname === "/" && !hasShown) {
      const timer = window.setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("waitlist-shown", "true");
      }, 4000); 
      return () => window.clearTimeout(timer);
    }
  }, [setIsOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsRedirecting(true);

    const message = `Hello, I’d like to join the waitlist for Sewphie Stitches Fashion Academy.

Here are my details:

Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email}
Program: ${formData.program}

Please notify me when admissions reopen.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/2349065368362?text=${encodedMessage}`;

    setTimeout(() => {
      window.location.href = whatsappUrl;
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-bottle-deep rounded-[2rem] overflow-hidden shadow-luxury p-8 md:p-12 text-center border border-gold/10"
          >
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 text-gold/60 hover:text-gold transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-[0.6rem] uppercase tracking-[0.3em] text-gold font-medium">Waitlist Access</span>
                <h2 className="font-display text-2xl md:text-4xl text-cream leading-tight">
                  Admissions Are <br /> <span className="italic text-gold">Currently Closed</span>
                </h2>
                <p className="text-cream/60 text-sm font-light leading-relaxed max-w-xs mx-auto">
                  Join our exclusive waitlist to be the first to know when enrollment opens for our next intake.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 pt-4 text-left">
                <div className="space-y-1">
                  <label className="text-[0.55rem] uppercase tracking-luxury text-gold/60">Full Name</label>
                  <input
                    required
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="E.g. Jane Doe"
                    className="w-full bg-white/5 border-b border-gold/20 p-3 text-sm text-cream focus:border-gold outline-none transition-all font-light rounded-none"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[0.55rem] uppercase tracking-luxury text-gold/60">Phone Number</label>
                    <input
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+234..."
                      className="w-full bg-white/5 border-b border-gold/20 p-3 text-sm text-cream focus:border-gold outline-none transition-all font-light rounded-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[0.55rem] uppercase tracking-luxury text-gold/60">Email Address</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="jane@example.com"
                      className="w-full bg-white/5 border-b border-gold/20 p-3 text-sm text-cream focus:border-gold outline-none transition-all font-light rounded-none"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[0.55rem] uppercase tracking-luxury text-gold/60">Program of Interest</label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border-b border-gold/20 p-3 text-sm text-cream focus:border-gold outline-none transition-all font-light appearance-none rounded-none"
                  >
                    <option value="Beginner" className="bg-bottle-deep">Beginner's Program</option>
                    <option value="Intermediate" className="bg-bottle-deep">Intermediate Level</option>
                    <option value="Advanced/Bridal" className="bg-bottle-deep">Advanced / Bridal Masterclass</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isRedirecting}
                  className="w-full bg-gradient-gold text-bottle-deep py-4 text-[0.65rem] uppercase tracking-luxury font-bold shadow-luxury hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-2 group mt-4"
                >
                  {isRedirecting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Redirecting...
                    </>
                  ) : (
                    "Join the Waitlist"
                  )}
                </button>
              </form>

              <p className="text-[0.5rem] uppercase tracking-luxury text-gold/40">
                Limited slots will be available for the next intake.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
