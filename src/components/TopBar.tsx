import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const TopBar: React.FC = () => {
  return (
    <aside aria-label="Restaurant contact and location info" className="bg-[#183B2B] text-[#FFFDF8] text-xs py-2 px-4 border-b border-[#23523d]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Location */}
        <a 
          href={RESTAURANT_INFO.googleMaps.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-[#E8EDE3] hover:text-[#FFFDF8] transition-colors whitespace-nowrap"
          title="Open location on Google Maps"
        >
          <MapPin className="w-3.5 h-3.5 text-[#E87932] shrink-0" />
          <span className="hidden sm:inline">{RESTAURANT_INFO.address.short}</span>
          <span className="sm:hidden">Preston Rd, Dallas TX</span>
        </a>

        {/* Center: Welcome / Brand message */}
        <div className="hidden md:block text-center text-[#E8EDE3]/90 tracking-wide font-medium">
          Fresh Dumplings. Bold Flavors. Made to Share.
        </div>

        {/* Right: Phone */}
        <div className="flex items-center gap-3">
          <a 
            href={RESTAURANT_INFO.phone.telLink}
            className="flex items-center gap-1.5 font-medium text-[#FFFDF8] hover:text-[#E87932] transition-colors whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 text-[#E87932] shrink-0" />
            <span>{RESTAURANT_INFO.phone.display}</span>
          </a>
        </div>
      </div>
    </aside>
  );
};
