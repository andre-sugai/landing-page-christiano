import React, { useState, useEffect } from 'react';
import { BUILDING_FEATURES } from '../constants';
import { Info, X, CheckCircle2 } from 'lucide-react';
import { Amenity } from '../types';

const BuildingInfo: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<Amenity | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedFeature) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedFeature]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedFeature(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="predio" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="w-full md:w-1/2">
            <img 
              src="https://picsum.photos/id/56/800/600" 
              alt="Piscina do Edifício Boulevard Arouche" 
              className="rounded-2xl shadow-2xl border border-slate-700"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">O Edifício</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Boulevard Arouche</h3>
            <p className="text-slate-300 mb-8 text-lg leading-relaxed">
              Um empreendimento moderno da Constrac, localizado em um ponto estratégico do centro.
              O edifício oferece estrutura de lazer completa e áreas comuns desenhadas para
              o seu bem-estar. Relaxe na piscina após um dia de passeios ou mantenha sua rotina
              de treinos na academia equipada.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {BUILDING_FEATURES.map((feature, idx) => (
                <div 
                  key={idx} 
                  className="relative group flex items-center space-x-4 bg-slate-800 p-4 rounded-lg hover:bg-slate-750 transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98] border border-transparent hover:border-slate-600"
                  onClick={() => setSelectedFeature(feature)}
                >
                  
                  {/* Info Icon in top right corner */}
                  <div className="absolute top-3 right-3 text-slate-600 group-hover:text-primary transition-colors">
                    <Info className="w-4 h-4" />
                  </div>

                  <div className="p-3 bg-primary/20 rounded-full text-primary flex-shrink-0">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div className="pr-4">
                    <h4 className="font-bold">{feature.label}</h4>
                    <p className="text-xs text-slate-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <p className="text-sm text-slate-400 italic border-l-2 border-slate-600 pl-4">
                "Segurança, modernidade e uma vista incrível de São Paulo."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Details Modal */}
      {selectedFeature && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedFeature(null)}
        >
          <div 
            className="bg-white text-slate-900 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedFeature(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full hover:bg-white transition-colors text-slate-600 hover:text-red-500 shadow-sm backdrop-blur-md"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="h-48 w-full relative bg-slate-200">
               <img 
                src={selectedFeature.image || "https://picsum.photos/800/400"} 
                alt={selectedFeature.label}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white flex items-center space-x-3">
                  <div className="p-2 bg-primary rounded-lg">
                    <selectedFeature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{selectedFeature.label}</h3>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 max-h-[60vh] overflow-y-auto">
              {/* Friendly Description */}
              <div className="mb-6">
                <p className="text-slate-600 text-lg leading-relaxed">
                  {selectedFeature.details || "Aproveite esta incrível comodidade disponível para todos os nossos hóspedes."}
                </p>
              </div>

              {/* Rules Section */}
              {selectedFeature.rules && selectedFeature.rules.length > 0 && (
                <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                  <h4 className="font-semibold text-slate-900 mb-3 text-sm uppercase tracking-wider">
                    Regras e Informações
                  </h4>
                  <ul className="space-y-3">
                    {selectedFeature.rules.map((rule, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            {/* Footer */}
            <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-end">
              <button 
                onClick={() => setSelectedFeature(null)}
                className="px-6 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium text-sm"
              >
                Entendido
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default BuildingInfo;