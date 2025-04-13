
import React from "react";
import { Flame } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  
  return (
    <div className="flex flex-col min-h-screen bg-fogon-paper">
      <header className="py-4 px-6 border-b border-fogon-red/20 bg-starry-night-gradient relative">
        <div className="absolute inset-0 bg-ember-gradient opacity-20"></div>
        <div className="container max-w-7xl mx-auto flex items-center justify-between relative z-10">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img 
                src="/lovable-uploads/e7e96892-e555-48b4-adfd-0b5274995dd8.png" 
                alt="Fogón Logo" 
                className="h-10 w-auto"
              />
              <span className="text-2xl font-handwritten text-fogon-cream">Fogón</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link 
              to="/" 
              className={`text-fogon-cream/90 hover:text-fogon-amber transition-all font-serif ${
                location.pathname === "/" ? "text-fogon-amber" : ""
              }`}
            >
              Inicio
            </Link>
            <a href="#historia" className="text-fogon-cream/90 hover:text-fogon-amber transition-all font-serif">
              Historia
            </a>
            <a href="#conoce-fogon" className="text-fogon-cream/90 hover:text-fogon-amber transition-all font-serif">
              Cómo Encender
            </a>
            <a href="#que-lo-hace-especial" className="text-fogon-cream/90 hover:text-fogon-amber transition-all font-serif">
              Lo Especial
            </a>
            <a href="#producto" className="text-fogon-cream/90 hover:text-fogon-amber transition-all font-serif">
              Producto
            </a>
          </nav>
          <div className="w-24"></div> {/* Empty div to maintain layout balance */}
        </div>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="py-6 border-t border-fogon-red/20 bg-starry-night-gradient relative">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/3eeeb2b6-3a62-4ce8-a88e-550e79113c9b.png')] bg-cover bg-center opacity-40 mix-blend-soft-light"></div>
        <div className="absolute inset-0 bg-ember-gradient opacity-20"></div>
        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/e7e96892-e555-48b4-adfd-0b5274995dd8.png" 
                alt="Fogón Logo" 
                className="h-6 w-auto"
              />
              <span className="text-xl font-handwritten text-fogon-cream">Fogón</span>
            </div>
            <div className="text-fogon-cream/60 text-sm font-serif">
              &copy; {new Date().getFullYear()} Fogón. Todos los derechos reservados.
            </div>
            <div className="flex gap-4 font-serif">
              <a href="#" className="text-fogon-cream/60 hover:text-fogon-amber transition-colors">
                Términos
              </a>
              <a href="#" className="text-fogon-cream/60 hover:text-fogon-amber transition-colors">
                Privacidad
              </a>
              <a href="#" className="text-fogon-cream/60 hover:text-fogon-amber transition-colors">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
