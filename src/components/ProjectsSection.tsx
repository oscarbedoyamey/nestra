import ProjectCard, { Project } from "./ProjectCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

// Función auxiliar para generar fechas aleatorias en las próximas 3-4 semanas
const getRandomFutureDate = () => {
  const date = new Date();
  const daysToAdd = Math.floor(Math.random() * (28 - 21 + 1)) + 21; // Entre 21 y 28 días
  date.setDate(date.getDate() + daysToAdd);
  date.setHours(13, 0, 0, 0); // Establecer a las 13:00
  return date;
};

const projects: Project[] = [
  {
    title: "Ibiza",
    location: "",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    status: "Estudio",
    expectedDelivery: "2026",
    priceFrom: "Por definir",
    endDate: new Date('2025-01-15T13:00:00')
  },
  {
    title: "Barcelona",
    location: "",
    image: "images/66ad091740aaf14dce93e7ea_VanillaFayetteville_0306_Cam09_PS(2)_sm-p-1080.jpg",
    status: "Negociación solar",
    expectedDelivery: "2027",
    priceFrom: "Por definir",
    endDate: getRandomFutureDate()
  },
  {
    title: "Madrid",
    location: "",
    image: "images/670f133a54d0060dbe65290c_20241013_Facade Frontalcopy-min-xs-p-1080.jpeg",
    status: "Estudio",
    expectedDelivery: "2027",
    priceFrom: "Por definir",
    endDate: new Date('2025-02-01T13:00:00')
  },
  {
    title: "Zaragoza",
    location: "",
    image: "images/bg_descubre-mallen_3.jpg",
    status: "Estudio",
    expectedDelivery: "2026",
    priceFrom: "Por definir",
    endDate: new Date('2025-01-27T12:00:00')
  }
];

const ProjectsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      if (autoplay) {
        emblaApi.scrollNext();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [emblaApi, autoplay]);

  return (
    <section className="py-20">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Próximos proyectos</h2>
        <Carousel 
          ref={emblaRef}
          className="w-full"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem 
                key={index} 
                className="md:basis-1/2 lg:basis-1/3 rounded-[5%]"
              >
                <ProjectCard project={project} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="rounded-full font-bold" />
          <CarouselNext className="rounded-full font-bold" />
        </Carousel>
      </div>
    </section>
  );
};

export default ProjectsSection;