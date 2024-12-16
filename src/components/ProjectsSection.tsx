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

const projects: Project[] = [
  {
    title: "Ibiza",
    location: "",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    status: "Estudio",
    expectedDelivery: "2026",
    priceFrom: "Por definir"
  },
  {
    title: "Barcelona",
    location: "",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    status: "Negociación solar",
    expectedDelivery: "2027",
    priceFrom: "Por definir"
  },
  {
    title: "Madrid",
    location: "",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    status: "Estudio",
    expectedDelivery: "2027",
    priceFrom: "Por definir"
  },
  {
    title: "Zaragoza",
    location: "",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    status: "Estudio",
    expectedDelivery: "2026",
    priceFrom: "Por definir"
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
              <CarouselItem style="border-radius: 5%;" key={index} className="md:basis-1/2 lg:basis-1/3">
                <ProjectCard project={project} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious style="border-radius: 5%;" className="rounded-full font-bold" />
          <CarouselNext style="border-radius: 5%;" className="rounded-full font-bold" />
        </Carousel>
      </div>
    </section>
  );
};

export default ProjectsSection;