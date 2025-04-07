
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Shuffle } from "lucide-react";
import { Button } from "./ui/button";
import InteractiveCard from "./InteractiveCard";
import { useSound } from "@/hooks/useSound";
import { cards } from "@/data/cards";

const CardSection = () => {
  const [displayCards, setDisplayCards] = useState(() => 
    cards.slice(0, 3).map((card, index) => ({
      ...card,
      rotation: (Math.random() * 20 - 10),
      position: {
        x: index * 60 - 60,
        y: 0
      }
    }))
  );
  const [isShuffling, setIsShuffling] = useState(false);
  const { play: playShuffleSound } = useSound("/sounds/card-flip.mp3");

  const handleShuffle = () => {
    if (isShuffling) return;
    
    setIsShuffling(true);
    playShuffleSound();
    
    // Get new random cards
    const newCards = [...cards]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map((card, index) => ({
        ...card,
        rotation: (Math.random() * 20 - 10),
        position: {
          x: index * 60 - 60,
          y: 0
        }
      }));
    
    setTimeout(() => {
      setDisplayCards(newCards);
      setIsShuffling(false);
    }, 500);
  };

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
            Descubre nuestras <span className="text-ochre glow-text">cartas</span>
          </motion.h2>
          <motion.p 
            className="text-lg font-serif text-fogon-dark/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Nuestras cartas están diseñadas para inspirar conversaciones profundas y significativas. 
            Cada una contiene una pregunta o reflexión que te invita a compartir tus pensamientos.
          </motion.p>
        </div>
        
        <div className="relative h-80 max-w-xl mx-auto mb-8 bg-[url('/textures/paper-texture.png')] bg-opacity-50 rounded-xl p-4 border-2 border-ochre/30 shadow-paper">
          {displayCards.map((card, index) => (
            <InteractiveCard
              key={`${card.id}-${index}`}
              id={card.id}
              initialRotation={card.rotation}
              initialPosition={card.position}
              backContent={
                <p className="text-sm font-serif text-fogon-dark leading-tight">{card.text}</p>
              }
            />
          ))}
        </div>
        
        <div className="text-center">
          <Button
            onClick={handleShuffle}
            disabled={isShuffling}
            className="bg-ochre hover:bg-ochre-light text-fogon-dark font-serif transition-all duration-300 shadow-amber group"
          >
            <Shuffle className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform duration-500" />
            Mostrar otras cartas
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
