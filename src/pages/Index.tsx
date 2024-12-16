import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import ProjectsSection from "@/components/ProjectsSection";
import ProblemSection from "@/components/sections/ProblemSection";

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
            Agrupamos a personas como tú para construir viviendas que os encajen
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
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#F3F4F5]">
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
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&q=80")' }}
      >
        <div className="absolute inset-0 bg-[#FFFFFF]/95" />
        <div className="container mx-auto px-8 relative z-10">
          <h2 className="text-3xl font-light text-center mb-16">Haz realidad tu piso en solo 4 pasos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-12">
            {[
              {
                title: "Dinos que necesitas",
                description: "Nos dices qué zonas te gustarían para tu nueva vivienda y como la querrías."
              },
              {
                title: "Creamos proyectos",
                description: "Unimos toda la demanda que busca vivienda de obra nueva en el mismo lugar o próximos, y creamos proyectos que os puedan encajar."
              },
              {
                title: "Presentamos proyectos",
                description: "Iremos presentamos proyectos. Cuando veas un edificio y vivienda que te encajen podrás reservarlo de una forma rápida y simple."
              },
              {
                title: "Construimos tu vivienda",
                description: "Firmarás contrato compra-venta, personalizarás tu vivienda, y construiremos el edificio con tu vivienda. Informandote de todo momento del estado, y los siguientes pasos y tiempos."
              },
            ].map((step, index) => (
              <div key={index} className="fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl font-light text-[#282D15] mb-6">{index + 1}</div>
                <h3 className="text-xl font-light mb-4">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-bold">{step.description}</p>
              </div>
            ))}
          </div>
          <Button size="lg" className="bg-[#F3F4F5] text-[#282D15] hover:bg-[#F3F4F5]/90 rounded-full font-bold">
            Crea tu vivienda
          </Button>
        </div>
      </section>

      {/* Context Section */}
      <section 
        className="py-32 relative bg-cover bg-center"
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
            Empezar
          </Button>
        </div>
      </section>

      {/* Contact Form Section */}
      <section 
        id="contacto" 
        className="py-32 relative bg-cover bg-center"
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
