import React from 'react';
import { ShieldCheck, Award, CheckCircle } from 'lucide-react';

export const VisualDividerTrust: React.FC = () => {
  return (
    <div className="relative w-full bg-[#0a1126] py-4 sm:py-4.5 border-y border-white/10 select-none overflow-hidden">
      
      {/* Dynamic top gradient foil beam */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#283890] via-[#f0e846] via-[#ff740e] to-[#283890] opacity-80" />

      {/* Subtle background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-24 bg-[#283890]/30 rounded-full blur-2xl pointer-events-none" />

      {/* Repeating fine geometric watermark security pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 50%, #fff 1.5px, transparent 1.5px)',
          backgroundSize: '16px 16px',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 flex items-center justify-between gap-4">
        
        {/* Left Seal Mark */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#f0e846]/10 border border-[#f0e846]/25 flex items-center justify-center text-[#f0e846]">
            <Award className="w-3.5 h-3.5" />
          </div>
          <span className="text-[11px] font-mono tracking-wider text-white/50 hidden md:inline uppercase">
            Official Compliance
          </span>
        </div>

        {/* Center Tri-Badge Ribbon */}
        <div className="flex items-center gap-3 sm:gap-6 flex-wrap justify-center">
          
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-white/80">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>DGFT IEC REGISTERED</span>
          </div>

          <span className="text-white/20 hidden sm:inline">•</span>

          <div className="flex items-center gap-1.5 text-[11px] font-mono text-white/80">
            <CheckCircle className="w-3.5 h-3.5 text-[#ff740e]" />
            <span>MSME UDYAM CERTIFIED</span>
          </div>

          <span className="text-white/20 hidden sm:inline">•</span>

          <div className="flex items-center gap-1.5 text-[11px] font-mono text-white/80">
            <CheckCircle className="w-3.5 h-3.5 text-[#38bdf8]" />
            <span>GST COMPLIANT</span>
          </div>

        </div>

        {/* Right Shield Mark */}
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono tracking-wider text-white/50 hidden md:inline uppercase">
            Govt. of India
          </span>
          <div className="w-7 h-7 rounded-lg bg-[#38bdf8]/10 border border-[#38bdf8]/25 flex items-center justify-center text-[#38bdf8]">
            <ShieldCheck className="w-3.5 h-3.5" />
          </div>
        </div>

      </div>

    </div>
  );
};
