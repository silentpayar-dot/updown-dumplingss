import React, { useState } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  onOpenOrderModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Our Story', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Find Us', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFFDF8]/95 backdrop-blur-md border-b border-[#183B2B]/10 transition-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          
          {/* Brand Logo Zone */}
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#183B2B] rounded-lg p-1"
          >
            {/* Custom SVG Dumpling Emblem */}
            <div className="w-10 h-10 rounded-full bg-[#183B2B] flex items-center justify-center text-[#FFFDF8] shrink-0 shadow-sm transition-transform group-hover:scale-105">
              <svg viewBox="0 0 32 32" className="w-6 h-6 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round">
                {/* Dumpling outline */}
                <path d="M6 18 C6 25, 26 25, 26 18 C26 13, 20 10, 16 10 C12 10, 6 13, 6 18 Z" fill="currentColor" fillOpacity="0.15" />
                <path d="M6 18 C6 25, 26 25, 26 18 C26 13, 20 10, 16 10 C12 10, 6 13, 6 18 Z" />
                {/* Pleats */}
                <path d="M12 11 L13 15" strokeWidth="1.5" />
                <path d="M16 10 L16 15" strokeWidth="1.5" />
                <path d="M20 11 L19 15" strokeWidth="1.5" />
                {/* Steam lines */}
                <path d="M13 6 C13 5, 14 4, 14 3" strokeWidth="1.5" stroke="#E87932" />
                <path d="M16 7 C16 6, 17 5, 17 4" strokeWidth="1.5" stroke="#E87932" />
                <path d="M19 6 C19 5, 20 4, 20 3" strokeWidth="1.5" stroke="#E87932" />
              </svg>
            </div>
            
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#183B2B] leading-none">
                Uptown Dumpling
              </span>
              <span className="text-[11px] uppercase tracking-widest text-[#77766F] font-medium mt-1">
                Dallas · Preston Rd
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-[#20231F]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-[#183B2B] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#C74632] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Call to Order */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenOrderModal}
              className="inline-flex items-center gap-2 bg-[#183B2B] hover:bg-[#122e22] text-[#FFFDF8] px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-sm hover:shadow active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#183B2B]"
            >
              <PhoneCall className="w-4 h-4 text-[#E87932]" />
              <span>Call to Order</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenOrderModal}
              className="sm:hidden p-2 rounded-lg text-[#183B2B] hover:bg-[#E8EDE3]/50 transition-colors"
              aria-label="Call restaurant"
            >
              <PhoneCall className="w-5 h-5 text-[#C74632]" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#183B2B] hover:bg-[#E8EDE3]/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#183B2B]"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFDF8] border-b border-[#183B2B]/10 px-4 pt-2 pb-6 space-y-3 animate-fadeIn">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-[#20231F] hover:bg-[#E8EDE3] hover:text-[#183B2B] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-[#183B2B]/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrderModal();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#183B2B] text-[#FFFDF8] py-3 rounded-lg text-sm font-semibold shadow-sm"
            >
              <PhoneCall className="w-4 h-4 text-[#E87932]" />
              <span>Call to Order: {RESTAURANT_INFO.phone.display}</span>
            </button>
            <a
              href={RESTAURANT_INFO.googleMaps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center text-xs text-[#77766F] hover:text-[#183B2B] py-1"
            >
              18101 Preston Rd #204c, Dallas, TX 75252
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
