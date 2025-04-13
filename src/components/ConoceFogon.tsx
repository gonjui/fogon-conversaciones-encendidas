
import React from "react";
import { Flame, Sparkles } from "lucide-react";

const ConoceFogon = () => {
  return (
    <section id="conoce-fogon" className="py-20 relative overflow-hidden">
      {/* Starry sky background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-transparent z-0 opacity-90">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/3eeeb2b6-3a62-4ce8-a88e-550e79113c9b.png')] bg-cover bg-center opacity-60 mix-blend-soft-light"></div>
        <div className="stars-container absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white animate-pulse"
              style={{
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.8 + 0.2,
                animationDuration: `${Math.random() * 3 + 2}s`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <h1 className="text-4xl md:text-5xl font-handwritten mb-14 text-center text-fogon-cream glow-text">
          Conoce Fogón
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-handwritten mb-8 text-center text-fogon-amber">
            Cómo encender la conversación
          </h2>
          
          <div className="organic-border bg-[#F5EDE2]/90 backdrop-blur-sm shadow-paper">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 rounded-full bg-[#D35400]/10 flex items-center justify-center">
                <Flame className="h-6 w-6 text-[#D35400]" />
              </div>
            </div>
            
            <div className="prose prose-lg mx-auto max-w-3xl text-[#5A2E0C] font-serif space-y-6">
              <p className="text-lg md:text-xl text-center font-medium leading-relaxed">
                Cada carta de Fogón es una rama: un disparador para iniciar una charla sincera.
              </p>
              
              <ol className="space-y-6 list-none pl-0">
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D35400]/20 flex items-center justify-center mt-1">
                    <span className="text-[#D35400] font-semibold">1</span>
                  </div>
                  <p className="text-lg leading-relaxed m-0">Tomá una carta del mazo.</p>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D35400]/20 flex items-center justify-center mt-1">
                    <span className="text-[#D35400] font-semibold">2</span>
                  </div>
                  <p className="text-lg leading-relaxed m-0">Leé su mensaje en silencio.</p>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D35400]/20 flex items-center justify-center mt-1">
                    <span className="text-[#D35400] font-semibold">3</span>
                  </div>
                  <p className="text-lg leading-relaxed m-0">Si querés compartir lo que sentiste o pensaste, colocá la rama en el Fogón (el centro de la mesa) y hablá.</p>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D35400]/20 flex items-center justify-center mt-1">
                    <span className="text-[#D35400] font-semibold">4</span>
                  </div>
                  <p className="text-lg leading-relaxed m-0">Si preferís guardártelo, devolvé la carta al mazo.</p>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D35400]/20 flex items-center justify-center mt-1">
                    <span className="text-[#D35400] font-semibold">5</span>
                  </div>
                  <p className="text-lg leading-relaxed m-0">Podés tomar otra rama y repetir el proceso cuantas veces quieras.</p>
                </li>
              </ol>
              
              <div className="mt-8 p-4 border-l-4 border-[#D35400] bg-[#D35400]/10 rounded">
                <p className="text-lg italic leading-relaxed m-0">
                  Y si en algún momento una reflexión te inspira a hacer un cambio real, podés jurar por el Fogón: un compromiso simbólico con vos y con quienes te escuchan.
                </p>
              </div>
            </div>
            
            <div className="mt-10 flex justify-center">
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
      </div>
      
      {/* Gradient transition to the next section */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#F5EDE2] to-transparent"></div>
    </section>
  );
};

export default ConoceFogon;
