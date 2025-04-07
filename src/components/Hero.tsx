
import React from "react";
import { Flame } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-campfire-gradient">
      <div className="absolute inset-0 bg-ember-gradient opacity-30"></div>
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/ac06b5f0-7980-4f24-8778-e52b00ce2c78.png" 
              alt="Fogón - Fuego de campamento" 
              className="w-32 h-auto animate-ember-glow"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-handwritten mb-8 tracking-wide text-fogon-dark">
            Bienvenido al <span className="text-fogon-amber glow-text">fogón</span>
          </h1>
          <div className="card-border mb-12 max-w-2xl hover:ember-border transition-all duration-300">
            <p className="text-xl md:text-2xl text-fogon-dark font-handwritten leading-relaxed">
              Cada carta es una rama que puedes leer para ti mismo. Si decides compartir lo que has leído, coloca la rama en el fogón, si no devuelve la rama al montón. Puedes tomar otra rama y repetir el proceso si lo deseas.
            </p>
            <p className="text-xl md:text-2xl text-fogon-dark font-handwritten mt-4 leading-relaxed">
              ¡Que el fogón los ilumine y los guíe!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/juego"
              className="px-6 py-3 bg-fogon-amber hover:bg-fogon-ember transition-all duration-300 rounded-md text-fogon-cream font-medium text-lg font-serif hover:scale-105"
            >
              Vivir la Experiencia
            </Link>
            <a
              href="#producto"
              className="px-6 py-3 bg-transparent border border-fogon-dark text-fogon-dark hover:border-fogon-amber hover:text-fogon-amber transition-all duration-300 rounded-md font-medium text-lg font-serif"
            >
              Consíguelo Ahora
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-fogon-paper to-transparent"></div>
    </section>
  );
};

export default Hero;
