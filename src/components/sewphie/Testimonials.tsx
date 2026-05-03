import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import logoDark from "@/assets/logo-dark.png";

const quotes = [
  {
    q: "I woke up this late night and wallahi I just want to thank you again for your honesty and commitment. I just want to say a big thank you for coming through for me despite your tight schedule. I truly appreciate the effort you put into finishing my dresses, especially with your graduation and project going on. Coming over early on the event day meant so much to me. May Allah bless the works of your hands and take you to greater heights in your fashion journey.❤️",
    name: "Happy Client",
    role: "Custom Bridal",
  },
  {
    q: "Compliments everywhere 🤭. Thank you so much for always doing a perfect job. ❤️ Our forever plug 😘.",
    name: "Loyal Client",
    role: "Regular Couture",
  },
  {
    q: "The tailor we gave the material to disappointed us, and I knew it was time to reach out to you. Thank you for making our dress so beautiful in just 3 days despite your tight schedule. We needed to look like classy sisters of the groom — and that’s exactly what you delivered.",
    name: "Saeedat",
    role: "Wedding Guest",
  },
  {
    q: "I am glad you were able to make not just the brides dress... I pray for more referrals, too. You out did yourself.",
    name: "Client",
    role: "Bridal Stylist",
  },
  {
    q: "My boss... I won best dressed! 🤭 Thank you for the incredible outfit.",
    name: "Fashion Enthusiast",
    role: "Red Carpet Client",
  },
  {
    q: "I have not had time to thank youuuu. Thank you very much for the cloth. Even after the rush, it was perfect. I am really grateful.",
    name: "Happy Client",
    role: "Bespoke Couture",
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

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
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
