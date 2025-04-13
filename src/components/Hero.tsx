
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-starry-night-gradient">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/3eeeb2b6-3a62-4ce8-a88e-550e79113c9b.png')] bg-cover bg-center opacity-60 mix-blend-soft-light"></div>
      <div className="absolute inset-0 bg-ember-gradient opacity-30 parallax-bg"></div>
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <motion.div 
            className="mb-8"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="/lovable-uploads/e7e96892-e555-48b4-adfd-0b5274995dd8.png" 
              alt="Fogón - Mazo de cartas para conversación significativa" 
              className="w-48 h-auto animate-ember-glow"
            />
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-5xl font-handwritten mb-8 tracking-wide text-fogon-cream glow-text"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Conoce Fogón
          </motion.h1>
          
          <div className="organic-border mb-12 max-w-2xl hover:ember-border transition-all duration-300 bg-[#F5EDE2]/80 backdrop-blur-sm">
            <p className="text-xl md:text-2xl text-fogon-dark font-handwritten leading-relaxed">
              Cada carta es una rama que puedes leer para ti mismo. Si decides compartir lo que has leído, coloca la rama en el fogón, si no devuelve la rama al montón. Puedes tomar otra rama y repetir el proceso si lo deseas.
            </p>
            <p className="text-xl md:text-2xl text-fogon-dark font-handwritten mt-4 leading-relaxed">
              ¡Que el fogón los ilumine y los guíe!
            </p>
          </div>
          
          <div>
            <a
              href="https://trukigames.store/producto/fogon/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#8B5E3C] hover:bg-[#5A2E0C] transition-all duration-300 rounded-[28px] text-[#F5EDE2] font-medium text-lg font-serif hover:scale-105 shadow-amber"
            >
              Conseguí tu Fogón ahora
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-[#F5EDE2] to-transparent"></div>
    </section>
  );
};

export default Hero;
