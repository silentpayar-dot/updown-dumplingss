import React, { useState } from 'react';
import { MapPin, Phone, ExternalLink, Clock, Copy, Check } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(RESTAURANT_INFO.address.full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location" className="py-20 bg-[#F4F7F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#C74632] uppercase">
            <span className="w-4 h-[1.5px] bg-[#C74632]"></span>
            <span>FIND OUR RESTAURANT</span>
            <span className="w-4 h-[1.5px] bg-[#C74632]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#183B2B]">
            Come Find Us
          </h2>

          <p className="text-base text-[#20231F]/80 leading-relaxed">
            Conveniently located on Preston Road in North Dallas, ready to serve you fresh dumplings.
          </p>
        </div>

        {/* Location & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Details Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#FFFDF8] rounded-2xl p-6 sm:p-8 border border-[#183B2B]/10 shadow-sm flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              
              {/* Restaurant Name & Address */}
              <div className="space-y-2">
                <span className="text-[11px] uppercase tracking-wider text-[#77766F] font-semibold">
                  Location & Address
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#183B2B]">
                  {RESTAURANT_INFO.name}
                </h3>
                <p className="text-sm text-[#20231F]/85 leading-relaxed">
                  {RESTAURANT_INFO.address.street}<br />
                  {RESTAURANT_INFO.address.city}, {RESTAURANT_INFO.address.state} {RESTAURANT_INFO.address.zip}<br />
                  {RESTAURANT_INFO.address.country}
                </p>

                <div className="pt-1">
                  <button
                    onClick={copyAddress}
                    className="inline-flex items-center gap-1.5 text-xs text-[#183B2B] hover:text-[#C74632] font-medium py-1 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-semibold">Address copied to clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy full address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Telephone */}
              <div className="pt-4 border-t border-[#183B2B]/10 space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-[#77766F] font-semibold">
                  Telephone Contact
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={RESTAURANT_INFO.phone.telLink}
                    className="font-serif text-xl font-bold text-[#183B2B] hover:text-[#C74632] transition-colors"
                  >
                    {RESTAURANT_INFO.phone.display}
                  </a>
                </div>
                <p className="text-xs text-[#77766F]">
                  Call for takeout orders, today's batch availability, and party platters.
                </p>
              </div>

              {/* Operating Hours (Faithfully configured) */}
              <div className="pt-4 border-t border-[#183B2B]/10 space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#E87932]" />
                  <span className="text-[11px] uppercase tracking-wider text-[#77766F] font-semibold">
                    Operating Hours
                  </span>
                </div>
                
                <div className="p-3 bg-[#F4F7F1] rounded-xl text-xs space-y-1">
                  <p className="font-semibold text-[#183B2B]">
                    {RESTAURANT_INFO.hours.statusText}
                  </p>
                  <p className="text-[#77766F] leading-relaxed">
                    {RESTAURANT_INFO.hours.note}
                  </p>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-[#183B2B]/10 flex flex-col sm:flex-row gap-3">
              <a
                href={RESTAURANT_INFO.googleMaps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#183B2B] hover:bg-[#122e22] text-[#FFFDF8] py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-xs"
              >
                <MapPin className="w-4 h-4 text-[#E87932]" />
                <span>Get Directions</span>
              </a>

              <a
                href={RESTAURANT_INFO.phone.telLink}
                className="inline-flex items-center justify-center gap-2 border-2 border-[#183B2B] text-[#183B2B] hover:bg-[#183B2B] hover:text-[#FFFDF8] py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all"
              >
                <Phone className="w-4 h-4 text-[#C74632]" />
                <span>Call Restaurant</span>
              </a>
            </div>

          </div>

          {/* Right Map View (7 cols) */}
          <div className="lg:col-span-7 bg-[#FFFDF8] rounded-2xl overflow-hidden border border-[#183B2B]/10 shadow-sm flex flex-col">
            <div className="relative w-full h-80 lg:h-full min-h-[380px] bg-[#E8EDE3]">
              <iframe
                title="Uptown Dumpling Dallas Location Map"
                src="https://maps.google.com/maps?q=18101+Preston+Rd+%23204c,+Dallas,+TX+75252&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Floating Link to Google Profile */}
              <div className="absolute bottom-4 right-4 z-10">
                <a
                  href={RESTAURANT_INFO.googleMaps.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#FFFDF8]/95 backdrop-blur-md text-[#183B2B] hover:text-[#C74632] px-3.5 py-2 rounded-lg text-xs font-semibold shadow-md border border-[#183B2B]/10 transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="p-4 bg-[#FAF6ED] border-t border-[#183B2B]/10 flex items-center justify-between text-xs text-[#77766F]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#183B2B]"></span>
                <span>Plaza parking available on-site</span>
              </div>
              <a
                href={RESTAURANT_INFO.googleMaps.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#183B2B] font-semibold hover:underline"
              >
                View Google Business Profile →
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
