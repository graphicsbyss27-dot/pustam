import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Factory,
  Play,
  Layers,
  Video,
} from 'lucide-react';

interface HeroSliderProps {
  onNavigate: (page: 'home' | 'contact', sectionId?: string) => void;
}

// ─────────────────────────────────────────────────────────────
// 1. All 7 Products from public/products/Products
// (Asymmetric photo collage with natural tilts, staggered heights, but NO OVERLAPS)
// ─────────────────────────────────────────────────────────────
const PRODUCT_COLLAGE = [
  // Row 1: 3 cards with varied heights & organic tilts
  {
    image: '/products/Products/Exercise Books.jpg',
    alt: 'Exercise Books',
    tilt: '-rotate-2',
    offset: '-translate-y-1.5',
    colSpan: 'col-span-12 sm:col-span-4 lg:col-span-4',
    height: 'h-44 sm:h-52 lg:h-60',
  },
  {
    image: '/products/Products/Counter Books.jpg',
    alt: 'Counter Books',
    tilt: 'rotate-2',
    offset: 'translate-y-2',
    colSpan: 'col-span-12 sm:col-span-4 lg:col-span-4',
    height: 'h-48 sm:h-56 lg:h-68',
  },
  {
    image: '/products/Products/Composition Books.jpg',
    alt: 'Composition Books',
    tilt: '-rotate-1.5',
    offset: '-translate-y-2',
    colSpan: 'col-span-12 sm:col-span-4 lg:col-span-4',
    height: 'h-44 sm:h-52 lg:h-60',
  },

  // Row 2: 4 cards with varied heights & organic tilts
  {
    image: '/products/Products/Double wire notebook.jpg',
    alt: 'Double Wire Notebooks',
    tilt: 'rotate-1.5',
    offset: 'translate-y-1',
    colSpan: 'col-span-6 sm:col-span-3 lg:col-span-3',
    height: 'h-40 sm:h-48 lg:h-56',
  },
  {
    image: '/products/Products/Spiral Notebooks.jpg',
    alt: 'Spiral Notebooks',
    tilt: '-rotate-2',
    offset: '-translate-y-1.5',
    colSpan: 'col-span-6 sm:col-span-3 lg:col-span-3',
    height: 'h-44 sm:h-52 lg:h-62',
  },
  {
    image: '/products/Products/Notepads.jpg',
    alt: 'Notepads & Legal Pads',
    tilt: 'rotate-2',
    offset: 'translate-y-2',
    colSpan: 'col-span-6 sm:col-span-3 lg:col-span-3',
    height: 'h-40 sm:h-48 lg:h-56',
  },
  {
    image: '/products/Products/handbound.jpg',
    alt: 'Handbound Registers',
    tilt: '-rotate-1',
    offset: '-translate-y-1',
    colSpan: 'col-span-6 sm:col-span-3 lg:col-span-3',
    height: 'h-44 sm:h-52 lg:h-62',
  },
];

// ─────────────────────────────────────────────────────────────
// 2. Factory machinery images from public/Infra (no video)
// (Asymmetric industrial collage with subtle tilts & varied heights, NO OVERLAPS)
// ─────────────────────────────────────────────────────────────
const FACTORY_COLLAGE = [
  {
    image: '/assets/factory-ruling-printing-line.jpg',
    alt: 'Multi-Line Flexo Ruling & Converting Floor',
    tilt: '-rotate-1',
    offset: 'translate-y-1',
    colSpan: 'col-span-12 lg:col-span-7',
    height: 'h-56 sm:h-72 lg:h-[390px]',
  },
  {
    image: '/assets/factory-interior-cutting.jpg',
    alt: 'Precision Automated Paper Guillotine Cutting',
    tilt: 'rotate-1.5',
    offset: '-translate-y-1',
    colSpan: 'col-span-12 lg:col-span-5',
    height: 'h-36 sm:h-44 lg:h-[185px]',
  },
  {
    image: '/assets/factory-warehouse-reels.jpg',
    alt: 'Jumbo Reel Warehouse Logistics & Staging',
    tilt: '-rotate-1.5',
    offset: 'translate-y-1',
    colSpan: 'col-span-6 lg:col-span-5',
    height: 'h-36 sm:h-44 lg:h-[185px]',
  },
  {
    image: '/assets/factory-aerial-facility.jpg',
    alt: 'Palghar Industrial Manufacturing Campus',
    tilt: 'rotate-1',
    offset: '-translate-y-1',
    colSpan: 'col-span-6 lg:col-span-5',
    height: 'h-36 sm:h-44 lg:h-[185px]',
  },
];

