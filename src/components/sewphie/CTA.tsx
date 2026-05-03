import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import logoDark from "@/assets/logo-dark.png";
import { Link } from "react-router-dom";

export const CTA = () => {
  return (
    <section id="contact" className="relative py-24 sm:py-32 md:py-40 lg:py-56 bg-bottle-deep text-cream overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-[0.008]">
        <img src={logoDark} alt="" className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[800px] h-auto object-contain select-none" />
      </div>
      
      <div className="absolute inset-0 bg-black/40 pointer-events-none z-0" />
      
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--gold))_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        className="container relative z-10 text-center max-w-3xl mx-auto"
      >
        <p className="text-[0.65rem] sm:text-[0.7rem] uppercase tracking-luxury text-gold mb-4 sm:mb-6 flex items-center justify-center gap-3">
          <span className="h-px w-6 sm:w-8 gold-line" />
          Begin Your Commission
          <span className="h-px w-6 sm:w-8 gold-line" />
        </p>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight sm:leading-[1.02]">
          Ready to Own Your<br />
          <span className="italic text-gold">Signature Look?</span>
        </h2>
        <motion.p 
          className="text-cream/80 text-xs sm:text-sm md:text-base max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Let's create something that speaks before you do. 
          Schedule a private consultation at our Kwara State atelier or chat with our concierge.
        </motion.p>

        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <a
            href="https://wa.me/2349065368362?text=I'd like to book an appointment"
            data-cursor="Book"
            className="inline-flex items-center justify-center bg-gradient-gold text-bottle-deep px-6 py-3 min-h-[48px] text-[0.65rem] sm:text-[0.7rem] uppercase tracking-luxury shadow-luxury hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] btn-pill transition-all duration-500"
          >
            <motion.span whileTap={{ scale: 0.96 }}>Book Appointment</motion.span>
          </a>
          <a
            href="https://wa.me/2349065368362?text=Hello, I have a question about your collections"
            target="_blank"
            rel="noreferrer"
            data-cursor="Chat"
            className="inline-flex items-center justify-center gap-3 border border-cream/40 text-cream px-6 py-3 min-h-[48px] text-[0.65rem] sm:text-[0.7rem] uppercase tracking-luxury hover:bg-cream hover:text-bottle-deep btn-pill transition-all duration-500"
          >
            <motion.span whileTap={{ scale: 0.96 }} className="flex items-center gap-2 sm:gap-3">
              <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4" />
              Chat on WhatsApp
            </motion.span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};
