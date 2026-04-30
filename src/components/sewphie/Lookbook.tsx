import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { SectionHeader } from "./SectionHeader";

const looks = [
  { img: "/lookbook/A4.jpeg", title: "Emerald Reverie", code: "SS·001" },
  { img: "/lookbook/IMG_5430.PNG", title: "Champagne Silhouette", code: "SS·002" },
  { img: "/lookbook/IMG_5464.PNG", title: "Bridal Heritage", code: "SS·003" },
  { img: "/lookbook/IMG_6887.JPG.jpeg", title: "Owambe Royale", code: "SS·004" },
  { img: "/lookbook/IMG_7700.JPG.jpeg", title: "Midnight Glamour", code: "SS·005" },
];

export const Lookbook = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <section ref={targetRef} id="lookbook" className="relative z-20 -mt-[40px] md:-mt-[80px] rounded-t-[40px] md:rounded-t-[80px] h-[400vh] bg-cream shadow-[0_-20px_50px_rgba(0,0,0,0.15)]">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute top-20 left-0 right-0 z-10 pointer-events-none">
          <div className="container">
            <SectionHeader
              eyebrow="Signature Lookbook"
              title={<>Signature <span className="italic">Designs</span></>}
              description="A glimpse into the artistry, precision, and detail that define Sewphie Stitches."
            />
          </div>
        </div>

        <motion.div style={{ x }} className="flex gap-16 md:gap-32 px-[10vw] min-w-max mt-24 items-center">
          {looks.map((l, i) => (
            <motion.figure
              key={l.title}
              data-cursor="View"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-[2rem] shadow-luxury"
              style={{ width: "80vw", maxWidth: "450px", aspectRatio: "3/4" }}
            >
              <motion.img
                src={l.img}
                alt={l.title}
                loading="lazy"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-bottle-deep/10 group-hover:bg-bottle-deep/40 transition-colors duration-700 pointer-events-none" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-cream opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-center pointer-events-none">
                <p className="text-[0.65rem] uppercase tracking-luxury text-gold">{l.code}</p>
                <p className="font-display text-2xl md:text-3xl mt-2">{l.title}</p>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
