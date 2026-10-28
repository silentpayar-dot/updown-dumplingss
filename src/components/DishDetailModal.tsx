import React from 'react';
import { X, Phone, CheckCircle2, Flame, Leaf } from 'lucide-react';
import { MenuItem, RESTAURANT_INFO } from '../data/restaurantData';

interface DishDetailModalProps {
  dish: MenuItem | null;
  onClose: () => void;
  onCallOrder: () => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({ dish, onClose, onCallOrder }) => {
  if (!dish) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div 
        className="bg-[#FFFDF8] rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#183B2B]/10 relative animate-scaleUp"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dish-modal-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#183B2B]"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Dish Image */}
        <div className="relative h-64 w-full bg-[#E8EDE3] overflow-hidden">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
            <span className="text-xs uppercase tracking-wider font-semibold bg-[#183B2B]/90 px-2.5 py-1 rounded-md border border-white/20">
              {dish.category}
            </span>
            <span className="font-serif text-lg font-bold text-[#FAF6ED] tabular-nums">
              {dish.priceNote}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between gap-3">
            <h3 id="dish-modal-title" className="font-serif text-2xl font-bold text-[#183B2B]">
              {dish.name}
            </h3>
          </div>

          <p className="text-sm text-[#20231F]/80 leading-relaxed">
            {dish.description}
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-[#183B2B]/10 text-xs">
            {dish.servings && (
              <span className="inline-flex items-center gap-1 text-[#77766F] bg-[#F4F7F1] px-2.5 py-1 rounded-md">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#183B2B]" />
                Portion: {dish.servings}
              </span>
            )}
            {dish.spicy && (
              <span className="inline-flex items-center gap-1 text-[#C74632] bg-[#FAF0EE] px-2.5 py-1 rounded-md font-medium">
                <Flame className="w-3.5 h-3.5" />
                Spiced with chili oil & roasted peppers
              </span>
            )}
            {dish.vegetarian && (
              <span className="inline-flex items-center gap-1 text-[#183B2B] bg-[#E8EDE3] px-2.5 py-1 rounded-md font-medium">
                <Leaf className="w-3.5 h-3.5" />
                Vegetarian selection
              </span>
            )}
          </div>

          <div className="bg-[#F4F7F1] p-3 rounded-xl text-xs text-[#77766F]">
            <p>
              <strong className="text-[#183B2B]">Note on availability:</strong> Dishes are prepared fresh. Please call our team at{' '}
              <a href={RESTAURANT_INFO.phone.telLink} className="underline text-[#183B2B] font-semibold">
                {RESTAURANT_INFO.phone.display}
              </a>{' '}
              to inquire about daily specials and customize dietary requests.
            </p>
          </div>

          {/* Action */}
          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-lg text-sm text-[#77766F] hover:text-[#20231F] transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onCallOrder();
              }}
              className="inline-flex items-center gap-2 bg-[#183B2B] hover:bg-[#122e22] text-[#FFFDF8] px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#E87932]" />
              <span>Call to Inquire / Order</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
