
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-campfire-gradient">
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
              src="/lovable-uploads/ac06b5f0-7980-4f24-8778-e52b00ce2c78.png" 
              alt="Fogón - Fuego de campamento" 
              className="w-32 h-auto animate-ember-glow"
            />
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-5xl font-handwritten mb-8 tracking-wide text-fogon-dark"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Bienvenido al <span className="text-fogon-amber glow-text">fogón</span>
          </motion.h1>
          
          <div className="organic-border mb-12 max-w-2xl hover:ember-border transition-all duration-300">
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
              className="px-6 py-3 bg-[#D35400] hover:bg-[#5A2E0C] transition-all duration-300 rounded-[28px] text-[#F5EDE2] font-medium text-lg font-serif hover:scale-105 shadow-amber"
            >
              Vivir la Experiencia
            </Link>
            <a
              href="#producto"
              className="px-6 py-3 bg-transparent border-2 border-[#8B5E3C]/70 text-[#8B5E3C] hover:border-[#2E5339] hover:text-[#2E5339] transition-all duration-300 rounded-[28px] font-medium text-lg font-serif"
            >
              Consíguelo Ahora
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-[#F5EDE2] to-transparent"></div>
    </section>
  );
};

export default Hero;
