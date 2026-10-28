import React from 'react';
import { Phone, ArrowDown, Utensils, Users, MapPin } from 'lucide-react';
import { RESTAURANT_INFO, IMAGE_ASSETS } from '../data/restaurantData';

interface HeroSectionProps {
  onOpenOrderModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenOrderModal }) => {
  const scrollToMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs (approx 45-50%) */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 lg:pr-4">
            
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#C74632] uppercase">
              <span className="w-6 h-[1.5px] bg-[#C74632]"></span>
              <span>{RESTAURANT_INFO.eyebrow}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tight text-[#183B2B] leading-[1.12] text-balance">
              Little Pockets of Joy. <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#C74632]">Big Flavors.</span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-[#20231F]/80 leading-relaxed max-w-xl">
              Discover delicious dumplings, comforting Asian favorites, and bold flavors worth sharing. Visit Uptown Dumpling in Dallas for a satisfying meal made for every craving.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#menu"
                onClick={scrollToMenu}
                className="inline-flex items-center justify-center gap-2 bg-[#183B2B] hover:bg-[#122e22] text-[#FFFDF8] px-7 py-3.5 rounded-lg text-sm font-semibold transition-all shadow-md hover:shadow-lg active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#183B2B]"
              >
                <span>Explore Our Menu</span>
                <ArrowDown className="w-4 h-4 text-[#E87932]" />
              </a>

              <button
                onClick={onOpenOrderModal}
                className="inline-flex items-center justify-center gap-2 border-2 border-[#183B2B] text-[#183B2B] hover:bg-[#183B2B] hover:text-[#FFFDF8] px-6 py-3.5 rounded-lg text-sm font-semibold transition-all active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#183B2B]"
              >
                <Phone className="w-4 h-4 text-[#C74632]" />
                <span>Call to Order</span>
              </button>
            </div>

            {/* Three Value Propositions with Minimal Icons */}
            <div className="pt-8 border-t border-[#183B2B]/10 grid grid-cols-3 gap-3 text-left">
              <div className="space-y-1">
                <div className="w-8 h-8 rounded-md bg-[#E8EDE3] flex items-center justify-center text-[#183B2B]">
                  <Utensils className="w-4 h-4" />
                </div>
                <h4 className="text-xs sm:text-sm font-semibold text-[#183B2B] pt-1">Flavorful Favorites</h4>
                <p className="text-[11px] sm:text-xs text-[#77766F] leading-tight">Steamed, fried & tossed to order</p>
              </div>

              <div className="space-y-1">
                <div className="w-8 h-8 rounded-md bg-[#E8EDE3] flex items-center justify-center text-[#183B2B]">
                  <Users className="w-4 h-4" />
                </div>
                <h4 className="text-xs sm:text-sm font-semibold text-[#183B2B] pt-1">Made for Sharing</h4>
                <p className="text-[11px] sm:text-xs text-[#77766F] leading-tight">Plates crafted for group tables</p>
              </div>

              <div className="space-y-1">
                <div className="w-8 h-8 rounded-md bg-[#E8EDE3] flex items-center justify-center text-[#183B2B]">
                  <MapPin className="w-4 h-4" />
                </div>
                <h4 className="text-xs sm:text-sm font-semibold text-[#183B2B] pt-1">Local Dallas Spot</h4>
                <p className="text-[11px] sm:text-xs text-[#77766F] leading-tight">On Preston Road in North Dallas</p>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Food Photography (approx 50-55%) */}
          <div className="lg:col-span-6 xl:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Decorative background aura */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#E8EDE3] to-[#FAF6ED] rounded-3xl transform -rotate-1 -z-10 shadow-inner"></div>

              {/* Main Photo Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FFFDF8] aspect-[4/3] bg-[#E8EDE3]">
                <img
                  src={IMAGE_ASSETS.hero}
                  alt="Artisanal steamed and pan-fried dumplings arranged on dark ceramic tableware with chili dipping sauce"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                  fetchPriority="high"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle bottom gradient for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>

                {/* Decorative Badge */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-[#183B2B]/95 backdrop-blur-md text-[#FFFDF8] px-4 py-2.5 rounded-xl border border-[#23523d] shadow-lg flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#E87932] shrink-0 animate-pulse"></div>
                  <div className="text-xs font-medium tracking-wide">
                    <span className="block text-[10px] uppercase text-[#E8EDE3] tracking-widest font-semibold">Uptown Dumpling</span>
                    <span className="font-serif font-bold text-[#FFFDF8]">Your dumpling cravings start here</span>
                  </div>
                </div>
              </div>

              {/* Small accent detail badge floating top right */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-[#FFFDF8] border border-[#183B2B]/10 shadow-lg rounded-xl px-3.5 py-2 items-center gap-2 text-xs font-semibold text-[#183B2B]">
                <span className="text-[#C74632] text-base leading-none">🥟</span>
                <span>Steamed · Crispy · Spiced</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
