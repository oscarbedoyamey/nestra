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

  useEffect(() => {
    if (emblaApi) {
      // Optional: Add any carousel initialization logic here
    }
  }, [emblaApi]);

  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">¿Qué esperar de tu futura vivienda?</h1>
          
          <div className="prose max-w-none mb-12">
            <p className="text-xl mb-6">
              Nos comprometemos a que cada proyecto cumpla con altos estándares de calidad y diseño, sin comprometer el coste. Apostamos por crear hogares con un diseño de vanguardia que prioriza tanto el bienestar de los residentes como el respeto por el entorno.
            </p>
            <p>
              Además trabajamos directamente con constructores que además de la experiencia, tienen una filosofía muy similar a la nuestra, de aplicar transparencia, y de trabajar por reducir lo máximo posible el impacto medioambiental. Algunas de ellas son:
            </p>
            <ul>
              <li>
                <a href="https://www.011h.com/" target="_blank" rel="noopener noreferrer" className="text-terra-600 hover:text-terra-700">
                  011h
                </a>
              </li>
              <li>
                <a href="https://woodea.es/" target="_blank" rel="noopener noreferrer" className="text-terra-600 hover:text-terra-700">
                  Woodea
                </a>
              </li>
              <li>
                <a href="https://jithousing.com/" target="_blank" rel="noopener noreferrer" className="text-terra-600 hover:text-terra-700">
                  JIT Housing
                </a>
              </li>
            </ul>
          </div>
          
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {images.map((image, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 relative">
                  <img
                    src={image}
                    alt={`Proyecto ${index + 1}`}
                    className="w-full h-[600px] object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Proyectos;