import { Instagram, Facebook, Mail, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="footer" className="bg-zinc-50 border-t border-zinc-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-bold tracking-tighter text-black mb-4 block">ANIMARTE</span>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Transformamos tus espacios con diseños exclusivos y soluciones publicitarias de alto impacto.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-black uppercase tracking-wider mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-sm text-zinc-600">
                <Phone className="w-4 h-4 mr-2" />
                +54 11 1234-5678
              </li>
              <li className="flex items-center text-sm text-zinc-600">
                <Mail className="w-4 h-4 mr-2" />
                hola@animarte.com
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-black uppercase tracking-wider mb-4">Enlaces</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-zinc-600 hover:text-black transition-colors">Inicio</a></li>
              <li><a href="#categories" className="text-sm text-zinc-600 hover:text-black transition-colors">Categorías</a></li>
              <li><a href="#products" className="text-sm text-zinc-600 hover:text-black transition-colors">Productos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-black uppercase tracking-wider mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-zinc-400 hover:text-black transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-zinc-400 hover:text-black transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-zinc-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-zinc-400">
            © {new Date().getFullYear()} Animarte. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-xs text-zinc-400 hover:text-black">Privacidad</a>
            <a href="#" className="text-xs text-zinc-400 hover:text-black">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
