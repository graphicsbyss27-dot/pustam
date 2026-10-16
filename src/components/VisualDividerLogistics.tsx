import React from 'react';
import { Factory, Globe2 } from 'lucide-react';

export const VisualDividerLogistics: React.FC = () => {
  return (
    <div className="relative w-full bg-[#080d1e] py-4 sm:py-5 border-y border-white/10 select-none overflow-hidden">
      
      {/* Ambient background flares */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-32 bg-[#283890]/40 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-32 bg-[#ff740e]/25 rounded-full blur-2xl pointer-events-none" />

      {/* Subtle paper/ruling millimeter tick marks running along top and bottom */}
      <div
        className="absolute top-0 left-0 right-0 h-1.5 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 1px, transparent 10px)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-1.5 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 1px, transparent 10px)',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 flex items-center justify-between gap-4">
        
        {/* Left Origin Anchor */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-[#ff740e] shadow-sm">
            <Factory className="w-4 h-4" />
          </div>
          <div className="hidden sm:block">
            <div className="text-[10px] font-mono font-bold tracking-widest text-[#ff740e] uppercase">
              PLANT ORIGIN
            </div>
            <div className="text-xs font-headline font-semibold text-white/90">
              Palghar, India
            </div>
          </div>
        </div>

        {/* Center Animated Dynamic Conduit */}
        <div className="flex-1 max-w-2xl mx-3 relative flex items-center">
          
          {/* Base track line */}
          <div className="w-full h-[2px] bg-gradient-to-r from-[#ff740e]/40 via-[#283890]/60 to-[#38bdf8]/40 relative overflow-hidden rounded-full">
            
            {/* Animated traveling light pulse */}
            <div
              className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-[#f0e846] to-transparent animate-[shimmer_2.5s_infinite_linear]"
              style={{
                filter: 'drop-shadow(0 0 6px #f0e846)',
              }}
            />
          </div>

          {/* Center glowing waypoint node */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#080d1e] border border-white/20 shadow-lg text-[10px] font-mono text-white/80 whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="tracking-wider text-white/70">EXPORT FREIGHT PIPELINE</span>
            <span className="text-white/40">→</span>
          </div>

        </div>

        {/* Right Destination Anchor */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="hidden sm:block text-right">
            <div className="text-[10px] font-mono font-bold tracking-widest text-[#38bdf8] uppercase">
              DESTINATION
            </div>
            <div className="text-xs font-headline font-semibold text-white/90">
              Worldwide
            </div>
          </div>
          <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-[#38bdf8] shadow-sm">
            <Globe2 className="w-4 h-4" />
          </div>
        </div>

      </div>

    </div>
  );
};
