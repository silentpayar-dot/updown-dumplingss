import React from 'react';
import { Phone, ArrowDown } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface CallToActionProps {
  onCallOrder: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onCallOrder }) => {
  const scrollToMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-[#FAF6ED] border-t border-[#183B2B]/10 relative overflow-hidden">
      
      {/* Decorative subtle background illustration */}
      <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-12 translate-y-12">
        <svg width="340" height="340" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" stroke="#183B2B" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M40 100 C40 150, 160 150, 160 100 C160 70, 130 50, 100 50 C70 50, 40 70, 40 100 Z" stroke="#183B2B" strokeWidth="3" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
        
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#C74632] uppercase">
          <span className="w-5 h-[1.5px] bg-[#C74632]"></span>
          <span>DALLAS DUMPLING DESTINATION</span>
          <span className="w-5 h-[1.5px] bg-[#C74632]"></span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#183B2B] leading-tight text-balance">
          Craving Something Delicious?
        </h2>

        <p className="text-base sm:text-lg text-[#20231F]/80 max-w-xl mx-auto leading-relaxed">
          Make Uptown Dumpling your next stop for satisfying Asian-inspired food in Dallas. Visit our Preston Road dining room or call for takeout.
        </p>

        {/* Buttons */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#menu"
            onClick={scrollToMenu}
            className="inline-flex items-center justify-center gap-2 bg-[#183B2B] hover:bg-[#122e22] text-[#FFFDF8] px-7 py-3.5 rounded-xl text-sm font-semibold transition-all shadow-md hover:shadow-lg active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#183B2B]"
          >
            <span>Explore the Menu</span>
            <ArrowDown className="w-4 h-4 text-[#E87932]" />
          </a>

          <a
            href={RESTAURANT_INFO.phone.telLink}
            onClick={(e) => {
              // Open modal if desktop or initiate call
              if (window.innerWidth >= 768) {
                e.preventDefault();
                onCallOrder();
              }
            }}
            className="inline-flex items-center justify-center gap-2 border-2 border-[#183B2B] text-[#183B2B] hover:bg-[#183B2B] hover:text-[#FFFDF8] px-7 py-3.5 rounded-xl text-sm font-semibold transition-all active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#183B2B]"
          >
            <Phone className="w-4 h-4 text-[#C74632]" />
            <span>Call {RESTAURANT_INFO.phone.display}</span>
          </a>
        </div>

        <p className="text-xs text-[#77766F] pt-2">
          18101 Preston Rd #204c, Dallas, TX 75252 · Takeout & Dine-In Inquiries
        </p>

      </div>
    </section>
  );
};
