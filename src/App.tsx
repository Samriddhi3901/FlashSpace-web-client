import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import ListYourSpace from "./pages/ListYourSpace";
import ComingSoon from "./pages/ComingSoon";
import CityListing from "./pages/CityListing";
import NotFound from "./pages/NotFound";
import VirtualOffice from "./pages/services/VirtualOffice";
import CoworkingSpace from "./pages/services/CoworkingSpace";
import OnDemand from "./pages/services/OnDemand";
import EventSpaces from "./pages/services/EventSpaces";
import BusinessSetup from "./pages/services/BusinessSetup";
import VirtualOfficeSolution from "./pages/solutions/VirtualOfficeSolution";
import CoworkingSpaceSolution from "./pages/solutions/CoworkingSpaceSolution";
import OnDemandSolution from "./pages/solutions/OnDemandSolution";
import BusinessSetupSolution from "./pages/solutions/BusinessSetupSolution";
// import SearchResults from "./pages/SearchResult";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/virtual-office" element={<VirtualOffice />} />
          <Route path="/services/coworking-space" element={<CoworkingSpace />} />
          <Route path="/services/on-demand" element={<OnDemand />} />
          <Route path="/services/event-spaces" element={<EventSpaces />} />
          <Route path="/services/business-setup" element={<BusinessSetup />} />
          <Route path="/city-listing" element={<CityListing />} />
          <Route path="/solutions/virtual-office" element={<VirtualOfficeSolution />} />
          <Route path="/solutions/coworking-space" element={<CoworkingSpaceSolution />} />
          <Route path="/solutions/on-demand" element={<OnDemandSolution />} />
          <Route path="/solutions/business-setup" element={<BusinessSetupSolution />} />
          {/* <Route path="/search-results" element={<SearchResults />} /> */}
          <Route path="/list-your-space" element={<ListYourSpace />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/city/:cityId" element={<CityListing />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
