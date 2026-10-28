import React, { useState } from 'react';
import { MapPin, Phone, ExternalLink, ArrowUp, X } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface FooterProps {
  onOpenFullMenu: () => void;
  onCallOrder: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenFullMenu, onCallOrder }) => {
  const currentYear = new Date().getFullYear();
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-[#183B2B] text-[#FFFDF8] pt-16 pb-12 border-t border-[#23523d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#23523d]">
          
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FFFDF8] flex items-center justify-center text-[#183B2B] shrink-0">
                <svg viewBox="0 0 32 32" className="w-6 h-6 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 18 C6 25, 26 25, 26 18 C26 13, 20 10, 16 10 C12 10, 6 13, 6 18 Z" fill="currentColor" fillOpacity="0.15" />
                  <path d="M6 18 C6 25, 26 25, 26 18 C26 13, 20 10, 16 10 C12 10, 6 13, 6 18 Z" />
                  <path d="M12 11 L13 15" strokeWidth="1.5" />
                  <path d="M16 10 L16 15" strokeWidth="1.5" />
                  <path d="M20 11 L19 15" strokeWidth="1.5" />
                  <path d="M13 6 C13 5, 14 4, 14 3" strokeWidth="1.5" stroke="#E87932" />
                  <path d="M16 7 C16 6, 17 5, 17 4" strokeWidth="1.5" stroke="#E87932" />
                  <path d="M19 6 C19 5, 20 4, 20 3" strokeWidth="1.5" stroke="#E87932" />
                </svg>
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#FFFDF8]">
                Uptown Dumpling
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#E8EDE3]/80 leading-relaxed">
              Little pockets of joy, big flavors. Serving fresh dumplings, rich Asian noodles, and comforting made-to-share dishes in Dallas, Texas.
            </p>

            <div className="text-xs text-[#E8EDE3]/60 pt-2">
              <span>Authentic Asian Cuisine · Preston Rd</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E87932]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-[#E8EDE3]/85">
              <li>
                <a 
                  href="#hero" 
                  onClick={(e) => handleLinkClick(e, 'hero')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => handleLinkClick(e, 'about')}
                  className="hover:text-white transition-colors"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a 
                  href="#menu" 
                  onClick={(e) => handleLinkClick(e, 'menu')}
                  className="hover:text-white transition-colors"
                >
                  Menu & Favorites
                </a>
              </li>
              <li>
                <a 
                  href="#gallery" 
                  onClick={(e) => handleLinkClick(e, 'gallery')}
                  className="hover:text-white transition-colors"
                >
                  Food Gallery
                </a>
              </li>
              <li>
                <a 
                  href="#location" 
                  onClick={(e) => handleLinkClick(e, 'location')}
                  className="hover:text-white transition-colors"
                >
                  Find Us
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => handleLinkClick(e, 'contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact & Hours
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Visit Us */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E87932]">
              Visit Us
            </h4>
            <div className="space-y-2 text-sm text-[#E8EDE3]/85 leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E87932] shrink-0 mt-1" />
                <span>
                  {RESTAURANT_INFO.address.street}<br />
                  {RESTAURANT_INFO.address.city}, {RESTAURANT_INFO.address.state} {RESTAURANT_INFO.address.zip}<br />
                  {RESTAURANT_INFO.address.country}
                </span>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <Phone className="w-4 h-4 text-[#E87932] shrink-0" />
                <a
                  href={RESTAURANT_INFO.phone.telLink}
                  className="font-semibold text-[#FFFDF8] hover:text-[#E87932] transition-colors"
                >
                  {RESTAURANT_INFO.phone.display}
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Helpful Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E87932]">
              Helpful Links
            </h4>
            <ul className="space-y-2 text-sm text-[#E8EDE3]/85">
              <li>
                <a
                  href={RESTAURANT_INFO.googleMaps.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>Google Business Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#E87932]" />
                </a>
              </li>
              <li>
                <a
                  href={RESTAURANT_INFO.googleMaps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>Get Driving Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#E87932]" />
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenFullMenu}
                  className="hover:text-white text-left transition-colors"
                >
                  View Full Menu
                </button>
              </li>
              <li>
                <button
                  onClick={onCallOrder}
                  className="hover:text-white text-left transition-colors"
                >
                  Call the Restaurant
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E8EDE3]/70">
          <p>© {currentYear} Uptown Dumpling. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setLegalModal('privacy')}
              className="hover:text-white underline underline-offset-2 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setLegalModal('terms')}
              className="hover:text-white underline underline-offset-2 transition-colors"
            >
              Terms of Service
            </button>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-white transition-colors p-1"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Legal Notice Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-[#FFFDF8] text-[#20231F] rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl border border-[#183B2B]/10 relative animate-scaleUp">
            <button
              onClick={() => setLegalModal(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#F4F7F1] hover:bg-[#E8EDE3] text-[#183B2B] flex items-center justify-center transition-colors"
              aria-label="Close legal modal"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="font-serif text-2xl font-bold text-[#183B2B]">
              {legalModal === 'privacy' ? 'Privacy Notice' : 'Terms of Service'}
            </h3>

            <div className="text-xs text-[#20231F]/80 space-y-2 leading-relaxed max-h-60 overflow-y-auto pr-2">
              {legalModal === 'privacy' ? (
                <>
                  <p>
                    Uptown Dumpling ("we", "us", or "our") respects your privacy. This informational website does not track personal browsing data or sell any visitor information.
                  </p>
                  <p>
                    When you call our restaurant at +1 214-238-6058 or visit our physical location at 18101 Preston Rd #204c, Dallas, TX, any information you provide directly (such as order details for takeout) is used solely to fulfill your order and provide quality customer service.
                  </p>
                  <p>
                    Third-party links, such as Google Maps and our Google Business Profile, are governed by Google's respective privacy policy.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Welcome to the Uptown Dumpling website. Content on this site is provided for general informational purposes to help visitors discover our Dallas restaurant and food offerings.
                  </p>
                  <p>
                    Menu items, seasonal availability, and prices may change based on ingredients and kitchen operations. Please call +1 214-238-6058 to verify current offerings and place pickup orders.
                  </p>
                </>
              )}
            </div>

            <div className="pt-2 text-right">
              <button
                onClick={() => setLegalModal(null)}
                className="bg-[#183B2B] text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-[#122e22]"
              >
                Close Notice
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
