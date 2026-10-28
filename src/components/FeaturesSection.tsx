import React from 'react';
import { Utensils, HeartHandshake, MapPin, PhoneCall } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Utensils,
      title: 'Dumpling Favorites',
      description: 'Discover dumplings and satisfying Asian-inspired dishes prepared to hit every comfort food craving.',
      accent: 'text-[#E87932]'
    },
    {
      icon: HeartHandshake,
      title: 'A Welcoming Experience',
      description: 'Enjoy a relaxed place to meet, eat, and share a meal with loved ones, friends, or coworkers.',
      accent: 'text-[#183B2B]'
    },
    {
      icon: MapPin,
      title: 'Convenient Location',
      description: `Find us on Preston Road in Dallas, Texas (${RESTAURANT_INFO.address.street}), with easy parking and access.`,
      accent: 'text-[#C74632]'
    },
    {
      icon: PhoneCall,
      title: 'Easy to Reach',
      description: `Call us directly at ${RESTAURANT_INFO.phone.display} for questions about the menu, daily dishes, and visiting.`,
      accent: 'text-[#183B2B]'
    }
  ];

  return (
    <section className="py-20 bg-[#F4F7F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#C74632] uppercase">
            <span className="w-4 h-[1.5px] bg-[#C74632]"></span>
            <span>WHY UPTOWN DUMPLING</span>
            <span className="w-4 h-[1.5px] bg-[#C74632]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#183B2B]">
            Why Visit Uptown Dumpling?
          </h2>

          <p className="text-base text-[#20231F]/80 leading-relaxed">
            A dedicated Dallas dumpling destination crafted for good company and satisfying flavors.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="bg-[#FFFDF8] rounded-2xl p-7 border border-[#183B2B]/10 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#E8EDE3] flex items-center justify-center">
                    <Icon className={`w-6 h-6 ${feat.accent}`} />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#183B2B]">
                    {feat.title}
                  </h3>

                  <p className="text-sm text-[#20231F]/75 leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-4 mt-2 border-t border-[#183B2B]/5">
                  <span className="text-[11px] font-semibold text-[#77766F] uppercase tracking-wider">
                    Uptown Dumpling Dallas
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
