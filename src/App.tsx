import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence } from "framer-motion";
import { CheckoutModal } from "./components/shop/CheckoutModal.tsx";
import { PageTransition } from "./components/ui/PageTransition.tsx";
import { AiConcierge } from "@/components/sewphie/AiConcierge";
import { WaitlistPopup } from "@/components/sewphie/WaitlistPopup";
import { Loader2 } from "lucide-react";

// Lazy loaded pages
const Index = lazy(() => import("./pages/Index.tsx"));
const AcademyPage = lazy(() => import("./pages/AcademyPage.tsx"));
const Collection = lazy(() => import("./pages/Collection.tsx"));
const LookbookPage = lazy(() => import("./pages/Lookbook.tsx"));
const ProductDetails = lazy(() => import("./pages/ProductDetails.tsx"));
const Contact = lazy(() => import("./pages/Contact.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const LoadingFallback = () => (
  <div className="fixed inset-0 bg-bottle-deep flex flex-col items-center justify-center text-gold z-[9999]">
    <Loader2 className="w-12 h-12 animate-spin mb-4" />
    <p className="text-[0.65rem] uppercase tracking-[0.4em] animate-pulse">Loading Artistry...</p>
  </div>
);
const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <>
      <WaitlistPopup />
      <AnimatePresence mode="wait">
        <Suspense fallback={<LoadingFallback />}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Index /></PageTransition>} />
            <Route path="/academy" element={<PageTransition><AcademyPage /></PageTransition>} />
            <Route path="/collection" element={<PageTransition><Collection /></PageTransition>} />
            <Route path="/lookbook" element={<PageTransition><LookbookPage /></PageTransition>} />
            <Route path="/product/:id" element={<PageTransition><ProductDetails /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <CheckoutModal />
        <AiConcierge />
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
