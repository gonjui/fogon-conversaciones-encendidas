
import React from "react";
import { Flame } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="py-4 px-6 border-b border-fogon-red/30">
        <div className="container max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className="h-6 w-6 text-fogon-amber animate-ember-glow" />
            <span className="text-2xl font-semibold text-fogon-cream glow-text">Fogón</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#historia" className="text-fogon-cream/80 hover:text-fogon-amber hover:glow-text transition-all">
              Historia
            </a>
            <a href="#como-jugar" className="text-fogon-cream/80 hover:text-fogon-amber hover:glow-text transition-all">
              Cómo Jugar
            </a>
            <a href="#que-lo-hace-especial" className="text-fogon-cream/80 hover:text-fogon-amber hover:glow-text transition-all">
              Lo Especial
            </a>
            <a href="#producto" className="text-fogon-cream/80 hover:text-fogon-amber hover:glow-text transition-all">
              Producto
            </a>
          </nav>
          <a 
            href="#comunidad" 
            className="px-4 py-2 bg-fogon-amber hover:bg-fogon-ember transition-colors rounded-md text-fogon-dark font-medium"
          >
            Únete
          </a>
        </div>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="py-6 border-t border-fogon-red/30 bg-fogon-dark">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Flame className="h-5 w-5 text-fogon-amber" />
              <span className="text-xl font-semibold text-fogon-cream">Fogón</span>
            </div>
            <div className="text-fogon-cream/60 text-sm">
              &copy; {new Date().getFullYear()} Fogón. Todos los derechos reservados.
            </div>
            <div className="flex gap-4">
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
