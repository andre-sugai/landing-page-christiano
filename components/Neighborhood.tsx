import React, { useState, useEffect } from 'react';
import { ATTRACTIONS } from '../constants';
import { Attraction } from '../types';
import { MapPin, Coffee, Landmark, Trees, Music, X, ExternalLink, Lightbulb } from 'lucide-react';

const Neighborhood: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'culture' | 'food' | 'park' | 'nightlife'>('all');
  const [selectedAttraction, setSelectedAttraction] = useState<Attraction | null>(null);

  const filteredAttractions = activeTab === 'all' 
    ? ATTRACTIONS 
    : ATTRACTIONS.filter(attr => attr.type === activeTab);

  const tabs = [
    { id: 'all', label: 'Tudo', icon: MapPin },
    { id: 'culture', label: 'Cultura', icon: Landmark },
    { id: 'food', label: 'Gastronomia', icon: Coffee },
    { id: 'park', label: 'Parques', icon: Trees },
    { id: 'nightlife', label: 'Vida Noturna', icon: Music },
  ];

  const otherHighlights = [
    { name: "Sampa SKY", url: "https://www.google.com/maps/search/?api=1&query=Sampa+SKY" },
    { name: "Copan", url: "https://www.google.com/maps/search/?api=1&query=Edificio+Copan" },
    { name: "Galeria do Rock", url: "https://www.google.com/maps/search/?api=1&query=Galeria+do+Rock" },
    { name: "Shopping Light", url: "https://www.google.com/maps/search/?api=1&query=Shopping+Light" },
    { name: "Sala São Paulo", url: "https://www.google.com/maps/search/?api=1&query=Sala+Sao+Paulo" },
    { name: "Love Cabaret", url: "https://www.google.com/maps/search/?api=1&query=Love+Cabaret" },
    { name: "Gato que Ri", url: "https://www.google.com/maps/search/?api=1&query=Restaurante+Gato+Que+Ri" },
    { name: "L'Entrecôte d'Olivier", url: "https://www.google.com/maps/search/?api=1&query=L'Entrecôte+d'Olivier" },
    { name: "La Casserole", url: "https://www.google.com/maps/search/?api=1&query=La+Casserole" },
    { name: "Mercado das Flores", url: "https://www.google.com/maps/search/?api=1&query=Mercado+das+Flores+Arouche" },
  ];

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedAttraction) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedAttraction]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedAttraction(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="localizacao" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Descubra os Arredores</h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Estamos localizados perto do Marco Zero de São Paulo. A região do Arouche e República 
            pulsa cultura, história e a melhor gastronomia da cidade.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === tab.id 
                  ? 'bg-primary text-white shadow-lg scale-105' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span className="font-medium">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAttractions.map((attraction, index) => (
            <div key={index} onClick={() => setSelectedAttraction(attraction)} className="cursor-pointer h-full">
              <Card attraction={attraction} />
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-50 p-8 rounded-2xl border border-slate-200 text-center">
          <h3 className="text-xl font-bold mb-6">Outros Destaques da Região</h3>
          <div className="flex flex-wrap justify-center gap-4 text-slate-600 text-sm">
            {otherHighlights.map((item) => (
              <a 
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-100 hover:border-primary/30 hover:text-primary hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Localização Exata</h3>
            <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-lg border border-slate-200 relative z-0">
                <iframe 
                    width="100%" 
                    height="100%" 
                    title="Mapa de Localização - Largo do Arouche, 360"
                    src="https://maps.google.com/maps?q=Largo%20do%20Arouche%2C%20360%20-%20Rep%C3%BAblica%2C%20S%C3%A3o%20Paulo%20-%20SP&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
             <div className="mt-4 text-center">
                <a 
                    href="https://www.google.com/maps/search/?api=1&query=Largo+do+Arouche,+360+-+Republica,+Sao+Paulo+-+SP" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary font-semibold hover:underline"
                >
                    <MapPin className="w-4 h-4 mr-1" />
                    Abrir no Google Maps
                </a>
            </div>
        </div>
      </div>

      {/* Attraction Modal */}
      {selectedAttraction && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedAttraction(null)}
        >
          <div 
            className="bg-white text-slate-900 rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col overflow-hidden relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedAttraction(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full hover:bg-white transition-colors text-slate-600 hover:text-red-500 shadow-sm backdrop-blur-md"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="h-56 w-full flex-shrink-0 relative bg-slate-200">
               <img 
                src={selectedAttraction.image || "https://picsum.photos/800/400"} 
                alt={selectedAttraction.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                 <span className={`px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider shadow-sm ${
                  selectedAttraction.type === 'culture' ? 'bg-purple-500' :
                  selectedAttraction.type === 'food' ? 'bg-orange-500' :
                  selectedAttraction.type === 'park' ? 'bg-green-500' :
                  'bg-pink-500'
                }`}>
                  {selectedAttraction.type === 'food' ? 'Comer & Beber' : 
                   selectedAttraction.type === 'culture' ? 'Cultura' :
                   selectedAttraction.type === 'park' ? 'Parque' : 'Noite'}
                </span>
              </div>
            </div>

            {/* Content (Scrollable) */}
            <div className="p-6 overflow-y-auto">
              <h3 className="text-2xl font-bold mb-2">{selectedAttraction.name}</h3>
              
              <div className="mb-6">
                <p className="text-slate-600 text-lg leading-relaxed">
                  {selectedAttraction.description}
                </p>
              </div>

              {/* Curiosities Section */}
              {selectedAttraction.curiosities && selectedAttraction.curiosities.length > 0 && (
                <div className="mb-6 bg-yellow-50 p-5 rounded-xl border border-yellow-100">
                  <h4 className="flex items-center font-semibold text-yellow-800 mb-3 text-sm uppercase tracking-wider">
                    <Lightbulb className="w-4 h-4 mr-2" />
                    Você Sabia?
                  </h4>
                  <ul className="space-y-3">
                    {selectedAttraction.curiosities.map((curiosity, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-700">
                        <span className="mr-2 text-yellow-500 font-bold">•</span>
                        <span>{curiosity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Address Section */}
              {selectedAttraction.address && (
                <div className="flex items-start space-x-3 p-4 bg-slate-50 rounded-xl border border-slate-100 mb-6">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-slate-900 mb-1">Endereço</h4>
                    <p className="text-sm text-slate-600">{selectedAttraction.address}</p>
                  </div>
                </div>
              )}
            </div>
            
            {/* Footer */}
            <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-between items-center flex-shrink-0">
              <button 
                 onClick={() => setSelectedAttraction(null)}
                 className="text-slate-500 hover:text-slate-800 text-sm font-medium px-4"
              >
                Fechar
              </button>

              {selectedAttraction.mapLink && (
                <a 
                  href={selectedAttraction.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm shadow-sm"
                >
                  <span>Ver no Google Maps</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

const Card: React.FC<{ attraction: Attraction }> = ({ attraction }) => (
  <div className="group bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
    <div className="relative h-48 overflow-hidden">
      <img 
        src={attraction.image || "https://picsum.photos/400/300"} 
        alt={attraction.name} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute top-4 left-4">
        <span className={`px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider ${
          attraction.type === 'culture' ? 'bg-purple-500' :
          attraction.type === 'food' ? 'bg-orange-500' :
          attraction.type === 'park' ? 'bg-green-500' :
          'bg-pink-500'
        }`}>
          {attraction.type === 'food' ? 'Comer & Beber' : 
           attraction.type === 'culture' ? 'Cultura' :
           attraction.type === 'park' ? 'Parque' : 'Noite'}
        </span>
      </div>
    </div>
    <div className="p-6 flex-grow flex flex-col">
      <h3 className="text-xl font-bold text-slate-900 mb-2">{attraction.name}</h3>
      <p className="text-slate-600 text-sm leading-relaxed flex-grow line-clamp-3">
        {attraction.description}
      </p>
      <div className="mt-4 pt-4 border-t border-slate-100 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
        <span>Ver detalhes</span>
        <ExternalLink className="w-3 h-3 ml-1" />
      </div>
    </div>
  </div>
);

export default Neighborhood;