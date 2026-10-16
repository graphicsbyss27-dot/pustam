import React from 'react';
import {
  Zap,
  Anchor,
  Factory,
  Globe,
  Package,
  Layers,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';

const TICKER_ITEMS = [
  { icon: Zap, label: '25 Metric Tonnes / Day Converting Capacity' },
  { icon: Factory, label: '30,000+ Sq. Ft. Industrial Plant in Palghar' },
  { icon: Anchor, label: 'Containerized Sea Freight via JNPT / Nhava Sheva' },
  { icon: Layers, label: '54 to 120 GSM Custom Paper Formats' },
  { icon: Globe, label: 'Shipped Worldwide · International Corridors' },
  { icon: Sparkles, label: '100% White-Label & Private Brand OEM' },
  { icon: Package, label: 'Moisture-Sealed Export Pallet Packaging' },
  { icon: ShieldCheck, label: 'DGFT IEC Licensed · ISO 9001 Compliant' },
];

export const ManufacturingTicker: React.FC = () => {
  // Duplicate array 3 times for a completely seamless infinite CSS loop
  const loopItems = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="relative w-full bg-[#0a0f2c] border-y border-white/10 overflow-hidden py-3 sm:py-3.5 select-none z-20">
      
      {/* Subtle background ambient sheen */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#283890]/20 via-[#ff740e]/10 to-[#283890]/20 pointer-events-none" />

      {/* Smooth Gradient Masks on Left & Right Edges for Infinite Fade */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-[#0a0f2c] via-[#0a0f2c]/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-[#0a0f2c] via-[#0a0f2c]/90 to-transparent z-10 pointer-events-none" />

      <style>{`
        @keyframes tickerMove {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-ticker-continuous {
          display: flex;
          width: max-content;
          animation: tickerMove 34s linear infinite;
        }
        .animate-ticker-continuous:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Ticker Track */}
      <div className="animate-ticker-continuous items-center">
        {loopItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="inline-flex items-center gap-2.5 mx-4 sm:mx-6 text-white/80 hover:text-white transition-colors duration-200 group cursor-default"
            >
              <div className="w-5 h-5 rounded-md bg-[#283890]/50 border border-white/10 flex items-center justify-center text-[#f0e846] group-hover:scale-110 group-hover:border-[#f0e846]/40 transition-all">
                <Icon className="w-3 h-3" />
              </div>
              <span className="font-mono text-xs sm:text-[13px] font-medium tracking-wide uppercase text-white/85 group-hover:text-[#f0e846] transition-colors">
                {item.label}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff740e] ml-2 sm:ml-4 opacity-50" />
            </div>
          );
        })}
      </div>

    </div>
  );
};
