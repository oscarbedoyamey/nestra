import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";

interface ProjectSliderProps {
  images: string[];
}

const ProjectSlider = ({ images }: ProjectSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 2000);

    const onSelect = () => {
      setCurrentIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);

    return () => {
      clearInterval(interval);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <Carousel 
      ref={emblaRef}
      className="w-full max-w-5xl mx-auto"
      onMouseEnter={() => emblaApi?.stop()}
      onMouseLeave={() => emblaApi?.start()}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="aspect-video w-full overflow-hidden rounded-xl">
              <img
                src={image}
                alt={`Project image ${index + 1}`}
                className="w-full h-full object-contain bg-gray-100"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="rounded-full font-bold" />
      <CarouselNext className="rounded-full font-bold" />
    </Carousel>
  );
};

export default ProjectSlider;