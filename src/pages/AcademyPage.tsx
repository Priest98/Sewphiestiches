import { useState, useEffect } from "react";
import Lenis from "lenis";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/sewphie/Navbar";
import { Footer } from "@/components/sewphie/Footer";
import { CustomCursor } from "@/components/sewphie/CustomCursor";
import { ScrollProgress } from "@/components/sewphie/ScrollProgress";
import { ShieldCheck, Sparkles, Scissors, Layers, CheckCircle2, MapPin, Phone, Clock, ExternalLink } from "lucide-react";
import { EnrollmentModal } from "@/components/sewphie/EnrollmentModal";

import heroImg from "@/assets/A1.jpeg";
import studio1 from "@/assets/img_6887.jpg";
import studio2 from "@/assets/img_7700.jpg";
import studio3 from "@/assets/img_5430.png";
import studio4 from "@/assets/img_9685.jpg";
import logoDarkImg from "@/assets/logo-dark.png";

export default function AcademyPage() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string | undefined>();

  useEffect(() => {
    document.title = "Sewphie Academy — Luxury Fashion Mastery";
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

  const curriculum = [
    "Introduction to Fashion Designing - Pattern Sets (Basic bodices for half length, gown)",
    "Neckline & Sleeve Variations",
    "Pattern Drafting & Dart Manipulation",
    "Beading & Embellishment",
    "Cage Art & Corsetry (Victorian, Underbust, and Cupped corset)",
    "Skirts Variation & Hip Padding",
    "Bustier Variations (Bustier, Off-shoulder princess, and with shoulder princess)",
    "Fashion Illustration (Manual and Digital)",
    "Blazers & Pants",
    "Street Wear",
    "Bridal Dress (Ball gown, Knee ball, and Back ball)",
    "Creative Draping & Haute Couture Finishing"
  ];

  const handleEnrollClick = (tier?: string) => {
    setSelectedTier(tier);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-cream text-bottle-deep font-sans selection:bg-gold/30">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      <main>
        {/* SECTION 1: HERO */}
        <section className="relative min-h-[90vh] md:min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-bottle-deep">
          <div className="absolute inset-0 z-0 grid grid-cols-1 lg:grid-cols-2">
            {/* LEFT SIDE — logo as large muted background */}
            <div className="hidden lg:flex bg-bottle-deep items-center justify-center relative overflow-hidden">
            </div>
            {/* RIGHT SIDE — hero image */}
            <div className="relative h-full w-full overflow-hidden">
              <motion.div style={{ y: heroY }} className="absolute inset-x-0 -top-24 -bottom-24">
                <img
                  src={heroImg}
                  alt="Academy Student Crafting"
                  className="w-full h-full object-cover opacity-30 lg:opacity-60"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-bottle-deep via-bottle-deep/40 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:to-bottle-deep" />
            </div>
          </div>

          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <motion.div 
                className="max-w-2xl px-4 lg:px-0 pt-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <div className="inline-flex items-center gap-4 text-gold text-xs uppercase tracking-[0.3em] font-medium mb-8">
                  <span className="w-10 h-px bg-gold/50" />
                  <span>Fashion Academy</span>
                </div>
                
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-white mb-6">
                  6-Month Intensive<br />
                  <span className="italic text-gold font-light lg:-ml-2">Fashion Mastery.</span>
                </h1>
                
                <p className="text-cream/70 text-lg md:text-xl font-light leading-relaxed max-w-lg mb-12">
                  Master the art of luxury fashion design—from concept to creation.
                </p>

                <div className="relative z-10 flex flex-col sm:flex-row gap-5">
                  <button
                    onClick={() => handleEnrollClick()}
                    data-cursor="Enroll"
                    className="inline-flex items-center justify-center bg-gradient-gold text-bottle-deep px-10 py-5 text-xs uppercase tracking-luxury shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:-translate-y-1 transition-all duration-500"
                  >
                    Enroll Now
                  </button>
                  <a
                    href="#curriculum"
                    data-cursor="View"
                    className="inline-flex items-center justify-center border border-white/20 text-cream px-10 py-5 text-xs uppercase tracking-luxury hover:bg-white hover:text-bottle-deep hover:-translate-y-1 transition-all duration-500"
                  >
                    View Curriculum
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 2: PROGRAM OVERVIEW */}
        <section id="curriculum" className="py-24 md:py-32 relative z-20 bg-cream overflow-hidden">

          
          <div className="container max-w-6xl relative z-10">
            <p className="text-[0.65rem] uppercase tracking-luxury text-gold mb-3">The Blueprint</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-bottle-deep">
              What You’ll <span className="italic text-bottle-soft">Learn.</span>
            </h2>
            <p className="mt-6 text-bottle-deep/60 text-lg max-w-2xl mx-auto font-light">
              This isn’t basic training. This is where skill meets precision.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 lg:gap-y-12">
              {curriculum.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="flex items-start gap-5 p-6 rounded-2xl hover:bg-white/50 transition-colors border border-transparent hover:border-gold/10"
                >
                  <div className="mt-1 w-8 h-8 rounded-full bg-bottle-deep/5 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl text-bottle-deep font-light leading-snug">{item}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: COURSE LEVELS */}
        <section className="py-24 md:py-32 bg-bottle-deep relative overflow-hidden text-cream">
          {/* Subtle bg decorations */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] pointer-events-none transform translate-x-1/2 -translate-y-1/2" />
          
          <div className="container relative z-10">
            <div className="text-center mb-20 animate-fade-up">
              <p className="text-[0.65rem] uppercase tracking-luxury text-gold mb-3">Tailored Progression</p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white">
                Programs Designed <br/>
                <span className="italic text-gold">for Growth.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { title: "Beginner", icon: Layers, desc: "Build a strong foundation and understand the basics of fashion design." },
                { title: "Intermediate to Advance", icon: Scissors, desc: "Refine your skills and create structured, professional designs." },
                { title: "Advanced and Bridal Master", icon: Sparkles, desc: "Master luxury bridal wear, corsetry, and high-end finishing." }
              ].map((tier, i) => (
                <motion.button
                  key={i}
                  onClick={() => handleEnrollClick(tier.title)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.8 }}
                  className="group block relative bg-bottle p-10 flex flex-col items-center text-center border border-cream/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(212,175,55,0.1)] hover:border-gold/30 w-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-gold/0 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <tier.icon className="w-10 h-10 text-gold mb-8 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                  <h3 className="font-display text-2xl text-white mb-4 relative z-10">{tier.title}</h3>
                  <p className="text-cream/60 text-sm font-light leading-relaxed relative z-10">
                    {tier.desc}
                  </p>
                  <span className="mt-8 text-gold text-[0.6rem] uppercase tracking-luxury font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    Apply Now
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: PRICING / OFFER (ELEVATED) */}
        <section className="relative z-20 py-12 bg-cream">
          <div className="container max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-10 md:p-16 shadow-2xl border border-cream-deep/50 text-center relative overflow-hidden"
            >
              {/* Elegant Border Details */}
              <div className="absolute top-2 left-2 right-2 bottom-2 border border-gold/20 pointer-events-none" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-10 bg-gradient-to-b from-transparent to-gold/40 pointer-events-none" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-10 bg-gradient-to-t from-transparent to-gold/40 pointer-events-none" />

              <h2 className="font-display text-3xl md:text-5xl text-bottle-deep mb-8 relative z-10">
                Enrollment <span className="italic text-bottle-soft">Details.</span>
              </h2>
              
              <div className="mb-10 text-bottle-deep/80 text-lg md:text-xl font-light space-y-4">
                <p>Registration Fee: <strong className="text-bottle-deep font-normal text-2xl ml-2">₦10,000</strong></p>
                <p className="text-base text-bottle-deep/60">Limited slots available to ensure quality training and personalized attention.</p>
                <div className="inline-flex items-center gap-3 py-3 border-y border-gold/20 w-auto px-8 my-6 !mt-8">
                  <Sparkles className="w-4 h-4 text-gold" />
                  <p className="text-sm tracking-widest uppercase text-gold font-medium">
                    Early applicants receive exclusive consideration.
                  </p>
                  <Sparkles className="w-4 h-4 text-gold" />
                </div>
              </div>

              <button
                onClick={() => handleEnrollClick()}
                data-cursor="Secure"
                className="relative z-10 inline-flex items-center justify-center bg-gradient-gold text-bottle-deep px-12 py-5 text-sm uppercase tracking-luxury shadow-luxury hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:-translate-y-1 transition-all duration-500 mx-auto"
              >
                Secure Your Spot
              </button>
            </motion.div>
          </div>
        </section>

        {/* SECTION: PROVEN EXCELLENCE */}
        <section className="py-24 md:py-32 bg-cream overflow-hidden">
          <div className="container mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <p className="text-[0.65rem] uppercase tracking-luxury text-gold mb-3">Excellence in Craft</p>
              <h2 className="font-display text-4xl md:text-6xl text-bottle-deep mb-6">
                Trained. Tested. <span className="italic text-bottle-soft">Recognized.</span>
              </h2>
              <div className="space-y-4 text-bottle-deep/70 text-lg font-light leading-relaxed">
                <p>Excellence here is not assumed—it’s proven.</p>
                <p>
                  The founder of Sewphie Stitches earned first position in fashion school, 
                  presenting a design recognized for its precision, structure, and craftsmanship.
                </p>
                <p className="text-bottle-deep font-normal mt-4">
                  “We don’t just teach fashion. We train excellence.”
                </p>
              </div>
              <div className="mt-10">
                <button
                  onClick={() => handleEnrollClick()}
                  className="inline-flex items-center justify-center bg-bottle-deep text-cream px-10 py-4 text-[0.65rem] uppercase tracking-luxury hover:bg-gold hover:text-bottle-deep transition-all duration-500 btn-pill"
                >
                  Enroll Now
                </button>
              </div>
            </motion.div>
          </div>

          <div className="relative w-full overflow-hidden">
            <motion.div 
              className="flex gap-6 px-4 md:px-[10vw] pb-10 overflow-x-auto hide-scrollbar snap-x snap-mandatory"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {[
                { src: "/academy/IMG_2477.JPG.jpeg", badge: "1st Position Winner", caption: "Award Moment" },
                { src: "/academy/IMG_2385.JPG.jpeg", caption: "Excellence in Craft" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                  className="relative shrink-0 w-[85vw] md:w-[450px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-luxury snap-center group"
                >
                  <img 
                    src={item.src} 
                    alt={item.caption} 
                    className="w-full h-full object-cover transition-transform duration-&lsqb;2000ms&rsqb; ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bottle-deep/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {item.badge && (
                    <div className="absolute top-6 right-6 bg-gold text-bottle-deep px-4 py-2 text-[0.6rem] uppercase tracking-luxury font-bold shadow-lg">
                      {item.badge}
                    </div>
                  )}
                  
                  <div className="absolute bottom-8 left-8">
                    <p className="text-white font-display text-xl opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      {item.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION: STUDENT SHOWCASE */}
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
          <div className="container mb-16 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <p className="text-[0.65rem] uppercase tracking-luxury text-gold mb-3">From Learning to Mastery</p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-bottle-deep mb-6">
                Our Students’ <span className="italic text-bottle-soft">Work.</span>
              </h2>
              <p className="text-bottle-deep/60 text-lg font-light leading-relaxed max-w-xl mx-auto">
                See what our students are able to create through structured training and hands-on guidance.
              </p>
            </motion.div>
          </div>

          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                { src: "/academy/students/a1.jpeg", badge: "Student Work", caption: "Structured Silhouette" },
                { src: "/academy/students/a2.jpeg", badge: "Final Project", caption: "Bridal Masterclass" },
                { src: "/academy/students/IMG_5972.JPG.jpeg", badge: "Advanced Level", caption: "Corsetry & Beading" },
                { src: "/academy/students/IMG_4927.JPG.jpeg", badge: "Student Work", caption: "Pattern Drafting" },
                { src: "/academy/students/a3.jpeg", badge: "Final Project", caption: "Bespoke Finishing" },
                { src: "/academy/students/IMG_9849.JPG.jpeg", badge: "Advanced Level", caption: "High-End Drapery" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  className="relative group rounded-[2rem] overflow-hidden aspect-[4/5] shadow-sm hover:shadow-xl transition-shadow duration-500 border border-bottle-deep/5"
                >
                  <img 
                    src={item.src} 
                    alt={item.caption} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bottle-deep/90 via-bottle-deep/20 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                  
                  {item.badge && (
                    <div className="absolute top-6 left-6 bg-white/95 text-bottle-deep px-4 py-2 text-[0.6rem] uppercase tracking-luxury font-medium rounded-sm shadow-sm">
                      {item.badge}
                    </div>
                  )}
                  
                  <div className="absolute bottom-8 left-8 right-8">
                    <p className="text-white font-display text-2xl tracking-wide opacity-90 translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                      {item.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-20 text-center">
              <p className="text-bottle-deep font-light italic text-2xl md:text-3xl mb-10">
                “With the right training, this could be your work.”
              </p>
              <button
                onClick={() => handleEnrollClick()}
                className="inline-flex items-center justify-center bg-gradient-gold text-bottle-deep px-12 py-5 text-[0.7rem] uppercase tracking-luxury hover:-translate-y-1 transition-all duration-500 shadow-luxury font-medium"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 5: STUDIO EXPERIENCE */}
        <section className="py-24 bg-cream overflow-hidden">
          <div className="container mb-16">
            <div className="text-left animate-fade-up">
              <h2 className="font-display text-4xl md:text-5xl text-bottle-deep max-w-2xl">
                Train Like a<br />
                <span className="italic text-bottle-soft">Professional.</span>
              </h2>
              <p className="mt-8 text-bottle-deep/60 text-lg max-w-xl font-light leading-relaxed">
                Work in a structured, hands-on environment designed to prepare you for real-world fashion design. 
                From concept development to final finishing, you’ll gain the skills needed to create pieces that stand out.
              </p>
            </div>
          </div>

          <div className="relative w-full overflow-hidden flex gap-6 px-4 md:px-12 pb-10 hide-scrollbar">
            {[studio1, studio2, studio3, studio4].map((src, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
                className="relative overflow-hidden min-w-[300px] md:min-w-[450px] aspect-[3/4] md:aspect-[4/5] object-cover group"
              >
                <img 
                  src={src} 
                  alt="Atelier Studio" 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-&lsqb;2000ms&rsqb; ease-out" 
                />
                <div className="absolute inset-0 bg-bottle-deep/10 group-hover:bg-transparent transition-colors duration-700" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 6: TESTIMONIALS */}
        <section className="py-24 md:py-32 bg-cream text-bottle-deep relative">
          <div className="container max-w-5xl text-center">
            <div className="mb-20">
              <p className="text-[0.65rem] uppercase tracking-luxury text-gold mb-3">Student Voice</p>
              <h2 className="font-display text-4xl md:text-5xl text-bottle-deep">
                What Our <span className="italic text-bottle-soft">Students Say.</span>
              </h2>
              <ShieldCheck className="w-8 h-8 text-gold mx-auto mt-10 opacity-80" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 relative">
              <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-bottle-deep/10" />
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-left"
              >
                <span className="text-gold font-display text-6xl leading-none block mb-4 opacity-50">"</span>
                <p className="text-xl md:text-2xl font-light italic leading-relaxed text-bottle-deep mb-8">
                  This academy transformed my skills completely. I now create pieces I’m proud to sell.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-px bg-gold" />
                  <p className="text-sm uppercase tracking-widest text-gold font-medium">Academy Graduate <span className="text-bottle-deep/40 font-normal">· Fashion Mastery</span></p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-left"
              >
                <span className="text-gold font-display text-6xl leading-none block mb-4 opacity-50">"</span>
                <p className="text-xl md:text-2xl font-light italic leading-relaxed text-bottle-deep mb-8">
                  Start Your Journey Into Luxury Fashion. Your future in fashion starts with one decision.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-px bg-gold" />
                  <p className="text-sm uppercase tracking-widest text-gold font-medium">Academy Selection <span className="text-bottle-deep/40 font-normal">· 2024 Enrollment</span></p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION: VISIT OUR STUDIO (GOOGLE MAPS) */}
        <section className="py-24 md:py-32 bg-bottle text-cream relative overflow-hidden">
          {/* Subtle bg effects */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <p className="text-[0.65rem] uppercase tracking-luxury text-gold mb-3">Our Location</p>
                <h2 className="font-display text-4xl md:text-6xl text-white mb-8">
                  Visit Our <span className="italic text-gold">Studio.</span>
                </h2>
                <p className="text-cream/70 text-lg font-light leading-relaxed mb-12 max-w-xl">
                  Experience fashion training in a professional, hands-on environment. 
                  Locate and visit Sewphie Stitches Fashion Academy with ease. 
                  We invite you to tour our workspace and see excellence in action.
                </p>

                <div className="space-y-8 mb-12">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-gold/20">
                      <MapPin className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="text-sm uppercase tracking-widest text-gold font-medium mb-1">Address</h4>
                      <p className="text-cream/80 text-base">Balogun Fulani junction Emirs road ilorin kwara state</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-gold/20">
                      <Phone className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="text-sm uppercase tracking-widest text-gold font-medium mb-1">Phone</h4>
                      <p className="text-cream/80 text-base">+234 906 536 8362</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-gold/20">
                      <Clock className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="text-sm uppercase tracking-widest text-gold font-medium mb-1">Hours</h4>
                      <p className="text-cream/80 text-base">Mon – Sat | 9:00 AM – 6:00 PM</p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/dir//Balogun+Fulani+junction+Emirs+road+ilorin"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-gold text-bottle-deep px-8 py-4 text-xs uppercase tracking-luxury shadow-luxury hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-500 group"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative"
              >
                {/* Decorative border */}
                <div className="absolute -inset-4 border border-gold/10 rounded-[2.5rem] pointer-events-none" />
                
                <div className="relative aspect-square md:aspect-video lg:aspect-square w-full rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 group">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.080835887785!2d4.557625300000001!3d8.4915214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103652835a6572bf%3A0x8cc5e4e1e37d8fa8!2sBalogun%20Fulani%20Rd%20%26%20Emirs%20Rd%2C%20Oko%20Erin%20240101%2C%20Kwara!5e0!3m2!1sen!2sng!4v1776841923517!5m2!1sen!2sng" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale-[20%] contrast-[1.1] hover:grayscale-0 transition-all duration-700"
                  ></iframe>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="py-24 bg-cream overflow-hidden">
          <div className="container max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 md:p-20 shadow-luxury border border-gold/5 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold" />
              
              <h2 className="font-display text-4xl md:text-5xl text-bottle-deep mb-6">
                Start Your <span className="italic text-bottle-soft">Journey.</span>
              </h2>
              <p className="text-bottle-deep/60 text-lg font-light mb-12 max-w-xl mx-auto">
                The next chapter of your fashion career is one decision away. Join an elite community where precision meets passion.
              </p>
              
              <button
                onClick={() => handleEnrollClick()}
                className="inline-flex items-center justify-center bg-bottle-deep text-cream px-12 py-5 text-sm uppercase tracking-luxury hover:bg-gold hover:text-bottle-deep transition-all duration-500 shadow-xl"
              >
                Enroll Now
              </button>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
      
      <EnrollmentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        selectedCourse={selectedTier}
      />
    </div>
  );
}
