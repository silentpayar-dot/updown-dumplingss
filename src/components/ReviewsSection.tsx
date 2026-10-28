import React from 'react';
import { ExternalLink, MessageSquareHeart } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#FFFDF8] border-t border-[#183B2B]/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#C74632] uppercase">
            <span className="w-4 h-[1.5px] bg-[#C74632]"></span>
            <span>COMMUNITY FEEDBACK</span>
            <span className="w-4 h-[1.5px] bg-[#C74632]"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#183B2B]">
            What Guests Are Saying
          </h2>

          <p className="text-base text-[#20231F]/80 leading-relaxed max-w-xl mx-auto">
            We love hearing from our guests across Dallas. Read genuine customer experiences or share your own review on our official Google Business Profile.
          </p>
        </div>

        {/* Central Google Business Review Card */}
        <div className="bg-[#F4F7F1] rounded-3xl p-8 sm:p-12 border border-[#183B2B]/10 shadow-xs text-center space-y-6 max-w-3xl mx-auto">
          
          <div className="w-14 h-14 rounded-2xl bg-[#183B2B] text-[#FFFDF8] flex items-center justify-center mx-auto shadow-sm">
            <MessageSquareHeart className="w-7 h-7 text-[#E87932]" />
          </div>

          <div className="space-y-3">
            <h3 className="font-serif text-2xl font-bold text-[#183B2B]">
              Real Feedback from Local Dallas Diners
            </h3>

            <p className="text-sm sm:text-base text-[#20231F]/80 max-w-xl mx-auto leading-relaxed">
              We uphold transparency and believe real diners give the best perspective. Read verified reviews, see recent customer photos, and get live updates directly on Google.
            </p>
          </div>

          {/* Clean Google CTA */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={RESTAURANT_INFO.googleMaps.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#183B2B] hover:bg-[#122e22] text-[#FFFDF8] px-8 py-3.5 rounded-xl text-sm font-semibold transition-all shadow-sm hover:shadow-md active:scale-[0.98]"
            >
              <span>View Us on Google</span>
              <ExternalLink className="w-4 h-4 text-[#E87932]" />
            </a>
          </div>

          <p className="text-xs text-[#77766F] pt-2">
            Have you dined with us recently? We invite you to leave your feedback and help your neighbors discover great dumplings.
          </p>

        </div>

      </div>
    </section>
  );
};
