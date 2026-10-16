import React, { useState } from 'react';
import { Play, ExternalLink, Eye } from 'lucide-react';
import { VideoModal } from './VideoModal';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface FactorySectionProps {
  onNavigate?: (page: 'home' | 'contact', sectionId?: string) => void;
}

type PhotoKey = 'aerial' | 'warehouse' | 'cutting' | 'ruling';

interface InfraItem {
  key: PhotoKey;
  image: string;
  label: string;
  badge: string;
  subtitle: string;
  colSpan: string;
  minHeight: string;
}

const INFRA_IMAGES: InfraItem[] = [
  {
    key: 'aerial',
    image: '/assets/factory-aerial-facility.jpg',
    label: 'High-Capacity Converting Campus',
    badge: 'PALGHAR CAMPUS',
    subtitle: 'Palghar, Maharashtra',
    colSpan: 'lg:col-span-7',
    minHeight: 'min-h-[340px] sm:min-h-[420px]',
  },
  {
    key: 'ruling',
    image: '/assets/factory-ruling-printing-line.jpg',
    label: 'Multi-Color Flexo Ruling & Precision Lines',
    badge: 'FLEXO RULING LINE',
    subtitle: 'Continuous Web Printing',
    colSpan: 'lg:col-span-5',
    minHeight: 'min-h-[340px] sm:min-h-[420px]',
  },
  {
    key: 'cutting',
    image: '/assets/factory-interior-cutting.jpg',
    label: 'Precision Slitting, Shearing & Sizing Floor',
    badge: 'SLITTING & TRIMMING',
    subtitle: 'Automated Guillotine Lines',
    colSpan: 'lg:col-span-6',
    minHeight: 'min-h-[300px] sm:min-h-[350px]',
  },
  {
    key: 'warehouse',
    image: '/assets/factory-warehouse-reels.jpg',
    label: 'Jumbo Raw Reel Inventory & Logistics Bay',
    badge: 'LOGISTICS WAREHOUSE',
    subtitle: 'Conditioned Reel Storage',
    colSpan: 'lg:col-span-6',
    minHeight: 'min-h-[300px] sm:min-h-[350px]',
  },
];

const YOUTUBE_URL = 'https://youtube.com/@twofoldstationery?si=ooO3KW5As5621baS';

export const FactorySection: React.FC<FactorySectionProps> = ({ onNavigate }) => {
  const { ref, isVisible } = useScrollReveal();
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoKey>('aerial');

  const openPhotoModal = (photo: PhotoKey) => {
    setSelectedPhoto(photo);
    setIsVideoOpen(true);
  };

  return (
    <section
      id="factory"
      ref={ref}
      className={`py-20 sm:py-28 bg-white relative overflow-hidden scroll-mt-16 select-none reveal-fade-up ${
        isVisible ? 'reveal-visible' : ''
      }`}
    >
      {/* Subtle Ambient Light Glows */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#283890]/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#ff740e]/5 blur-3xl pointer-events-none" />

      {/* Top Tri-Color Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#283890] via-[#f0e846] to-[#ff740e]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header with Direct YouTube Tour Link */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-0.5 bg-[#283890]" />
              <span className="text-[#283890] font-headline font-semibold text-xs sm:text-sm uppercase tracking-widest">
                INSIDE PUSTAM
              </span>
            </div>

            <h2 className="font-headline font-bold text-3xl sm:text-4xl md:text-5xl text-[#151f52] tracking-tight leading-tight">
              Where Paper <span className="text-[#283890]">Takes Shape</span>.
            </h2>
          </div>

          {/* Clean YouTube Video Link */}
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-[#ff0000] hover:bg-[#d90000] text-white font-headline font-bold text-xs sm:text-sm tracking-wide shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all self-start sm:self-auto shrink-0 group cursor-pointer"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current shrink-0" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span>Watch Factory Tour on YouTube</span>
            <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Properly Adjusted Infrastructure Image Gallery (Asymmetric, Wide & High Clarity) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {INFRA_IMAGES.map((item) => (
            <div
              key={item.key}
              onClick={() => openPhotoModal(item.key)}
              className={`${item.colSpan} ${item.minHeight} rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer relative flex flex-col justify-between group`}
              title={`Click to view high-resolution ${item.label}`}
            >
              {/* Background Image with Zoom */}
              <img
                src={item.image}
                alt={item.label}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient Mask for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#151f52]/90 via-black/25 to-black/25 group-hover:via-black/15 transition-colors" />

              {/* Top Bar with Badge & Subtitle */}
              <div className="relative z-10 p-5 sm:p-6 flex items-center justify-between">
                <span className="px-3.5 py-1.5 rounded-full bg-[#151f52]/80 backdrop-blur-md text-xs font-mono text-[#f0e846] border border-white/15 flex items-center gap-1.5 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#f0e846]" />
                  {item.badge}
                </span>

                <span className="text-xs font-mono text-white/80 bg-black/50 px-2.5 py-1 rounded-md backdrop-blur-xs flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-[#f0e846]" />
                  <span>{item.subtitle}</span>
                </span>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="relative z-10 p-5 sm:p-6 pt-0">
                <div className="p-4 sm:p-5 rounded-2xl bg-[#151f52]/90 backdrop-blur-md border border-white/15 shadow-lg group-hover:bg-[#151f52] transition-colors flex items-center justify-between">
                  <h3 className="font-headline font-bold text-sm sm:text-base md:text-lg text-white">
                    {item.label}
                  </h3>
                  <span className="text-xs text-[#f0e846] font-semibold shrink-0 ml-3 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    <span>Inspect</span>
                    <span>&rarr;</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clean YouTube Tour Strip at the bottom of the section */}
        <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-11 h-11 rounded-xl bg-red-50 text-[#ff0000] border border-red-200 flex items-center justify-center shrink-0 shadow-2xs">
              <Play className="w-5 h-5 fill-current ml-0.5" />
            </div>
            <div>
              <h4 className="font-headline font-bold text-sm sm:text-base text-[#151f52]">
                Watch Our Converting Lines &amp; Machineries in Motion
              </h4>
              <p className="text-xs text-slate-500 font-body mt-0.5">
                Experience high-speed reel-to-sheet slitting, multi-color ruling lines, and automated packaging on YouTube.
              </p>
            </div>
          </div>

          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#ff0000] hover:bg-[#d90000] text-white font-headline font-bold text-xs sm:text-sm tracking-wide shadow transition-all hover:-translate-y-0.5 shrink-0"
          >
            <span>Watch on YouTube</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Video Modal Player (For full-screen photo inspection) */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        initialPhoto={selectedPhoto}
      />
    </section>
  );
};
