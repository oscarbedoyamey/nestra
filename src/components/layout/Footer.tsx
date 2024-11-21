import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#282D15] text-[#F3F4F5] py-20">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <img src="https://bmconfort.es/images/nestra_logo_white.png" alt="Nestra" className="h-6 mb-8" />
            <p className="text-sm text-[#F3F4F5]/70">
              C/Fray Vicente Nicolas 27, Ibiza
            </p>
            <p className="text-sm text-[#F3F4F5]/70">653258840</p>
            <p className="text-sm text-[#F3F4F5]/70">info@nestra.es</p>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="text-sm font-medium mb-6">Enlaces legales</h3>
            <div className="space-y-4">
              <Link to="/condiciones" className="block text-sm text-[#F3F4F5]/70 hover:text-[#F3F4F5] transition-colors">
                Condiciones de uso
              </Link>
              <Link to="/privacidad" className="block text-sm text-[#F3F4F5]/70 hover:text-[#F3F4F5] transition-colors">
                Política de privacidad
              </Link>
              <Link to="/cookies" className="block text-sm text-[#F3F4F5]/70 hover:text-[#F3F4F5] transition-colors">
                Políticas de cookies
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-[#F3F4F5]/10">
          <p className="text-sm text-[#F3F4F5]/40 text-center">
            Propify Proptech S.L. © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
