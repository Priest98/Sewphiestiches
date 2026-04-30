import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";
import { Navbar } from "@/components/sewphie/Navbar";
import { Hero } from "@/components/sewphie/Hero";
import { Collections } from "@/components/sewphie/Collections";
import { About } from "@/components/sewphie/About";
import { Testimonials } from "@/components/sewphie/Testimonials";
import { CTA } from "@/components/sewphie/CTA";
import { Footer } from "@/components/sewphie/Footer";
import { CustomCursor } from "@/components/sewphie/CustomCursor";
import { LoadingScreen } from "@/components/sewphie/LoadingScreen";
import { ScrollProgress } from "@/components/sewphie/ScrollProgress";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Basic SEO
    document.title = "Sewphie Stitches — Luxury Nigerian Couture & Fashion Academy";

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta(
      "description",
      "Sewphie Stitches — luxury Nigerian fashion house. Bespoke gowns, asoebi, ball gowns, suits and the Sewphie Fashion Academy in Kwara State."
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + "/");

    // Initialize Lenis for buttery smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
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

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <Collections />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <About />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <Testimonials />
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
