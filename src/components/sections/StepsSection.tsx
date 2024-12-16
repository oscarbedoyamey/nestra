import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  backContent: string;
}

const StepCard = ({ number, title, description, backContent }: StepCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative w-full h-[300px] perspective-1000 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="text-4xl font-light text-[#282D15] mb-6">{number}</div>
          <h3 className="text-xl font-light mb-4">{title}</h3>
          <p className="text-sm text-gray-500 leading-relaxed font-bold mb-4">{description}</p>
          <span className="text-sm font-bold text-[#282D15]">Saber +</span>
        </div>
        
        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <Card className="w-full h-full bg-[#F3F4F5] p-6">
            <div className="flex flex-col h-full">
              <p className="text-sm text-gray-500 flex-grow">{backContent}</p>
              <span className="text-sm font-bold text-[#282D15]">Saber -</span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

const StepsSection = () => {
  return (
    <section 
      id="como_funciona" 
      className="py-32 bg-[#FFFFFF]"
    >
      <div className="container mx-auto px-8 relative z-10">
        <h2 className="text-3xl font-light text-center mb-16">Haz realidad tu piso en solo 4 pasos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-5xl mx-auto mb-16">
          <StepCard
            number={1}
            title="Dinos que necesitas"
            description="Nos dices qué zonas te gustarían para tu nueva vivienda y como la querrías."
            backContent="Necesitaremos que cliques en 'Crear tu vivienda' para iniciar un formulario muy sencillo que nos ayudará a saber características de solares buscar, y que proyectos diseñar."
          />
          <StepCard
            number={2}
            title="Diseñamos proyectos"
            description="Encontramos solares y diseñamos proyectos que te puedan encajar."
            backContent="Unimos toda la demanda que busca vivienda de obra nueva en lugares próximos, y diseñamos proyectos que os puedan encajar según el formulario que habeis rellenado."
          />
          <StepCard
            number={3}
            title="Presentamos proyectos"
            description="Elije y reserva tu vivienda entre los proyectos que te iremos presentando."
            backContent="Iremos presentamos proyectos. Cuando veas un edificio y vivienda que te encajen podrás reservarlo de una forma rápida y simple. Siempre tendrás a mano toda la información y documentación necesaria."
          />
          <StepCard
            number={4}
            title="Construimos"
            description="Formaliza la compra, personaliza tu vivienda, y pasaremos a construir el edificio."
            backContent="Una vez reservada tu vivienda, y tengamos toda la documentación y trámites necesarios (licencia de obras, prestamo bancario para construir, etc.), formarlizaremos la compra via contrato de compra-venta, e iniciaremos la construcción del edificio."
          />
        </div>
        <div className="text-center">
          <Button size="lg" className="bg-[#282D15] hover:bg-[#282D15]/90 text-[#F3F4F5] rounded-full text-sm font-bold px-8">
            Crea tu vivienda
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;