import React from 'react';
import { ArrowRight, UtensilsCrossed } from 'lucide-react';
import { IMAGE_ASSETS } from '../data/restaurantData';

interface OffersSectionProps {
  onExplore: () => void;
}

export const OffersSection: React.FC<OffersSectionProps> = ({ onExplore }) => {
  return (
    <section className="py-16 bg-[#FFFDF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#183B2B] rounded-3xl overflow-hidden shadow-xl border border-[#23523d] relative">
          
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            
            {/* Left Content */}
            <div className="p-8 sm:p-12 md:col-span-7 space-y-5 text-[#FFFDF8]">
              
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#E87932] uppercase">
                <UtensilsCrossed className="w-4 h-4 text-[#E87932]" />
                <span>FEATURED DISHES</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#FFFDF8] leading-tight text-balance">
                A Little Something Delicious
              </h2>

              <p className="text-base text-[#E8EDE3]/90 leading-relaxed max-w-lg">
                Check out our latest specials and discover something new to enjoy. From savory Dan Dan noodles to chili oil dumplings, there's always a comforting plate waiting for you.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onExplore}
                  className="inline-flex items-center gap-2 bg-[#FFFDF8] hover:bg-[#FAF6ED] text-[#183B2B] px-6 py-3.5 rounded-lg text-sm font-semibold transition-all shadow-sm hover:shadow active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span>Explore Our Menu</span>
                  <ArrowRight className="w-4 h-4 text-[#C74632]" />
                </button>

                <span className="text-xs text-[#E8EDE3]/70">
                  Ask about today's kitchen specials when visiting
                </span>
              </div>
            </div>

            {/* Right Photo */}
            <div className="md:col-span-5 h-64 md:h-full min-h-[280px] relative bg-[#122e22]">
              <img
                src={IMAGE_ASSETS.danDanNoodles}
                alt="Artisanal Dan Dan noodles with savory minced meat, tender baby bok choy and chili flakes"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#183B2B] via-transparent to-transparent md:block hidden"></div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
