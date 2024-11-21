import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import ProjectSlider from "@/components/ProjectSlider";

const Proyectos = () => {
  const images = [
    "https://bmarq.es/wp-content/uploads/2024/04/01-malvins-bma-arquitectura.jpg",
    "https://bmarq.es/wp-content/uploads/2024/04/01-sa-figuera-bma-arquitectura.jpg",
    "https://bmarq.es/wp-content/uploads/2024/04/01-fvn5-bma-arquitectura.jpg",
    "https://arquitectura-madera.com/wp-content/uploads/2023/07/01_Ext-1.jpg",
    "https://woodea.es/wp-content/uploads/2023/04/Tomas-breton_1.jpg",
    "https://woodea.es/wp-content/uploads/2023/04/comedor_TB.jpg",
    "https://woodea.es/wp-content/uploads/2023/04/ZubiCities_Madreselva_General_Calle.jpg"
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensaje enviado correctamente");
  };

  return (
    <div className="pt-20" style={{ 
      backgroundImage: 'url("https://cdn.prod.website-files.com/6692e58c594a499f40445212/66e04030ac7b06c88d6d7b31_Bakers%20place_final_mews_2023-02-23%20edit-small-xs.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <section className="py-16">
        <div className="container mx-auto px-8">
          <h1 className="text-4xl font-light mb-8">¿Qué esperar de tu futura vivienda?</h1>
          
          <div className="prose max-w-none mb-16">
            <p className="text-lg mb-8">
              Nos comprometemos a que cada proyecto cumpla con altos estándares de calidad y diseño, 
              sin comprometer el coste. Apostamos por crear hogares con un diseño de vanguardia que 
              prioriza tanto el bienestar de los residentes como el respeto por el entorno.
            </p>
            
            <p className="text-lg mb-8">
              Además trabajamos directamente con constructores que además de la experiencia, tienen 
              una filosofía muy similar a la nuestra, de aplicar transparencia, y de trabajar por 
              reducir lo máximo posible el impacto medioambiental. Algunas de ellas son:
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <a 
                href="https://www.011h.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#282D15] hover:text-[#282D15]/80 font-bold"
              >
                011h
              </a>
              <a 
                href="https://woodea.es/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#282D15] hover:text-[#282D15]/80 font-bold"
              >
                Woodea
              </a>
              <a 
                href="https://jithousing.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#282D15] hover:text-[#282D15]/80 font-bold"
              >
                JIT Housing
              </a>
            </div>
          </div>
          
          <ProjectSlider images={images} />
        </div>
      </section>

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
              <Input required className="rounded-full border-[#282D15]" />
            </div>
            <div>
              <label className="block text-sm mb-2">Teléfono</label>
              <Input type="tel" required className="rounded-full border-[#282D15]" />
            </div>
            <div>
              <label className="block text-sm mb-2">Email</label>
              <Input type="email" required className="rounded-full border-[#282D15]" />
            </div>
            <div>
              <label className="block text-sm mb-2">Pregunta o dudas</label>
              <Textarea required className="rounded-2xl border-[#282D15]" />
            </div>
            <Button type="submit" className="w-full bg-[#282D15] hover:bg-[#282D15]/90 text-[#F3F4F5] rounded-full font-bold">
              Enviar mensaje
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Proyectos;