
import React from "react";
import { Star, Package, PlusCircle, MinusCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Product = () => {
  return (
    <section id="producto" className="py-20 bg-fogon-paper/80 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-handwritten mb-6 text-fogon-dark">
              El Mazo de <span className="text-fogon-amber">Fogón</span>
            <p className="text-fogon-dark/90 text-lg mb-6 leading-relaxed font-serif">
              Fogón es un mazo de cartas diseñado para inspirar conversaciones profundas. Ideal para cenas, reuniones familiares, encuentros con amigos o dinámicas de equipo. Cada carta es un disparador que invita a compartir historias, pensamientos y emociones auténticas.
            </p>
            
            <div className="space-y-4 mb-8 font-serif">
              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-fogon-amber/20 flex items-center justify-center mt-1 mr-3">
                  <div className="w-2 h-2 rounded-full bg-fogon-amber"></div>
                </div>
                <p className="text-fogon-dark/90">98 ramitas. 1 Fogón</p>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-fogon-amber/20 flex items-center justify-center mt-1 mr-3">
                  <div className="w-2 h-2 rounded-full bg-fogon-amber"></div>
                </div>
                <p className="text-fogon-dark/90">Diseño con amor</p>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-fogon-amber/20 flex items-center justify-center mt-1 mr-3">
                  <div className="w-2 h-2 rounded-full bg-fogon-amber"></div>
                </div>
                <p className="text-fogon-dark/90">Caja resistente con diseño original</p>
              </div>

            
            <a
              href="https://trukigames.store/producto/fogon/" 
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-6 py-4 bg-fogon-amber hover:bg-fogon-ember transition-colors rounded-md text-fogon-cream font-medium text-lg font-serif mb-4"
            >
              Conseguí tu Fogón ahora
            </a>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <img 
                src="/lovable-uploads/5aa272fe-bc27-417a-9039-1ff660682313.png" 
                alt="Caja de Fogón - Mazo de cartas para conversaciones profundas" 
                className="w-64 h-auto rounded-md shadow-lg"
              />
              <div className="absolute -bottom-5 -right-5 w-40 h-40 bg-ember-gradient opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>

        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-handwritten mb-10 text-center text-fogon-dark">
            Preguntas <span className="text-fogon-amber">frecuentes</span>
          </h2>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b border-fogon-amber/20">
              <AccordionTrigger className="text-fogon-dark font-serif hover:text-fogon-amber transition-colors py-4">
                ¿Para qué edades es recomendable Fogón?
              </AccordionTrigger>
              <AccordionContent className="text-fogon-dark/90 font-serif pb-4">
                Fogón está diseñado principalmente para adultos y jóvenes mayores de 16 años, ya que algunas preguntas exploran temas profundos o complejos. Sin embargo, hay cartas que pueden ser apropiadas para todas las edades en un contexto familiar.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border-b border-fogon-amber/20">
              <AccordionTrigger className="text-fogon-dark font-serif hover:text-fogon-amber transition-colors py-4">
                ¿Cuántas personas pueden jugar?
              </AccordionTrigger>
              <AccordionContent className="text-fogon-dark/90 font-serif pb-4">
                "Recomendamos grupos de 3 a 10 personas para una experiencia compartida y enriquecedora, pero Fogón es flexible y puede adaptarse a cualquier tamaño de grupo. También puede usarse en soledad, como una herramienta de reflexión personal. Lo más importante es crear un ambiente íntimo, donde haya espacio para el silencio, la escucha y la palabra sincera. 
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border-b border-fogon-amber/20">
              <AccordionTrigger className="text-fogon-dark font-serif hover:text-fogon-amber transition-colors py-4">
                ¿Cuánto tiempo dura una sesión de Fogón?
              </AccordionTrigger>
              <AccordionContent className="text-fogon-dark/90 font-serif pb-4">
                No hay un tiempo establecido. Una sesión puede durar desde 30 minutos hasta varias horas, dependiendo del grupo y la profundidad de las conversaciones. Lo mejor es dejarse llevar por el ritmo natural del encuentro.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border-b border-fogon-amber/20">
              <AccordionTrigger className="text-fogon-dark font-serif hover:text-fogon-amber transition-colors py-4">
                ¿Se puede usar Fogón en entornos profesionales?
              </AccordionTrigger>
              <AccordionContent className="text-fogon-dark/90 font-serif pb-4">
                ¡Absolutamente! Fogón es una excelente herramienta para dinámicas de equipo, talleres de liderazgo o jornadas de integración. Ayuda a crear conexiones más profundas entre compañeros de trabajo y fomenta un ambiente de confianza y apertura.
              </AccordionContent>
            </AccordionItem>
        </div>
      </div>
    </section>
  );
};

export default Product;
