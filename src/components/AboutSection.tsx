import React from 'react';
import { Sparkles, Layers, Globe, Tag, ArrowRight, CheckCircle2 } from 'lucide-react';
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
      className={`py-24 sm:py-32 bg-gradient-to-b from-white via-[#f8faff] to-[#eef3fb] relative overflow-hidden scroll-mt-16 reveal-fade-up ${
        isVisible ? 'reveal-visible' : ''
      }`}
    >
      {/* Background subtle ambient mesh tints */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#283890]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[350px] bg-[#ff740e]/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Subtle fine dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#283890 1.2px, transparent 1.2px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Clean Editorial Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="seq-item seq-delay-1 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#283890]/8 border border-[#283890]/15 backdrop-blur-md mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#283890]" />
            <span className="text-[#283890] font-headline font-semibold text-xs tracking-widest uppercase">
              ABOUT PUSTAM
            </span>
          </div>

          <h2 className="seq-item seq-delay-2 font-headline font-bold text-3xl sm:text-5xl md:text-6xl text-[#151f52] tracking-tight leading-[1.12]">
            Paper Products <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#283890] via-[#1e2b70] to-[#ff740e] bg-clip-text text-transparent">
              With Purpose.
            </span>
          </h2>

          <div className="seq-item seq-delay-3 w-16 h-1.5 bg-[#ff740e] rounded-full mt-4" />
        </div>

        {/* Cohesive Creative Bento Grid (All exact information organized into high-impact cards) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">

          {/* Bento Card 1: Core Company Story & Operating Model (8 cols) */}
          <div className="card-entrance seq-delay-4 md:col-span-8 rounded-3xl bg-white/95 border border-slate-200/90 p-7 sm:p-9 relative overflow-hidden backdrop-blur-xl group hover:border-[#283890]/40 transition-all duration-500 shadow-xl shadow-blue-950/5 flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#283890]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#283890]/10 transition-all duration-700" />

            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#283890]/8 border border-[#283890]/15 text-[#283890] text-xs font-mono font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#283890] animate-pulse" />
                  Est. 2016 · Palghar, India
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Dedicated White-Label Manufacturer
                </div>
              </div>

              <h3 className="font-headline font-bold text-xl sm:text-2xl text-[#151f52] mb-3.5 tracking-tight">
                Our Operating Model &amp; Heritage
              </h3>

              <p className="font-body text-sm sm:text-base text-slate-600 leading-relaxed">
                Established in 2016 and based in Palghar, India, we are a dedicated white-label manufacturer of paper notebooks. We partner with recognised Indian brands and merchant exporters to produce notebooks across every category, backed by a conversion capacity of 25 metric tonnes of paper per day. Our model is simple: we manage manufacturing, quality control and export-ready packaging, so our partners can focus on building their brands. We also supply directly to international buyers, offering consistent quality, dependable lead times and the scale to support growing orders.
              </p>
            </div>

            <div className="relative z-10 mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500">
              <span className="font-semibold text-[#283890]">Manufacturing</span>
              <span>•</span>
              <span className="font-semibold text-[#283890]">Quality Control</span>
              <span>•</span>
              <span className="font-semibold text-[#283890]">Export-Ready Packaging</span>
            </div>
          </div>

          {/* Bento Card 2: 25 Metric Tonnes / Day Flagship Conversion Metric (4 cols) */}
          <div className="card-entrance seq-delay-5 md:col-span-4 rounded-3xl bg-gradient-to-br from-[#151f52] via-[#1a255e] to-[#283890] text-white p-7 sm:p-9 relative overflow-hidden group shadow-xl shadow-blue-950/15 flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#ff740e]/15 rounded-full blur-2xl pointer-events-none group-hover:bg-[#ff740e]/25 transition-all duration-700" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-[#ff740e] group-hover:scale-105 transition-transform">
                  <Layers className="w-6 h-6" />
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff740e]" />
              </div>

              <div className="space-y-2 mb-4">
                <div className="font-headline font-black text-5xl sm:text-6xl text-white tracking-tight">
                  25
                </div>
                <div className="font-headline font-bold text-xl sm:text-2xl text-[#f0e846]">
                  Metric Tonnes / Day
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-200 font-body leading-relaxed">
                Paper conversion capacity for scalable notebook manufacturing.
              </p>
            </div>

            <div className="relative z-10 mt-6 pt-4 border-t border-white/15 text-xs font-mono text-white/60">
              High-Speed Daily Output
            </div>
          </div>

          {/* Bento Card 3: 44 GSM – 90 GSM Substrate Range (4 cols) */}
          <div className="card-entrance seq-delay-6 md:col-span-4 rounded-3xl bg-white/95 border border-slate-200/90 p-7 sm:p-8 backdrop-blur-xl hover:border-[#ff740e]/40 transition-all duration-300 hover:shadow-xl shadow-blue-950/5 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-2xl bg-[#ff740e]/10 border border-[#ff740e]/20 flex items-center justify-center text-[#ff740e] group-hover:scale-110 transition-transform">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-[#f0e846]" />
              </div>

              <h3 className="font-headline font-bold text-xl sm:text-2xl text-[#151f52] mb-2 tracking-tight">
                44 GSM – 90 GSM
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 font-body leading-relaxed">
                Paper grades ranging from recycled to virgin, per product and customer requirements.
              </p>
            </div>
          </div>

          {/* Bento Card 4: Worldwide Shipping (4 cols) */}
          <div className="card-entrance seq-delay-7 md:col-span-4 rounded-3xl bg-white/95 border border-slate-200/90 p-7 sm:p-8 backdrop-blur-xl hover:border-[#283890]/40 transition-all duration-300 hover:shadow-xl shadow-blue-950/5 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-2xl bg-[#283890]/10 border border-[#283890]/20 flex items-center justify-center text-[#283890] group-hover:scale-110 transition-transform">
                  <Globe className="w-5 h-5" />
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff740e]" />
              </div>

              <h3 className="font-headline font-bold text-xl sm:text-2xl text-[#151f52] mb-2 tracking-tight">
                Worldwide Shipping
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 font-body leading-relaxed">
                Supplying international buyers with export-ready paper products.
              </p>
            </div>
          </div>

          {/* Bento Card 5: Create Your Brand With Us (4 cols) */}
          <div className="card-entrance seq-delay-8 md:col-span-4 rounded-3xl bg-white/95 border border-slate-200/90 p-7 sm:p-8 backdrop-blur-xl hover:border-[#ff740e]/40 transition-all duration-300 hover:shadow-xl shadow-blue-950/5 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-2xl bg-[#ff740e]/10 border border-[#ff740e]/20 flex items-center justify-center text-[#ff740e] group-hover:scale-110 transition-transform">
                  <Tag className="w-5 h-5" />
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-[#f0e846]" />
              </div>

              <h3 className="font-headline font-bold text-xl sm:text-2xl text-[#151f52] mb-2 tracking-tight">
                Create Your Brand With Us
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 font-body leading-relaxed">
                Your brand, our manufacturing expertise — full white-label service.
              </p>
            </div>

            {onNavigate && (
              <div className="mt-5 pt-4 border-t border-slate-100">
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 text-xs font-headline font-bold text-[#283890] hover:text-[#ff740e] transition-colors"
                >
                  <span>Partner With Us</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

