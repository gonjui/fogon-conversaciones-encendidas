
import React from "react";
import { Star, Flame, MessageSquare } from "lucide-react";

const Special = () => {
  return (
    <section id="que-lo-hace-especial" className="py-20 relative">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 glow-text">
            Lo que Hace <span className="text-fogon-amber">Especial</span> a Fogón
          </h2>
          <p className="text-fogon-cream/80 text-lg max-w-3xl mx-auto">
            Más que un simple juego de cartas, Fogón es una experiencia diseñada para fomentar conexiones genuinas en un mundo cada vez más desconectado.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="relative bg-gradient-to-br from-fogon-dark to-fogon-dark/80 p-6 rounded-lg border border-fogon-red/20 group hover:border-fogon-red/40 transition-all overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-ember-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-2xl"></div>
            <div className="relative z-10">
              <Star className="h-8 w-8 text-fogon-amber mb-4" />
              <h3 className="text-xl font-bold mb-3 text-fogon-cream">Preguntas Cuidadosamente Elaboradas</h3>
              <p className="text-fogon-cream/80 leading-relaxed">
                Cada carta ha sido pensada para estimular reflexiones profundas, recuerdos significativos y revelaciones personales. Desde preguntas filosóficas hasta propuestas lúdicas, Fogón abarca la complejidad de la experiencia humana.
              </p>
            </div>
          </div>
          
          <div className="relative bg-gradient-to-br from-fogon-dark to-fogon-dark/80 p-6 rounded-lg border border-fogon-red/20 group hover:border-fogon-red/40 transition-all overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-ember-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-2xl"></div>
            <div className="relative z-10">
              <Flame className="h-8 w-8 text-fogon-amber mb-4" />
              <h3 className="text-xl font-bold mb-3 text-fogon-cream">Diseño Inspirado en la Calidez</h3>
              <p className="text-fogon-cream/80 leading-relaxed">
                El diseño visual de Fogón evoca la atmósfera íntima de una reunión alrededor del fuego. Cada elemento gráfico está pensado para crear una sensación de calidez y apertura, invitando a compartir sin reservas.
              </p>
            </div>
          </div>
          
          <div className="relative bg-gradient-to-br from-fogon-dark to-fogon-dark/80 p-6 rounded-lg border border-fogon-red/20 group hover:border-fogon-red/40 transition-all overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-ember-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-2xl"></div>
            <div className="relative z-10">
              <MessageSquare className="h-8 w-8 text-fogon-amber mb-4" />
              <h3 className="text-xl font-bold mb-3 text-fogon-cream">Adaptable a Cualquier Grupo</h3>
              <p className="text-fogon-cream/80 leading-relaxed">
                Ya sea entre viejos amigos o en un grupo de desconocidos, Fogón crea un espacio seguro para compartir. Sus diferentes niveles de profundidad lo hacen ideal para romper el hielo o para fortalecer lazos ya existentes.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 mx-auto max-w-3xl text-center">
          <div className="p-8 bg-fogon-dark/30 rounded-lg border border-fogon-amber/10">
            <p className="text-fogon-amber text-lg font-medium mb-4">Lo que dicen nuestros jugadores</p>
            <blockquote className="text-fogon-cream/90 text-xl italic mb-4">
              "Empezamos a jugar después de cenar, y sin darnos cuenta, amaneció. Las conversaciones que surgieron esa noche cambiaron nuestra amistad para siempre."
            </blockquote>
            <cite className="text-fogon-cream/70 block">— María, 34 años</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Special;
