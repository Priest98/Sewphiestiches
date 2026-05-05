import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CustomCursor } from "./CustomCursor";
import { ScrollProgress } from "./ScrollProgress";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768);
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Smooth scrolling initialization (Lenis)
    // Only enabled for desktop to avoid issues with mobile native scroll
    if (window.innerWidth >= 1024) {
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

      return () => {
        lenis.destroy();
      };
    }
  }, [location.pathname]); // Re-init on path change to ensure scroll reset if needed

  useEffect(() => {
    // Handle hash scrolling
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 500);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {isDesktop && <CustomCursor />}
      {isDesktop && <ScrollProgress />}
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};
