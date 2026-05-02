import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SectionHeader } from "./SectionHeader";

const items = [
  { img: "/collections/Aso oke/IMG_9706.JPG.jpeg", title: "Aso Oke", caption: "Traditional elegance redefined.", tall: false },
  { img: "/collections/Birthday outfit/IMG_5423.JPG.jpeg", title: "Birthday Outfit", caption: "Celebrate in stunning style.", tall: true },
  { img: "/collections/Corporate Suit/Corporate suit 1.PNG", title: "Corporate Suit", caption: "Power, structure, and authority.", tall: false },
  { img: "/collections/Pre wedding look/IMG_9033.JPG.jpeg", title: "Pre Wedding Look", caption: "Start your journey beautifully.", tall: true },
  { img: "/collections/Ready to wear/A1.jpeg", title: "Ready To Wear", caption: "Effortless luxury, ready to go.", tall: false },
  { img: "/collections/Reception Dress/IMG_9733.JPG.jpeg", title: "Reception Dress", caption: "Dazzle and dance the night away.", tall: true },
  { img: "/collections/Wedding ball gown/IMG_2246.JPG.jpeg", title: "Wedding Ball Gown", caption: "Classic, unforgettable silhouettes.", tall: true },
  { img: "/collections/Wedding look/Wedding look 5.jpeg", title: "Wedding Look", caption: "The perfect style for your big day.", tall: false },
];

export const Collections = () => {
  return (
    <section id="collections" className="relative z-20 -mt-[40px] md:-mt-[80px] rounded-t-[40px] md:rounded-t-[80px] py-32 md:py-40 bg-cream overflow-hidden shadow-soft">
      <div className="container">
        <SectionHeader
          eyebrow="The Collections"
          title={<>Designed for every <span className="italic">moment that matters</span></>}
          description="Four signature lines — each piece tailored with precision, combining structure and effortless elegance."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {items.map((item, i) => (
            <Link
              key={item.title}
              to={`/collection?category=${encodeURIComponent(item.title)}`}
              className={`group relative overflow-hidden block rounded-2xl ${item.tall ? "md:row-span-2" : ""
                }`}
              style={{ aspectRatio: item.tall ? "3/5" : "4/3" }}
            >
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 1.2, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="h-full w-full"
              >
                <motion.img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="absolute inset-0 h-full w-full object-cover origin-center"
                />
                {/* gold overlay on hover */}
                <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-bottle-deep/90 via-bottle-deep/10 to-transparent pointer-events-none" />

                <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 text-cream">
                  <p className="text-[0.65rem] uppercase tracking-luxury text-gold mb-3">0{i + 1}</p>
                  <h3 className="font-display text-3xl md:text-4xl mb-2">{item.title}</h3>
                  <p className="text-sm text-cream/80 max-w-xs">{item.caption}</p>
                  <span className="mt-5 inline-flex items-center text-[0.65rem] uppercase tracking-luxury border-b border-gold/0 group-hover:border-gold transition-all pb-1">
                    View Design <span className="ml-2">→</span>
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
