import { Card } from "@/components/ui/card";

interface ProblemCardProps {
  number: number;
  title: string;
  description: string;
}

const ProblemCard = ({ number, title, description }: ProblemCardProps) => {
  return (
    <div className="w-full">
      <div className="text-4xl font-light text-[#282D15] mb-6">{number}</div>
      <h3 className="text-xl font-light mb-4">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed font-bold">{description}</p>
    </div>
  );
};

const ProblemSection = () => {
  const problems = [
    {
      title: "Quiero comprar y no encuentro",
      description: "En España cada año hay unas 200.000 personas más queriendo comprar pisos, que nuevos construidos"
    },
    {
      title: "Lo que encuentro no me encajan",
      description: "Como hay muy poca vivienda disponible, es muy poco problable que la que encuentres encaje con lo que buscas."
    },
    {
      title: "No veo el final del proceso",
      description: "Con toda esta incertidumbre es difcil saber el tiempo que hay que invertir en el proceso de búsqueda y compra, numero de pisos a visitar, y coste final."
    }
  ];

  return (
    <section 
      id="problema" 
      className="py-32 relative bg-cover bg-center"
      style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&q=80")' }}
    >
      <div className="absolute inset-0 bg-[#F3F4F5]/95" />
      <div className="container mx-auto px-8 relative z-10">
        <h2 className="text-3xl font-light text-center mb-16">El problema: <b>Falta de Vivienda</b></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <ProblemCard
              key={index}
              number={index + 1}
              title={problem.title}
              description={problem.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;