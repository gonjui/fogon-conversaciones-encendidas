
import React, { useRef, useState, useEffect } from "react";
import { Flame } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";

interface FogonProps {
  onCardAdded: () => void;
  drawnCard: string | null;
}

const Fogon: React.FC<FogonProps> = ({ onCardAdded, drawnCard }) => {
  const [flames, setFlames] = useState<{id: number, x: number, size: number, speed: number}[]>([]);
  const [sharedCards, setSharedCards] = useState<string[]>([]);
  const fogonRef = useRef<HTMLDivElement>(null);
  
  // Create animated flames
  useEffect(() => {
    const createFlames = () => {
      const newFlames = [];
      const width = fogonRef.current?.clientWidth || 300;
      
      for (let i = 0; i < 7; i++) {
        newFlames.push({
          id: i,
          x: Math.random() * width * 0.8 + width * 0.1,
          size: Math.random() * 40 + 60,
          speed: Math.random() * 0.5 + 0.5,
        });
      }
      
      setFlames(newFlames);
    };
    
    createFlames();
    
    const handleResize = () => {
      createFlames();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const handleAddToFire = () => {
    if (drawnCard) {
      setSharedCards(prev => [drawnCard, ...prev.slice(0, 4)]);
      onCardAdded();
    }
  };
  
  return (
    <div className="flex flex-col items-center">
      <div ref={fogonRef} className="relative w-full h-80 bg-fogon-dark/10 rounded-full overflow-hidden mb-6">
        {/* Ember base */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-fogon-ember/40 to-transparent"></div>
        
        {/* Flames */}
        {flames.map((flame) => (
          <motion.div
            key={flame.id}
            className="absolute bottom-0 w-12 z-10"
            style={{ left: flame.x }}
            animate={{
              y: [0, -10, -5, -15, 0],
              opacity: [0.7, 0.9, 0.8, 0.6, 0.7],
            }}
            transition={{
              duration: 3 * flame.speed,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <div 
              className="w-full bg-gradient-to-t from-fogon-ember via-fogon-amber to-transparent rounded-t-full"
              style={{ 
                height: flame.size,
                filter: 'blur(5px)',
              }}
            />
          </motion.div>
        ))}
        
        {/* Logs */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 flex justify-center">
          <div className="w-16 h-6 bg-gradient-to-t from-amber-900 to-amber-800 rounded-full"></div>
          <div className="w-16 h-6 bg-gradient-to-t from-amber-900 to-amber-800 rounded-full -ml-2 transform rotate-45"></div>
          <div className="w-16 h-6 bg-gradient-to-t from-amber-900 to-amber-800 rounded-full -ml-2 transform -rotate-45"></div>
        </div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-fogon-amber/30 to-transparent opacity-50"></div>
        
        {/* Card drop area indicator */}
        <AnimatePresence>
          {drawnCard && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div className="text-center bg-fogon-dark/60 backdrop-blur-sm py-2 px-4 rounded-full">
                <p className="text-fogon-cream font-serif text-sm">Añade tu carta al fogón</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Shared cards effect */}
        {sharedCards.map((card, index) => (
          <motion.div
            key={`${card}-${index}`}
            initial={{ opacity: 1, y: 0, x: 0, rotate: 0, scale: 1 }}
            animate={{ 
              opacity: 0, 
              y: -100, 
              x: Math.random() * 100 - 50,
              rotate: Math.random() * 60 - 30,
              scale: 0.6
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute top-1/2 left-1/2 w-36 h-48 bg-fogon-cream border border-fogon-dark/30 rounded-lg p-2 shadow-lg"
            style={{ 
              x: "-50%", 
              y: "-50%",
              zIndex: 5 - index
            }}
          >
            <div className="h-full flex items-center justify-center">
              <p className="text-xs text-fogon-dark font-serif line-clamp-4">{card}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <Button
        onClick={handleAddToFire}
        disabled={!drawnCard}
        className="bg-fogon-ember hover:bg-fogon-red text-fogon-cream font-serif transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:pointer-events-none"
      >
        <Flame className="w-4 h-4 mr-2" />
        Añadir al Fogón
      </Button>
    </div>
  );
};

export default Fogon;
