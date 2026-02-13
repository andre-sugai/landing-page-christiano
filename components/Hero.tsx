import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://picsum.photos/id/42/1920/1080" 
          alt="Interior do Apartamento" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 max-w-4xl mx-auto">
        <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium tracking-wide mb-6 border border-white/30">
          ALUGUEL POR TEMPORADA NO CENTRO DE SP
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Viva a Experiência <br/> <span className="text-rose-400">Paulistana</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl">
          Sinta-se em casa no coração de São Paulo. Um refúgio acolhedor e moderno no Boulevard Arouche, perfeito para relaxar e viver o melhor da gastronomia e cultura da cidade.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#galeria" className="px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
            Ver Fotos
          </a>
          <a href="#localizacao" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
            Explorar Região
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#apartamento" aria-label="Rolar para baixo">
          <ChevronDown className="w-8 h-8 text-white opacity-80" />
        </a>
      </div>
    </section>
  );
};

export default Hero;