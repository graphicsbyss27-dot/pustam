import React from 'react';
import { ArrowRight, Tag, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface WhiteLabelSectionProps {
  onNavigate?: (page: 'home' | 'contact', sectionId?: string) => void;
}

export const WhiteLabelSection: React.FC<WhiteLabelSectionProps> = ({ onNavigate }) => {
  const { ref, isVisible } = useScrollReveal();

  const features = [
    "Product selection & paper specifications (44 – 90 GSM)",
    "Dedicated precision manufacturing & strict batch QC",
    "Export-ready palletized & moisture-resistant packaging",
    "Notebook range development tailored to your regional market",
  ];

  return (
    <section
      id="white-label"
      ref={ref}
      className={`py-24 sm:py-32 bg-[#070b20] relative overflow-hidden border-t border-white/10 scroll-mt-16 select-none reveal-fade-up ${
        isVisible ? 'reveal-visible' : ''
      }`}
    >
      {/* Background Decor */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[600px] h-[500px] bg-[#283890]/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-[450px] h-[400px] bg-[#ff740e]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* LEFT: Content */}
          <div className="lg:col-span-7 space-y-6">

            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md shadow-inner">
              <span className="w-2 h-2 rounded-full bg-[#f0e846]" />
              <span className="text-[#f0e846] font-headline font-semibold text-xs tracking-widest uppercase">
                WHITE-LABEL MANUFACTURING
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-headline font-bold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.12]">
              Create Your Brand <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#f0e846] via-white to-[#ff740e] bg-clip-text text-transparent">
                With Our Machinery.
              </span>
            </h2>

            {/* Description */}
            <p className="font-body text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl">
              Partner with Pustam Paper Products to produce paper stationery under your proprietary branding. We manage paper procurement, printing, converting, finishing, and container logistics so you can focus on building your brand equity.
            </p>

            {/* Feature List with glowing tick badges */}
            <ul className="space-y-3.5 pt-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/[0.06] border border-[#f0e846]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#f0e846]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-body text-xs sm:text-sm text-slate-300">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="pt-4">
              <button
                onClick={() => onNavigate && onNavigate('contact')}
                className="btn-apple-base btn-apple-primary px-8 py-4 text-sm tracking-wide gap-2.5 group min-h-[48px]"
              >
                <span>Discuss Your White-Label Requirements</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

          {/* RIGHT: Visual Bento Card */}
          <div className="lg:col-span-5">
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0e163d]/90 via-[#0a1030]/90 to-[#070b20] border border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-xl group hover:border-[#f0e846]/40 transition-all duration-500">
              
              {/* Glow Accent */}
              <div className="absolute top-0 right-0 w-60 h-60 bg-[#f0e846]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#f0e846]/20 transition-all duration-700" />

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#f0e846] mb-6 shadow-lg group-hover:scale-105 transition-transform">
                <Tag className="w-7 h-7" />
              </div>

              {/* Card Headline */}
              <h3 className="font-headline font-bold text-2xl sm:text-3xl text-white mb-3">
                Your Brand.<br />
                <span className="text-[#f0e846]">Our Infrastructure.</span>
              </h3>

              <p className="font-body text-xs sm:text-sm text-slate-400 leading-relaxed mb-8">
                Strict non-disclosure manufacturing. Every notebook manufactured carries your barcode, logo, and design language with end-to-end quality assurance.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                <div>
                  <div className="font-headline font-black text-3xl sm:text-4xl text-white">25 <span className="text-[#f0e846] text-xl font-bold">MT</span></div>
                  <div className="text-xs text-slate-400 mt-1 font-body">Daily Conversion Capacity</div>
                </div>
                <div>
                  <div className="font-headline font-black text-3xl sm:text-4xl text-white">Est. <span className="text-[#ff740e] text-xl font-bold">2016</span></div>
                  <div className="text-xs text-slate-400 mt-1 font-body">Palghar, Maharashtra</div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
