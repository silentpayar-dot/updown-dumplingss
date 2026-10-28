import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/restaurantData';

export const GallerySection: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const activeItem: GalleryItem | null =
    activeImageIndex !== null ? GALLERY_ITEMS[activeImageIndex] : null;

  const handleNext = useCallback(() => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % GALLERY_ITEMS.length);
    }
  }, [activeImageIndex]);

  const handlePrev = useCallback(() => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  }, [activeImageIndex]);

  // Keyboard accessibility: Escape to close, Arrow keys to navigate
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === 'Escape') setActiveImageIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, handleNext, handlePrev]);

  return (
    <section id="gallery" className="py-20 bg-[#FFFDF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#C74632] uppercase">
            <span className="w-4 h-[1.5px] bg-[#C74632]"></span>
            <span>VISUAL TASTE</span>
            <span className="w-4 h-[1.5px] bg-[#C74632]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#183B2B]">
            Food Gallery
          </h2>

          <p className="text-base text-[#20231F]/80 leading-relaxed">
            A glimpse into the textures, steam, and vibrant colors of our dumpling craft.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY_ITEMS.map((item, index) => {
            const isLarge = index === 0 || index === 5;
            return (
              <div
                key={item.id}
                onClick={() => setActiveImageIndex(index)}
                className={`relative rounded-2xl overflow-hidden bg-[#E8EDE3] cursor-pointer group shadow-xs hover:shadow-xl transition-all duration-300 border border-[#183B2B]/10 ${
                  isLarge ? 'md:col-span-2 aspect-[16/10]' : 'aspect-square'
                }`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveImageIndex(index);
                  }
                }}
                aria-label={`View ${item.title}`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Hover overlay with caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-4 flex flex-col justify-end text-white">
                  <span className="text-[10px] uppercase tracking-wider text-[#E87932] font-semibold">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-base font-bold mt-0.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-white/80 line-clamp-2 mt-1">
                    {item.caption}
                  </p>
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs text-[#77766F] mt-8 italic">
          * Images show authentic representation of our dumpling varieties, noodle dishes, and table service.
        </p>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-caption"
        >
          {/* Close button */}
          <button
            onClick={() => setActiveImageIndex(null)}
            className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption Box */}
          <div className="max-w-4xl max-h-[85vh] w-full flex flex-col items-center">
            <div className="relative max-h-[70vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black">
              <img
                src={activeItem.src}
                alt={activeItem.title}
                className="max-h-[70vh] w-auto object-contain mx-auto"
                referrerPolicy="no-referrer"
              />
            </div>

            <div id="lightbox-caption" className="text-center text-white mt-4 max-w-lg space-y-1">
              <span className="text-xs uppercase tracking-widest text-[#E87932] font-semibold">
                {activeItem.category} · {activeImageIndex! + 1} of {GALLERY_ITEMS.length}
              </span>
              <h3 className="font-serif text-xl font-bold text-white">
                {activeItem.title}
              </h3>
              <p className="text-xs text-white/80">
                {activeItem.caption}
              </p>
            </div>
          </div>

        </div>
      )}
    </section>
  );
};
