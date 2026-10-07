import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { VideoModal } from './VideoModal';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface FactorySectionProps {
  onNavigate?: (page: 'home' | 'contact', sectionId?: string) => void;
}

export const FactorySection: React.FC<FactorySectionProps> = ({ onNavigate }) => {
  const { ref, isVisible } = useScrollReveal();
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section
      id="factory"
      ref={ref}
      className={`py-20 sm:py-28 bg-[#283890] relative overflow-hidden border-t border-white/10 scroll-mt-16 select-none reveal-fade-up ${
        isVisible ? 'reveal-visible' : ''
      }`}
    >
      {/* Background Decor */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#1e2b70]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-14">
          
          {/* Left Column: Eyebrow & Heading (7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            {/* Small Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#f0e846]" />
              <span className="text-[#f0e846] font-headline font-semibold text-xs sm:text-sm uppercase tracking-widest">
                INSIDE PUSTAM
              </span>
            </div>

            {/* Heading (Fredoka) */}
            <h2 className="font-headline font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              Where Paper <span className="text-[#f0e846]">Takes Shape</span>.
            </h2>
          </div>

          {/* Right Column: Editable Supporting Text (5 cols) */}
          <div className="lg:col-span-5 space-y-4 lg:pt-2">
            <div className="p-5 rounded-2xl bg-[#151f52] border border-[#f0e846]/30 shadow-inner">
              <p className="font-mono text-xs sm:text-sm text-[#f0e846] leading-relaxed">
                [ADD OFFICIAL FACTORY / MANUFACTURING DESCRIPTION HERE — Reel-to-sheet converting, multi-color ruling lines, automated binding, and export packaging.]
              </p>
              <p className="text-[11px] text-white/50 mt-2">
                (Machinery specifications, facility size, and production line workflows can be updated here.)
              </p>
            </div>
          </div>

        </div>

        {/* Asymmetric Editorial Factory Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8 items-stretch">
          
          {/* Large Dominant Factory Image Slot (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#151f52] border border-white/15 overflow-hidden shadow-2xl relative min-h-[340px] sm:min-h-[440px] flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
              alt="Main converting machinery line"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#151f52] via-[#283890]/20 to-transparent" />

            {/* Top Tag */}
            <div className="relative z-10 p-6">
              <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-xs font-mono text-[#f0e846] border border-white/15">
                [LARGE FACTORY IMAGE — MAIN CONVERTING FLOOR]
              </span>
            </div>

            {/* Bottom Caption */}
            <div className="relative z-10 p-6 pt-0">
              <div className="p-4 rounded-2xl bg-[#151f52]/90 backdrop-blur-md border border-white/10 max-w-md">
                <h3 className="font-headline font-bold text-base text-white mb-1">
                  High-Speed Automatic Reel Converting Line
                </h3>
                <p className="text-xs text-white/70 font-mono">
                  [ADD CAPTION / MACHINERY SPECIFICATIONS]
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 2 Smaller Supporting Factory Image Slots (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            
            {/* Small Factory Image 01 */}
            <div className="rounded-3xl bg-[#151f52] border border-white/15 overflow-hidden shadow-xl relative min-h-[210px] flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80"
                alt="Ruling and flexo printing unit"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151f52] via-transparent to-transparent" />

              <div className="relative z-10 p-4">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-mono text-white/90 border border-white/15">
                  [SMALL FACTORY IMAGE 01]
                </span>
              </div>

              <div className="relative z-10 p-4">
                <div className="font-headline font-bold text-xs sm:text-sm text-white">
                  Multi-Color Ruling & Margin Unit
                </div>
                <div className="text-[11px] text-white/70 font-mono">
                  [ADD CAPTION / UNIT SPECIFICATION]
                </div>
              </div>
            </div>

            {/* Small Factory Image 02 */}
            <div className="rounded-3xl bg-[#151f52] border border-white/15 overflow-hidden shadow-xl relative min-h-[210px] flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80"
                alt="Automated wire binding and stitching"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151f52] via-transparent to-transparent" />

              <div className="relative z-10 p-4">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-mono text-white/90 border border-white/15">
                  [SMALL FACTORY IMAGE 02]
                </span>
              </div>

              <div className="relative z-10 p-4">
                <div className="font-headline font-bold text-xs sm:text-sm text-white">
                  Automated Wire-O & Stitching Department
                </div>
                <div className="text-[11px] text-white/70 font-mono">
                  [ADD CAPTION / UNIT SPECIFICATION]
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Large Integrated Video Area */}
        <div className="rounded-3xl bg-[#151f52] border border-white/15 overflow-hidden shadow-2xl relative group hover:border-[#f0e846]/40 transition-colors">
          <div
            onClick={() => setIsVideoOpen(true)}
            className="relative aspect-[16/9] sm:aspect-[21/9] w-full bg-black flex items-center justify-center cursor-pointer"
          >
            {/* Poster Image */}
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80"
              alt="Factory machinery video poster"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#151f52] via-[#283890]/40 to-black/40" />

            {/* Centered Play Button (Pustam Yellow / Orange Accent) */}
            <div className="relative z-10 flex flex-col items-center text-center p-4">
              <div className="w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-[#f0e846] group-hover:bg-[#ff740e] text-[#283890] group-hover:text-white flex items-center justify-center shadow-2xl transition-all duration-300 border-4 border-white/30 group-hover:scale-105">
                <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1" />
              </div>
              <h3 className="font-headline font-bold text-xl sm:text-2xl md:text-3xl text-white mt-4 drop-shadow-md">
                Factory Converting & High-Speed Ruling Tour
              </h3>
              <span className="font-mono text-xs text-[#f0e846] mt-1 bg-black/60 px-3.5 py-1 rounded-full border border-white/15">
                [ADD FACTORY VIDEO FILE / MP4 EMBED — Click to Play Demonstration]
              </span>
            </div>

            {/* Watermark Tag */}
            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-mono text-white/80 border border-white/10">
              PUSTAM MANUFACTURING FACILITY
            </div>
          </div>
        </div>

      </div>

      {/* Video Modal Player */}
      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </section>
  );
};
