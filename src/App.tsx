import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence } from "framer-motion";
import { CheckoutModal } from "./components/shop/CheckoutModal.tsx";
import { EnrollmentModal } from "./components/sewphie/EnrollmentModal.tsx";
import { PageTransition } from "./components/ui/PageTransition.tsx";
import { AiConcierge } from "@/components/sewphie/AiConcierge";
import { Layout } from "./components/sewphie/Layout";

// Lazy loaded pages
const Index = lazy(() => import("./pages/Index.tsx"));
const AcademyPage = lazy(() => import("./pages/AcademyPage.tsx"));
const Collection = lazy(() => import("./pages/Collection.tsx"));
const LookbookPage = lazy(() => import("./pages/Lookbook.tsx"));
const ProductDetails = lazy(() => import("./pages/ProductDetails.tsx"));
const Contact = lazy(() => import("./pages/Contact.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Suspense fallback={null}>
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
    </Layout>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <CheckoutModal />
        <EnrollmentModal />
        <AiConcierge />
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
