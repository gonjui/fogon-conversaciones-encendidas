
import React from "react";
import { Star, Package } from "lucide-react";

const Product = () => {
  return (
    <section id="producto" className="py-20 bg-fogon-dark/50 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 glow-text">
              El Mazo de <span className="text-fogon-amber">Fogón</span>
            </h2>
            <div className="flex items-center mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-fogon-amber fill-fogon-amber" />
                ))}
              </div>
              <span className="ml-2 text-fogon-cream/80 text-sm">128 opiniones</span>
            </div>
            <p className="text-fogon-cream/90 text-lg mb-6 leading-relaxed">
              80 cartas cuidadosamente diseñadas para despertar conversaciones significativas, 
              empaquetadas en una elegante caja que evoca la calidez del encuentro alrededor del fuego.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-fogon-amber/20 flex items-center justify-center mt-1 mr-3">
                  <div className="w-2 h-2 rounded-full bg-fogon-amber"></div>
                </div>
                <p className="text-fogon-cream/80">80 cartas con preguntas y propuestas</p>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-fogon-amber/20 flex items-center justify-center mt-1 mr-3">
                  <div className="w-2 h-2 rounded-full bg-fogon-amber"></div>
                </div>
                <p className="text-fogon-cream/80">Diseño premium con acabado mate</p>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-fogon-amber/20 flex items-center justify-center mt-1 mr-3">
                  <div className="w-2 h-2 rounded-full bg-fogon-amber"></div>
                </div>
                <p className="text-fogon-cream/80">Caja resistente con detalles dorados</p>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-fogon-amber/20 flex items-center justify-center mt-1 mr-3">
                  <div className="w-2 h-2 rounded-full bg-fogon-amber"></div>
                </div>
                <p className="text-fogon-cream/80">Guía impresa con sugerencias para jugar</p>
              </div>
            </div>
            
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-fogon-cream/90 font-medium">Precio</span>
                <span className="text-fogon-amber font-bold text-2xl">€24.95</span>
              </div>
              <div className="flex items-center text-fogon-cream/60 text-sm">
                <Package className="h-4 w-4 mr-1" />
                <span>Envío gratuito en pedidos superiores a €45</span>
              </div>
            </div>
            
            <a
              href="#" 
              className="block w-full text-center px-6 py-4 bg-fogon-amber hover:bg-fogon-ember transition-colors rounded-md text-fogon-dark font-medium text-lg ember-border mb-4"
            >
              Añadir al Carrito
            </a>
            <div className="text-center text-fogon-cream/60 text-sm">
              Garantía de devolución de 30 días si no quedas satisfecho
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-96">
              <div className="absolute top-0 left-0 w-60 h-90 bg-fogon-dark border-2 border-fogon-amber/30 rounded-md transform rotate-6 z-10"></div>
              <div className="absolute top-0 left-0 w-60 h-90 bg-fogon-dark border-2 border-fogon-amber/30 rounded-md transform -rotate-3 z-20"></div>
              <div className="absolute top-0 left-0 w-60 h-90 bg-gradient-to-br from-fogon-red to-fogon-amber/80 rounded-md transform rotate-1 z-30 flex items-center justify-center text-fogon-dark font-bold text-xl">
                FOGÓN
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-ember-gradient opacity-50 blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
