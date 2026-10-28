import React from 'react';
import { Sparkles, HeartHandshake, Compass, ArrowRight } from 'lucide-react';
import { RESTAURANT_INFO, IMAGE_ASSETS } from '../data/restaurantData';

export const AboutSection: React.FC = () => {
  const scrollToMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-[#F4F7F1] border-y border-[#183B2B]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-[#FFFDF8] aspect-[4/3] bg-[#E8EDE3]">
                <img
                  src={IMAGE_ASSETS.about}
                  alt="Delicate traditional bamboo steamer basket filled with steaming soup dumplings xiao long bao"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Accent Floating Tag */}
              <div className="absolute -bottom-5 -right-3 sm:right-6 bg-[#183B2B] text-[#FFFDF8] rounded-xl px-4 py-3 shadow-lg border border-[#23523d] max-w-xs">
                <p className="font-serif italic text-sm text-[#E8EDE3]">
                  "Crafted with care, served with warmth."
                </p>
                <span className="block text-[10px] uppercase tracking-wider text-[#E87932] font-semibold mt-1">
                  Uptown Dumpling Dallas
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Story & 3 Feature Blocks */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#C74632] uppercase">
              <span className="w-6 h-[1.5px] bg-[#C74632]"></span>
              <span>WELCOME TO UPTOWN DUMPLING</span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#183B2B] leading-tight text-balance">
              Good Food. Great Company.
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#20231F]/80 leading-relaxed">
              At Uptown Dumpling, every visit is an opportunity to enjoy comforting Asian flavors in a welcoming setting. Whether you're stopping by for a quick bite, meeting friends, or sharing a meal with family, we're here to make your dining experience enjoyable.
            </p>

            {/* 3 Feature Blocks */}
            <div className="space-y-4 pt-2">
              
              <div className="flex items-start gap-4 p-3.5 rounded-xl bg-[#FFFDF8] border border-[#183B2B]/5 shadow-xs transition-colors hover:border-[#183B2B]/20">
                <div className="w-10 h-10 rounded-lg bg-[#E8EDE3] flex items-center justify-center text-[#183B2B] shrink-0">
                  <Sparkles className="w-5 h-5 text-[#E87932]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#183B2B]">1. Flavorful Favorites</h3>
                  <p className="text-xs sm:text-sm text-[#77766F] mt-0.5">
                    Explore dumplings and other satisfying dishes cooked to bring comforting warmth and rich character.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3.5 rounded-xl bg-[#FFFDF8] border border-[#183B2B]/5 shadow-xs transition-colors hover:border-[#183B2B]/20">
                <div className="w-10 h-10 rounded-lg bg-[#E8EDE3] flex items-center justify-center text-[#183B2B] shrink-0">
                  <HeartHandshake className="w-5 h-5 text-[#183B2B]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#183B2B]">2. Made to Share</h3>
                  <p className="text-xs sm:text-sm text-[#77766F] mt-0.5">
                    Find dishes that are perfect for enjoying together—pass the baskets, dip, and savor every bite.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-3.5 rounded-xl bg-[#FFFDF8] border border-[#183B2B]/5 shadow-xs transition-colors hover:border-[#183B2B]/20">
                <div className="w-10 h-10 rounded-lg bg-[#E8EDE3] flex items-center justify-center text-[#183B2B] shrink-0">
                  <Compass className="w-5 h-5 text-[#C74632]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#183B2B]">3. A Dallas Destination</h3>
                  <p className="text-xs sm:text-sm text-[#77766F] mt-0.5">
                    Visit us at our Preston Road location ({RESTAURANT_INFO.address.street}), easily accessible for North Dallas food lovers.
                  </p>
                </div>
              </div>

            </div>

            {/* CTA */}
            <div className="pt-2">
              <a
                href="#menu"
                onClick={scrollToMenu}
                className="inline-flex items-center gap-2 bg-[#183B2B] hover:bg-[#122e22] text-[#FFFDF8] px-6 py-3 rounded-lg text-sm font-semibold transition-all shadow-sm hover:shadow"
              >
                <span>Discover Our Menu</span>
                <ArrowRight className="w-4 h-4 text-[#E87932]" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
