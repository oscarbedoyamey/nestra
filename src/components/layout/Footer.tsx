import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="/nestra_logo_dark.png" alt="Nestra" className="h-8 mb-4" />
            <p className="text-gray-600">
              C/Fray Vicente Nicolas 27, Ibiza
            </p>
            <p className="text-gray-600">653258840</p>
            <p className="text-gray-600">info@nestra.es</p>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="font-semibold mb-4">Enlaces legales</h3>
            <div className="space-y-2">
              <Link to="/condiciones" className="block text-gray-600 hover:text-gray-900">
                Condiciones de uso
              </Link>
              <Link to="/privacidad" className="block text-gray-600 hover:text-gray-900">
                Política de privacidad
              </Link>
              <Link to="/cookies" className="block text-gray-600 hover:text-gray-900">
                Políticas de cookies
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            Propify Proptech S.L. © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;