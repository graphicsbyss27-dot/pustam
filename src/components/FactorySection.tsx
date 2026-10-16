import React, { useState, useRef } from 'react';
import { Play, Maximize2, Zap, Cpu, PackageCheck, ShieldCheck, CheckCircle2, Eye } from 'lucide-react';
import { VideoModal } from './VideoModal';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface FactorySectionProps {
  onNavigate?: (page: 'home' | 'contact', sectionId?: string) => void;
}

type PhotoKey = 'ruling' | 'cutting' | 'warehouse' | 'aerial';

export const FactorySection: React.FC<FactorySectionProps> = ({ onNavigate }) => {
  const { ref, isVisible } = useScrollReveal();
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoKey>('aerial');
  const [isPlayingInline, setIsPlayingInline] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayInline = () => {
    setIsPlayingInline(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 50);
  };

  const openPhotoModal = (photo: PhotoKey) => {
    setSelectedPhoto(photo);
    setIsVideoOpen(true);
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
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#f0e846]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-14">
          
          {/* Left Column: Eyebrow & Heading (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Eyebrow */}
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

            {/* Quick Metrics Badges */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-white/90 border border-white/15">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#f0e846]" />
                30,000+ Sq. Ft. Facility
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-white/90 border border-white/15">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ff740e]" />
                High-Speed Reel Converters
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-white/90 border border-white/15">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#f0e846]" />
                Dual-Side Flexo Ruling
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-white/90 border border-white/15">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ff740e]" />
                FSC & ISO 9001 Compliant
              </span>
            </div>
          </div>

          {/* Right Column: Factory & Manufacturing Description (5 cols) */}
          <div className="lg:col-span-5 space-y-4 lg:pt-2">
            <div className="p-6 rounded-2xl bg-[#151f52] border border-white/15 shadow-xl">
              <p className="font-body text-sm sm:text-base text-white/85 leading-relaxed">
                Operating from our purpose-built facility in Palghar, Maharashtra, Pustam engineers high-volume paper stationery for global distributors and institutional buyers.
              </p>
              <p className="font-mono text-xs sm:text-sm text-[#f0e846] mt-3 leading-relaxed border-t border-white/10 pt-3">
                Equipped with automated reel-to-sheet slitting, synchronized multi-color ruling, automated wire-o and spine binding, and dedicated moisture-sealed export container packaging.
              </p>
            </div>
          </div>

        </div>

        {/* 4-Image Infrastructure Gallery Grid (Clickable to open high-res modal) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10 items-stretch">
          
          {/* 1. Large Dominant Factory Image: Aerial View (7 cols) */}
          <div
            onClick={() => openPhotoModal('aerial')}
            className="lg:col-span-7 rounded-3xl bg-[#151f52] border border-white/15 overflow-hidden shadow-2xl relative min-h-[320px] sm:min-h-[420px] flex flex-col justify-between group hover:-translate-y-1 hover:border-[#f0e846]/50 transition-all duration-300 cursor-pointer"
            title="Click to view high-resolution facility overview"
          >
            <img
              src="/assets/factory-aerial-facility.jpg"
              alt="Pustam Palghar manufacturing campus aerial view"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#151f52] via-[#283890]/25 to-black/20" />

            {/* Top Tag */}
            <div className="relative z-10 p-5 sm:p-6 flex items-center justify-between">
              <span className="px-3.5 py-1.5 rounded-full bg-[#151f52]/80 backdrop-blur-md text-xs font-mono text-[#f0e846] border border-white/15 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#f0e846]" />
                CAMPUS OVERVIEW
              </span>
              <span className="text-xs font-mono text-white/70 bg-black/50 px-2.5 py-1 rounded-md backdrop-blur-xs flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-[#f0e846]" />
                <span>Palghar, Maharashtra</span>
              </span>
            </div>

            {/* Bottom Caption */}
            <div className="relative z-10 p-5 sm:p-6 pt-0">
              <div className="p-4 sm:p-5 rounded-2xl bg-[#151f52]/90 backdrop-blur-md border border-white/15 max-w-lg shadow-lg group-hover:bg-[#151f52] transition-colors">
                <h3 className="font-headline font-bold text-base sm:text-lg text-white mb-1 flex items-center justify-between">
                  <span>High-Capacity Converting &amp; Logistics Campus</span>
                  <span className="text-xs text-[#f0e846] opacity-0 group-hover:opacity-100 transition-opacity">Click to Inspect &rarr;</span>
                </h3>
                <p className="text-xs text-white/75 font-body leading-relaxed">
                  30,000+ sq. ft. industrial plant featuring high-bay material handling docks, climate-monitored reel storage, and automated converting rails.
                </p>
              </div>
            </div>
          </div>

          {/* 2. Top Right: Multi-Color Ruling Area (5 cols) */}
          <div
            onClick={() => openPhotoModal('ruling')}
            className="lg:col-span-5 rounded-3xl bg-[#151f52] border border-white/15 overflow-hidden shadow-xl relative min-h-[320px] sm:min-h-[420px] flex flex-col justify-between group hover:-translate-y-1 hover:border-[#f0e846]/50 transition-all duration-300 cursor-pointer"
            title="Click to view ruling & printing lines"
          >
            <img
              src="/assets/factory-ruling-printing-line.jpg"
              alt="High-speed multi-color flexographic ruling department"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#151f52] via-[#283890]/20 to-black/20" />

            <div className="relative z-10 p-5 sm:p-6 flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-[#151f52]/80 backdrop-blur-md text-[11px] font-mono text-[#f0e846] border border-white/15 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff740e]" />
                FLEXO RULING
              </span>
              <span className="text-xs font-mono text-white/70 bg-black/50 px-2.5 py-1 rounded-md backdrop-blur-xs flex items-center gap-1.5">
                <Eye className="w-3 h-3 text-[#f0e846]" />
                <span>High-Speed Line</span>
              </span>
            </div>

            <div className="relative z-10 p-5 sm:p-6 pt-0">
              <div className="p-4 rounded-2xl bg-[#151f52]/90 backdrop-blur-md border border-white/15 shadow-lg group-hover:bg-[#151f52] transition-colors">
                <h3 className="font-headline font-bold text-sm sm:text-base text-white mb-1 flex items-center justify-between">
                  <span>Multi-Color Flexo Ruling &amp; Precision Lines</span>
                  <span className="text-xs text-[#f0e846] opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                </h3>
                <p className="text-xs text-white/75 font-body leading-relaxed">
                  Simultaneous 2-sided line and margin ruling with water-based non-bleed inks, electronic web guiding, and automated sheet counting.
                </p>
              </div>
            </div>
          </div>

          {/* 3. Bottom Left: Precision Slitting & Cutting (6 cols) */}
          <div
            onClick={() => openPhotoModal('cutting')}
            className="lg:col-span-6 rounded-3xl bg-[#151f52] border border-white/15 overflow-hidden shadow-xl relative min-h-[280px] sm:min-h-[320px] flex flex-col justify-between group hover:-translate-y-1 hover:border-[#f0e846]/50 transition-all duration-300 cursor-pointer"
            title="Click to view cutting & sizing machines"
          >
            <img
              src="/assets/factory-interior-cutting.jpg"
              alt="Precision paper slitting, cutting, and trimming line"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#151f52] via-[#283890]/20 to-black/20" />

            <div className="relative z-10 p-5 flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-[#151f52]/80 backdrop-blur-md text-[11px] font-mono text-white/90 border border-white/15 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f0e846]" />
                SLITTING &amp; TRIMMING
              </span>
              <span className="text-xs font-mono text-white/70 bg-black/50 px-2.5 py-1 rounded-md backdrop-blur-xs flex items-center gap-1.5">
                <Eye className="w-3 h-3 text-[#f0e846]" />
                <span>&plusmn;0.5mm Tolerance</span>
              </span>
            </div>

            <div className="relative z-10 p-5 pt-0">
              <div className="p-4 rounded-2xl bg-[#151f52]/90 backdrop-blur-md border border-white/15 shadow-lg group-hover:bg-[#151f52] transition-colors">
                <h3 className="font-headline font-bold text-sm sm:text-base text-white mb-1 flex items-center justify-between">
                  <span>Automated Reel-to-Sheet Slitting &amp; Shears</span>
                  <span className="text-xs text-[#f0e846] opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                </h3>
                <p className="text-xs text-white/75 font-body leading-relaxed">
                  High-speed rotary sheeting ensuring razor-sharp, burr-free edges and exact square millimeter dimensional accuracy.
                </p>
              </div>
            </div>
          </div>

          {/* 4. Bottom Right: Heavy Paper Rolls Stocking (6 cols) */}
          <div
            onClick={() => openPhotoModal('warehouse')}
            className="lg:col-span-6 rounded-3xl bg-[#151f52] border border-white/15 overflow-hidden shadow-xl relative min-h-[280px] sm:min-h-[320px] flex flex-col justify-between group hover:-translate-y-1 hover:border-[#f0e846]/50 transition-all duration-300 cursor-pointer"
            title="Click to view jumbo reel storage"
          >
            <img
              src="/assets/factory-warehouse-reels.jpg"
              alt="Controlled paper rolls warehouse inventory"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#151f52] via-[#283890]/20 to-black/20" />

            <div className="relative z-10 p-5 flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-[#151f52]/80 backdrop-blur-md text-[11px] font-mono text-white/90 border border-white/15 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff740e]" />
                RAW REEL WAREHOUSE
              </span>
              <span className="text-xs font-mono text-white/70 bg-black/50 px-2.5 py-1 rounded-md backdrop-blur-xs flex items-center gap-1.5">
                <Eye className="w-3 h-3 text-[#f0e846]" />
                <span>54 to 120 GSM</span>
              </span>
            </div>

            <div className="relative z-10 p-5 pt-0">
              <div className="p-4 rounded-2xl bg-[#151f52]/90 backdrop-blur-md border border-white/15 shadow-lg group-hover:bg-[#151f52] transition-colors">
                <h3 className="font-headline font-bold text-sm sm:text-base text-white mb-1 flex items-center justify-between">
                  <span>Parent Paper Reel Inventory &amp; Conditioning</span>
                  <span className="text-xs text-[#f0e846] opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                </h3>
                <p className="text-xs text-white/75 font-body leading-relaxed">
                  Climate-controlled raw paper stock warehouse holding virgin wood pulp and FSC-certified parent reels for uninterrupted export production.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Integrated Video Area & Facility Tour Player */}
        <div className="rounded-3xl bg-[#151f52] border border-white/15 overflow-hidden shadow-2xl relative">
          
          {/* Top Video Header Bar */}
          <div className="px-5 sm:px-6 py-4 bg-[#111a44] border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-[#ff740e] animate-pulse" />
              <h3 className="font-headline font-bold text-sm sm:text-base text-white">
                Pustam Factory Converting &amp; Production Tour
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-white/60 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                1080p HD Video
              </span>
              <button
                onClick={() => openPhotoModal('aerial')}
                className="inline-flex items-center gap-1.5 text-xs text-[#f0e846] hover:text-white transition-colors bg-white/10 hover:bg-white/20 px-3 py-1 rounded-md border border-white/15 cursor-pointer"
                title="Open in full screen theater modal"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Theater View</span>
              </button>
            </div>
          </div>

          {/* Video Container (Interactive Inline Player) */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full bg-black flex items-center justify-center overflow-hidden">
            {isPlayingInline ? (
              <video
                ref={videoRef}
                src="/assets/facility-tour.mp4"
                poster="/assets/factory-interior-cutting.jpg"
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <div
                onClick={handlePlayInline}
                className="relative w-full h-full flex items-center justify-center cursor-pointer group"
              >
                {/* Poster Background */}
                <img
                  src="/assets/factory-interior-cutting.jpg"
                  alt="Factory machinery video poster"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151f52] via-[#283890]/40 to-black/50" />

                {/* Centered Play Button */}
                <div className="relative z-10 flex flex-col items-center text-center p-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#f0e846] group-hover:bg-[#ff740e] text-[#283890] group-hover:text-white flex items-center justify-center shadow-2xl transition-all duration-300 border-4 border-white/30 group-hover:scale-110 active:scale-95">
                    <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-current ml-1" />
                  </div>
                  <h4 className="font-headline font-bold text-lg sm:text-2xl md:text-3xl text-white mt-4 drop-shadow-md">
                    Watch Pustam Converting Lines in Motion
                  </h4>
                  <span className="font-mono text-xs text-[#f0e846] mt-2 bg-black/60 px-4 py-1.5 rounded-full border border-white/15 shadow-sm">
                    Click to Play Facility Tour Video
                  </span>
                </div>

                {/* Bottom Left Badge */}
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-mono text-white/80 border border-white/10 hidden sm:block">
                  PUSTAM INDUSTRIAL INFRASTRUCTURE
                </div>
              </div>
            )}
          </div>

          {/* Machine specifications bar */}
          <div className="px-6 py-4 bg-[#111a44] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-white/80 border-t border-white/10">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#f0e846] shrink-0" />
              <span>High-Speed Ruling</span>
            </div>
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#ff740e] shrink-0" />
              <span>Rotary Slitting &amp; Cutting</span>
            </div>
            <div className="flex items-center gap-2">
              <PackageCheck className="w-4 h-4 text-[#f0e846] shrink-0" />
              <span>Moisture Seal Packaging</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#ff740e] shrink-0" />
              <span>100% Quality Inspection</span>
            </div>
          </div>

        </div>

      </div>

      {/* Video Modal Player (Theater View with linked active photo) */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        initialPhoto={selectedPhoto}
      />
    </section>
  );
};
