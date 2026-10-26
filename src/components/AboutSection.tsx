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

        {/* Section Header with Light Pill Badge (Coordinated entrance sequence) */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="seq-item seq-delay-1 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#283890]/8 border border-[#283890]/15 backdrop-blur-md mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#283890] animate-pulse" />
            <span className="text-[#283890] font-headline font-bold text-xs tracking-widest uppercase">
              ABOUT PUSTAM PAPER PRODUCTS
            </span>
          </div>

          <h2 className="seq-item seq-delay-2 font-headline font-bold text-3xl sm:text-5xl md:text-6xl text-[#151f52] tracking-tight leading-[1.12]">
            Engineering Notebooks <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#283890] via-[#1e2b70] to-[#ff740e] bg-clip-text text-transparent">
              With Industrial Purpose
            </span>
          </h2>

          <p className="seq-item seq-delay-3 mt-5 font-body text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
            Established in 2016 in Palghar, India. We power recognized Indian brands, retailers, and merchant exporters with dedicated, precision-controlled notebook manufacturing and 25 MT/day conversion capacity.
          </p>
        </div>

        {/* SpartanAI / Portfolite Style Bento Grid (Light Edition) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">

          {/* Bento Item 1: High-Capacity Flagship Metric Card (7 cols) */}
          <div className="card-entrance seq-delay-4 md:col-span-7 rounded-3xl bg-white/90 border border-slate-200/90 p-7 sm:p-9 relative overflow-hidden backdrop-blur-xl group hover:border-[#283890]/40 transition-all duration-500 shadow-xl shadow-blue-950/5 flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#283890]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#283890]/10 transition-all duration-700" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Live Facility Operating
                </div>
                <div className="w-10 h-10 rounded-2xl bg-[#283890]/8 border border-[#283890]/15 flex items-center justify-center text-[#283890]">
                  <Layers className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="font-headline font-black text-5xl sm:text-7xl text-[#151f52] tracking-tight">25</span>
                  <span className="font-headline font-bold text-2xl sm:text-3xl text-[#ff740e]">MT / Day</span>
                </div>
                <h3 className="text-lg sm:text-xl font-headline font-bold text-[#151f52]">
                  Paper Conversion Capacity
                </h3>
                <p className="text-sm text-slate-600 font-body leading-relaxed max-w-lg">
                  High-speed automated reel-to-book converting lines and wire-o binding systems built for consistent bulk delivery without quality compromise.
                </p>
              </div>
            </div>

            {/* Quick feature tags */}
            <div className="relative z-10 pt-4 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#283890] shrink-0" />
                <span>Palghar Hub</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#283890] shrink-0" />
                <span>Zero Slit Defect</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#283890] shrink-0" />
                <span>Custom Rulings</span>
              </div>
            </div>
          </div>

          {/* Bento Item 2: 3D Papercraft Illustration Showcase (5 cols) */}
          <div className="card-entrance seq-delay-5 md:col-span-5 rounded-3xl bg-white/90 border border-slate-200/90 overflow-hidden relative group hover:border-[#ff740e]/40 transition-all duration-500 shadow-xl shadow-blue-950/5 flex flex-col">
            <div className="mask-wipe-container relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
              <img
                src="/assets/illustrations/notebook-craft-3d.jpg"
                alt="Pustam 3D Notebook Crafting"
                className="mask-wipe-right w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-white/60 text-[11px] text-[#151f52] font-mono font-semibold shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#ff740e]" />
                3D Craft &amp; Finishes
              </div>
            </div>
            
            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-headline font-bold text-lg text-[#151f52] mb-2">
                  Bespoke Cover Treatments
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-body leading-relaxed">
                  Foil stamping, soft-touch matte lamination, spot UV, rounded corners, and durable wire binding engineered to customer specifications.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#283890] font-bold">
                <span>Hardcover • Spiral • Saddle Stitch</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Bento Item 3: Paper Grade Versatility (4 cols) */}
          <div className="card-entrance seq-delay-6 md:col-span-4 rounded-3xl bg-white/90 border border-slate-200/90 p-6 sm:p-7 backdrop-blur-xl hover:border-slate-300 transition-all duration-300 shadow-xl shadow-blue-950/5 flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#ff740e]/10 border border-[#ff740e]/20 flex items-center justify-center text-[#ff740e] mb-5 group-hover:scale-110 transition-transform">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="font-mono text-xs text-[#ff740e] uppercase tracking-wider mb-1 font-bold">Substrate Spectrum</div>
              <h4 className="font-headline font-bold text-xl sm:text-2xl text-[#151f52] mb-2">44 – 90 GSM</h4>
              <p className="text-xs sm:text-sm text-slate-600 font-body leading-relaxed">
                From cost-efficient recycled paper to premium high-opacity virgin woodfree sheets with zero ink feathering.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>Recycled to Virgin</span>
              <span className="font-mono text-[#283890] font-semibold">FSC® Compliant</span>
            </div>
          </div>

          {/* Bento Item 4: Global Shipping Network (4 cols) */}
          <div className="card-entrance seq-delay-7 md:col-span-4 rounded-3xl bg-white/90 border border-slate-200/90 p-6 sm:p-7 backdrop-blur-xl hover:border-slate-300 transition-all duration-300 shadow-xl shadow-blue-950/5 flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#283890]/10 border border-[#283890]/20 flex items-center justify-center text-[#283890] mb-5 group-hover:scale-110 transition-transform">
                <Globe className="w-5 h-5" />
              </div>
              <div className="font-mono text-xs text-[#283890] uppercase tracking-wider mb-1 font-bold">Global Reach</div>
              <h4 className="font-headline font-bold text-xl sm:text-2xl text-[#151f52] mb-2">Worldwide Shipping</h4>
              <p className="text-xs sm:text-sm text-slate-600 font-body leading-relaxed">
                Direct export to international distributors and brands with ocean freight palletized packaging and customs readiness.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>Palghar to Global Ports</span>
              <span className="font-mono text-[#283890] font-semibold">JNPT Proximity</span>
            </div>
          </div>

          {/* Bento Item 5: White Label Co-Creation (4 cols) */}
          <div className="card-entrance seq-delay-8 md:col-span-4 rounded-3xl bg-white/90 border border-slate-200/90 p-6 sm:p-7 backdrop-blur-xl hover:border-slate-300 transition-all duration-300 shadow-xl shadow-blue-950/5 flex flex-col justify-between group">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#ff740e]/10 border border-[#ff740e]/20 flex items-center justify-center text-[#ff740e] mb-5 group-hover:scale-110 transition-transform">
                <Tag className="w-5 h-5" />
              </div>
              <div className="font-mono text-xs text-[#ff740e] uppercase tracking-wider mb-1 font-bold">Private Labeling</div>
              <h4 className="font-headline font-bold text-xl sm:text-2xl text-[#151f52] mb-2">Your Brand Identity</h4>
              <p className="text-xs sm:text-sm text-slate-600 font-body leading-relaxed">
                Complete confidential white-label manufacturing. You own the artwork, branding, and sales; we handle the machinery.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100">
              <button
                onClick={() => onNavigate && onNavigate('contact')}
                className="inline-flex items-center gap-2 text-xs font-headline font-bold text-[#283890] hover:text-[#ff740e] transition-colors"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

