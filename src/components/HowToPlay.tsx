
import React from "react";
import { CircleDot, Users, MessageCircle } from "lucide-react";

const HowToPlay = () => {
  return (
    <section id="como-jugar" className="py-20 bg-[#F5EDE2]/80 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-handwritten mb-12 text-center text-[#5A2E0C]">
          ¿Cómo se <span className="text-[#D35400]">juega</span>?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="organic-border group hover:shadow-paper transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-[#C99A6B]/20 flex items-center justify-center mb-4 group-hover:bg-[#C99A6B]/30 transition-colors">
              <Users className="h-6 w-6 text-[#D35400]" />
            </div>
            <h3 className="text-xl font-handwritten mb-3 text-[#5A2E0C] group-hover:text-[#D35400] transition-colors">1. Reúne el Círculo</h3>
            <p className="text-[#5A2E0C]/90 leading-relaxed font-serif">
              Invita a tus amigos, familia o incluso desconocidos. Fogón se disfruta mejor en grupos de 3 a 8 personas, sentados en círculo, preferiblemente cerca de una fuente de calidez, real o metafórica.
            </p>
          </div>
          
          <div className="organic-border group hover:shadow-paper transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-[#C99A6B]/20 flex items-center justify-center mb-4 group-hover:bg-[#C99A6B]/30 transition-colors">
              <CircleDot className="h-6 w-6 text-[#D35400]" />
            </div>
            <h3 className="text-xl font-handwritten mb-3 text-[#5A2E0C] group-hover:text-[#D35400] transition-colors">2. Enciende el Fogón</h3>
            <p className="text-[#5A2E0C]/90 leading-relaxed font-serif">
              Coloca el mazo de cartas en el centro. Cada jugador, por turnos, toma una carta y lee en voz alta la pregunta o propuesta escrita en ella. No hay respuestas correctas o incorrectas, solo historias esperando ser contadas.
            </p>
          </div>
          
          <div className="organic-border group hover:shadow-paper transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-[#C99A6B]/20 flex items-center justify-center mb-4 group-hover:bg-[#C99A6B]/30 transition-colors">
              <MessageCircle className="h-6 w-6 text-[#D35400]" />
            </div>
            <h3 className="text-xl font-handwritten mb-3 text-[#5A2E0C] group-hover:text-[#D35400] transition-colors">3. Alimenta las Llamas</h3>
            <p className="text-[#5A2E0C]/90 leading-relaxed font-serif">
              Escucha atentamente las respuestas. Haz preguntas. Comparte tus reflexiones. Deja que la conversación fluya naturalmente, ramificándose en nuevos temas o profundizando en los actuales.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-[#5A2E0C]/90 text-lg mb-6 font-serif">
            No hay ganadores ni perdedores en Fogón. La única regla es la autenticidad. El juego termina cuando el grupo lo decide, pero las conversaciones y conexiones que crea permanecen mucho más tiempo.
          </p>
          <div className="organic-border text-[#8B5E3C]/80 italic font-handwritten text-xl">
            "Las mejores conversaciones surgen cuando nos permitimos ser vulnerables"
          </div>
        </div>
      </div>
      <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-ember-gradient opacity-10 blur-3xl"></div>
    </section>
  );
};

export default HowToPlay;
