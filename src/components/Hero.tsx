
import React from "react";
import { Flame } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-campfire-gradient">
      <div className="absolute inset-0 bg-ember-gradient opacity-60 animate-ember-glow"></div>
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="mb-6">
            <Flame className="h-16 w-16 text-fogon-amber animate-ember-glow" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text tracking-tight">
            Conversaciones que <span className="text-fogon-amber">Encienden</span> el Alma
          </h1>
          <p className="text-xl md:text-2xl text-fogon-cream/90 mb-8 leading-relaxed">
            Bienvenido al calor del <span className="text-fogon-amber font-semibold">Fogón</span>, donde las palabras danzan como llamas, 
            revelando historias y conexiones que trascienden lo ordinario.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#producto"
              className="px-6 py-3 bg-fogon-amber hover:bg-fogon-ember transition-colors rounded-md text-fogon-dark font-medium text-lg ember-border"
            >
              Consíguelo Ahora
            </a>
            <a
              href="#como-jugar"
              className="px-6 py-3 bg-transparent border border-fogon-amber hover:border-fogon-ember text-fogon-cream hover:text-fogon-amber transition-colors rounded-md font-medium text-lg"
            >
              Descubre Cómo Jugar
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-fogon-dark to-transparent"></div>
    </section>
  );
};

export default Hero;
