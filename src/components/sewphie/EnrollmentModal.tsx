import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, Loader2, Sparkles } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCourse?: string;
}

export const EnrollmentModal = ({ isOpen, onClose, selectedCourse }: EnrollmentModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Show loading state briefly before redirect
    setTimeout(() => {
      const formData = new FormData(e.currentTarget);
      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const phone = formData.get("phone") as string;
      const program = selectedCourse || formData.get("course") as string;
      const notes = formData.get("notes") as string;

      // Format WhatsApp message
      const message = `Hello, I just joined the waitlist. Here are my details:\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nProgram: ${program}${notes ? `\nAdditional Info: ${notes}` : ''}\n\nI would like more information.`;

      // Redirect to WhatsApp
      const whatsappUrl = `https://wa.me/2349065368362?text=${encodeURIComponent(message)}`;
      window.location.href = whatsappUrl;
    }, 1500);
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
            onClick={onClose}
            className="absolute inset-0 bg-bottle-deep/40 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-[2rem] overflow-hidden shadow-luxury border border-gold/10"
          >
            <div className="p-8 md:p-12">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-bottle-deep/40 hover:text-bottle-deep transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {isSuccess ? (
                <div className="py-12 text-center space-y-6">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto"
                  >
                    <CheckCircle2 className="w-10 h-10 text-gold" />
                  </motion.div>
                  <h3 className="font-display text-3xl text-bottle-deep">Request Received!</h3>
                  <p className="text-bottle-deep/60 font-light">
                    Your enrollment request for <span className="text-gold font-medium">{selectedCourse}</span> has been received. Our admission team will contact you shortly.
                  </p>
                </div>
              ) : (
                <>
                  <div className="inline-flex items-center gap-3 text-gold text-[0.6rem] uppercase tracking-luxury font-medium mb-6">
                    <span className="w-8 h-px bg-gold/50" />
                    <span>Sewphie Academy Enrollment</span>
                  </div>
                  
                  <h2 className="font-display text-3xl text-bottle-deep leading-tight mb-8">
                    Secure Your <span className="italic text-bottle-soft">Slot.</span>
                  </h2>

                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="space-y-1">
                      <label className="text-[0.6rem] uppercase tracking-widest text-bottle-deep/50">Full Name</label>
                      <input name="name" type="text" required className="w-full bg-transparent border-b border-bottle-deep/20 py-2 text-sm focus:outline-none focus:border-gold transition-colors" placeholder="Your full name" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[0.6rem] uppercase tracking-widest text-bottle-deep/50">Email</label>
                        <input name="email" type="email" required className="w-full bg-transparent border-b border-bottle-deep/20 py-2 text-sm focus:outline-none focus:border-gold transition-colors" placeholder="email@example.com" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[0.6rem] uppercase tracking-widest text-bottle-deep/50">Phone</label>
                        <input name="phone" type="tel" required className="w-full bg-transparent border-b border-bottle-deep/20 py-2 text-sm focus:outline-none focus:border-gold transition-colors" placeholder="Phone number" />
                      </div>
                    </div>

                    {!selectedCourse && (
                      <div className="space-y-1">
                        <label className="text-[0.6rem] uppercase tracking-widest text-bottle-deep/50">Interested Program</label>
                        <select name="course" className="w-full bg-transparent border-b border-bottle-deep/20 py-2 text-sm focus:outline-none focus:border-gold transition-colors">
                          <option>Beginner Program</option>
                          <option>Intermediate Program</option>
                          <option>Advanced/Bridal Masterclass</option>
                        </select>
                      </div>
                    )}

                    <div className="space-y-1 pt-2">
                      <label className="text-[0.6rem] uppercase tracking-widest text-bottle-deep/50">Notes (Optional)</label>
                      <textarea name="notes" rows={2} className="w-full bg-transparent border-b border-bottle-deep/20 py-2 text-sm focus:outline-none focus:border-gold transition-colors resize-none" placeholder="Any specific requirements?" />
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-bottle-deep text-gold py-4 text-[0.65rem] uppercase tracking-luxury shadow-luxury hover:bg-gold hover:text-bottle-deep transition-all duration-500 mt-4 disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Submit Application
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
