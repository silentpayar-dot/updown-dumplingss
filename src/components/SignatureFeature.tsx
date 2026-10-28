import React from 'react';
import { ArrowRight, Flame, Clock } from 'lucide-react';
import { IMAGE_ASSETS } from '../data/restaurantData';

interface SignatureFeatureProps {
  onExplore: () => void;
}

export const SignatureFeature: React.FC<SignatureFeatureProps> = ({ onExplore }) => {
  return (
    <section className="py-20 bg-[#183B2B] text-[#FFFDF8] relative overflow-hidden">
      {/* Subtle organic Asian pattern accent in background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="dumpling-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1.5" fill="#FFFDF8" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dumpling-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Content (Left 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#E87932] uppercase">
              <span className="w-5 h-[1.5px] bg-[#E87932]"></span>
              <span>SIGNATURE CRAFT</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FFFDF8] leading-tight text-balance">
              Your Next Favorite Bite.
            </h2>

            <p className="text-base sm:text-lg text-[#E8EDE3]/90 leading-relaxed">
              From comforting classics to bold, flavorful combinations, discover a delicious way to satisfy your dumpling cravings.
            </p>

            <div className="space-y-3 pt-2 text-sm text-[#E8EDE3]/80">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#23523d] flex items-center justify-center text-[#E87932] shrink-0">
                  <Flame className="w-3.5 h-3.5" />
                </div>
                <span>Crisp golden bottoms with rich, juicy fillings</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#23523d] flex items-center justify-center text-[#E87932] shrink-0">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <span>Cooked fresh to order for maximum flavor & texture</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onExplore}
                className="inline-flex items-center gap-2.5 bg-[#E87932] hover:bg-[#d66c29] text-[#FFFDF8] px-7 py-3.5 rounded-lg text-sm font-semibold transition-all shadow-md hover:shadow-lg active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Explore Dumpling Favorites</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Large Image (Right 7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#23523d] aspect-[16/9] lg:aspect-[16/10] bg-[#122e22]">
              <img
                src={IMAGE_ASSETS.signature}
                alt="Close-up of golden crispy pan-fried potstickers with toasted sesame seeds and fresh chives"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>

              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#183B2B]/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/20 text-xs text-[#FFFDF8]">
                <span className="block text-[10px] uppercase text-[#E87932] tracking-widest font-semibold">House Specialty</span>
                <span className="font-serif font-bold text-sm">Pan-Fried Dumplings with Lacy Skirt</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
