import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#F3F4F5]/90 backdrop-blur-sm z-50 border-b border-[#282D15]/10">
      <div className="container mx-auto px-8 py-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="https://bmconfort.es/images/nestra_logo_dark.png" alt="Nestra" className="h-6" />
        </Link>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="h-6 w-6 text-[#282D15]" />
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          <button 
            onClick={() => scrollToSection("como_funciona")}
            className="text-sm font-bold text-[#282D15]/70 hover:text-[#282D15] transition-colors"
          >
            ¿Cómo funciona?
          </button>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/sobre-nosotros" className="text-sm font-bold text-[#282D15]/70 hover:text-[#282D15] transition-colors">
                  <NavigationMenuTrigger className="text-sm font-bold text-[#282D15]/70 hover:text-[#282D15] transition-colors">
                    Sobre nosotros
                  </NavigationMenuTrigger>
                </Link>
                <NavigationMenuContent>
                  <div className="grid w-[200px] gap-3 p-4">
                    <Link 
                      to="/sobre-nosotros#equipo"
                      className="text-sm font-bold text-[#282D15]/70 hover:text-[#282D15] transition-colors block p-2"
                      onClick={() => setTimeout(() => scrollToSection("equipo"), 100)}
                    >
                      Equipo
                    </Link>
                    <Link 
                      to="/sobre-nosotros#por-que"
                      className="text-sm font-bold text-[#282D15]/70 hover:text-[#282D15] transition-colors block p-2"
                      onClick={() => setTimeout(() => scrollToSection("por-que"), 100)}
                    >
                      Por qué
                    </Link>
                    <Link 
                      to="/sobre-nosotros#filosofia"
                      className="text-sm font-bold text-[#282D15]/70 hover:text-[#282D15] transition-colors block p-2"
                      onClick={() => setTimeout(() => scrollToSection("filosofia"), 100)}
                    >
                      Filosofía
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link 
            to="/proyectos"
            className="text-sm font-bold text-[#282D15]/70 hover:text-[#282D15] transition-colors"
          >
            Proyectos
          </Link>
          <button 
            onClick={() => scrollToSection("contacto")}
            className="text-sm font-bold text-[#282D15]/70 hover:text-[#282D15] transition-colors"
          >
            Contacto
          </button>
          <Button 
            variant="default" 
            className="bg-[#282D15] hover:bg-[#282D15]/90 text-white rounded-full text-sm font-bold px-8"
          >
            Construir vivienda
          </Button>
          <Link 
            to="/iniciar-sesion"
          >
            <Button 
              variant="outline"
              className="border-[#282D15]/20 hover:bg-white rounded-full text-sm font-bold px-8"
            >
              Iniciar sesión
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-[#282D15]/10 p-4 md:hidden">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection("como_funciona")}
                className="text-sm font-bold text-[#282D15]/70 hover:text-[#282D15] transition-colors"
              >
                ¿Cómo funciona?
              </button>
              <Link 
                to="/sobre-nosotros"
                className="text-sm font-bold text-[#282D15]/70 hover:text-[#282D15] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sobre nosotros
              </Link>
              <Link 
                to="/proyectos"
                className="text-sm font-bold text-[#282D15]/70 hover:text-[#282D15] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Proyectos
              </Link>
              <button 
                onClick={() => scrollToSection("contacto")}
                className="text-sm font-bold text-[#282D15]/70 hover:text-[#282D15] transition-colors"
              >
                Contacto
              </button>
              <Button 
                variant="default" 
                className="bg-[#282D15] hover:bg-[#282D15]/90 text-white rounded-full text-sm font-bold px-8 w-full"
              >
                Construir vivienda
              </Button>
              <Link 
                to="/iniciar-sesion"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full"
              >
                <Button 
                  variant="outline"
                  className="border-[#282D15]/20 hover:bg-white rounded-full text-sm font-bold px-8 w-full"
                >
                  Iniciar sesión
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;