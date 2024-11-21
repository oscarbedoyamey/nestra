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
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/nestra_logo_dark.png" alt="Nestra" className="h-8" />
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection("como_funciona")}
            className="text-gray-700 hover:text-gray-900"
          >
            ¿Cómo funciona?
          </button>
          <Link 
            to="/sobre-nosotros"
            className="text-gray-700 hover:text-gray-900"
          >
            Sobre nosotros
          </Link>
          <Link 
            to="/proyectos"
            className="text-gray-700 hover:text-gray-900"
          >
            Proyectos
          </Link>
          <button 
            onClick={() => scrollToSection("contacto")}
            className="text-gray-700 hover:text-gray-900"
          >
            Contacto
          </button>
          <Button variant="default" className="bg-terra-600 hover:bg-terra-700">
            Construir vivienda
          </Button>
          <Button variant="outline">
            Iniciar sesión
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;