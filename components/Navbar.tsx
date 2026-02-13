import React, { useState, useEffect } from 'react';
import { AIRBNB_LINK } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O Apartamento', href: '#apartamento' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Tour Virtual', href: '#tour-virtual' },
    { name: 'O Prédio', href: '#predio' },
    { name: 'Arredores', href: '#localizacao' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#" className={`text-2xl font-bold tracking-tighter ${isScrolled ? 'text-primary' : 'text-white'}`}>
          Boulevard<span className="font-light">Arouche</span>
        </a>

        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-medium hover:text-primary transition-colors ${isScrolled ? 'text-slate-700' : 'text-white/90 hover:text-white'}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <a 
          href={AIRBNB_LINK} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`px-6 py-2 rounded-full font-semibold transition-all shadow-lg hover:scale-105 active:scale-95 ${
            isScrolled 
              ? 'bg-primary text-white hover:bg-rose-700' 
              : 'bg-white text-primary hover:bg-gray-100'
          }`}
        >
          Reservar Agora
        </a>
      </div>
    </nav>
  );
};

export default Navbar;