import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-200/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">O que dizem nossos hóspedes</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Confira as experiências de quem já viveu momentos inesquecíveis no Boulevard Arouche.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col relative transition-transform hover:-translate-y-1 duration-300"
            >
              <Quote className="absolute top-6 right-6 text-slate-100 w-12 h-12 fill-current -z-0" />
              
              <div className="flex space-x-1 mb-6 text-yellow-400 z-10">
                {[...Array(testimonial.rating || 5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              <p className="text-slate-600 mb-8 italic flex-grow z-10 relative leading-relaxed">
                "{testimonial.comment}"
              </p>

              <div className="flex items-center space-x-4 mt-auto z-10">
                <img 
                  src={testimonial.avatar || `https://ui-avatars.com/api/?name=${testimonial.name.replace(" ", "+")}&background=e11d48&color=fff`} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-slate-100 shadow-sm"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-slate-500 font-medium">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
             <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm text-sm text-slate-600">
                <Star className="w-4 h-4 text-primary fill-current" />
                <span className="font-semibold text-slate-900">4.98</span>
                <span>de avaliação média no Airbnb</span>
             </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;