import React, { useRef, useState } from 'react';
import { Play } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface FactorySectionProps {
  onNavigate?: (page: 'home' | 'contact', sectionId?: string) => void;
}

const INFRA_TILES = [
  {
    image: '/assets/factory-aerial-facility.jpg',
    label: 'PALGHAR PLANT',
  },
  {
    image: '/assets/factory-warehouse-reels.jpg',
    label: 'LOGISTICS WAREHOUSE',
  },
  {
    image: '/assets/factory-interior-cutting.jpg',
    label: 'PRECISION CUTTING LINE',
  },
  {
    image: '/assets/factory-ruling-printing-line.jpg',
    label: 'FLEXO RULING',
  },
];

export const FactorySection: React.FC<FactorySectionProps> = ({ onNavigate }) => {
  const { ref, isVisible } = useScrollReveal();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

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
      className={`py-20 sm:py-28 bg-white relative overflow-hidden scroll-mt-16 select-none reveal-fade-up ${
        isVisible ? 'reveal-visible' : ''
      }`}
    >
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#283890] via-[#f0e846] to-[#ff740e]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Label */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-8 h-0.5 bg-[#283890]" />
          <span className="text-[#283890] font-headline font-semibold text-xs sm:text-sm uppercase tracking-widest">
            MANUFACTURING INFRASTRUCTURE
          </span>
        </div>

        <h2 className="font-headline font-bold text-3xl sm:text-4xl md:text-5xl text-[#151f52] tracking-tight leading-tight mb-10">
          Where Paper <span className="text-[#283890]">Takes Shape</span>.
        </h2>

        {/* 4-tile image grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
          {INFRA_TILES.map((tile) => (
            <div
              key={tile.label}
              className="group rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-slate-100"
            >
              <div className="relative h-52 sm:h-56 overflow-hidden">
                <img
                  src={tile.image}
                  alt={tile.label}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#283890]/90 backdrop-blur-sm text-[10px] font-mono font-bold text-[#f0e846] tracking-wider">
                  {tile.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Video player */}
        <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
          <div className="relative aspect-video w-full bg-black overflow-hidden">
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

            {!hasStarted && (
              <div
                onClick={togglePlay}
                className="absolute inset-0 bg-gradient-to-t from-[#151f52] via-black/40 to-black/30 flex flex-col items-center justify-center text-center p-6 cursor-pointer group"
              >
                <div className="w-20 h-20 rounded-full bg-[#f0e846] group-hover:bg-[#ff740e] text-[#283890] group-hover:text-white flex items-center justify-center shadow-2xl transition-all duration-300 border-4 border-white/30 group-hover:scale-105">
                  <Play className="w-9 h-9 fill-current ml-1" />
                </div>
                <h3 className="font-headline font-bold text-xl sm:text-2xl text-white mt-5 drop-shadow-md">
                  Palghar Manufacturing Facility &amp; Production Tour
                </h3>
                <span className="font-mono text-xs text-[#f0e846] mt-2 bg-black/60 px-4 py-1.5 rounded-full border border-white/15">
                  Click to play 1080p production floor walkthrough
                </span>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
