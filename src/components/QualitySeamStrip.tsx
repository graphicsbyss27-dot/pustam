import React from 'react';
import { Sliders, CheckCircle2, ShieldCheck } from 'lucide-react';

export const QualitySeamStrip: React.FC = () => {
  return (
    <div className="relative w-full bg-gradient-to-r from-slate-900 via-[#151f52] to-slate-900 py-6 sm:py-8 border-y border-white/10 select-none overflow-hidden">
      
      {/* Subtle light glimmers */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#283890]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#ff740e]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          
          {/* Pillar 1 */}
          <div className="flex items-center gap-4 pt-3 md:pt-0">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#f0e846] shrink-0 shadow-inner">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <div className="font-headline font-bold text-sm text-white">
                ±0.5mm Precision Cutting
              </div>
              <p className="text-xs text-white/60 font-body mt-0.5">
                Automated guillotine shears ensuring burr-free square edges.
              </p>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="flex items-center gap-4 pt-3 md:pt-0 md:pl-8">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#ff740e] shrink-0 shadow-inner">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="font-headline font-bold text-sm text-white">
                Dual-Side Web Ruling
              </div>
              <p className="text-xs text-white/60 font-body mt-0.5">
                Synchronized flexo ruling lines with non-bleed water inks.
              </p>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="flex items-center gap-4 pt-3 md:pt-0 md:pl-8">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#38bdf8] shrink-0 shadow-inner">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-headline font-bold text-sm text-white">
                Export-Grade Raw Reels
              </div>
              <p className="text-xs text-white/60 font-body mt-0.5">
                Controlled 54 to 120 GSM pulp stocks ready for global trade.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
