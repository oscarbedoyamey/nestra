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
      title: "Sa Figuera",
      location: "Ibiza",
      image: "images/Optimized-lateral-fachada (1).jpg",
      deliveryDate: "2024",
      numberOfHomes: "12"
    },
    {
      title: "Fra Vicent Nicolau 5",
      location: "Ibiza",
      image: "images/01-fvn5-bma-arquitectura (1).jpg",
      deliveryDate: "2023",
      numberOfHomes: "9"
    },
    {
      title: "Cas Serras",
      location: "Ibiza",
      image: "images/01-cas-serres-bma-arquitectura.jpg",
      deliveryDate: "2021",
      numberOfHomes: "88"
    },
    {
      title: "Es Viver",
      location: "Ibiza",
      image: "images/figueretas-24-scaled.jpg",
      deliveryDate: "2008",
      numberOfHomes: "11"
    },
    {
      title: "Can Misses",
      location: "Ibiza",
      image: "images/DSC4873-scaled.jpg",
      deliveryDate: "2004",
      numberOfHomes: "15"
    },
    {
      title: "Fra Vicent Nicolau 27",
      location: "Ibiza",
      image: "images/DSC1783_ZOOM-scaled.jpg",
      deliveryDate: "2007",
      numberOfHomes: "36"
    },
    {
      title: "C/Sant Cristofol",
      location: "Ibiza",
      image: "images/DSC5264-scaled.jpg",
      deliveryDate: "2004",
      numberOfHomes: "50"
    },
    {
      title: "Es Palmer",
      location: "Ibiza",
      image: "images/DSC4600-copia-scaled.jpg",
      deliveryDate: "2002",
      numberOfHomes: "87"
    },
    {
      title: "C/Uruguay",
      location: "Puig d'en Valls",
      image: "images/DSC0711-copia-scaled.jpg",
      deliveryDate: "2000",
      numberOfHomes: "45"
    },
    {
      title: "Americas",
      location: "Puig d'en Valls",
      image: "images/DSC4561-scaled.jpg",
      deliveryDate: "1999",
      numberOfHomes: "18"
    },
    {
      title: "Aguila 18",
      location: "Jesus",
      image: "images/DSC1731-copia-ZOOM-scaled.jpg",
      deliveryDate: "2000",
      numberOfHomes: "9"
    },
    {
      title: "Colom 15",
      location: "Jesus",
      image: "images/DSC8775-ZOOM-scaled.jpg",
      deliveryDate: "1997",
      numberOfHomes: "9"
    }
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Bloque de introducción */}
      <section className="py-16 bg-[#F3F4F5]">
        <div className="container mx-auto px-8 text-center">
          <h1 className="text-4xl font-light mb-4">Descubre nuestros proyectos</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nestra nace con el objetivo de dar solución al problema de falta de vivienda, uniendo la experiencia demostrada de más de 30 años, con la unión con nuevas formas de construcción que aumenta calidades y tiempos de ejecución.<br/>
            A continuación puedes echar un ojo al listado de nuestras promociones construidas.
          </p>
        </div>
      </section>

      {/* Proyectos abiertos */}
      <section className="py-16">
        <div className="container mx-auto px-8">
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