
import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import CardDeck from "@/components/CardDeck";
import Fogon from "@/components/Fogon";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useSound } from "@/hooks/useSound";

const CardGame = () => {
  const [drawnCard, setDrawnCard] = useState<string | null>(null);
  const [showInstructions, setShowInstructions] = useState(true);
  const { play: playFireSound } = useSound("/sounds/fire-crackling.mp3");
  const { play: playCardSound } = useSound("/sounds/card-flip.mp3");

  const dismissInstructions = () => {
    setShowInstructions(false);
    localStorage.setItem("fogon-instructions-viewed", "true");
  };

  useEffect(() => {
    const hasViewedInstructions = localStorage.getItem("fogon-instructions-viewed");
    if (hasViewedInstructions) {
      setShowInstructions(false);
    }
  }, []);

  const handleAddToFire = () => {
    if (drawnCard) {
      playFireSound();
      toast("La carta ha sido añadida al fogón", {
        description: "Tu reflexión se ha compartido con todos",
        position: "bottom-center",
      });
      setDrawnCard(null);
    }
  };

  const handleDiscardCard = () => {
    setDrawnCard(null);
  };

  return (
    <Layout>
      <div className="relative min-h-[calc(100vh-14rem)] bg-campfire-gradient overflow-hidden py-12">
        <div className="absolute inset-0 bg-ember-gradient opacity-30"></div>
        
        {showInstructions && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6">
            <div className="card-border max-w-2xl bg-fogon-cream p-8 animate-fade-in">
              <h2 className="text-3xl font-handwritten text-fogon-dark mb-6">Bienvenido al Fogón</h2>
              <div className="font-serif text-lg leading-relaxed text-fogon-dark/90 mb-6">
                <p className="mb-4">Cada carta es una rama que puedes leer para ti mismo. Si decides compartir lo que has leído, coloca la rama en el fogón, si no devuelve la rama al montón.</p>
                <p className="mb-4">Puedes tomar otra rama y repetir el proceso si lo deseas.</p>
                <p>¡Que el fogón los ilumine y los guíe!</p>
              </div>
              <div className="flex justify-center">
                <Button 
                  className="bg-fogon-amber hover:bg-fogon-ember text-fogon-cream text-lg px-8 py-2 rounded-md transition-all duration-300 hover:scale-105"
                  onClick={dismissInstructions}
                >
                  Comenzar la Experiencia
                </Button>
              </div>
            </div>
          </div>
        )}
        
        <div className="container max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center">
            <div className="mb-8 text-center">
              <h1 className="text-3xl md:text-4xl font-handwritten mb-4 text-fogon-dark">
                El <span className="text-fogon-amber glow-text">Fogón</span> de Conversaciones
              </h1>
              <p className="font-serif text-lg text-fogon-dark/80 max-w-2xl mx-auto">
                Toma una carta, reflexiona sobre ella, y decide si quieres compartirla en el fogón o devolverla al mazo.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row w-full gap-8 items-center justify-center">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <Fogon onCardAdded={handleAddToFire} drawnCard={drawnCard} />
              </div>
              
              <div className="w-full md:w-1/2 order-1 md:order-2">
                <CardDeck 
                  onCardDrawn={(card) => {
                    setDrawnCard(card);
                    playCardSound();
                  }} 
                  activeCard={drawnCard} 
                  onDiscard={handleDiscardCard}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CardGame;
