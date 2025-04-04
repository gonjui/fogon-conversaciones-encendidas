
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Flame, MessageCircle, Users } from "lucide-react";

const Community = () => {
  return (
    <section id="comunidad" className="py-20 relative">
      <div className="absolute inset-0 bg-ember-gradient opacity-10"></div>
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 glow-text">
              Únete a Nuestra <span className="text-fogon-amber">Comunidad</span>
            </h2>
            <p className="text-fogon-cream/90 text-lg mb-8 leading-relaxed">
              Fogón es más que un juego, es un movimiento que busca recuperar el arte de la conversación profunda. Únete a nuestra comunidad para recibir:
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-fogon-red/20 flex items-center justify-center mr-4 mt-1">
                  <Flame className="h-5 w-5 text-fogon-amber" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-fogon-cream mb-1">Nuevas Preguntas Mensuales</h3>
                  <p className="text-fogon-cream/70">
                    Recibe nuevas preguntas exclusivas en tu correo para seguir alimentando el Fogón.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-fogon-red/20 flex items-center justify-center mr-4 mt-1">
                  <MessageCircle className="h-5 w-5 text-fogon-amber" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-fogon-cream mb-1">Relatos del Fogón</h3>
                  <p className="text-fogon-cream/70">
                    Historias inspiradoras de conversaciones que cambiaron vidas gracias al juego.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-fogon-red/20 flex items-center justify-center mr-4 mt-1">
                  <Users className="h-5 w-5 text-fogon-amber" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-fogon-cream mb-1">Eventos y Comunidad</h3>
                  <p className="text-fogon-cream/70">
                    Invitaciones a encuentros virtuales y presenciales con otros entusiastas del Fogón.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-fogon-dark p-8 rounded-lg border border-fogon-amber/20">
            <h3 className="text-xl font-bold mb-4 text-fogon-cream text-center">
              ¡Suscríbete ahora y recibe un <span className="text-fogon-amber">10% de descuento</span> en tu primer pedido!
            </h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-fogon-cream/80 mb-1">Nombre</label>
                <Input 
                  id="name" 
                  type="text" 
                  placeholder="Tu nombre" 
                  className="bg-fogon-dark border-fogon-amber/30 text-fogon-cream placeholder:text-fogon-cream/40"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-fogon-cream/80 mb-1">Correo Electrónico</label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="tucorreo@ejemplo.com" 
                  className="bg-fogon-dark border-fogon-amber/30 text-fogon-cream placeholder:text-fogon-cream/40"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-fogon-amber hover:bg-fogon-ember text-fogon-dark font-medium py-2 h-auto text-base"
              >
                Unirme a la Comunidad
              </Button>
              <p className="text-fogon-cream/60 text-xs text-center">
                Respetamos tu privacidad. Nunca compartiremos tu información con terceros.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
