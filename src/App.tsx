import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import Index from "./pages/Index";
import SobreNosotros from "./pages/SobreNosotros";
import Proyectos from "./pages/Proyectos";
import IniciarSesion from "./pages/IniciarSesion";
import CreaVivienda from "./pages/CreaVivienda";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/iniciar-sesion" element={<IniciarSesion />} />
          <Route path="/crea-vivienda" element={<CreaVivienda />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;