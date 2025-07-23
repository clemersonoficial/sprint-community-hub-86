
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import OrganizerLogin from "./pages/OrganizerLogin";
import AthleteLogin from "./pages/AthleteLogin";
import OrganizerDashboard from "./pages/OrganizerDashboard";
import AthleteDashboard from "./pages/AthleteDashboard";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import EventRegistration from "./pages/EventRegistration";
import Inscricoes from "./pages/Inscricoes";
import Comunidades from "./pages/Comunidades";
import OrganizerProfile from "./pages/OrganizerProfile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/organizador/login" element={<OrganizerLogin />} />
          <Route path="/atleta/login" element={<AthleteLogin />} />
          <Route path="/organizador/dashboard" element={<OrganizerDashboard />} />
          <Route path="/organizador/perfil/:id" element={<OrganizerProfile />} />
          <Route path="/atleta/dashboard" element={<AthleteDashboard />} />
          <Route path="/eventos" element={<Events />} />
          <Route path="/evento/:id" element={<EventDetails />} />
          <Route path="/evento/:id/inscricao" element={<EventRegistration />} />
          <Route path="/inscricoes" element={<Inscricoes />} />
          <Route path="/comunidades" element={<Comunidades />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
