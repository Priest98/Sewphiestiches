import { useEffect } from "react";
import Lenis from "lenis";
import { motion } from "framer-motion";
import { Navbar } from "@/components/sewphie/Navbar";
import { Footer } from "@/components/sewphie/Footer";
import { CustomCursor } from "@/components/sewphie/CustomCursor";
import { ScrollProgress } from "@/components/sewphie/ScrollProgress";
import { MapPin, Phone, Mail, Instagram, MessageCircle } from "lucide-react";
import logoDarkImg from "@/assets/logo-dark.png";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact — Sewphie Stitches";
    window.scrollTo(0, 0);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("inquiryType");
    const message = formData.get("message");

    try {
      const whatsappMessage = `Hello Sewphie Stitches! I'd like to make an inquiry.

*Name:* ${name}
*Email:* ${email}
*Subject:* ${subject}
*Message:* ${message}

I'm looking forward to hearing from you!`;

      toast.info("Redirecting to WhatsApp...");
      
      setTimeout(() => {
        window.location.href = `https://wa.me/2349065368362?text=${encodeURIComponent(whatsappMessage)}`;
      }, 800);
    } catch (err: any) {
      console.error(err);
      toast.error("An error occurred. Please try again or chat with us directly.");
    }
  };

  return (
    <div className="min-h-screen bg-cream text-bottle-deep font-sans selection:bg-gold/30">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      <main className="pt-32 pb-24 lg:pt-48 lg:pb-32 relative overflow-hidden">
        {/* Background embellishment */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] pointer-events-none transform translate-x-1/2 -translate-y-1/2" />
        
        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Left side: Content / Info */}
            <motion.div 
              className="lg:w-5/12 flex flex-col justify-center"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-4 text-gold text-[0.65rem] uppercase tracking-luxury mb-8">
                <span className="w-8 h-px bg-gold/50" />
                <span>Get in Touch</span>
              </div>
              
              <h1 className="font-display text-5xl md:text-6xl leading-[1.05] text-bottle-deep mb-8">
                Let’s create your <span className="italic text-bottle-soft">signature piece.</span>
              </h1>
              
              <p className="text-bottle-deep/70 text-lg font-light leading-relaxed mb-12">
                Whether you're looking for a bespoke bridal gown, tailored suiting, or interested in the Sewphie Academy, we are ready to assist you.
              </p>

              <div className="space-y-8 text-sm md:text-base text-bottle-deep/80 font-light">
                <div className="flex items-start gap-5">
                  <div className="mt-1 flex-shrink-0 w-10 h-10 border border-gold/30 rounded-full flex items-center justify-center text-gold">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="uppercase tracking-widest text-[0.65rem] text-bottle-deep/50 mb-1">Atelier Session</h3>
                    <p>Sewphie Stitches<br />Balogun Fulani junction Emirs road ilorin</p>
                    <p className="text-xs text-bottle-deep/50 mt-1 italic">Visits by appointment only</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5">
                  <div className="mt-1 flex-shrink-0 w-10 h-10 border border-gold/30 rounded-full flex items-center justify-center text-gold">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="uppercase tracking-widest text-[0.65rem] text-bottle-deep/50 mb-1">Direct Line</h3>
                    <p>+234 906 536 8362</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="mt-1 flex-shrink-0 w-10 h-10 border border-gold/30 rounded-full flex items-center justify-center text-gold">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="uppercase tracking-widest text-[0.65rem] text-bottle-deep/50 mb-1">Email Inquiry</h3>
                    <p>info@sewphiestitches.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 flex items-center gap-4">
                <a href="https://instagram.com/sewphiestitches" target="_blank" rel="noreferrer" className="w-12 h-12 border border-bottle-deep/10 flex items-center justify-center rounded-full hover:border-gold hover:text-gold transition-colors">
                  <Instagram className="w-5 h-5 text-bottle-deep/70 hover:text-gold" />
                </a>
              </div>
            </motion.div>

            {/* Right side: Form structure representing luxury booking */}
            <motion.div 
              className="lg:w-7/12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              <div className="bg-white p-8 md:p-12 lg:p-16 shadow-2xl relative">
                {/* Decorative borders */}
                <div className="absolute top-2 left-2 right-2 bottom-2 border border-gold/10 pointer-events-none" />
                <div className="absolute top-0 right-10 w-px h-10 bg-gradient-to-b from-transparent to-gold/40 pointer-events-none" />
                
                <h3 className="font-display text-2xl md:text-3xl mb-8">Send an Inquiry</h3>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-[0.65rem] uppercase tracking-widest text-bottle-deep/60">Full Name *</label>
                      <input id="name" name="name" type="text" className="w-full bg-transparent border-b border-bottle-deep/20 py-3 text-sm focus:outline-none focus:border-gold transition-colors rounded-none px-0" placeholder="Jane Doe" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-[0.65rem] uppercase tracking-widest text-bottle-deep/60">Email Address *</label>
                      <input id="email" name="email" type="email" className="w-full bg-transparent border-b border-bottle-deep/20 py-3 text-sm focus:outline-none focus:border-gold transition-colors rounded-none px-0" placeholder="jane@example.com" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="inquiryType" className="text-[0.65rem] uppercase tracking-widest text-bottle-deep/60">Subject</label>
                    <select id="inquiryType" name="inquiryType" className="w-full bg-transparent border-b border-bottle-deep/20 py-3 text-sm focus:outline-none focus:border-gold transition-colors rounded-none px-0 appearance-none text-bottle-deep/80">
                      <option>Bespoke Bridal Commission</option>
                      <option>Occasion Wear / AsoEbi</option>
                      <option>Sewphie Academy Enrollment</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2 pt-2">
                    <label htmlFor="message" className="text-[0.65rem] uppercase tracking-widest text-bottle-deep/60">Message / Request Details</label>
                    <textarea id="message" name="message" rows={4} className="w-full bg-transparent border-b border-bottle-deep/20 py-3 text-sm focus:outline-none focus:border-gold transition-colors rounded-none px-0 resize-none" placeholder="Tell us about the event date, style preferences, or program of interest..." />
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row gap-4">
                    <button type="submit" className="flex-1 inline-flex items-center justify-center bg-bottle-deep text-cream px-8 py-4 text-[0.65rem] uppercase tracking-luxury hover:bg-gold hover:text-bottle-deep transition-all duration-500">
                      Send Message
                    </button>
                    {/* Direct WhatsApp shortcut button */}
                    <a href="https://wa.me/2349065368362" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 border border-bottle-deep/20 text-bottle-deep px-8 py-4 text-[0.65rem] uppercase tracking-luxury hover:border-gold hover:text-gold transition-all duration-500">
                      <MessageCircle className="w-4 h-4" />
                      Chat Now
                    </a>
                  </div>
                </form>
              </div>
            </motion.div>
            
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
