
import React from "react";
import { BookOpen } from "lucide-react";

const Story = () => {
  return (
    <section id="historia" className="py-20 relative">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 rounded-full bg-[#8B5E3C]/10 flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-[#D35400]" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-handwritten mb-8 text-center text-[#5A2E0C]">
            La Historia del <span className="text-[#D35400]">Fogón</span>
          </h2>
          <div className="organic-border">
            <div className="prose prose-lg mx-auto text-[#5A2E0C] font-serif">
              <p className="text-lg leading-relaxed mb-4">
                Hace tiempo, cuando las noches eran largas y las historias cortas, un grupo de amigos se reunió alrededor de un fuego. Sin distracciones, sin pantallas, solo la danza hipnótica de las llamas y la calidez de la compañía humana.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Entre las chispas y las brasas, surgieron preguntas. No las habituales sobre el día a día, sino aquellas que tocan el alma, que desvelan secretos guardados y sueños olvidados. Preguntas que crearon puentes invisibles entre corazones.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Así nació <span className="text-[#D35400] font-semibold">Fogón</span>, un juego de cartas que no busca vencedores ni vencidos, sino momentos de genuina conexión humana. Cada carta contiene la esencia de aquellas preguntas nacidas al calor de las llamas, diseñadas para encender conversaciones que permanecen mucho después de que el fuego se apague.
              </p>
            </div>
            <div className="italic text-center text-[#8B5E3C]/70 my-6 font-handwritten text-xl">
              "En un mundo donde todo va deprisa, <span className="text-[#D35400]">Fogón</span> nos invita a detenernos y redescubrir el arte perdido de la conversación profunda."
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-1/4 -z-10 w-64 h-64 bg-ember-gradient opacity-20 blur-3xl"></div>
      <div className="absolute left-0 bottom-1/4 -z-10 w-64 h-64 bg-ember-gradient opacity-20 blur-3xl"></div>
    </section>
  );
};

export default Story;
