import React, { useState } from 'react';
import { ArrowRight, Flame, Leaf, Eye, Phone } from 'lucide-react';
import { MENU_ITEMS, MenuItem } from '../data/restaurantData';

interface MenuSectionProps {
  onSelectDish: (dish: MenuItem) => void;
  onOpenFullMenu: () => void;
  onCallOrder: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onSelectDish,
  onOpenFullMenu,
  onCallOrder,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'dumplings' | 'noodles' | 'rice' | 'sides'>('all');

  const categories = [
    { key: 'all', label: 'All Favorites' },
    { key: 'dumplings', label: 'Dumplings' },
    { key: 'noodles', label: 'Noodles' },
    { key: 'rice', label: 'Rice & Entrées' },
    { key: 'sides', label: 'Sides' },
  ] as const;

  const filteredDishes = MENU_ITEMS.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  return (
    <section id="menu" className="py-20 bg-[#FFFDF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#C74632] uppercase">
            <span className="w-4 h-[1.5px] bg-[#C74632]"></span>
            <span>DELICIOUS FAVORITES</span>
            <span className="w-4 h-[1.5px] bg-[#C74632]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#183B2B]">
            Something Good Is Waiting
          </h2>

          <p className="text-base text-[#20231F]/80 leading-relaxed">
            Explore a selection of dumplings and Asian-inspired favorites.
          </p>
        </div>

        {/* Category Filters (Segmented Controls) */}
        <div className="flex justify-center mt-10 mb-12">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-[#F4F7F1] rounded-xl border border-[#183B2B]/10 max-w-full overflow-x-auto">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#183B2B] ${
                    isActive
                      ? 'bg-[#183B2B] text-[#FFFDF8] shadow-xs'
                      : 'text-[#77766F] hover:text-[#183B2B] hover:bg-white/60'
                  }`}
                  aria-pressed={isActive}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-[#FFFDF8] rounded-2xl overflow-hidden border border-[#183B2B]/10 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              {/* Card Image */}
              <div 
                className="relative aspect-[4/3] bg-[#E8EDE3] overflow-hidden cursor-pointer"
                onClick={() => onSelectDish(dish)}
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

                {/* Badge if present */}
                {dish.badge && (
                  <div className="absolute top-3 left-3 bg-[#183B2B]/90 backdrop-blur-xs text-[#FFFDF8] text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-md border border-white/20">
                    {dish.badge}
                  </div>
                )}

                {/* Dietary icons */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5">
                  {dish.spicy && (
                    <span 
                      className="w-7 h-7 rounded-full bg-[#C74632]/90 backdrop-blur-xs text-white flex items-center justify-center shadow-xs" 
                      title="Spicy dish"
                    >
                      <Flame className="w-3.5 h-3.5" />
                    </span>
                  )}
                  {dish.vegetarian && (
                    <span 
                      className="w-7 h-7 rounded-full bg-[#183B2B]/90 backdrop-blur-xs text-white flex items-center justify-center shadow-xs" 
                      title="Vegetarian selection"
                    >
                      <Leaf className="w-3.5 h-3.5 text-[#E8EDE3]" />
                    </span>
                  )}
                </div>

                {/* Quick inspect overlay button */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold bg-white/95 text-[#183B2B] px-3 py-1.5 rounded-lg shadow-sm">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Quick View</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-3">
                    <h3 
                      onClick={() => onSelectDish(dish)}
                      className="font-serif text-xl font-bold text-[#183B2B] group-hover:text-[#C74632] transition-colors cursor-pointer leading-snug"
                    >
                      {dish.name}
                    </h3>
                  </div>

                  {/* Clean unboxed metadata */}
                  <div className="flex items-center gap-2 text-xs text-[#77766F]">
                    <span className="capitalize">{dish.category}</span>
                    {dish.servings && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span>{dish.servings}</span>
                      </>
                    )}
                  </div>

                  <p className="text-sm text-[#20231F]/75 leading-relaxed line-clamp-3">
                    {dish.description}
                  </p>
                </div>

                {/* Price and Action Bar */}
                <div className="pt-4 border-t border-[#183B2B]/10 flex items-center justify-between gap-2">
                  <div className="flex flex-col">
                    <span className="font-serif text-lg font-bold text-[#183B2B] tabular-nums">
                      {dish.priceNote}
                    </span>
                    <span className="text-[10px] text-[#77766F] uppercase tracking-wider">
                      Prepared Fresh
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectDish(dish)}
                      className="text-xs font-semibold text-[#183B2B] hover:text-[#C74632] px-2.5 py-1.5 rounded-md hover:bg-[#F4F7F1] transition-colors"
                    >
                      Details
                    </button>
                    <button
                      onClick={onCallOrder}
                      className="inline-flex items-center gap-1.5 bg-[#183B2B] hover:bg-[#122e22] text-[#FFFDF8] text-xs font-semibold px-3 py-2 rounded-lg transition-colors shadow-2xs"
                    >
                      <Phone className="w-3 h-3 text-[#E87932]" />
                      <span>Order</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenFullMenu}
            className="inline-flex items-center gap-2 bg-[#183B2B] hover:bg-[#122e22] text-[#FFFDF8] px-8 py-4 rounded-xl text-sm font-semibold transition-all shadow-md hover:shadow-lg active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#183B2B]"
          >
            <span>View Full Menu</span>
            <ArrowRight className="w-4 h-4 text-[#E87932]" />
          </button>
          <p className="text-xs text-[#77766F] mt-3">
            Click to browse complete noodle selections, dim sum baskets, and house side dishes
          </p>
        </div>

      </div>
    </section>
  );
};
