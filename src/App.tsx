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

const DefaultLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Navigation />
    {children}
    <Footer />
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout><Index /></DefaultLayout>} />
          <Route path="/sobre-nosotros" element={<DefaultLayout><SobreNosotros /></DefaultLayout>} />
          <Route path="/proyectos" element={<DefaultLayout><Proyectos /></DefaultLayout>} />
          <Route path="/iniciar-sesion" element={<DefaultLayout><IniciarSesion /></DefaultLayout>} />
          <Route path="/crea-vivienda" element={<CreaVivienda />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;