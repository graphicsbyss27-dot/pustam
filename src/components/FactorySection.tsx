import React from 'react';
import { ExternalLink, Play, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface FactorySectionProps {
  onNavigate?: (page: 'home' | 'contact', sectionId?: string) => void;
}

const YOUTUBE_URL = 'https://youtube.com/@twofoldstationery?si=ooO3KW5As5621baS';

const INFRA_IMAGES = [
  {
    image: '/Infra/infra-reels-storage.jpg',
    alt: 'Parent Reel Inventory Warehouse',
  },
  {
    image: '/Infra/infra-flexo-ruling.jpg',
    alt: 'High-Speed Web Ruling and Converting Press',
  },
  {
    image: '/Infra/infra-spine-stitching.jpg',
    alt: 'Automated Spine Wire Stitching Line',
  },
  {
    image: '/Infra/infra-digital-console.jpg',
    alt: 'Digital Operator Control Console',
  },
  {
    image: '/Infra/rolls-stocking.png',
    alt: 'Paper Rolls Stocking & Loading Bay Warehouse',
  },
  {
    image: '/Infra/infra-warehouse-forklift.jpg',
    alt: 'Palletized Storage and Forklift Logistics',
  },
  {
    image: '/Infra/infra-automated-binding.jpg',
    alt: 'Automated Multi-Head Spine Binding Line',
  },
  {
    image: '/Infra/infra-guillotine-cutting.jpg',
    alt: 'Precision Industrial Guillotine Cutting',
  },
];

export const FactorySection: React.FC<FactorySectionProps> = ({ onNavigate }) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="factory"
      ref={ref}
      className={`py-20 sm:py-28 bg-white relative overflow-hidden border-t border-slate-100 scroll-mt-16 select-none reveal-fade-up ${
        isVisible ? 'reveal-visible' : ''
      }`}
    >
      {/* Subtle ambient light accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#283890]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Clean & uncluttered) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#283890]" />
              <span className="text-[#283890] font-headline font-semibold text-xs sm:text-sm uppercase tracking-widest">
                MANUFACTURING INFRASTRUCTURE
              </span>
            </div>

            <h2 className="font-headline font-bold text-3xl sm:text-4xl md:text-5xl text-[#151f52] tracking-tight leading-tight">
              Where Paper <span className="text-[#283890]">Takes Shape</span>.
            </h2>

            <p className="font-body text-sm sm:text-base text-slate-600 leading-relaxed pt-1">
              Operating from our 30,000+ sq. ft. purpose-built industrial campus in Palghar, Maharashtra,
              Pustam converts 25 metric tonnes of paper daily with automated precision.
            </p>
          </div>

          {/* Quick Metrics Badges */}
          <div className="flex flex-wrap gap-2 pt-1 md:pt-0 shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-mono border border-slate-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#283890]" />
              30,000+ Sq. Ft.
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-mono border border-slate-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#ff740e]" />
              25 MT / Day
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-mono border border-slate-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#283890]" />
              Palghar Campus
            </span>
          </div>
        </div>

        {/* 8 Pure Image Tiles (No excess text or data, clean photographic gallery) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 mb-12">
          {INFRA_IMAGES.map((item, idx) => (
            <div
              key={idx}
              className="group relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#283890]/30 transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.tried) {
                    target.dataset.tried = '1';
                    if (item.image.includes('rolls-stocking')) {
                      target.src = '/assets/rolls-stocking.png';
                    } else if (item.image.startsWith('/Infra/')) {
                      target.src = item.image.replace('/Infra/', '/infra/');
                    }
                  }
                }}
                className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Video Redirect Banner to YouTube (Clean, replacing heavy inline video player) */}
        <div className="rounded-3xl bg-gradient-to-r from-[#151f52] via-[#1e2b70] to-[#283890] p-6 sm:p-8 md:p-10 shadow-xl border border-slate-200 text-white relative overflow-hidden">
          {/* Ambient glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-60 h-60 bg-[#f0e846]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            
            {/* Left Content */}
            <div className="space-y-2.5 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-semibold font-headline">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span>OFFICIAL YOUTUBE FACILITY TOUR</span>
              </div>
              
              <h3 className="font-headline font-bold text-2xl sm:text-3xl text-white tracking-tight leading-tight">
                Watch Our Converting &amp; Production Lines in Motion
              </h3>

              <p className="font-body text-xs sm:text-sm text-white/80 leading-relaxed max-w-xl">
                Experience our high-speed automated reel slitting, synchronized flexographic ruling,
                spine binding, and export packaging facilities directly on our YouTube channel.
              </p>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-[#ff0000] hover:bg-[#d90000] text-white font-headline font-bold text-xs sm:text-sm tracking-wide flex items-center gap-2.5 shadow-lg shadow-red-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <Play className="w-4 h-4 fill-white shrink-0" />
                <span>Watch on YouTube</span>
                <ExternalLink className="w-3.5 h-3.5 text-white/80" />
              </a>

              {onNavigate && (
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-headline font-semibold text-xs sm:text-sm border border-white/20 hover:border-white/40 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
                >
                  <span>Inquire for Manufacturing</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