export const HeroSlider: React.FC<HeroSliderProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const timerRef = useRef<any>(null);

  const totalSlides = 3;

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Video autoplay/pause sync based on active slide
  useEffect(() => {
    if (videoRef.current) {
      if (currentSlide === 2) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [currentSlide]);

  // Autoplay slider (pauses on hover)
  useEffect(() => {
    if (!isPaused) {
      const slideDuration = currentSlide === 2 ? 8500 : 6500;
      timerRef.current = setInterval(() => {
        nextSlide();
      }, slideDuration);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, currentSlide]);

  return (
    <section
      className="relative w-full min-h-[86vh] sm:min-h-[88vh] lg:min-h-[92vh] flex items-center justify-center bg-[#070b20] overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Deep Ambient Cosmic Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c133a] via-[#070b20] to-[#040612] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[650px] h-[380px] bg-[#283890]/25 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[320px] bg-[#ff740e]/12 rounded-full blur-[130px] pointer-events-none" />

      {/* ─────────────────────────────────────────────────────────────
          SLIDE 1: DYNAMIC PRODUCT IMAGES COLLAGE (NO OVERLAPS)
          All 7 product photos from public/products/Products
          ───────────────────────────────────────────────────────────── */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex items-center justify-center ${
          currentSlide === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
        }`}
      >
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-14 sm:pt-16 pb-20 sm:pb-24">
          
          {/* Dynamic Asymmetric Non-Overlapping Collage Grid */}
          <div className="grid grid-cols-12 gap-3 sm:gap-4 lg:gap-5 items-center">
            {PRODUCT_COLLAGE.map((item, idx) => (
              <div
                key={idx}
                onClick={() => onNavigate('home', 'products')}
                className={`${item.colSpan} ${item.height} ${item.tilt} ${item.offset} p-1.5 sm:p-2 bg-white rounded-2xl sm:rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.55)] border-2 sm:border-3 border-white/80 hover:rotate-0 hover:scale-105 hover:shadow-[0_25px_50px_rgba(255,116,14,0.35)] transition-all duration-300 cursor-pointer group`}
                title="View Pustam Products"
              >
                <div className="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden bg-white">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading={idx < 3 ? 'eager' : 'lazy'}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          SLIDE 2: DYNAMIC FACTORY MACHINERY COLLAGE (NO OVERLAPS)
          Photos from public/Infra (no video)
          ───────────────────────────────────────────────────────────── */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex items-center justify-center ${
          currentSlide === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
        }`}
      >
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-14 sm:pt-16 pb-20 sm:pb-24">
          
          {/* 4-Image Asymmetric Industrial Collage Grid */}
          <div className="grid grid-cols-12 gap-3 sm:gap-4 lg:gap-5 items-center">
            
            {/* Main Flexo Ruling Line Card */}
            <div
              onClick={() => onNavigate('home', 'factory')}
              className={`${FACTORY_COLLAGE[0].colSpan} ${FACTORY_COLLAGE[0].height} ${FACTORY_COLLAGE[0].tilt} ${FACTORY_COLLAGE[0].offset} p-1.5 sm:p-2 bg-white/90 rounded-2xl sm:rounded-3xl shadow-[0_20px_45px_rgba(0,0,0,0.65)] border-2 sm:border-3 border-white/80 hover:rotate-0 hover:scale-104 transition-all duration-300 cursor-pointer group`}
              title="Flexo Ruling Line"
            >
              <div className="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden bg-[#11193d]">
                <img
                  src={FACTORY_COLLAGE[0].image}
                  alt={FACTORY_COLLAGE[0].alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Right Column Supporting Machineries */}
            <div className="col-span-12 lg:col-span-5 flex flex-col gap-3 sm:gap-4">
              
              {/* Precision Cutting */}
              <div
                onClick={() => onNavigate('home', 'factory')}
                className={`w-full ${FACTORY_COLLAGE[1].height} ${FACTORY_COLLAGE[1].tilt} ${FACTORY_COLLAGE[1].offset} p-1.5 sm:p-2 bg-white/90 rounded-2xl sm:rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.55)] border-2 sm:border-3 border-white/80 hover:rotate-0 hover:scale-104 transition-all duration-300 cursor-pointer group`}
                title="Precision Cutting Line"
              >
                <div className="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden bg-[#11193d]">
                  <img
                    src={FACTORY_COLLAGE[1].image}
                    alt={FACTORY_COLLAGE[1].alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Bottom 2 Split Tiles: Reels & Aerial Campus */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {FACTORY_COLLAGE.slice(2, 4).map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => onNavigate('home', 'factory')}
                    className={`w-full ${item.height} ${item.tilt} ${item.offset} p-1.5 sm:p-2 bg-white/90 rounded-2xl sm:rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.55)] border-2 sm:border-3 border-white/80 hover:rotate-0 hover:scale-105 transition-all duration-300 cursor-pointer group`}
                    title={item.alt}
                  >
                    <div className="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden bg-[#11193d]">
                      <img
                        src={item.image}
                        alt={item.alt}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          SLIDE 3: VIDEO TOUR SNIPPET (No redirect, self-contained preview)
          ───────────────────────────────────────────────────────────── */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex items-center justify-center ${
          currentSlide === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
        }`}
      >
        {/* Full-bleed ambient backdrop video */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
          <video
            src="/assets/facility-tour.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover blur-sm"
          />
        </div>

        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6 sm:pt-8 pb-24 sm:pb-28 flex flex-col items-center justify-center text-center my-auto">
          
          {/* Headline */}
          <h1 className="font-headline font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white tracking-tight leading-snug max-w-2xl mb-3 sm:mb-4 drop-shadow-md">
            High-Speed Paper Converting &amp; Notebook Manufacturing Tour
          </h1>

          {/* Interactive Cinema Video Frame (Pure Clean Video) */}
          <div
            className="relative max-w-xl sm:max-w-2xl w-full max-h-[38vh] sm:max-h-[44vh] aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border-2 sm:border-3 border-white/25 group hover:border-[#f0e846]/80 transition-all duration-300"
            title="Pustam Manufacturing Tour"
          >
            <video
              ref={videoRef}
              src="/assets/facility-tour.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
            />
          </div>

          {/* CTA Buttons Row — Internal navigation, clear of bottom selector bar */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mt-3 sm:mt-4 mb-1">
            <button
              onClick={() => onNavigate('home', 'factory')}
              className="px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl bg-[#ff740e] hover:bg-[#e06307] text-white font-headline font-bold text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 shadow-xl shadow-orange-600/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 min-h-[42px]"
            >
              <span>Explore Inside Pustam</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-headline font-semibold text-xs sm:text-sm border border-white/20 hover:border-[#f0e846] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 backdrop-blur-sm min-h-[42px] flex items-center justify-center gap-2"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          SLIDER CONTROLS & NAVIGATION STRIP
          ───────────────────────────────────────────────────────────── */}
      
      {/* Floating Left Navigation Arrow Button */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/60 hover:bg-[#ff740e] text-white border border-white/25 backdrop-blur-md flex items-center justify-center shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>

      {/* Floating Right Navigation Arrow Button */}
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/60 hover:bg-[#ff740e] text-white border border-white/25 backdrop-blur-md flex items-center justify-center shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>

      {/* Bottom Center Slide Selector Bar */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1.5 sm:gap-2.5 bg-black/80 backdrop-blur-lg px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/20 shadow-2xl">
        {[
          { label: 'Products', icon: Layers, idx: 0 },
          { label: 'Factory', icon: Factory, idx: 1 },
          { label: 'Factory Tour', icon: Video, idx: 2 },
        ].map((item) => {
          const Icon = item.icon;
          const isActive = currentSlide === item.idx;
          return (
            <button
              key={item.idx}
              onClick={() => goToSlide(item.idx)}
              className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs font-headline font-semibold transition-all duration-300 flex items-center gap-1.5 sm:gap-2 ${
                isActive
                  ? 'bg-[#ff740e] text-white shadow-lg shadow-orange-600/40'
                  : 'text-white/60 hover:text-white hover:bg-white/10'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{item.label}</span>
              {isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              )}
            </button>
          );
        })}
      </div>

    </section>
  );
};
