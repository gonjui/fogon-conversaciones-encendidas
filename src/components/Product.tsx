
import React from "react";
import { Star, Package } from "lucide-react";

const Product = () => {
  return (
    <section id="producto" className="py-20 bg-fogon-paper/80 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-handwritten mb-6 text-fogon-dark">
              El Mazo de <span className="text-fogon-amber">Fogón</span>
            </h2>
            <div className="flex items-center mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-fogon-amber fill-fogon-amber" />
                ))}
              </div>
              <span className="ml-2 text-fogon-dark/80 text-sm font-serif">128 opiniones</span>
            </div>
            <p className="text-fogon-dark/90 text-lg mb-6 leading-relaxed font-serif">
              80 cartas cuidadosamente diseñadas para despertar conversaciones significativas, 
              empaquetadas en una elegante caja que evoca la calidez del encuentro alrededor del fuego.
            </p>
            
            <div className="space-y-4 mb-8 font-serif">
              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-fogon-amber/20 flex items-center justify-center mt-1 mr-3">
                  <div className="w-2 h-2 rounded-full bg-fogon-amber"></div>
                </div>
                <p className="text-fogon-dark/90">80 cartas con preguntas y propuestas</p>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-fogon-amber/20 flex items-center justify-center mt-1 mr-3">
                  <div className="w-2 h-2 rounded-full bg-fogon-amber"></div>
                </div>
                <p className="text-fogon-dark/90">Diseño premium con acabado mate</p>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-fogon-amber/20 flex items-center justify-center mt-1 mr-3">
                  <div className="w-2 h-2 rounded-full bg-fogon-amber"></div>
                </div>
                <p className="text-fogon-dark/90">Caja resistente con diseño original</p>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-fogon-amber/20 flex items-center justify-center mt-1 mr-3">
                  <div className="w-2 h-2 rounded-full bg-fogon-amber"></div>
                </div>
                <p className="text-fogon-dark/90">Guía impresa con sugerencias para jugar</p>
              </div>
            </div>
            
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-fogon-dark/90 font-medium font-serif">Precio</span>
                <span className="text-fogon-amber font-bold text-2xl font-handwritten">€24.95</span>
              </div>
              <div className="flex items-center text-fogon-dark/60 text-sm font-serif">
                <Package className="h-4 w-4 mr-1" />
                <span>Envío gratuito en pedidos superiores a €45</span>
              </div>
            </div>
            
            <a
              href="#" 
              className="block w-full text-center px-6 py-4 bg-fogon-amber hover:bg-fogon-ember transition-colors rounded-md text-fogon-cream font-medium text-lg font-serif mb-4"
            >
              Añadir al Carrito
            </a>
            <div className="text-center text-fogon-dark/60 text-sm font-serif">
              Garantía de devolución de 30 días si no quedas satisfecho
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <img 
                src="/lovable-uploads/5aa272fe-bc27-417a-9039-1ff660682313.png" 
                alt="Caja de Fogón - Juego de cartas" 
                className="w-64 h-auto rounded-md shadow-lg"
              />
              <div className="absolute -bottom-5 -right-5 w-40 h-40 bg-ember-gradient opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
