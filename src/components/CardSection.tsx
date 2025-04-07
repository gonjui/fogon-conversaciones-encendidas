
import React from "react";
import { motion } from "framer-motion";
import { cards } from "@/data/cards";

const CardSection = () => {
  // Just take a few cards to display
  const displayCards = cards.slice(0, 5);
  
  return (
    <section className="py-16 bg-gradient-to-br from-fogon-cream to-ochre-light/20">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-handwritten mb-4 text-fogon-dark"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Vivir la <span className="text-fogon-amber glow-text">experiencia</span>
          </motion.h2>
          <motion.p 
            className="text-lg font-serif text-fogon-dark/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Sumérgete en conversaciones significativas con nuestras cartas, diseñadas para inspirar
            conexiones profundas y momentos inolvidables alrededor del fogón.
          </motion.p>
        </div>
        
        <div className="relative h-80 max-w-4xl mx-auto flex justify-center items-center">
          {displayCards.map((card, index) => (
            <div 
              key={card.id}
              className="absolute paper-texture"
              style={{
                transform: `rotate(${(index * 7) - 15}deg) translate(${(index - 2) * 30}px, ${Math.sin(index) * 10}px)`,
                zIndex: index,
              }}
            >
              <div className="w-40 h-56 rounded-xl bg-gradient-to-br from-fogon-paper to-fogon-cream border-2 border-fogon-dark/30 card-shadow flex items-center justify-center p-4">
                <div className="relative w-full h-full flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/ac06b5f0-7980-4f24-8778-e52b00ce2c78.png" 
                    alt="Fogón card" 
                    className="w-16 h-16 opacity-60" 
                  />
                  <div className="absolute bottom-4 left-0 right-0 text-center">
                    <p className="text-fogon-dark/70 font-handwritten text-sm">Fogón</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;
