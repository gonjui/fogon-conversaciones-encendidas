
import React from "react";
import { CircleDot, Users, MessageCircle } from "lucide-react";

const HowToPlay = () => {
  return (
    <section id="como-jugar" className="py-20 bg-fogon-paper/80 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-handwritten mb-12 text-center text-fogon-dark">
          Cómo Encender la <span className="text-fogon-amber">Conversación</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="card-border group">
            <div className="w-12 h-12 rounded-full bg-fogon-red/10 flex items-center justify-center mb-4 group-hover:bg-fogon-red/20 transition-colors">
              <Users className="h-6 w-6 text-fogon-amber" />
            </div>
            <h3 className="text-xl font-handwritten mb-3 text-fogon-dark group-hover:text-fogon-amber transition-colors">1. Reúne el Círculo</h3>
            <p className="text-fogon-dark/90 leading-relaxed font-serif">
              Invita a tus amigos, familia o incluso desconocidos. Fogón se disfruta mejor en grupos de 3 a 8 personas, sentados en círculo, preferiblemente cerca de una fuente de calidez, real o metafórica.
            </p>
          </div>
          
          <div className="card-border group">
            <div className="w-12 h-12 rounded-full bg-fogon-red/10 flex items-center justify-center mb-4 group-hover:bg-fogon-red/20 transition-colors">
              <CircleDot className="h-6 w-6 text-fogon-amber" />
            </div>
            <h3 className="text-xl font-handwritten mb-3 text-fogon-dark group-hover:text-fogon-amber transition-colors">2. Enciende el Fogón</h3>
            <p className="text-fogon-dark/90 leading-relaxed font-serif">
              Coloca el mazo de cartas en el centro. Cada jugador, por turnos, toma una carta y lee en voz alta la pregunta o propuesta escrita en ella. No hay respuestas correctas o incorrectas, solo historias esperando ser contadas.
            </p>
          </div>
          
          <div className="card-border group">
            <div className="w-12 h-12 rounded-full bg-fogon-red/10 flex items-center justify-center mb-4 group-hover:bg-fogon-red/20 transition-colors">
              <MessageCircle className="h-6 w-6 text-fogon-amber" />
            </div>
            <h3 className="text-xl font-handwritten mb-3 text-fogon-dark group-hover:text-fogon-amber transition-colors">3. Alimenta las Llamas</h3>
            <p className="text-fogon-dark/90 leading-relaxed font-serif">
              Escucha atentamente las respuestas. Haz preguntas. Comparte tus reflexiones. Deja que la conversación fluya naturalmente, ramificándose en nuevos temas o profundizando en los actuales.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-fogon-dark/90 text-lg mb-6 font-serif">
            No hay ganadores ni perdedores en Fogón. La única regla es la autenticidad. El juego termina cuando el grupo lo decide, pero las conversaciones y conexiones que crea permanecen mucho más tiempo.
          </p>
          <div className="card-border text-fogon-dark/80 italic font-handwritten text-xl">
            "Las mejores conversaciones surgen cuando nos permitimos ser vulnerables"
          </div>
        </div>
      </div>
      <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-ember-gradient opacity-10 blur-3xl"></div>
    </section>
  );
};

export default HowToPlay;
