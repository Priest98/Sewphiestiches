import { useEffect } from "react";
import { Hero } from "@/components/sewphie/Hero";
import { Collections } from "@/components/sewphie/Collections";
import { About } from "@/components/sewphie/About";
import { Testimonials } from "@/components/sewphie/Testimonials";
import { CTA } from "@/components/sewphie/CTA";
import { LoadingScreen } from "@/components/sewphie/LoadingScreen";

const Index = () => {
  useEffect(() => {
    document.title = "Sewphie Stitches — Luxury Nigerian Couture & Fashion Academy";
  }, []);

  return (
    <>
      <LoadingScreen />
      <Hero />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <Collections />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <About />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <Testimonials />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <CTA />
    </>
  );
};

export default Index;
