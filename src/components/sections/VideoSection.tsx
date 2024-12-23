import { Button } from "@/components/ui/button";

const VideoSection = () => {
  return (
    <section className="py-24 bg-[#F3F4F5]">
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-light mb-6">¿Cómo funciona Nestra?</h2>
          <p className="text-lg text-[#282D15]/70 mb-12">
            Descubre en este video cómo te ayudamos a conseguir la vivienda que buscas
          </p>
        </div>
        
        <div className="relative aspect-video max-w-4xl mx-auto mb-12 rounded-lg overflow-hidden shadow-xl">
          <video 
            className="w-full h-full object-cover"
            controls
            preload="metadata"
            poster="/images/video-poster.jpg" // Opcional: puedes añadir una imagen de preview
          >
            <source src="/videos/nestra-explainer.mp4" type="video/mp4" />
            Tu navegador no soporta la reproducción de videos.
          </video>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-[#282D15] hover:bg-[#282D15]/90 text-[#F3F4F5] rounded-full font-bold"
          >
            Crea tu vivienda
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;