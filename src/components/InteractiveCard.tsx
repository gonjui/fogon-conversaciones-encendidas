
import React, { useState } from "react";
import { motion } from "framer-motion";
import Draggable from "react-draggable";
import { useSound } from "@/hooks/useSound";

interface InteractiveCardProps {
  id: number;
  frontContent?: React.ReactNode;
  backContent: React.ReactNode;
  initialPosition?: { x: number; y: number };
  initialRotation?: number;
  className?: string;
  draggable?: boolean;
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({
  id,
  frontContent,
  backContent,
  initialPosition = { x: 0, y: 0 },
  initialRotation = 0,
  className = "",
  draggable = true
}) => {
  const [flipped, setFlipped] = useState(false);
  const { play: playFlipSound } = useSound("/sounds/card-flip.mp3");
  
  const handleFlip = () => {
    playFlipSound();
    setFlipped(!flipped);
  };
  
  const cardContent = (
    <div
      className={`w-40 h-56 rounded-xl card-shadow transition-transform duration-500 preserve-3d cursor-pointer ${className}`}
      style={{ transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
      onClick={handleFlip}
    >
      {/* Card Front */}
      <div className="absolute w-full h-full rounded-xl bg-gradient-to-br from-fogon-paper to-fogon-cream border-2 border-fogon-dark/30 backface-hidden flex items-center justify-center p-4 paper-texture">
        {frontContent || (
          <>
            <img src="/lovable-uploads/ac06b5f0-7980-4f24-8778-e52b00ce2c78.png" alt="Fogón card back" className="w-16 h-16 opacity-60" />
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <p className="text-fogon-dark/70 font-handwritten text-sm">Fogón</p>
            </div>
          </>
        )}
      </div>
      
      {/* Card Back */}
      <div className="absolute w-full h-full rounded-xl bg-gradient-to-br from-white to-fogon-cream border-2 border-fogon-dark/30 backface-hidden rotateY-180 p-3 flex items-center justify-center paper-texture">
        {backContent}
      </div>
    </div>
  );
  
  if (!draggable) {
    return (
      <motion.div
        initial={{ rotate: initialRotation }}
        animate={{ rotate: initialRotation }}
        className="relative"
      >
        {cardContent}
      </motion.div>
    );
  }
  
  return (
    <Draggable defaultPosition={initialPosition} bounds="parent">
      <motion.div
        initial={{ rotate: initialRotation }}
        animate={{ rotate: initialRotation }}
        className="absolute cursor-grab active:cursor-grabbing"
        style={{ transformOrigin: "center" }}
      >
        {cardContent}
      </motion.div>
    </Draggable>
  );
};

export default InteractiveCard;
