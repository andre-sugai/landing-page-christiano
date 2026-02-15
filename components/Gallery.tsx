import React, { useState, useEffect, useCallback } from 'react';
import { PHOTOS } from '../constants';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Take the first 5 photos for the bento grid display
  const displayPhotos = PHOTOS.slice(0, 5);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setIsAnimating(false);
    document.body.style.overflow = 'hidden'; // Prevent scrolling background
  };

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
    setIsAnimating(false);
    document.body.style.overflow = 'unset';
  }, []);

  // Helper to handle transition
  const handlePhotoChange = useCallback((newIndex: number) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    // Wait for fade out, then swap image and fade in
    setTimeout(() => {
      setSelectedIndex(newIndex);
      setIsAnimating(false);
    }, 300); // Matches the duration-300 class
  }, [isAnimating]);

  const showNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex === null) return;
    const nextIndex = (selectedIndex + 1) % PHOTOS.length;
    handlePhotoChange(nextIndex);
  }, [selectedIndex, handlePhotoChange]);

  const showPrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex === null) return;
    const prevIndex = (selectedIndex - 1 + PHOTOS.length) % PHOTOS.length;
    handlePhotoChange(prevIndex);
  }, [selectedIndex, handlePhotoChange]);

  // Keyboard navigation
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight' && !isAnimating) showNext();
      if (e.key === 'ArrowLeft' && !isAnimating) showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, closeLightbox, showNext, showPrev, isAnimating]);

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Galeria de Fotos</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Conheça cada detalhe do apartamento e das áreas comuns do prédio.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[600px] rounded-2xl overflow-hidden">
          {displayPhotos.map((photo, index) => (
            <div 
              key={index} 
              className={`relative group cursor-pointer overflow-hidden ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : 'md:col-span-1 md:row-span-1'
              }`}
              onClick={() => openLightbox(index)}
            >
              <img 
                src={photo.src} 
                alt={photo.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Maximize2 className="text-white w-8 h-8 drop-shadow-lg" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500 mb-4 italic">
            Fotos do apartamento e das áreas comuns do prédio
          </p>
          <button 
            onClick={() => openLightbox(0)}
            className="inline-flex items-center text-primary font-semibold hover:underline"
          >
            Ver todas as fotos na galeria →
          </button>
        </div>
      </div>

      {/* Advanced Lightbox Modal */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-[60] bg-black/95 flex flex-col items-center justify-center animate-in fade-in duration-300" 
          onClick={closeLightbox}
        >
          {/* Top Controls */}
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 z-50"
            onClick={closeLightbox}
            aria-label="Fechar galeria"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Main Content Area */}
          <div className="flex-grow w-full flex items-center justify-between px-4 md:px-12 relative h-full max-h-[80vh]">
            
            {/* Prev Button */}
            <button 
              className="hidden md:flex p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-sm z-50"
              onClick={showPrev}
              aria-label="Imagem anterior"
              disabled={isAnimating}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Main Image Container */}
            <div 
              className="relative max-w-5xl max-h-full mx-auto flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()} 
            >
              <img 
                src={PHOTOS[selectedIndex].src} 
                alt={PHOTOS[selectedIndex].alt} 
                className={`max-h-[70vh] md:max-h-[75vh] w-auto max-w-full rounded shadow-2xl object-contain select-none transition-opacity duration-300 ease-in-out ${
                  isAnimating ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <p className={`text-center text-white/80 mt-4 text-sm font-medium tracking-wide transition-opacity duration-300 ${
                  isAnimating ? 'opacity-0' : 'opacity-100'
              }`}>
                {PHOTOS[selectedIndex].alt} ({selectedIndex + 1} / {PHOTOS.length})
              </p>
            </div>

            {/* Next Button */}
            <button 
              className="hidden md:flex p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-sm z-50"
              onClick={showNext}
              aria-label="Próxima imagem"
              disabled={isAnimating}
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          {/* Bottom Thumbnails */}
          <div 
            className="w-full h-24 bg-black/40 backdrop-blur-md flex items-center justify-start space-x-3 overflow-x-auto px-4 py-2"
            onClick={(e) => e.stopPropagation()}
          >
            {PHOTOS.map((photo, index) => (
              <button
                key={index}
                onClick={() => {
                  if (selectedIndex !== index) handlePhotoChange(index);
                }}
                className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                  selectedIndex === index 
                    ? 'ring-2 ring-white scale-110 opacity-100' 
                    : 'opacity-40 hover:opacity-100 hover:scale-105'
                }`}
              >
                <img 
                  src={photo.src} 
                  alt={`Thumbnail ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;