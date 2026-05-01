import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index.tsx";
import AcademyPage from "./pages/AcademyPage.tsx";
import Collection from "./pages/Collection.tsx";
import LookbookPage from "./pages/Lookbook.tsx";
import ProductDetails from "./pages/ProductDetails.tsx";
import NotFound from "./pages/NotFound.tsx";
import { CheckoutModal } from "./components/shop/CheckoutModal.tsx";
import { PageTransition } from "./components/ui/PageTransition.tsx";
import { AiConcierge } from "@/components/sewphie/AiConcierge";
import Contact from "./pages/Contact.tsx";
import { WaitlistPopup } from "@/components/sewphie/WaitlistPopup";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <>
      {location.pathname === "/" && <WaitlistPopup />}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Index /></PageTransition>} />
          <Route path="/academy" element={<PageTransition><AcademyPage /></PageTransition>} />
          <Route path="/collection" element={<PageTransition><Collection /></PageTransition>} />
          <Route path="/lookbook" element={<PageTransition><LookbookPage /></PageTransition>} />
          <Route path="/product/:id" element={<PageTransition><ProductDetails /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
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
