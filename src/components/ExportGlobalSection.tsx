import React from 'react';
import { Globe, ArrowRight, PackageCheck, Anchor, ShieldCheck, TrendingUp, MapPin } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ExportGlobalSectionProps {
  onNavigate?: (page: 'home' | 'contact', sectionId?: string) => void;
}

const EXPORT_DESTINATIONS = [
  { region: 'Middle East & GCC', countries: 'UAE, Saudi Arabia, Kuwait, Qatar', color: '#f0e846', dot: '#f0e846' },
  { region: 'UK & Europe', countries: 'United Kingdom, Germany, France', color: '#ff740e', dot: '#ff740e' },
  { region: 'North America', countries: 'USA, Canada', color: '#f0e846', dot: '#f0e846' },
  { region: 'Africa', countries: 'Nigeria, Kenya, Tanzania, South Africa', color: '#ff740e', dot: '#ff740e' },
  { region: 'Southeast Asia', countries: 'Malaysia, Singapore, Indonesia', color: '#f0e846', dot: '#f0e846' },
  { region: 'Indian Subcontinent', countries: 'Bangladesh, Sri Lanka, Nepal', color: '#a5f3fc', dot: '#a5f3fc' },
];

const STATS = [
  { value: '6+', label: 'Export Regions', icon: Globe },
  { value: '25 MT', label: 'Daily Capacity', icon: TrendingUp },
  { value: 'JNPT', label: 'Port of Dispatch', icon: Anchor },
  { value: 'IEC', label: 'Licensed Exporter', icon: ShieldCheck },
];

export const ExportGlobalSection: React.FC<ExportGlobalSectionProps> = ({ onNavigate }) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="export"
      ref={ref}
      className={`py-20 sm:py-28 bg-[#1e2b70] relative overflow-hidden border-t border-white/10 scroll-mt-16 select-none reveal-fade-up ${
        isVisible ? 'reveal-visible' : ''
      }`}
    >
      {/* Subtle ambient glow */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#283890]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#f0e846]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-14 sm:mb-16">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#f0e846]" />
              <span className="text-[#f0e846] font-headline font-semibold text-xs sm:text-sm uppercase tracking-widest">
                GLOBAL REACH
              </span>
            </div>
            <h2 className="font-headline font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              Shipments <span className="text-[#f0e846]">Worldwide</span>.
            </h2>
            <p className="font-body text-sm sm:text-base text-white/80 leading-relaxed max-w-xl">
              From our Palghar manufacturing facility, Pustam Paper Products exports containerised
              sea freight through JNPT — India's largest container port — to buyers across
              six global regions.
            </p>
          </div>
          <div className="lg:col-span-5 flex items-center gap-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f0e846]/10 border border-[#f0e846]/25 text-[#f0e846] text-xs font-semibold font-mono">
              <span className="w-2 h-2 rounded-full bg-[#f0e846] animate-pulse" />
              <span>Active International Exports · IEC: BNZPC4332C</span>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {STATS.map(({ value, label, icon: Icon }) => (
            <div
              key={label}
              className="p-5 sm:p-6 rounded-2xl bg-[#151f52] border border-white/10 flex flex-col gap-2 hover:border-[#f0e846]/30 transition-colors duration-200"
            >
              <div className="w-9 h-9 rounded-xl bg-[#283890] flex items-center justify-center text-[#f0e846] border border-white/10">
                <Icon className="w-4.5 h-4.5 w-[18px] h-[18px]" />
              </div>
              <div className="font-headline font-bold text-2xl sm:text-3xl text-[#f0e846]">{value}</div>
              <div className="text-xs text-white/60 font-body leading-snug">{label}</div>
            </div>
          ))}
        </div>

        {/* Two-column: Origin Info + Destination List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* LEFT: Origin + Corridor Info */}
          <div className="lg:col-span-5 space-y-4">

            {/* Origin Card */}
            <div className="p-6 rounded-2xl bg-[#151f52] border border-[#f0e846]/25 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#f0e846]/5 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#283890] flex items-center justify-center border border-[#f0e846]/30">
                  <MapPin className="w-5 h-5 text-[#f0e846]" />
                </div>
                <div>
                  <div className="font-headline font-bold text-white text-sm">Manufacturing Origin</div>
                  <div className="text-xs text-white/55 font-mono">Palghar, Maharashtra, India</div>
                </div>
              </div>
              <div className="space-y-2.5 text-xs text-white/75 font-body leading-relaxed">
                <div className="flex items-center gap-2.5">
                  <Anchor className="w-3.5 h-3.5 text-[#ff740e] shrink-0" />
                  <span>Sea freight via JNPT / Nhava Sheva, Mumbai</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <PackageCheck className="w-3.5 h-3.5 text-[#f0e846] shrink-0" />
                  <span>Shrink-wrapped &amp; corrugated export carton packing</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#f0e846] shrink-0" />
                  <span>DGFT IEC &amp; MSME registered — compliant international trade</span>
                </div>
              </div>
            </div>

            {/* Trust pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
              {[
                { icon: PackageCheck, title: 'Export-Ready Packaging', desc: 'Heavy-duty shrink wrapping and corrugated cartons protect goods through sea transit.', color: 'text-[#f0e846]' },
                { icon: Anchor, title: 'Port Accessibility', desc: 'Direct highway link from Palghar to Mumbai seaports (Nhava Sheva / JNPT).', color: 'text-[#ff740e]' },
                { icon: ShieldCheck, title: 'Licensed Exporter', desc: 'IEC: BNZPC4332C · Full DGFT compliance for international trade.', color: 'text-[#f0e846]' },
              ].map(({ icon: Icon, title, desc, color }) => (
                <div key={title} className="p-5 rounded-2xl bg-[#151f52] border border-white/10 flex gap-4 items-start hover:border-white/20 transition-colors duration-200">
                  <div className={`w-9 h-9 rounded-xl bg-[#283890] flex items-center justify-center shrink-0 border border-white/10 ${color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-headline font-semibold text-sm text-white mb-0.5">{title}</div>
                    <div className="text-xs text-white/60 font-body leading-relaxed">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Export Destinations Grid */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#151f52] border border-white/10 h-full">
              <div className="flex items-center gap-2 mb-6">
                <Globe className="w-5 h-5 text-[#f0e846]" />
                <h3 className="font-headline font-bold text-base sm:text-lg text-white">Export Destinations</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {EXPORT_DESTINATIONS.map(({ region, countries, dot }) => (
                  <div
                    key={region}
                    className="flex items-start gap-3 p-4 rounded-xl bg-[#1e2b70]/70 border border-white/8 hover:border-white/20 transition-all duration-200 group"
                  >
                    <div
                      className="w-2.5 h-2.5 rounded-full shrink-0 mt-1"
                      style={{ background: dot, boxShadow: `0 0 6px ${dot}88` }}
                    />
                    <div>
                      <div className="font-headline font-semibold text-sm text-white group-hover:text-[#f0e846] transition-colors duration-200">
                        {region}
                      </div>
                      <div className="text-xs text-white/50 font-body mt-0.5 leading-relaxed">{countries}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-xs text-white/55 font-body leading-relaxed max-w-xs">
                  Containerised sea freight through major Indian ports to global buyers. Custom export documentation provided.
                </p>
                <button
                  onClick={() => onNavigate && onNavigate('contact')}
                  className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#283890] hover:bg-[#ff740e] text-white text-xs font-semibold font-headline tracking-wide transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Get Export Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
