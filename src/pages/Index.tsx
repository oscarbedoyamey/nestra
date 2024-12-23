import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import ProjectsSection from "@/components/ProjectsSection";
import ProblemSection from "@/components/sections/ProblemSection";
import VideoSection from "@/components/sections/VideoSection";
import { Card } from "@/components/ui/card";
import { useState } from "react";

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
          <Card className="w-full h-full bg-[#F3F4F5] p-6 flex flex-col justify-between">
            <p className="text-sm text-gray-500">{backContent}</p>
            <span className="text-sm font-bold text-[#282D15]">Saber -</span>
          </Card>
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensaje enviado correctamente");
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section 
        className="min-h-[90vh] flex items-center justify-center bg-cover bg-center relative"
        style={{ backgroundImage: 'url("https://cdn.prod.website-files.com/6692e58c594a499f4044523c/66ad091740aaf14dce93e7ea_Vanilla%20Fayetteville_0306_Cam09_PS%20(2)_sm.jpg")' }}
      >
        <div className="absolute inset-0 bg-[#282D15]/60" />
        <div className="container mx-auto px-8 text-center relative z-10 text-[#F3F4F5]">
          <img 
            src="https://bmconfort.es/images/nestra_logo_white.png" 
            alt="Nestra" 
            className="w-[400px] max-w-full px-8 mx-auto mb-20"
          />
          <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
            Construimos la vivienda que estás buscando
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-12 tracking-tight">
            Juntamos personas como tú para construir el edificio con las viviendas que os encajan
          </h2>
          <div className="space-y-8 md:space-y-0">
            <h2 className="text-2xl font-light">
              Dinos dónde y cómo la quieres
            </h2>
            <Button size="lg" className="bg-[#F3F4F5] text-[#282D15] hover:bg-[#F3F4F5]/90 rounded-full font-bold">
              Crea tu vivienda
            </Button>
          </div>
        </div>
        {/* Video Section 
        <VideoSection />
        */}
        
        <div className="relative aspect-video max-w-4xl mx-auto mb-12 rounded-lg overflow-hidden shadow-xl">
          <iframe 
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/TU_VIDEO_ID" // Reemplaza TU_VIDEO_ID con el ID de tu video
            title="¿Cómo funciona Nestra?"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#F3F4F5]">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4 text-[#282D15]">+1000 viviendas</h2>
              <p className="text-xl text-[#282D15]">Entregadas <sup className="text-sm">1</sup></p>
            </div>
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4 text-[#282D15]">30 años</h2>
              <p className="text-xl text-[#282D15]">Experiencia <sup className="text-sm">2</sup></p>
            </div>
          </div>
          <div className="text-sm text-[#282D15]/70 max-w-4xl mx-auto space-y-2 text-center">
            <p className="text-xs">1. Entregadas por las empresas promotoras directamente relacionadas con los gestores de Nestra.</p>
            <p className="text-xs">2. Experiencia sumada por los socios y empresas relacionadas con los gestores de Nestra.</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection />

      {/* Problem Section */}
      <ProblemSection />

      {/* Como Funciona Section */}
      <section 
        id="como_funciona" 
        className="py-32 relative bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&q=80")' }}
      >
        <div className="absolute inset-0 bg-[#F3F4F5]/95" />
        <div className="container mx-auto px-8 relative z-10">
          <h2 className="text-3xl font-light text-center mb-16">Haz realidad tu piso en solo 4 pasos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-5xl mx-auto mb-16">
            <StepCard
              number={1}
              title="Dinos que necesitas"
              description="Nos dices qué zonas te gustarían para tu nueva vivienda y como la querrías."
              backContent="Necesitaremos que cliques en <a href=''>'Crear tu vivienda'</a> para iniciar un formulario muy sencillo que nos ayudará a saber características de solares buscar, y que proyectos diseñar."
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
            <Button size="lg" className="bg-[#282D15] hover:bg-[#282D15]/90 text-[rgb(255,255,255)] rounded-full text-sm font-bold px-8">
              Crea tu vivienda
            </Button>
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section 
        className="py-20 relative bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&q=80")' }}
      >
        <div className="absolute inset-0 bg-[#282D15]/90" />
        <div className="container mx-auto px-8 text-center max-w-4xl relative z-10">
          <p className="text-xl font-light mb-16 text-[#F3F4F5]">
            En Nestra, creemos que la vivienda no debe ser un lujo, sino una necesidad al alcance de todos. Por eso, trabajamos para aliviar esta crisis, ofreciendo un modelo escalable y eficiente que combina innovación y experiencia.
          </p>
          <h1 className="text-4xl font-light mb-8 text-[#F3F4F5]">
            Construimos la vivienda que estás buscando
          </h1>
          <Button size="lg" className="bg-[#F3F4F5] text-[#282D15] hover:bg-[#F3F4F5]/90 rounded-full font-bold">
          Crea tu vivienda
          </Button>
        </div>
      </section>

      {/* Contact Form Section */}
      <section 
        id="contacto" 
        className="py-20 relative bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&q=80")' }}
      >
        <div className="absolute inset-0 bg-[#F3F4F5]/95" />
        <div className="container mx-auto px-8 max-w-2xl relative z-10">
          <h2 className="text-3xl font-light text-center mb-2">¿Tienes dudas?</h2>
          <p className="text-center text-[#282D15]/70 mb-12">
            Estaremos encantados de atenderte
          </p>
          
          <form onSubmit={handleContactSubmit} className="space-y-8">
            <div>
              <label className="block text-sm mb-2">Nombre</label>
              <Input required className="rounded-[10px] border-[#282D15]" />
            </div>
            <div>
              <label className="block text-sm mb-2">Teléfono</label>
              <Input type="tel" required className="rounded-[10px] border-[#282D15]" />
            </div>
            <div>
              <label className="block text-sm mb-2">Email</label>
              <Input type="email" required className="rounded-[10px] border-[#282D15]" />
            </div>
            <div>
              <label className="block text-sm mb-2">Pregunta o dudas</label>
              <Textarea required className="min-h-[150px] rounded-[10px] border-[#282D15]" />
            </div>
            <Button type="submit" className="w-full bg-[#282D15] hover:bg-[#282D15]/90 text-[#F3F4F5] rounded-full font-bold">
              Enviar mensaje
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Index;
