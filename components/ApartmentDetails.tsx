import React from 'react';
import { AMENITIES } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const ApartmentDetails: React.FC = () => {
  return (
    <section id="apartamento" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Conforto e Design no Centro</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Este estúdio foi projetado para oferecer a máxima comodidade para sua estadia em São Paulo. 
              Com decoração moderna, o espaço integra quarto, sala e cozinha de forma harmoniosa, 
              criando um ambiente acolhedor e funcional.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Ideal para casais, viajantes individuais ou profissionais em viagem de negócios. 
              Desfrute de uma noite de sono tranquila em nossa cama queen-size e prepare suas 
              próprias refeições na cozinha totalmente equipada.
            </p>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-semibold mb-6">Comodidades do Imóvel</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {AMENITIES.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <item.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-slate-900">{item.label}</h4>
                      {item.description && <p className="text-sm text-slate-500">{item.description}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image/Highlight */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/airbnb-boulevard-arouche23.webp" 
                alt="Quarto aconchegante" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs border-l-4 border-primary hidden md:block">
              <div className="flex items-center space-x-2 mb-2">
                <CheckCircle2 className="text-green-500 w-5 h-5" />
                <span className="font-bold text-slate-900">Limpeza Profissional</span>
              </div>
              <p className="text-sm text-slate-600">
                Seguimos protocolos rigorosos de higienização para sua segurança e conforto.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ApartmentDetails;