import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  const [activeCategory, setActiveCategory] = useState("general");

  const categories = {
    general: {
      title: "Preguntas generales",
      questions: [
        {
          q: "¿Qué es Nestra?",
          a: "Nestra es una plataforma que agrupa a personas que buscan vivienda para construir proyectos que se ajusten a sus necesidades."
        },
        {
          q: "¿Cómo funciona el proceso?",
          a: "El proceso es simple: nos dices qué tipo de vivienda buscas, creamos proyectos basados en la demanda, te presentamos opciones y construimos tu vivienda ideal."
        }
      ]
    },
    proceso: {
      title: "Proceso de compra",
      questions: [
        {
          q: "¿Cuánto tiempo tarda el proceso?",
          a: "El tiempo varía según el proyecto, pero normalmente entre 24-36 meses desde la reserva hasta la entrega."
        },
        {
          q: "¿Qué documentación necesito?",
          a: "Principalmente necesitarás DNI, justificantes de ingresos y una entrada inicial para la reserva."
        }
      ]
    },
    legal: {
      title: "Aspectos legales",
      questions: [
        {
          q: "¿Qué garantías tengo?",
          a: "Todas las garantías que establece la ley, incluyendo seguros de cantidades anticipadas y garantías de construcción."
        },
        {
          q: "¿Cómo se formalizan los contratos?",
          a: "Mediante contrato de compraventa ante notario, con todas las garantías legales."
        }
      ]
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Preguntas frecuentes</h1>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(categories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === key
                  ? "bg-[#282D15] text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {categories[activeCategory as keyof typeof categories].questions.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQs;