
import React from "react";
import { Flame } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-fogon-paper">
      <header className="py-4 px-6 border-b border-fogon-red/20">
        <div className="container max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Flame className="h-6 w-6 text-fogon-amber" />
            <span className="text-2xl font-handwritten text-fogon-dark">Fogón</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#historia" className="text-fogon-dark/80 hover:text-fogon-amber transition-all font-serif">
              Historia
            </a>
            <a href="#como-jugar" className="text-fogon-dark/80 hover:text-fogon-amber transition-all font-serif">
              Cómo Jugar
            </a>
            <a href="#que-lo-hace-especial" className="text-fogon-dark/80 hover:text-fogon-amber transition-all font-serif">
              Lo Especial
            </a>
            <a href="#producto" className="text-fogon-dark/80 hover:text-fogon-amber transition-all font-serif">
              Producto
            </a>
          </nav>
          <a 
            href="#comunidad" 
            className="px-4 py-2 bg-fogon-amber hover:bg-fogon-ember transition-colors rounded-md text-fogon-cream font-medium font-serif"
          >
            Únete
          </a>
        </div>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="py-6 border-t border-fogon-red/20 bg-fogon-paper">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Flame className="h-5 w-5 text-fogon-amber" />
              <span className="text-xl font-handwritten text-fogon-dark">Fogón</span>
            </div>
            <div className="text-fogon-dark/60 text-sm font-serif">
              &copy; {new Date().getFullYear()} Fogón. Todos los derechos reservados.
            </div>
            <div className="flex gap-4 font-serif">
              <a href="#" className="text-fogon-dark/60 hover:text-fogon-amber transition-colors">
                Términos
              </a>
              <a href="#" className="text-fogon-dark/60 hover:text-fogon-amber transition-colors">
                Privacidad
              </a>
              <a href="#" className="text-fogon-dark/60 hover:text-fogon-amber transition-colors">
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
