import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Shield, Cpu, PackageCheck, Zap } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface FactorySectionProps {
  onNavigate?: (page: 'home' | 'contact', sectionId?: string) => void;
}

export const FactorySection: React.FC<FactorySectionProps> = ({ onNavigate }) => {
  const { ref, isVisible } = useScrollReveal();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
        setHasStarted(true);
      }).catch((e) => console.log('Autoplay policy caught:', e));
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

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
                MANUFACTURING INFRASTRUCTURE
              </span>
            </div>

            {/* Heading (Fredoka) */}
            <h2 className="font-headline font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              Where Paper <span className="text-[#f0e846]">Takes Shape</span>.
            </h2>
          </div>

          {/* Right Column: Supporting Text (5 cols) */}
          <div className="lg:col-span-5 space-y-4 lg:pt-2">
            <p className="font-body text-sm sm:text-base text-white/85 leading-relaxed">
              Our paper conversion capacity of 25 metric tonnes per day supports manufacturing across the full range of notebook categories — from exercise books and composition books to hardbound registers, spiral notebooks and drawing books. We process paper grades from 44 GSM to 90 GSM, ranging from recycled to virgin paper depending on product specifications.
            </p>
          </div>

        </div>

        {/* Asymmetric Editorial Factory Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8 items-stretch">
          
          {/* Large Dominant Factory Image Slot (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#151f52] border border-white/15 overflow-hidden shadow-2xl relative min-h-[340px] sm:min-h-[440px] flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300">
            <img
              src="/assets/factory-interior-cutting.jpg"
              alt="Pustam heavy-duty paper cutting machine in operation"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#151f52] via-[#283890]/20 to-transparent" />

            {/* Top Tag */}
            <div className="relative z-10 p-6">
              <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-xs font-mono text-[#f0e846] border border-white/15">
                PUSTAM CONVERTING FLOOR
              </span>
            </div>

            {/* Bottom Caption */}
            <div className="relative z-10 p-6 pt-0">
              <div className="p-4 rounded-2xl bg-[#151f52]/90 backdrop-blur-md border border-white/10 max-w-md">
                <h3 className="font-headline font-bold text-base text-white mb-1">
                  High-Speed Precision Cutting & Sizing Line
                </h3>
                <p className="text-xs text-white/70 font-mono">
                  Industrial paper cutting machine converting bulk sheets into uniform notebook blocks with manual inspection.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 2 Smaller Supporting Factory Image Slots (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            
            {/* Small Factory Image 01: Ruling Line */}
            <div className="rounded-3xl bg-[#151f52] border border-white/15 overflow-hidden shadow-xl relative min-h-[210px] flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300">
              <img
                src="/assets/factory-ruling-printing-line.jpg"
                alt="Multi-line flexo ruling and reel unwind line"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151f52] via-transparent to-transparent" />

              <div className="relative z-10 p-4">
              </div>

              <div className="relative z-10 p-4">
                <div className="font-headline font-bold text-xs sm:text-sm text-white">
                  Multi-Line Flexo Ruling & Paper Unwind
                </div>
                <div className="text-[11px] text-white/70 font-mono">
                  Continuous web printing with precision ruling cylinders and rapid drying.
                </div>
              </div>
            </div>

            {/* Small Factory Image 02: Logistics Warehouse */}
            <div className="rounded-3xl bg-[#151f52] border border-white/15 overflow-hidden shadow-xl relative min-h-[210px] flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300">
              <img
                src="/assets/factory-warehouse-reels.jpg"
                alt="Paper reels warehouse, forklift and container loading bay"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151f52] via-transparent to-transparent" />

              <div className="relative z-10 p-4">
              </div>

              <div className="relative z-10 p-4">
                <div className="font-headline font-bold text-xs sm:text-sm text-white">
                  Logistics Warehouse & Loading Bay
                </div>
                <div className="text-[11px] text-white/70 font-mono">
                  Jumbo raw reel storage, forklift transit, and export container packing.
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Large Integrated Manufacturing Video Player — In-Page HTML5 Player with Standard Controls */}
        <div className="rounded-3xl bg-[#151f52] border border-white/15 overflow-hidden shadow-2xl relative">
          <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
            
            <video
              ref={videoRef}
              controls
              playsInline
              preload="metadata"
              poster="/assets/factory-aerial-facility.jpg"
              onPlay={() => { setIsPlaying(true); setHasStarted(true); }}
              onPause={() => setIsPlaying(false)}
              className="w-full h-full object-cover"
            >
              <source src="/assets/facility-tour.mp4" type="video/mp4" />
              Your browser does not support standard HTML5 video playback.
            </video>

            {/* Custom Interactive Play Button Overlay (shown before video starts or when paused) */}
            {!hasStarted && (
              <div
                onClick={togglePlay}
                className="absolute inset-0 bg-gradient-to-t from-[#151f52] via-black/40 to-black/30 flex flex-col items-center justify-center text-center p-6 cursor-pointer group"
              >
                <div className="w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-[#f0e846] group-hover:bg-[#ff740e] text-[#283890] group-hover:text-white flex items-center justify-center shadow-2xl transition-all duration-300 border-4 border-white/30 group-hover:scale-105">
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1" />
                </div>
                
                <h3 className="font-headline font-bold text-xl sm:text-2xl md:text-3xl text-white mt-4 drop-shadow-md">
                  Palghar Manufacturing Facility & Production Tour
                </h3>
                <span className="font-mono text-xs text-[#f0e846] mt-1.5 bg-black/60 px-4 py-1.5 rounded-full border border-white/15">
                  Click to play 1080p production floor walkthrough
                </span>

                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-mono text-white/80 border border-white/10">
                  PUSTAM MANUFACTURING FACILITY — PALGHAR, INDIA
                </div>
              </div>
            )}
          </div>

          {/* Machine specs bottom bar */}
          <div className="px-6 py-4 bg-[#151f52] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-white/80 border-t border-white/10">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#f0e846]" />
              <span>25 Tonnes/Day Converting</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#ff740e]" />
              <span>Automated Wire Binding</span>
            </div>
            <div className="flex items-center gap-2">
              <PackageCheck className="w-4 h-4 text-[#f0e846]" />
              <span>Moisture Seal Wrapping</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#ff740e]" />
              <span>100% Quality Inspection</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
