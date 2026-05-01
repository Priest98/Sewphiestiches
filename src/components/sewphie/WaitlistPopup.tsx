import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2 } from "lucide-react";

export const WaitlistPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    program: "Beginner"
  });

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsOpen(true);
    }, 4000); 

    return () => window.clearTimeout(timer);
  }, []);

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
            className="relative w-full max-w-lg bg-white rounded-sm overflow-hidden shadow-2xl p-8 md:p-12 text-center"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-[0.6rem] uppercase tracking-[0.3em] text-gray-400 font-medium">Waitlist Access</span>
                <h2 className="font-display text-2xl md:text-3xl text-black leading-tight">
                  Admissions Are <br /> Currently Closed
                </h2>
                <p className="text-gray-500 text-sm font-light leading-relaxed max-w-xs mx-auto">
                  We are not accepting new students at the moment. Join the waitlist to be the first to know when enrollment opens again.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 pt-4 text-left">
                <div className="space-y-1">
                  <label className="text-[0.55rem] uppercase tracking-widest text-gray-400">Full Name</label>
                  <input
                    required
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="E.g. Jane Doe"
                    className="w-full bg-gray-50 border-b border-gray-100 p-3 text-sm focus:border-black outline-none transition-all font-light"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[0.55rem] uppercase tracking-widest text-gray-400">Phone Number</label>
                    <input
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+234..."
                      className="w-full bg-gray-50 border-b border-gray-100 p-3 text-sm focus:border-black outline-none transition-all font-light"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[0.55rem] uppercase tracking-widest text-gray-400">Email Address</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="jane@example.com"
                      className="w-full bg-gray-50 border-b border-gray-100 p-3 text-sm focus:border-black outline-none transition-all font-light"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[0.55rem] uppercase tracking-widest text-gray-400">Program of Interest</label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleInputChange}
                    className="w-full bg-gray-50 border-b border-gray-100 p-3 text-sm focus:border-black outline-none transition-all font-light appearance-none"
                  >
                    <option value="Beginner">Beginner's Program</option>
                    <option value="Intermediate">Intermediate Level</option>
                    <option value="Advanced/Bridal">Advanced / Bridal Masterclass</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isRedirecting}
                  className="w-full bg-black text-white py-4 text-[0.65rem] uppercase tracking-[0.2em] font-medium hover:bg-gray-900 transition-all flex items-center justify-center gap-2 group"
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

              <p className="text-[0.5rem] uppercase tracking-widest text-gray-300">
                Limited slots will be available for the next intake.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
