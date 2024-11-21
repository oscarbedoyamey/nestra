import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ProjectSliderProps {
  images: string[];
}

const ProjectSlider = ({ images }: ProjectSliderProps) => {
  return (
    <Carousel className="w-full max-w-5xl mx-auto">
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