import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect } from 'react';

const images = [
  "https://bmarq.es/wp-content/uploads/2024/04/01-malvins-bma-arquitectura.jpg",
  "https://bmarq.es/wp-content/uploads/2024/04/01-sa-figuera-bma-arquitectura.jpg",
  "https://bmarq.es/wp-content/uploads/2024/04/01-fvn5-bma-arquitectura.jpg",
  "https://arquitectura-madera.com/wp-content/uploads/2023/07/01_Ext-1.jpg",
  "https://woodea.es/wp-content/uploads/2023/04/Tomas-breton_1.jpg",
  "https://woodea.es/wp-content/uploads/2023/04/comedor_TB.jpg",
  "https://woodea.es/wp-content/uploads/2023/04/ZubiCities_Madreselva_General_Calle.jpg"
];

const Proyectos = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensaje enviado correctamente");
  };

  useEffect(() => {
    if (emblaApi) {
      // Optional: Add any carousel initialization logic here
    }
  }, [emblaApi]);

  return (
    <div className="pt-20">
      <section className="py-32 bg-white">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mb-20">
            <h1 className="text-4xl font-light mb-12">¿Qué esperar de tu futura vivienda?</h1>
            
            <div className="space-y-8">
              <p className="text-xl font-light text-gray-600">
                Nos comprometemos a que cada proyecto cumpla con altos estándares de calidad y diseño, sin comprometer el coste. Apostamos por crear hogares con un diseño de vanguardia que prioriza tanto el bienestar de los residentes como el respeto por el entorno.
              </p>
              <p className="text-gray-500">
                Además trabajamos directamente con constructores que además de la experiencia, tienen una filosofía muy similar a la nuestra, de aplicar transparencia, y de trabajar por reducir lo máximo posible el impacto medioambiental. Algunas de ellas son:
              </p>
              <ul className="space-y-2">
                <li>
                  <a href="https://www.011h.com/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600 transition-colors">
                    011h
                  </a>
                </li>
                <li>
                  <a href="https://woodea.es/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600 transition-colors">
                    Woodea
                  </a>
                </li>
                <li>
                  <a href="https://jithousing.com/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600 transition-colors">
                    JIT Housing
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="overflow-hidden -mx-8" ref={emblaRef}>
            <div className="flex">
              {images.map((image, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 relative px-8">
                  <img
                    src={image}
                    alt={`Proyecto ${index + 1}`}
                    className="w-full h-[80vh] object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section 
        id="contacto" 
        className="py-32 relative"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&q=80")' }}
      >
        <div className="absolute inset-0 bg-[#F3F4F5]/95" />
        <div className="container mx-auto px-8 max-w-2xl relative z-10">
          <h2 className="text-3xl font-light text-center mb-2">¿Tienes dudas?</h2>
          <p className="text-center text-[#282D15]/70 mb-12">
            Estaremos encantados de atenderte
          </p>
          
          <form onSubmit={handleContactSubmit} className="space-y-8">
            <div>
              <label className="block text-sm mb-2">Nombre</label>
              <Input required className="rounded-none border-[#282D15]" />
            </div>
            <div>
              <label className="block text-sm mb-2">Teléfono</label>
              <Input type="tel" required className="rounded-none border-[#282D15]" />
            </div>
            <div>
              <label className="block text-sm mb-2">Email</label>
              <Input type="email" required className="rounded-none border-[#282D15]" />
            </div>
            <div>
              <label className="block text-sm mb-2">Pregunta o dudas</label>
              <Textarea required className="min-h-[150px] rounded-none border-[#282D15]" />
            </div>
            <Button type="submit" className="w-full bg-[#282D15] hover:bg-[#282D15]/90 text-[#F3F4F5] rounded-none">
              Enviar mensaje
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Proyectos;