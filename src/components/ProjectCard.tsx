import { Card, CardContent } from "@/components/ui/card";
import ProjectCountdown from "./ProjectCountdown";

export type ProjectStatus = "Estudio" | "Negociación solar";

export interface Project {
  title: string;
  location: string;
  image: string;
  status: ProjectStatus;
  expectedDelivery: string;
  priceFrom: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const getStatusColor = (status: ProjectStatus) => {
    switch (status) {
      case "Estudio":
        return "bg-blue-100 text-blue-800";
      case "Negociación solar":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-48 object-cover"
        />
        <span 
          className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}
        >
          {project.status}
        </span>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-sm text-gray-500 mb-4">{project.location}</p>
        {project.status === "Estudio" && (
          <div className="mb-4">
            <ProjectCountdown />
          </div>
        )}
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <p className="text-sm text-gray-500">Entrega esperada</p>
            <p className="font-bold">{project.expectedDelivery}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Precio desde</p>
            <p className="font-bold">{project.priceFrom}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;