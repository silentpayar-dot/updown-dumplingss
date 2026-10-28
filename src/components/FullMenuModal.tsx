import React, { useState } from 'react';
import { X, Search, Phone, ExternalLink } from 'lucide-react';
import { MENU_ITEMS, RESTAURANT_INFO, MenuItem } from '../data/restaurantData';

interface FullMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDish: (dish: MenuItem) => void;
  onCallOrder: () => void;
}

export const FullMenuModal: React.FC<FullMenuModalProps> = ({
  isOpen,
  onClose,
  onSelectDish,
  onCallOrder
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'dumplings' | 'noodles' | 'rice' | 'sides'>('all');

  if (!isOpen) return null;

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeTab === 'all' || item.category === activeTab;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div 
        className="bg-[#FFFDF8] rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl border border-[#183B2B]/10 animate-scaleUp"
        role="dialog"
        aria-modal="true"
        aria-labelledby="full-menu-title"
      >
        {/* Header */}
        <div className="p-5 sm:p-6 bg-[#183B2B] text-[#FFFDF8] flex items-center justify-between gap-4">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-[#E8EDE3] font-semibold">
              Uptown Dumpling · Complete Menu
            </span>
            <h3 id="full-menu-title" className="font-serif text-2xl sm:text-3xl font-bold text-[#FFFDF8] mt-1">
              Our Full Food Offerings
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#23523d] hover:bg-[#122e22] text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close menu modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Notice & Search Bar */}
        <div className="p-4 sm:p-6 bg-[#F4F7F1] border-b border-[#183B2B]/10 space-y-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#77766F] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search dishes, ingredients, seasonings..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#FFFDF8] border border-[#183B2B]/15 rounded-lg pl-9 pr-4 py-2 text-sm text-[#20231F] focus:outline-none focus:border-[#183B2B] focus:ring-1 focus:ring-[#183B2B]"
              />
            </div>

            {/* Category Filter Buttons */}
            <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
              {(['all', 'dumplings', 'noodles', 'rice', 'sides'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold capitalize whitespace-nowrap transition-colors ${
                    activeTab === cat
                      ? 'bg-[#183B2B] text-[#FFFDF8]'
                      : 'bg-[#FFFDF8] text-[#77766F] hover:text-[#183B2B] border border-[#183B2B]/10'
                  }`}
                >
                  {cat === 'rice' ? 'Rice & Feasts' : cat}
                </button>
              ))}
            </div>
          </div>

          <p className="text-xs text-[#77766F] italic">
            * Note for guests: Menu items, ingredients, and prices are subject to seasonal updates. For exact today's specials and takeout orders, please call +1 214-238-6058.
          </p>
        </div>

        {/* Scrollable Dish Grid */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 divide-y divide-[#183B2B]/10">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12 text-[#77766F]">
              <p className="text-sm">No dishes match "{searchTerm}".</p>
              <button
                onClick={() => { setSearchTerm(''); setActiveTab('all'); }}
                className="mt-3 text-xs text-[#C74632] underline font-medium"
              >
                Reset search filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredItems.map((dish) => (
                <div
                  key={dish.id}
                  onClick={() => onSelectDish(dish)}
                  className="flex gap-4 p-3 rounded-xl hover:bg-[#F4F7F1] cursor-pointer transition-colors border border-transparent hover:border-[#183B2B]/10 group"
                >
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-20 h-20 rounded-lg object-cover shrink-0 bg-[#E8EDE3] group-hover:scale-105 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-serif font-bold text-sm text-[#183B2B] group-hover:text-[#C74632] transition-colors truncate">
                        {dish.name}
                      </h4>
                      <span className="text-xs font-medium text-[#77766F] shrink-0 tabular-nums">
                        {dish.priceNote.split(' ')[0]}
                      </span>
                    </div>
                    <p className="text-xs text-[#77766F] line-clamp-2 mt-1 leading-relaxed">
                      {dish.description}
                    </p>
                    <div className="flex items-center gap-2 mt-2 text-[11px] text-[#C74632] font-medium">
                      <span>View details & portions →</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer info bar */}
        <div className="p-4 bg-[#FAF6ED] border-t border-[#183B2B]/10 flex flex-wrap items-center justify-between gap-3 text-xs text-[#77766F]">
          <div className="flex items-center gap-2">
            <span>Need takeout or party platters?</span>
            <a 
              href={RESTAURANT_INFO.phone.telLink} 
              className="text-[#183B2B] font-bold underline"
            >
              {RESTAURANT_INFO.phone.display}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={RESTAURANT_INFO.googleMaps.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#183B2B] hover:text-[#C74632] font-medium"
            >
              <span>View on Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={() => {
                onClose();
                onCallOrder();
              }}
              className="inline-flex items-center gap-1.5 bg-[#183B2B] text-white px-3.5 py-1.5 rounded-md font-semibold text-xs hover:bg-[#122e22]"
            >
              <Phone className="w-3 h-3 text-[#E87932]" />
              <span>Call to Order</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
