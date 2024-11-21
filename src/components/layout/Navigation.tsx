import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-8 py-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/nestra_logo_dark.png" alt="Nestra" className="h-6" />
        </Link>
        
        <div className="hidden md:flex items-center space-x-12">
          <button 
            onClick={() => scrollToSection("como_funciona")}
            className="text-sm text-gray-600 hover:text-black transition-colors"
          >
            ¿Cómo funciona?
          </button>
          <Link 
            to="/sobre-nosotros"
            className="text-sm text-gray-600 hover:text-black transition-colors"
          >
            Sobre nosotros
          </Link>
          <Link 
            to="/proyectos"
            className="text-sm text-gray-600 hover:text-black transition-colors"
          >
            Proyectos
          </Link>
          <button 
            onClick={() => scrollToSection("contacto")}
            className="text-sm text-gray-600 hover:text-black transition-colors"
          >
            Contacto
          </button>
          <Button 
            variant="default" 
            className="bg-black hover:bg-gray-800 text-white rounded-none text-sm px-6"
          >
            Construir vivienda
          </Button>
          <Button 
            variant="outline"
            className="border-gray-200 hover:bg-gray-50 rounded-none text-sm px-6"
          >
            Iniciar sesión
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;