import React from 'react';
import { Sparkles, Layers, ShieldCheck, Globe } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface AboutSectionProps {
  onNavigate?: (page: 'home' | 'contact', sectionId?: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="about"
      ref={ref}
      className={`py-20 sm:py-28 bg-[#1e2b70] relative overflow-hidden border-t border-white/10 scroll-mt-16 reveal-fade-up ${
        isVisible ? 'reveal-visible' : ''
      }`}
    >
      {/* Controlled Negative Space & Ambient Lighting */}
      <div className="absolute -top-36 -right-36 w-96 h-96 rounded-full bg-[#f0e846]/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-36 -left-36 w-96 h-96 rounded-full bg-[#ff740e]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial 2-Column Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          
          {/* LEFT: Label & Large Heading (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Small Label */}
            <div className="flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#f0e846]" />
              <span className="text-[#f0e846] font-headline font-semibold text-xs sm:text-sm uppercase tracking-widest">
                ABOUT PUSTAM
              </span>
            </div>

            {/* Large Heading (Fredoka) */}
            <h2 className="font-headline font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15]">
              Paper Products <br className="hidden sm:inline" />
              <span className="text-[#f0e846]">With Purpose</span>.
            </h2>

            {/* Orange micro-accent bar */}
            <div className="w-16 h-1 bg-[#ff740e] rounded-full" />
          </div>

          {/* RIGHT: Short Paragraph & Editable Placeholder (5 cols) */}
          <div className="lg:col-span-5 space-y-5 lg:pt-3">
            {/* Primary Editable Placeholder as requested */}
            <div className="p-5 rounded-2xl bg-[#151f52] border border-[#f0e846]/30 shadow-inner transition-colors hover:border-[#f0e846]/50">
              <p className="font-mono text-xs sm:text-sm text-[#f0e846] leading-relaxed">
                [ADD 2–3 SENTENCE OFFICIAL PUSTAM COMPANY DESCRIPTION HERE]
              </p>
              <p className="text-[11px] text-white/50 mt-2 font-body">
                (Company mission, converting capabilities, and manufacturing scope can be edited here without altering the design hierarchy.)
              </p>
            </div>

            {/* Supporting Concise Statement */}
            <p className="font-body text-sm sm:text-base text-white/85 leading-relaxed">
              Dedicated to manufacturing high-tensile notebooks, office registers, and customized paper solutions engineered for institutional buyers and global supply chains.
            </p>
          </div>

        </div>

        {/* Small Supporting Visual / Placeholder Metric Elements */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Item 1 */}
          <div className="p-5 rounded-2xl bg-[#151f52] border border-white/10 hover:border-[#f0e846]/40 transition-all duration-300 hover:-translate-y-1 group">
            <div className="flex items-center justify-between mb-3">
              <span className="w-8 h-8 rounded-lg bg-[#283890] flex items-center justify-center text-[#f0e846] group-hover:bg-[#f0e846] group-hover:text-[#283890] transition-colors">
                <Layers className="w-4 h-4" />
              </span>
              <span className="w-2 h-2 rounded-full bg-[#ff740e]" />
            </div>
            <div className="font-mono text-xs font-semibold text-[#f0e846] uppercase tracking-wider mb-1">
              [ADD PRODUCTION CAPACITY]
            </div>
            <div className="text-xs text-white/70">
              High-Speed Reel-to-Sheet Converting & Ruling
            </div>
          </div>

          {/* Item 2 */}
          <div className="p-5 rounded-2xl bg-[#151f52] border border-white/10 hover:border-[#ff740e]/40 transition-all duration-300 hover:-translate-y-1 group">
            <div className="flex items-center justify-between mb-3">
              <span className="w-8 h-8 rounded-lg bg-[#283890] flex items-center justify-center text-[#ff740e] group-hover:bg-[#ff740e] group-hover:text-white transition-colors">
                <Sparkles className="w-4 h-4" />
              </span>
              <span className="w-2 h-2 rounded-full bg-[#f0e846]" />
            </div>
            <div className="font-mono text-xs font-semibold text-[#f0e846] uppercase tracking-wider mb-1">
              [ADD PAPER GRADES / GSM]
            </div>
            <div className="text-xs text-white/70">
              High Whiteness & Zero Ink-Bleed Pages
            </div>
          </div>

          {/* Item 3 */}
          <div className="p-5 rounded-2xl bg-[#151f52] border border-white/10 hover:border-[#f0e846]/40 transition-all duration-300 hover:-translate-y-1 group">
            <div className="flex items-center justify-between mb-3">
              <span className="w-8 h-8 rounded-lg bg-[#283890] flex items-center justify-center text-[#f0e846] group-hover:bg-[#f0e846] group-hover:text-[#283890] transition-colors">
                <Globe className="w-4 h-4" />
              </span>
              <span className="w-2 h-2 rounded-full bg-[#ff740e]" />
            </div>
            <div className="font-mono text-xs font-semibold text-[#f0e846] uppercase tracking-wider mb-1">
              [ADD EXPORT FOOTPRINT]
            </div>
            <div className="text-xs text-white/70">
              FCL & LCL International Port Shipments
            </div>
          </div>

          {/* Item 4 */}
          <div className="p-5 rounded-2xl bg-[#151f52] border border-white/10 hover:border-[#ff740e]/40 transition-all duration-300 hover:-translate-y-1 group">
            <div className="flex items-center justify-between mb-3">
              <span className="w-8 h-8 rounded-lg bg-[#283890] flex items-center justify-center text-[#ff740e] group-hover:bg-[#ff740e] group-hover:text-white transition-colors">
                <ShieldCheck className="w-4 h-4" />
              </span>
              <span className="w-2 h-2 rounded-full bg-[#f0e846]" />
            </div>
            <div className="font-mono text-xs font-semibold text-[#f0e846] uppercase tracking-wider mb-1">
              [ADD COMPLIANCE STANDARDS]
            </div>
            <div className="text-xs text-white/70">
              DGFT IEC & MSME UDYAM Registered
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
