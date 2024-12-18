import { Card, CardContent } from "@/components/ui/card";

export interface FinishedProject {
  title: string;
  location: string;
  image: string;
  deliveryDate: string;
  numberOfHomes: number;
}

interface FinishedProjectCardProps {
  project: FinishedProject;
}

const FinishedProjectCard = ({ project }: FinishedProjectCardProps) => {
  return (
    <Card className="overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-48 object-cover"
        />
        <span 
          className="absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium z-20 bg-green-100 text-green-800"
        >
          Entregado
        </span>
      </div>
      <CardContent className="p-6 bg-white">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-sm text-gray-500 mb-4">{project.location}</p>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <p className="text-sm text-gray-500">Entregada en el</p>
            <p className="font-bold">{project.deliveryDate}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Número de unidades</p>
            <p className="font-bold">{project.numberOfHomes}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FinishedProjectCard;