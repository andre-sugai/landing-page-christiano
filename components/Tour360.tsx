import React, { useState, useEffect } from 'react';
import { Globe, X, PlayCircle, MousePointer2, View } from 'lucide-react';

const Tour360: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="tour-virtual" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
            Experiência Imersiva
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Tour Virtual 360°
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Sinta-se dentro do apartamento antes mesmo de chegar. Explore cada canto da sala, 
            cozinha e quarto com nossa experiência interativa.
          </p>
        </div>

        {/* Trigger Area */}
        <div 
          className="relative w-full max-w-5xl mx-auto aspect-video rounded-2xl overflow-hidden cursor-pointer group shadow-2xl border border-slate-200"
          onClick={() => setIsOpen(true)}
        >
          {/* Background Image (Preview) */}
          <img 
            src="https://picsum.photos/id/42/1200/800" 
            alt="Capa do Tour Virtual" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/30 transition-colors flex flex-col items-center justify-center">
            
            {/* Play Button */}
            <div className="w-20 h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 border border-white/50 shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              <Globe className="w-10 h-10 md:w-12 md:h-12 text-white opacity-90" />
            </div>
            
            <h3 className="text-white text-xl md:text-2xl font-bold tracking-wide drop-shadow-md">
              Iniciar Tour Virtual
            </h3>
            <div className="mt-2 flex items-center text-white/80 text-sm">
              <MousePointer2 className="w-4 h-4 mr-1 animate-bounce" />
              <span>Clique para explorar</span>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-black animate-in fade-in duration-300 flex flex-col">
          
          {/* Toolbar */}
          <div className="flex justify-between items-center p-4 bg-black/50 backdrop-blur-sm absolute top-0 left-0 right-0 z-10">
            <h3 className="text-white font-medium flex items-center">
              <View className="w-5 h-5 mr-2 text-primary" />
              Tour Virtual 360°
            </h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Iframe Container */}
          <div className="flex-grow w-full h-full bg-slate-900 flex items-center justify-center">
            {/* 
                IMPORTANTE: 
                Substitua o src abaixo pelo caminho do seu arquivo HTML do tour 360.
                Exemplo: src="/tour-virtual/index.html" (se a pasta estiver em public/tour-virtual)
            */}
            <iframe
              src="https://apartamento-christiano.netlify.app/"
              title="Tour Virtual 360"
              className="w-full h-full border-0"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; xr-spatial-tracking"
            ></iframe>
            
            {/* Fallback visual if iframe loads slow */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center text-slate-500">
              <p>Carregando ambiente 360...</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Tour360;