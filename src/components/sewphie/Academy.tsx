import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import academy from "@/assets/img_7786.jpg";

export const Academy = () => {
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
      id="academy" 
      className="relative z-20 -mt-[40px] md:-mt-[80px] rounded-t-[40px] md:rounded-t-[80px] py-32 md:py-40 bg-bottle-deep text-cream overflow-hidden shadow-soft border-t border-white/5"
    >
      {/* decorative */}
      <div className="absolute top-10 right-10 hidden md:block text-[12rem] font-display text-gold/5 leading-none select-none pointer-events-none">
        Académie
      </div>

      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center relative">
        <div className="lg:col-span-6 lg:order-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <motion.img
              src={academy}
              alt="Sewphie Fashion Academy"
              loading="lazy"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1.5 }}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-gold/30 pointer-events-none" />
          </div>
        </div>

        <div className="lg:col-span-6 lg:order-1">
          <p className="text-[0.7rem] uppercase tracking-luxury text-gold mb-5 flex items-center gap-3">
            <span className="h-px w-8 gold-line" />
            Sewphie Academy
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Learn the art of <span className="italic text-gold">luxury fashion.</span>
          </h2>
          <p className="mt-6 text-cream/75 text-base md:text-lg leading-relaxed font-light max-w-xl">
            Behind every masterpiece is mastery. 
            At Sewphie Stitches Fashion Academy, we train aspiring designers to create high-end, professional pieces that stand out in a competitive industry.
            Whether you’re starting from scratch or refining your craft, our programs are designed to take you to the next level.
          </p>

          <ul className="mt-8 space-y-4 max-w-md">
            {[
              "Foundation in Pattern Making (3 months)",
              "Advanced Couture Techniques (6 months)",
              "Bridal & Asoebi Specialisation (4 months)",
              "Fashion Business Mastery (2 months)",
            ].map((p, i) => (
              <motion.li 
                key={p} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                className="flex items-start gap-4 border-b border-cream/10 pb-4"
              >
                <span className="mt-2 h-px w-6 gold-line shrink-0" />
                <span className="text-sm md:text-base text-cream/90">{p}</span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              to="/academy"
              data-cursor="Enroll"
              className="inline-flex items-center justify-center bg-gradient-gold text-bottle-deep px-10 py-5 text-[0.65rem] uppercase tracking-luxury shadow-luxury hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] btn-pill transition-all duration-500"
            >
              <motion.span whileTap={{ scale: 0.96 }}>Enroll Now</motion.span>
            </Link>
            <Link
              to="/academy"
              data-cursor="View"
              className="inline-flex items-center justify-center border border-cream/40 text-cream px-10 py-5 text-[0.65rem] uppercase tracking-luxury hover:bg-cream hover:text-bottle-deep btn-pill transition-all duration-500"
            >
              <motion.span whileTap={{ scale: 0.96 }}>View Programs</motion.span>
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
