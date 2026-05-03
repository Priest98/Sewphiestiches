import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import aboutImg from "@/assets/A1.jpeg";

export const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  return (
    <motion.section 
      ref={ref} 
      style={{ scale, opacity }}
      id="about" 
      className="relative z-20 -mt-[20px] sm:-mt-[40px] md:-mt-[80px] rounded-t-[20px] sm:rounded-t-[40px] md:rounded-t-[80px] py-16 sm:py-24 md:py-32 lg:py-40 bg-bottle-deep text-cream overflow-hidden shadow-soft border-t border-white/5"
    >
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20 items-center relative">
        <div className="lg:col-span-6 lg:order-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <motion.img
              src={aboutImg}
              alt="Sewphie Creative Director"
              loading="lazy"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1.5 }}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-gold/30 pointer-events-none" />
          </div>
        </div>

        <div className="lg:col-span-6 lg:order-1">
          <p className="text-[0.65rem] sm:text-[0.7rem] uppercase tracking-luxury text-gold mb-4 sm:mb-5 flex items-center gap-3">
            <span className="h-px w-8 gold-line" />
            About Me
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight sm:leading-[1.05]">
            The visionary behind the <span className="italic text-gold">luxury.</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-cream/75 text-sm sm:text-base md:text-lg leading-relaxed font-light max-w-xl">
            My passion is creating pieces that resonate with elegance, structure, and timeless beauty. 
            At Sewphie Stitches, every stitch and silhouette is carefully crafted to empower and elevate the wearer. 
            I believe that luxury is not just what you wear, but how it makes you feel—confident, royal, and unforgettable.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/2349065368362"
              target="_blank"
              rel="noreferrer"
              data-cursor="Connect"
              className="inline-flex items-center justify-center bg-gradient-gold text-bottle-deep px-8 py-4 min-h-[48px] text-[0.65rem] uppercase tracking-luxury shadow-luxury hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] btn-pill transition-all duration-500"
            >
              <motion.span whileTap={{ scale: 0.96 }}>Chat with Designer</motion.span>
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
