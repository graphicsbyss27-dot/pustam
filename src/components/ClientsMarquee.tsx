import React from 'react';
import { Building2 } from 'lucide-react';

export const ClientsMarquee: React.FC = () => {
  // 5 client placeholder slots duplicated to ensure seamless infinite looping
  const rawLogos = [
    { id: '1', name: '[CLIENT LOGO 01]' },
    { id: '2', name: '[CLIENT LOGO 02]' },
    { id: '3', name: '[CLIENT LOGO 03]' },
    { id: '4', name: '[CLIENT LOGO 04]' },
    { id: '5', name: '[CLIENT LOGO 05]' },
  ];

  // Quadruple array for uninterrupted infinite loop across ultra-wide viewports
  const marqueeItems = [...rawLogos, ...rawLogos, ...rawLogos, ...rawLogos];

  return (
    <section className="py-16 sm:py-20 bg-[#151f52] border-t border-white/10 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        
        {/* Small Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="w-6 h-0.5 bg-[#f0e846]" />
          <span className="text-[#f0e846] font-headline font-semibold text-xs sm:text-sm uppercase tracking-widest">
            TRUSTED BY
          </span>
          <span className="w-6 h-0.5 bg-[#f0e846]" />
        </div>

        {/* Large Heading (Fredoka) */}
        <h2 className="font-headline font-bold text-3xl sm:text-4xl text-white tracking-tight">
          Our Clients
        </h2>
      </div>

      {/* Infinite Horizontal Logo Marquee Track */}
      <div className="relative w-full overflow-hidden flex items-center py-4 group">
        
        {/* Left and Right Smooth Gradient Masks for Seamless Edge Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-24 lg:w-40 bg-gradient-to-r from-[#151f52] via-[#151f52]/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-24 lg:w-40 bg-gradient-to-l from-[#151f52] via-[#151f52]/90 to-transparent z-10 pointer-events-none" />

        {/* Infinite Moving Marquee Line (No individual card boxes) */}
        <div className="flex items-center gap-8 sm:gap-14 lg:gap-20 animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap will-change-transform">
          {marqueeItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            >
              {/* Minimalist Logo Icon Accent */}
              <Building2 className="w-5 h-5 text-[#f0e846]" />
              
              {/* Clean Logo Name Slot */}
              <span className="font-mono text-xs sm:text-sm md:text-base font-semibold text-white/90 tracking-wider">
                {item.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
