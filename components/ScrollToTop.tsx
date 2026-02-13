import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-40">
      <button
        type="button"
        onClick={scrollToTop}
        className={`p-3 rounded-full bg-slate-900 text-white shadow-xl transition-all duration-300 hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </div>
  );
};

export default ScrollToTop;