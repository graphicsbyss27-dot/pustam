import React from 'react';
import { ArrowRight, Tag, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface WhiteLabelSectionProps {
  onNavigate?: (page: 'home' | 'contact', sectionId?: string) => void;
}

export const WhiteLabelSection: React.FC<WhiteLabelSectionProps> = ({ onNavigate }) => {
  const { ref, isVisible } = useScrollReveal();

  const features = [
    "Product selection & paper specifications",
    "Manufacturing & quality control",
    "Export-ready packaging",
    "Notebook range development for your market",
  ];

  return (
    <section
      id="white-label"
      ref={ref}
      className={`py-20 sm:py-28 bg-[#283890] relative overflow-hidden border-t border-white/10 scroll-mt-16 select-none reveal-fade-up ${
        isVisible ? 'reveal-visible' : ''
      }`}
    >
      {/* Background Decor */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#1e2b70]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 left-0 w-[400px] h-[400px] bg-[#f0e846]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT: Content */}
          <div className="lg:col-span-7 space-y-6">

            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#f0e846]" />
              <span className="text-[#f0e846] font-headline font-semibold text-xs sm:text-sm uppercase tracking-widest">
                WHITE-LABEL MANUFACTURING
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-headline font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15]">
              Create Your Brand <span className="text-[#f0e846]">With Us</span>.
            </h2>

            {/* Description */}
            <p className="font-body text-sm sm:text-base text-white/85 leading-relaxed max-w-xl">
              Partner with Pustam Paper Products to manufacture notebooks under your own brand. From product selection and paper specifications to manufacturing, quality control and export-ready packaging, we help you develop your notebook range for your target market.
            </p>

            {/* Feature List */}
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#f0e846] shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-white/85">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button
              onClick={() => onNavigate && onNavigate('contact')}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#f0e846] hover:bg-[#ff740e] text-[#283890] hover:text-white font-headline font-bold text-sm tracking-wide transition-all duration-200 shadow-lg hover:-translate-y-0.5 active:translate-y-0 group min-h-[48px]"
            >
              <span>Discuss Your Requirements</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

          </div>

          {/* RIGHT: Visual Card */}
          <div className="lg:col-span-5">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#151f52] border border-white/15 shadow-2xl relative overflow-hidden">
              
              {/* Glow Accent */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#f0e846]/8 rounded-full blur-2xl pointer-events-none" />

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-[#283890] border border-[#f0e846]/30 flex items-center justify-center text-[#f0e846] mb-6 shadow-lg">
                <Tag className="w-7 h-7" />
              </div>

              {/* Card Headline */}
              <h3 className="font-headline font-bold text-xl sm:text-2xl text-white mb-3">
                Your Brand.<br />Our Expertise.
              </h3>

              <p className="font-body text-sm text-white/75 leading-relaxed mb-6">
                We manufacture paper products for other brands. You own your brand — we handle the production, quality and packaging.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-2 gap-4 pt-5 border-t border-white/10">
                <div>
                  <div className="font-headline font-bold text-2xl text-[#f0e846]">25 MT</div>
                  <div className="text-xs text-white/60 mt-0.5">Daily paper conversion capacity</div>
                </div>
                <div>
                  <div className="font-headline font-bold text-2xl text-[#f0e846]">Est. 2016</div>
                  <div className="text-xs text-white/60 mt-0.5">Palghar, Maharashtra</div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
