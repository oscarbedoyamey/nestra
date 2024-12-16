import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";

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
            <p>1. Entregadas por las empresas promotoras directamente relacionadas con los gestores de Nestra.</p>
            <p>2. Experiencia sumada por los socios y empresas relacionadas con los gestores de Nestra.</p>
          </div>
        </div>
      </section>

      {/* Próximos Proyectos Section */}
      <section className="py-20">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Próximos proyectos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Residencial Los Álamos",
                location: "Madrid",
                image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                stats: {
                  rentabilidad: "8,00%",
                  plazo: "24 meses",
                  inversion: "750.000€"
                }
              },
              {
                title: "Torres del Valle",
                location: "Barcelona",
                image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                stats: {
                  rentabilidad: "7,50%",
                  plazo: "18 meses",
                  inversion: "500.000€"
                }
              },
              {
                title: "Jardines de Costa",
                location: "Valencia",
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
                stats: {
                  rentabilidad: "9,00%",
                  plazo: "30 meses",
                  inversion: "1.000.000€"
                }
              }
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{project.location}</p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-sm text-gray-500">Rentabilidad</p>
                      <p className="font-bold">{project.stats.rentabilidad}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Plazo</p>
                      <p className="font-bold">{project.stats.plazo}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Inversión</p>
                      <p className="font-bold">{project.stats.inversion}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section 
        id="como_funciona" 
        className="py-32 relative"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&q=80")' }}
      >
        <div className="absolute inset-0 bg-[#F3F4F5]/95" />
        <div className="container mx-auto px-8 relative z-10">
          <h2 className="text-3xl font-light text-center mb-16">Haz realidad tu piso en solo 6 pasos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-12">
            {[
              {
                title: "Qué vivienda quieres",
                description: "Nos dices qué zonas te gustarían para tu nueva vivienda y como la querrías. Te diremos el precio aproximado."
              },
              {
                title: "Agrupamos compradores",
                description: "Nestra busca y agrupa personas que coincidis en donde y que tipo de vivienda quereis."
              },
              {
                title: "Buscamos un proyecto",
                description: "Nestra busca y os presenta solares donde podríamos construir esas viviendas, así como posteriormente un proyecto. Te diremos el precio aún más aproximado."
              },
              {
                title: "Reserva y personaliza",
                description: "Una vez elegido el lugar y el proyecto llegará la hora de reservar la vivienda, que te dará derecho también a la personalización de tu vivienda. Conocerás el precio final."
              },
              {
                title: "Construimos",
                description: "Nestra se encarga de que ese proyecto se promueva con la máxima calidad y celeridad."
              },
              {
                title: "Disfruta de tú vivienda",
                description: "Una vez finalizada la construcción y la escritura de la vivienda ante notario solo quedará disfrutarla."
              }
            ].map((step, index) => (
              <div key={index} className="fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl font-light text-[#282D15] mb-6">{index + 1}</div>
                <h3 className="text-xl font-light mb-4">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-bold">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section 
        className="py-32 relative"
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
        className="py-32 relative"
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