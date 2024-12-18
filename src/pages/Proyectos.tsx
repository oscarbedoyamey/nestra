import ProjectsSection from "@/components/ProjectsSection";
import FinishedProjectCard from "@/components/FinishedProjectCard";
import type { FinishedProject } from "@/components/FinishedProjectCard";

const Proyectos = () => {
  // Función para generar un año aleatorio entre 1995 y 2024
  const getRandomYear = () => Math.floor(Math.random() * (2024 - 1995 + 1)) + 1995;
  
  // Función para generar un número aleatorio de viviendas entre 12 y 55
  const getRandomHomes = () => Math.floor(Math.random() * (55 - 12 + 1)) + 12;

  const finishedProjects: FinishedProject[] = [
    {
      title: "Residencial Marina",
      location: "Ibiza",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      deliveryDate: getRandomYear().toString(),
      numberOfHomes: getRandomHomes()
    },
    {
      title: "Vista Bella",
      location: "Ibiza",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
      deliveryDate: getRandomYear().toString(),
      numberOfHomes: getRandomHomes()
    },
    {
      title: "Puerta del Mar",
      location: "Ibiza",
      image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2",
      deliveryDate: getRandomYear().toString(),
      numberOfHomes: getRandomHomes()
    },
    {
      title: "Sol y Playa",
      location: "Ibiza",
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e",
      deliveryDate: getRandomYear().toString(),
      numberOfHomes: getRandomHomes()
    },
    {
      title: "Mediterráneo",
      location: "Ibiza",
      image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace",
      deliveryDate: getRandomYear().toString(),
      numberOfHomes: getRandomHomes()
    },
    {
      title: "Costa Blanca",
      location: "Ibiza",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511",
      deliveryDate: getRandomYear().toString(),
      numberOfHomes: getRandomHomes()
    },
    {
      title: "Cala Dorada",
      location: "Ibiza",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544",
      deliveryDate: getRandomYear().toString(),
      numberOfHomes: getRandomHomes()
    },
    {
      title: "Bahía Alta",
      location: "Ibiza",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      deliveryDate: getRandomYear().toString(),
      numberOfHomes: getRandomHomes()
    }
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Bloque de introducción */}
      <section className="py-16 bg-[#F3F4F5]">
        <div className="container mx-auto px-8 text-center">
          <h1 className="text-4xl font-light mb-4">Nuestros proyectos</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre nuestros proyectos actuales y pasados. Cada uno representa nuestro compromiso 
            con la calidad, la innovación y la creación de hogares que transforman vidas.
          </p>
        </div>
      </section>

      {/* Proyectos abiertos */}
      <section className="py-16">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Proyectos abiertos</h2>
          <ProjectsSection />
        </div>
      </section>

      {/* Proyectos finalizados */}
      <section className="py-16 bg-[#F3F4F5]">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Proyectos finalizados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {finishedProjects.map((project, index) => (
              <FinishedProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Proyectos;