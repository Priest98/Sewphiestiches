import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SectionHeader } from "./SectionHeader";

const items = [
  { img: "/collections/aso_oke/img_9706.jpg", title: "Aso oke", caption: "Traditional elegance redefined.", tall: false },
  { img: "/collections/asoebi/img_4500.jpg", title: "Asoebi", caption: "Unity in style and tradition.", tall: true },
  { img: "/collections/birthday_outfit/birthday_outfit_11.jpg", title: "Birthday Outfit", caption: "Celebrate in stunning style.", tall: true },
  { img: "/collections/corporate_suit/corporate_suit_2.jpg", title: "Corporate Suit", caption: "Power, structure, and authority.", tall: false },
  { img: "/collections/pre_wedding_look/img_9033.jpg", title: "Pre Wedding Look", caption: "Start your journey beautifully.", tall: true },
  { img: "/collections/ready_to_wear/a1.jpg", title: "Ready to Wear", caption: "Effortless luxury, ready to go.", tall: false },
  { img: "/collections/reception_dress/reception_dress_3.jpg", title: "Reception Dress", caption: "Dazzle and dance the night away.", tall: true },
  { img: "/collections/wedding_ball_gown/img_2246.jpg", title: "Wedding Ball Gown", caption: "Classic, unforgettable silhouettes.", tall: true },
  { img: "/collections/wedding_look/img_6971.jpg", title: "Wedding Look", caption: "The perfect style for your big day.", tall: false },
  { img: "/collections/civil_wedding_dress/IMG_1835.JPG.jpeg", title: "Civil Wedding Dress", caption: "Timeless elegance for your special day.", tall: true },
  { img: "/collections/street_wear/img_7566.jpg", title: "Street Wear", caption: "Bold, modern, and effortless.", tall: false },
];

export const Collections = () => {
  return (
    <section id="collections" className="relative z-20 -mt-[20px] sm:-mt-[40px] md:-mt-[80px] rounded-t-[20px] sm:rounded-t-[40px] md:rounded-t-[80px] py-16 sm:py-24 md:py-32 lg:py-40 bg-cream overflow-hidden shadow-soft">
      <div className="container">
        <SectionHeader
          eyebrow="The Collections"
          title={<>Designed for every <span className="italic">moment that matters</span></>}
          description="Four signature lines — each piece tailored with precision, combining structure and effortless elegance."
        />

        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {items.map((item, i) => (
            <Link
              key={item.title}
              to={`/collection?category=${encodeURIComponent(item.title)}`}
              className={`group relative overflow-hidden block rounded-xl sm:rounded-2xl ${item.tall ? "md:row-span-2" : ""
                }`}
              style={{ aspectRatio: item.tall ? "3/5" : "4/3" }}
            >
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
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
                <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-bottle-deep/90 via-bottle-deep/10 to-transparent pointer-events-none" />

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 md:p-10 text-cream">
                  <p className="text-[0.6rem] sm:text-[0.65rem] uppercase tracking-luxury text-gold mb-2 sm:mb-3">0{i + 1}</p>
                  <h3 className="font-display text-2xl sm:text-3xl md:text-4xl mb-1 sm:mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-cream/80 max-w-xs">{item.caption}</p>
                  <span className="mt-3 sm:mt-5 inline-flex items-center text-[0.6rem] sm:text-[0.65rem] uppercase tracking-luxury border-b border-gold/0 group-hover:border-gold transition-all pb-1">
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
