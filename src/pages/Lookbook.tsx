import { Navbar } from "@/components/sewphie/Navbar";
import { Lookbook } from "@/components/sewphie/Lookbook";
import { Footer } from "@/components/sewphie/Footer";
import { useEffect } from "react";
import Lenis from "lenis";

const LookbookPage = () => {
  useEffect(() => {
    document.title = "Signature Lookbook | Sewphie Stitches";
    
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="min-h-screen bg-cream text-bottle-deep">
      <Navbar />
      <main className="pt-20">
        <Lookbook />
      </main>
      <Footer />
    </div>
  );
};

export default LookbookPage;
