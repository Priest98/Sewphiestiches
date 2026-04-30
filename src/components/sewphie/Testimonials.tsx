import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import logoDark from "@/assets/logo-dark.png";

const quotes = [
  {
    q: "Wearing Sewphie Stitches made me feel powerful, confident, and unforgettable.",
    name: "Client",
    role: "Bespoke Couture",
  },
  {
    q: "The attention to detail is unmatched. Every stitch speaks luxury.",
    name: "Client",
    role: "Bridal Patron",
  },
];

export const Testimonials = () => {
  return (
    <section className="relative z-20 -mt-[40px] md:-mt-[80px] rounded-t-[40px] md:rounded-t-[80px] py-32 md:py-40 bg-cream-deep overflow-hidden shadow-soft">

      
      <div className="container relative z-10">
        <SectionHeader
          eyebrow="In Their Words"
          title={<>Worn by women of <span className="italic">presence</span></>}
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {quotes.map((t, i) => (
            <motion.figure 
              key={t.name} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="flex flex-col bg-cream p-8 md:p-10 rounded-[2rem] hover:shadow-luxury transition-all duration-500 border border-gold/5"
            >
              <span className="font-display text-6xl text-gold leading-none mb-4">"</span>
              <blockquote className="font-display text-lg md:text-xl text-bottle leading-snug italic flex-1">
                {t.q}
              </blockquote>
              <div className="gold-divider mt-8 mb-5 max-w-[60px]" />
              <figcaption>
                <p className="text-sm font-medium text-bottle">{t.name}</p>
                <p className="text-[0.65rem] uppercase tracking-luxury text-muted-foreground mt-1">
                  {t.role}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};
