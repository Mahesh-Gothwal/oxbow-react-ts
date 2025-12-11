import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PortfolioShowcase from "./pages/PortfolioShowcase";
import ServicePage from "./pages/ServicePage";
import CaseStudy from "./pages/CaseStudy";
import Clients from "./pages/Clients";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        {/* ✅ ScrollToTop MUST be inside BrowserRouter */}
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/portfolio" element={<PortfolioShowcase />} />
          <Route path="/services/:serviceId" element={<ServicePage />} />
          <Route path="/case-study/:caseId" element={<CaseStudy />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
