
import React, { useState } from "react";
import { Card } from "@/data/cards";
import { getRandomCard } from "@/utils/cardUtils";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, RotateCcw, X } from "lucide-react";
import { cards } from "@/data/cards";
import { Button } from "./ui/button";

interface CardDeckProps {
  onCardDrawn: (card: string) => void;
  activeCard: string | null;
  onDiscard: () => void;
}

const CardDeck: React.FC<CardDeckProps> = ({ onCardDrawn, activeCard, onDiscard }) => {
  const [isShuffling, setIsShuffling] = useState(false);
  const [deckPos, setDeckPos] = useState({ x: 0, y: 0 });

  const handleDrawCard = () => {
    if (activeCard || isShuffling) return;
    
    setIsShuffling(true);
    
    // Shuffle effect
    const shufflePositions = [
      { x: -5, y: 2 },
      { x: 5, y: -3 },
      { x: -3, y: -2 },
      { x: 4, y: 3 },
      { x: 0, y: 0 },
    ];
    
    let count = 0;
    const interval = setInterval(() => {
      setDeckPos(shufflePositions[count % shufflePositions.length]);
      count++;
      if (count >= 10) {
        clearInterval(interval);
        setIsShuffling(false);
        setDeckPos({ x: 0, y: 0 });
        const card = getRandomCard();
        onCardDrawn(card);
      }
    }, 100);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full h-80 flex items-center justify-center">
        {/* Deck of cards */}
        <motion.div
          animate={{ 
            x: deckPos.x, 
            y: deckPos.y,
            rotateZ: deckPos.x * 0.5
          }}
          onClick={handleDrawCard}
          className={`relative h-64 w-48 rounded-xl shadow-lg cursor-pointer transform transition-transform duration-300 ${
            isShuffling ? "" : "hover:scale-105"
          }`}
        >
          {/* Multiple card backs to create depth */}
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className="absolute top-0 left-0 h-64 w-48 rounded-xl bg-gradient-to-br from-fogon-paper to-fogon-cream border-2 border-fogon-dark ember-border"
              style={{ 
                transform: `translateY(${i * 0.5}px) translateX(${i * 0.5}px)`,
                zIndex: 5 - i
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <img src="/lovable-uploads/ac06b5f0-7980-4f24-8778-e52b00ce2c78.png" alt="Fogón card back" className="w-20 h-20 opacity-60" />
              </div>
              <div className="absolute inset-x-0 bottom-4 text-center">
                <p className="text-fogon-dark/70 font-handwritten text-sm">Fogón</p>
              </div>
            </div>
          ))}
          
          {/* Card deck label */}
          <div className="absolute -bottom-10 left-0 right-0 text-center">
            <p className="text-fogon-dark/80 font-serif italic">
              {isShuffling ? "Mezclando..." : "Toca para tomar una carta"}
            </p>
          </div>
        </motion.div>
        
        {/* Drawn card with flip animation */}
        <AnimatePresence>
          {activeCard && (
            <motion.div
              initial={{ rotateY: 180, opacity: 0, scale: 0.8, x: 0 }}
              animate={{ rotateY: 0, opacity: 1, scale: 1, x: 0 }}
              exit={{ rotateY: 180, opacity: 0, scale: 0.8, x: 100 }}
              transition={{ duration: 0.6 }}
              className="absolute top-0 left-0 right-0 h-64 flex items-center justify-center"
              style={{ perspective: "1000px" }}
            >
              <div className="relative h-64 w-48 rounded-xl bg-gradient-to-br from-white to-fogon-cream border-2 border-fogon-dark shadow-lg ember-border p-4 flex flex-col">
                <div className="flex-1 flex items-center justify-center overflow-hidden">
                  <p className="font-serif text-center text-fogon-dark leading-tight">
                    {activeCard}
                  </p>
                </div>
                <div className="text-center text-fogon-dark/60 font-handwritten text-xs mt-2">
                  Carta del Fogón
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Card action buttons */}
      <div className="mt-8 flex gap-4">
        <Button
          variant="outline"
          className="bg-transparent border border-fogon-dark/20 text-fogon-dark hover:bg-fogon-dark/5 hover:border-fogon-dark/40"
          onClick={onDiscard}
          disabled={!activeCard}
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Devolver
        </Button>
      </div>
    </div>
  );
};

export default CardDeck;
