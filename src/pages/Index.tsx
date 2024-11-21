import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Index = () => {
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensaje enviado correctamente");
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-terra-50 to-terra-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Construimos la vivienda que estás buscando
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-8">
            Desarrollamos promociones de obra nueva que encajen con tus necesidades
          </h2>
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold">
              Dinos dónde y cómo la quieres
            </h2>
            <Button size="lg" className="bg-terra-600 hover:bg-terra-700">
              Crea tu vivienda
            </Button>
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section id="como_funciona" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              {
                title: "Qué vivienda quieres",
                description: "Danos la información de que zonas te gustaría que construyeramos una vivienda para tí, y como la querrías, sin compromiso."
              },
              {
                title: "Agrupamos compradores",
                description: "Nestra busca y agrupa personas que coinciden en donde y que tipo de vivienda quieren."
              },
              {
                title: "Buscamos un proyecto",
                description: "Nestra busca y os presenta solares donde podríamos construir esas viviendas, así como posteriormente un proyecto de las mismas."
              },
              {
                title: "Reserva y personaliza",
                description: "Una vez elegido el lugar y el proyecto llegará la hora de reservar la vivienda, que te dará derecho también a una personalización única de tu vivienda."
              },
              {
                title: "Construimos",
                description: "Nestra se encarga de que ese proyecto se promueva, y acabe siendo una realidad."
              },
              {
                title: "Disfruta de tú vivienda",
                description: "Una vez finalizada la construcción se finalizará el proceso de compra con la escritura de la vivienda ante notario."
              }
            ].map((step, index) => (
              <div key={index} className="text-center p-6 bg-terra-50 rounded-lg">
                <div className="text-3xl font-bold text-terra-600 mb-4">{index + 1}</div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section className="py-20 bg-terra-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            En Nestra, creemos que la vivienda no debe ser un lujo, sino una necesidad al alcance de todos. Por eso, trabajamos para aliviar esta crisis, ofreciendo un modelo escalable y eficiente que combina innovación y experiencia.
          </p>
          <h1 className="text-4xl font-bold mb-8">
            Construimos la vivienda que estás buscando
          </h1>
          <Button size="lg" className="bg-terra-600 hover:bg-terra-700">
            Empezar
          </Button>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contacto" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-2">¿Tienes dudas?</h2>
          <p className="text-center text-gray-600 mb-8">
            Estaremos encantados de atenderte
          </p>
          
          <form onSubmit={handleContactSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Nombre</label>
              <Input required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Teléfono</label>
              <Input type="tel" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input type="email" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Pregunta o dudas</label>
              <Textarea required className="min-h-[150px]" />
            </div>
            <Button type="submit" className="w-full bg-terra-600 hover:bg-terra-700">
              Enviar mensaje
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Index;