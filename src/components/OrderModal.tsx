import React, { useState } from 'react';
import { X, Phone, MapPin, Copy, Check, Clock, Utensils } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenFullMenu: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose, onOpenFullMenu }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const copyAddress = () => {
    navigator.clipboard.writeText(RESTAURANT_INFO.address.full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div 
        className="bg-[#FFFDF8] rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#183B2B]/10 relative animate-scaleUp"
        role="dialog"
        aria-modal="true"
        aria-labelledby="order-modal-title"
      >
        {/* Header */}
        <div className="p-6 bg-[#183B2B] text-[#FFFDF8] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#23523d] flex items-center justify-center text-[#E87932]">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#E8EDE3] font-semibold">
                Uptown Dumpling Dallas
              </span>
              <h3 id="order-modal-title" className="font-serif text-2xl font-bold text-[#FFFDF8]">
                Call to Order / Pickup
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#23523d] hover:bg-[#122e22] text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          <p className="text-sm text-[#20231F]/80 leading-relaxed">
            We prepare each batch of dumplings fresh! To place a pickup order or ask about today's offerings, call our restaurant team directly:
          </p>

          {/* Primary Action Button */}
          <div className="bg-[#FAF6ED] p-4 rounded-xl border border-[#183B2B]/10 flex flex-col items-center text-center space-y-3">
            <span className="text-xs uppercase tracking-wider text-[#77766F] font-semibold">
              Direct Phone Line
            </span>
            <a
              href={RESTAURANT_INFO.phone.telLink}
              className="inline-flex items-center gap-3 bg-[#183B2B] hover:bg-[#122e22] text-[#FFFDF8] px-6 py-3.5 rounded-xl font-bold text-lg transition-all shadow-sm hover:shadow-md active:scale-[0.98] w-full justify-center"
            >
              <Phone className="w-5 h-5 text-[#E87932]" />
              <span>{RESTAURANT_INFO.phone.display}</span>
            </a>
            <span className="text-[11px] text-[#77766F]">
              Tap above on mobile to dial instantly
            </span>
          </div>

          {/* Location & Pickup Info */}
          <div className="space-y-3 text-xs text-[#20231F]/80">
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F4F7F1]">
              <MapPin className="w-4 h-4 text-[#C74632] shrink-0 mt-0.5" />
              <div className="flex-1">
                <strong className="text-[#183B2B] block text-xs">Pickup Location</strong>
                <span className="text-[#77766F]">{RESTAURANT_INFO.address.full}</span>
                <div className="mt-1 flex items-center gap-3">
                  <button
                    onClick={copyAddress}
                    className="text-[11px] font-semibold text-[#183B2B] hover:underline inline-flex items-center gap-1"
                  >
                    {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                    {copied ? 'Copied!' : 'Copy address'}
                  </button>
                  <a
                    href={RESTAURANT_INFO.googleMaps.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-semibold text-[#183B2B] hover:underline"
                  >
                    Directions →
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F4F7F1]">
              <Clock className="w-4 h-4 text-[#E87932] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#183B2B] block text-xs">Hours & Preparation Time</strong>
                <span className="text-[#77766F]">
                  Dumplings typically take 12–18 minutes to steam and pan-crisp. Please call to confirm today's kitchen hours.
                </span>
              </div>
            </div>
          </div>

          {/* Quick Menu browse link */}
          <div className="pt-2 flex items-center justify-between border-t border-[#183B2B]/10">
            <button
              onClick={() => {
                onClose();
                onOpenFullMenu();
              }}
              className="inline-flex items-center gap-1.5 text-xs text-[#183B2B] hover:text-[#C74632] font-semibold transition-colors"
            >
              <Utensils className="w-3.5 h-3.5" />
              <span>Browse Full Menu First</span>
            </button>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-[#77766F] hover:text-[#20231F]"
            >
              Close
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
