import React from 'react';
import { AIRBNB_LINK } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Boulevard<span className="font-light">Arouche</span></h3>
            <p className="text-sm leading-relaxed mb-6">
              Sua casa longe de casa no coração de São Paulo. 
              Experimente a vida urbana com conforto e sofisticação.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#apartamento" className="hover:text-white transition-colors">O Apartamento</a></li>
              <li><a href="#galeria" className="hover:text-white transition-colors">Galeria</a></li>
              <li><a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a></li>
              <li><a href="#localizacao" className="hover:text-white transition-colors">Localização</a></li>
              <li><a href="#predio" className="hover:text-white transition-colors">Comodidades</a></li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Reserve Sua Estadia</h4>
            <p className="text-sm mb-6">
              Verifique a disponibilidade e preços atualizados diretamente no Airbnb.
            </p>
            <a 
              href={AIRBNB_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block w-full text-center bg-primary text-white py-3 rounded-lg font-bold hover:bg-rose-700 transition-colors"
            >
              Ir para o Airbnb
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Boulevard Arouche Rental. Todos os direitos reservados.</p>
          <p className="mt-2">
            Desenvolvido por André Sugai <span className="text-red-500">♥️</span> <a href="https://orbee360.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">Orbee360</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;