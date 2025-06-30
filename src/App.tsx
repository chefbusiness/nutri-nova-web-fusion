
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from "./components/ScrollToTop";
import CookieBanner from "./components/CookieBanner";
import SEOHead from "./components/SEOHead";
import Analytics from "./components/Analytics";
import ScrollIndicator from "./components/ScrollIndicator";
import OfflineFallback from "./components/OfflineFallback";
import SkipLink from "./components/SkipLink";
import ErrorBoundary from "./components/ErrorBoundary";
import useOnlineStatus from "./hooks/useOnlineStatus";
import Index from "./pages/Index";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

const AppContent = () => {
  const isOnline = useOnlineStatus();

  return (
    <ErrorBoundary>
      <SEOHead />
      <Analytics />
      <SkipLink />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollIndicator />
        <ScrollToTop />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/privacidad" element={<Privacy />} />
            <Route path="/terminos" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <CookieBanner />
        {!isOnline && <OfflineFallback />}
      </BrowserRouter>
    </ErrorBoundary>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AppContent />
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
