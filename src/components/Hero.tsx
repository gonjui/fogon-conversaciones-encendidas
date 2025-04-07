
import React, { useState, useEffect } from "react";
import { Flame, Shuffle } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useSound } from "@/hooks/useSound";
import { Button } from "./ui/button";
import Draggable from "react-draggable";
import { cards } from "@/data/cards";

const Hero = () => {
  const [displayCards, setDisplayCards] = useState<Array<{ id: number, text: string, flipped: boolean, position: { x: number, y: number } }>>([]);
  const [isShuffling, setIsShuffling] = useState(false);
  const { play: playShuffleSound } = useSound("/sounds/card-flip.mp3");
  
  // Initialize cards
  useEffect(() => {
    initializeCards();
  }, []);
  
  const initializeCards = () => {
    // Select 5 random cards for display
    const randomCards = [...cards]
      .sort(() => 0.5 - Math.random())
      .slice(0, 5)
      .map((card) => ({
        id: card.id,
        text: card.text,
        flipped: false,
        position: {
          x: Math.random() * 80 - 40,
          y: Math.random() * 60 - 30
        }
      }));
    
    setDisplayCards(randomCards);
  };
  
  const handleFlipCard = (id: number) => {
    playShuffleSound();
    setDisplayCards(cards => 
      cards.map(card => 
        card.id === id 
          ? { ...card, flipped: !card.flipped } 
          : card
      )
    );
  };
  
  const handleShuffle = () => {
    if (isShuffling) return;
    
    setIsShuffling(true);
    playShuffleSound();
    
    // Animate existing cards out
    setTimeout(() => {
      // Generate new card positions and reset flip states
      setDisplayCards(cards => 
        cards.map(card => ({
          ...card,
          flipped: false,
          position: {
            x: Math.random() * 80 - 40,
            y: Math.random() * 60 - 30
          }
        }))
      );
      
      setTimeout(() => {
        setIsShuffling(false);
      }, 500);
    }, 300);
  };
  
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
          
          {/* Interactive Cards Area */}
          <div className="relative w-full h-64 my-8">
            <AnimatePresence>
              {displayCards.map((card, index) => (
                <Draggable key={`${card.id}-${index}`} bounds="parent" defaultPosition={{x: card.position.x, y: card.position.y}}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: card.position.x * 0.2 }}
                    animate={{ opacity: 1, scale: 1, rotate: card.position.x * 0.2 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={`absolute transform cursor-grab active:cursor-grabbing card-shadow ${isShuffling ? 'pointer-events-none' : ''}`}
                    style={{ zIndex: card.flipped ? 10 : 5 - index, transformOrigin: "center" }}
                  >
                    <div 
                      className="w-40 h-56 rounded-xl border-2 paper-texture transform transition-transform duration-500 preserve-3d"
                      style={{ transform: card.flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
                      onClick={() => handleFlipCard(card.id)}
                    >
                      {/* Card Front */}
                      <div className="absolute w-full h-full rounded-xl bg-gradient-to-br from-fogon-paper to-fogon-cream border-fogon-dark backface-hidden flex items-center justify-center p-4">
                        <img src="/lovable-uploads/ac06b5f0-7980-4f24-8778-e52b00ce2c78.png" alt="Fogón card back" className="w-16 h-16 opacity-60" />
                        <div className="absolute bottom-4 left-0 right-0 text-center">
                          <p className="text-fogon-dark/70 font-handwritten text-sm">Fogón</p>
                        </div>
                      </div>
                      
                      {/* Card Back */}
                      <div className="absolute w-full h-full rounded-xl bg-gradient-to-br from-white to-fogon-cream backface-hidden rotateY-180 p-3 flex items-center justify-center">
                        <p className="text-sm font-serif text-fogon-dark leading-tight">{card.text}</p>
                      </div>
                    </div>
                  </motion.div>
                </Draggable>
              ))}
            </AnimatePresence>
          </div>
          
          <Button
            onClick={handleShuffle}
            disabled={isShuffling}
            className="mb-8 bg-transparent border-2 border-fogon-dark/40 text-fogon-dark hover:border-fogon-dark hover:bg-fogon-dark/5 transition-all duration-300 group"
          >
            <Shuffle className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform duration-500" />
            Barajar Cartas
          </Button>
          
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
              className="px-6 py-3 bg-fogon-amber hover:bg-fogon-ember transition-all duration-300 rounded-md text-fogon-cream font-medium text-lg font-serif hover:scale-105 shadow-amber"
            >
              Vivir la Experiencia
            </Link>
            <a
              href="#producto"
              className="px-6 py-3 bg-transparent border-2 border-fogon-dark/70 text-fogon-dark hover:border-moss-green hover:text-moss-green transition-all duration-300 rounded-md font-medium text-lg font-serif"
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
