import React from 'react';
import { Sparkles, Layers, Globe, Tag } from 'lucide-react';
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
      className={`py-20 sm:py-28 bg-white relative overflow-hidden scroll-mt-16 reveal-fade-up ${
        isVisible ? 'reveal-visible' : ''
      }`}
    >
      {/* Subtle blue/orange ambient tints on white */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#283890]/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#ff740e]/5 blur-3xl pointer-events-none" />
      {/* Top tri-colour accent stripe */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#283890] via-[#f0e846] to-[#ff740e]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Editorial 2-Column Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">

          {/* LEFT: Label & Large Heading (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#283890]" />
              <span className="text-[#283890] font-headline font-semibold text-xs sm:text-sm uppercase tracking-widest">
                ABOUT PUSTAM
              </span>
            </div>

            <h2 className="font-headline font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#151f52] tracking-tight leading-[1.15]">
              Paper Products <br className="hidden sm:inline" />
              <span className="text-[#283890]">With Purpose</span>.
            </h2>

            <div className="w-16 h-1 bg-[#ff740e] rounded-full" />
          </div>

          {/* RIGHT: Official Company Description (5 cols) */}
          <div className="lg:col-span-5 space-y-5 lg:pt-3">
            <p className="font-body text-sm sm:text-base text-slate-600 leading-relaxed">
              Established in 2016 and based in Palghar, India, we are a dedicated white-label manufacturer of paper notebooks. We partner with recognised Indian brands and merchant exporters to produce notebooks across every category, backed by a conversion capacity of 25 metric tonnes of paper per day. Our model is simple: we manage manufacturing, quality control and export-ready packaging, so our partners can focus on building their brands. We also supply directly to international buyers, offering consistent quality, dependable lead times and the scale to support growing orders.
            </p>
          </div>

        </div>

        {/* Four Information Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          <div className="p-5 rounded-2xl bg-[#f5f7ff] border border-[#283890]/10 hover:border-[#283890]/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
            <div className="flex items-center justify-between mb-3">
              <span className="w-8 h-8 rounded-lg bg-[#283890] flex items-center justify-center text-[#f0e846] group-hover:bg-[#f0e846] group-hover:text-[#283890] transition-colors">
                <Layers className="w-4 h-4" />
              </span>
              <span className="w-2 h-2 rounded-full bg-[#ff740e]" />
            </div>
            <div className="font-headline font-bold text-sm sm:text-base text-[#151f52] mb-1">25 Metric Tonnes / Day</div>
            <div className="text-xs text-slate-500 font-body leading-relaxed">Paper conversion capacity for scalable notebook manufacturing.</div>
          </div>

          <div className="p-5 rounded-2xl bg-[#f5f7ff] border border-[#283890]/10 hover:border-[#ff740e]/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
            <div className="flex items-center justify-between mb-3">
              <span className="w-8 h-8 rounded-lg bg-[#283890] flex items-center justify-center text-[#ff740e] group-hover:bg-[#ff740e] group-hover:text-white transition-colors">
                <Sparkles className="w-4 h-4" />
              </span>
              <span className="w-2 h-2 rounded-full bg-[#f0e846] ring-1 ring-slate-200" />
            </div>
            <div className="font-headline font-bold text-sm sm:text-base text-[#151f52] mb-1">44 GSM – 90 GSM</div>
            <div className="text-xs text-slate-500 font-body leading-relaxed">Paper grades ranging from recycled to virgin, per product and customer requirements.</div>
          </div>

          <div className="p-5 rounded-2xl bg-[#f5f7ff] border border-[#283890]/10 hover:border-[#283890]/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
            <div className="flex items-center justify-between mb-3">
              <span className="w-8 h-8 rounded-lg bg-[#283890] flex items-center justify-center text-[#f0e846] group-hover:bg-[#f0e846] group-hover:text-[#283890] transition-colors">
                <Globe className="w-4 h-4" />
              </span>
              <span className="w-2 h-2 rounded-full bg-[#ff740e]" />
            </div>
            <div className="font-headline font-bold text-sm sm:text-base text-[#151f52] mb-1">Worldwide Shipping</div>
            <div className="text-xs text-slate-500 font-body leading-relaxed">Supplying international buyers with export-ready paper products.</div>
          </div>

          <div className="p-5 rounded-2xl bg-[#f5f7ff] border border-[#283890]/10 hover:border-[#ff740e]/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
            <div className="flex items-center justify-between mb-3">
              <span className="w-8 h-8 rounded-lg bg-[#283890] flex items-center justify-center text-[#ff740e] group-hover:bg-[#ff740e] group-hover:text-white transition-colors">
                <Tag className="w-4 h-4" />
              </span>
              <span className="w-2 h-2 rounded-full bg-[#f0e846] ring-1 ring-slate-200" />
            </div>
            <div className="font-headline font-bold text-sm sm:text-base text-[#151f52] mb-1">Create Your Brand With Us</div>
            <div className="text-xs text-slate-500 font-body leading-relaxed">Your brand, our manufacturing expertise — full white-label service.</div>
          </div>

        </div>

      </div>
    </section>
  );
};
