
import React from "react";
import { Star, Flame, MessageSquare } from "lucide-react";

const Special = () => {
  return (
    <section id="que-lo-hace-especial" className="py-20 relative">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-handwritten mb-6 text-[#5A2E0C]">
            ¿Por qué usar <span className="text-[#D35400]">Fogón</span>?
          </h2>
          <p className="text-[#5A2E0C]/90 text-lg max-w-3xl mx-auto font-serif">
            Más que un simple juego de cartas, Fogón es una experiencia diseñada para fomentar conexiones genuinas en un mundo cada vez más desconectado.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="organic-border group relative overflow-hidden hover:shadow-paper transition-all duration-300">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-ember-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-2xl"></div>
            <div className="relative z-10">
              <Star className="h-8 w-8 text-[#D35400] mb-4" />
              <h3 className="text-xl font-handwritten mb-3 text-[#5A2E0C]">Preguntas Cuidadosamente Elaboradas</h3>
              <p className="text-[#5A2E0C]/90 leading-relaxed font-serif">
                Cada carta ha sido pensada para estimular reflexiones profundas, recuerdos significativos y revelaciones personales. Desde preguntas filosóficas hasta propuestas lúdicas, Fogón abarca la complejidad de la experiencia humana.
              </p>
            </div>
          </div>
          
          <div className="organic-border group relative overflow-hidden hover:shadow-paper transition-all duration-300">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-ember-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-2xl"></div>
            <div className="relative z-10">
              <Flame className="h-8 w-8 text-[#D35400] mb-4" />
              <h3 className="text-xl font-handwritten mb-3 text-[#5A2E0C]">Diseño Inspirado en la Calidez</h3>
              <p className="text-[#5A2E0C]/90 leading-relaxed font-serif">
                El diseño visual de Fogón evoca la atmósfera íntima de una reunión alrededor del fuego. Cada elemento gráfico está pensado para crear una sensación de calidez y apertura, invitando a compartir sin reservas.
              </p>
            </div>
          </div>
          
          <div className="organic-border group relative overflow-hidden hover:shadow-paper transition-all duration-300">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-ember-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-2xl"></div>
            <div className="relative z-10">
              <MessageSquare className="h-8 w-8 text-[#D35400] mb-4" />
              <h3 className="text-xl font-handwritten mb-3 text-[#5A2E0C]">Adaptable a Cualquier Grupo</h3>
              <p className="text-[#5A2E0C]/90 leading-relaxed font-serif">
                Ya sea entre viejos amigos o en un grupo de desconocidos, Fogón crea un espacio seguro para compartir. Sus diferentes niveles de profundidad lo hacen ideal para romper el hielo o para fortalecer lazos ya existentes.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-handwritten mb-6 text-[#5A2E0C]">
            <span className="text-[#D35400]">Testimonios</span>
          </h2>
          <div className="organic-border">
            <p className="text-[#D35400] text-lg font-medium mb-4 font-handwritten">Lo que dicen nuestros jugadores</p>
            <blockquote className="text-[#5A2E0C]/90 text-xl italic mb-4 font-serif">
              "Empezamos a jugar después de cenar, y sin darnos cuenta, amaneció. Las conversaciones que surgieron esa noche cambiaron nuestra amistad para siempre."
            </blockquote>
            <cite className="text-[#8B5E3C]/70 block font-serif">— María, 34 años</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Special;
