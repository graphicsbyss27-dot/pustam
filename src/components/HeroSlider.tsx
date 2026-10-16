import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ExternalLink,
  Play,
  Layers,
  Factory,
  Video as VideoIcon,
} from 'lucide-react';

interface HeroSliderProps {
  onNavigate: (page: 'home' | 'contact', sectionId?: string) => void;
}

// ─────────────────────────────────────────────────────────────
// 1. All 7 Products from public/products/Products/ (Pure Dynamic Imagery, No Info)
// ─────────────────────────────────────────────────────────────
const PRODUCT_COLLAGE = [
  {
    src: '/products/Products/Exercise Books.jpg',
    alt: 'Pustam Exercise Books',
    // Desktop layout (organic scattered coordinates & rotations)
    desktopClass: 'lg:left-[2%] lg:top-[12%] lg:w-[24%] lg:-rotate-6 lg:z-10',
    // Mobile / Tablet layout
    mobileClass: 'left-[2%] top-[6%] w-[48%] -rotate-6 z-10',
  },
  {
    src: '/products/Products/Counter Books.jpg',
    alt: 'Pustam Counter Books',
    desktopClass: 'lg:left-[16%] lg:top-[28%] lg:w-[25%] lg:rotate-5 lg:z-20',
    mobileClass: 'right-[2%] top-[4%] w-[50%] rotate-5 z-15',
  },
  {
    src: '/products/Products/Composition Books.jpg',
    alt: 'Pustam Composition Books',
    desktopClass: 'lg:left-[30%] lg:top-[8%] lg:w-[24%] lg:-rotate-4 lg:z-15',
    mobileClass: 'left-[4%] top-[34%] w-[49%] rotate-3 z-15',
  },
  {
    src: '/products/Products/Double wire notebook.jpg',
    alt: 'Pustam Double Wire Notebook',
    desktopClass: 'lg:left-[43%] lg:top-[22%] lg:w-[26%] lg:rotate-2 lg:z-30',
    mobileClass: 'left-[24%] top-[22%] w-[54%] -rotate-2 z-25',
  },
  {
    src: '/products/Products/Spiral Notebooks.jpg',
    alt: 'Pustam Spiral Notebooks',
    desktopClass: 'lg:left-[57%] lg:top-[10%] lg:w-[24%] lg:-rotate-5 lg:z-20',
    mobileClass: 'right-[4%] top-[34%] w-[48%] -rotate-5 z-20',
  },
  {
    src: '/products/Products/handbound.jpg',
    alt: 'Pustam Handbound Registers',
    desktopClass: 'lg:left-[70%] lg:top-[26%] lg:w-[25%] lg:rotate-6 lg:z-15',
    mobileClass: 'left-[3%] bottom-[6%] w-[48%] -rotate-4 z-15',
  },
  {
    src: '/products/Products/Notepads.jpg',
    alt: 'Pustam Notepads',
    desktopClass: 'lg:left-[80%] lg:top-[12%] lg:w-[23%] lg:-rotate-4 lg:z-10',
    mobileClass: 'right-[3%] bottom-[8%] w-[50%] rotate-6 z-20',
  },
];

// ─────────────────────────────────────────────────────────────
// 2. Factory Machineries from public/Infra/ (Pure Industrial Imagery, No Text/Video)
// ─────────────────────────────────────────────────────────────
const FACTORY_COLLAGE = [
  {
    src: '/Infra/factory-ruling-printing-line.jpg',
    alt: 'High Speed Ruling & Flexo Printing Line',
    desktopClass: 'lg:left-[16%] lg:top-[10%] lg:w-[48%] lg:-rotate-2 lg:z-25',
    mobileClass: 'left-[4%] top-[6%] w-[78%] -rotate-3 z-15',
  },
  {
    src: '/Infra/factory-interior-cutting.jpg',
    alt: 'High Precision Paper Cutting Machinery',
    desktopClass: 'lg:left-[3%] lg:top-[30%] lg:w-[35%] lg:rotate-4 lg:z-15',
    mobileClass: 'right-[4%] top-[26%] w-[72%] rotate-4 z-20',
  },
  {
    src: '/Infra/factory-warehouse-reels.jpg',
    alt: 'Raw Material Reel Warehouse',
    desktopClass: 'lg:right-[4%] lg:top-[18%] lg:w-[36%] lg:-rotate-4 lg:z-20',
    mobileClass: 'left-[6%] top-[50%] w-[70%] -rotate-2 z-20',
  },
  {
    src: '/Infra/factory-aerial-facility.jpg',
    alt: 'Palghar Manufacturing Facility Aerial View',
    desktopClass: 'lg:left-[38%] lg:bottom-[8%] lg:w-[40%] lg:rotate-3 lg:z-30',
    mobileClass: 'right-[5%] bottom-[8%] w-[76%] rotate-3 z-25',
  },
];

const YOUTUBE_URL = 'https://youtube.com/@twofoldstationery?si=ooO3KW5As5621baS';
const SLIDE_DURATION = 6000; // 6 seconds per slide

export const HeroSlider: React.FC<HeroSliderProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  // Drag & Swipe handling
  const touchStartX = useRef<number | null>(null);
  const isDragging = useRef<boolean>(false);
  const dragStartX = useRef<number>(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const totalSlides = 3;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setProgress(0);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setProgress(0);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Video playback sync
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

  // Auto-slide Timer & Live Progress Bar
  useEffect(() => {
    if (isPaused) return;

    const intervalTime = 50; // Update progress bar every 50ms
    const step = (intervalTime / (currentSlide === 2 ? 8500 : SLIDE_DURATION)) * 100;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [isPaused, currentSlide, nextSlide]);

  // Touch Swipe Handlers (Mobile)
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsPaused(false);
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();
    touchStartX.current = null;
  };

  // Mouse Drag Handlers (Desktop)
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const diff = dragStartX.current - e.clientX;
    if (diff > 60) nextSlide();
    else if (diff < -60) prevSlide();
  };

  return (
    <section
      className="relative w-full h-[84vh] sm:h-[88vh] lg:h-[92vh] min-h-[560px] bg-[#070b20] overflow-hidden select-none cursor-grab active:cursor-grabbing"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        isDragging.current = false;
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {/* Dynamic Background Deep Cosmic & Radial Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c133a] via-[#070b20] to-[#040612] pointer-events-none" />
      <div className="absolute -top-32 left-1/4 w-[750px] h-[450px] bg-[#283890]/25 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 w-[650px] h-[400px] bg-[#ff740e]/15 rounded-full blur-[130px] pointer-events-none" />

      {/* Top Slider Progress Bar (Shows real auto-sliding progress) */}
      <div className="absolute top-0 left-0 right-0 z-40 h-1 bg-white/10">
        <div
          className="h-full bg-gradient-to-r from-[#f0e846] via-[#ff740e] to-[#ff0000] transition-[width] duration-75 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* ─────────────────────────────────────────────────────────────
          REAL HORIZONTAL SLIDING TRACK
          ───────────────────────────────────────────────────────────── */}
      <div
        className="flex w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >

        {/* ══════════════════════════════════════════════════════════════
            SLIDE 1: PURE DYNAMIC RANDOM PRODUCT IMAGES COLLAGE ONLY
            (Zero text, Zero info boxes — organic scattered montage)
            ══════════════════════════════════════════════════════════════ */}
        <div className="w-full shrink-0 min-w-full h-full relative flex items-center justify-center p-3 sm:p-6 lg:p-10 overflow-hidden">
          
          {/* Subtle Ambient Spotlight behind the collage */}
          <div className="absolute w-[80%] h-[70%] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Scattered Dynamic Collage Canvas */}
          <div className="relative w-full max-w-[1440px] h-[74vh] sm:h-[78vh] lg:h-[82vh] max-h-[720px] flex items-center justify-center">
            {PRODUCT_COLLAGE.map((item, idx) => (
              <div
                key={idx}
                onClick={() => onNavigate('home', 'products')}
                className={`absolute ${item.desktopClass} ${item.mobileClass} rounded-2xl sm:rounded-3xl overflow-hidden bg-white shadow-[0_20px_50px_rgba(0,0,0,0.65)] border-2 sm:border-4 border-white/90 hover:rotate-0 hover:scale-115 hover:z-50 hover:shadow-[0_30px_70px_rgba(255,116,14,0.4)] transition-all duration-300 cursor-pointer group`}
                title="Explore Pustam Products"
              >
                <div className="w-full h-full overflow-hidden bg-white">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading={idx < 3 ? 'eager' : 'lazy'}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* ══════════════════════════════════════════════════════════════
            SLIDE 2: PURE DYNAMIC RANDOM FACTORY MACHINERY COLLAGE ONLY
            (Zero text, Zero info boxes — organic scattered industrial montage)
            ══════════════════════════════════════════════════════════════ */}
        <div className="w-full shrink-0 min-w-full h-full relative flex items-center justify-center p-3 sm:p-6 lg:p-10 overflow-hidden">
          
          {/* Subtle Ambient Spotlight behind machinery collage */}
          <div className="absolute w-[80%] h-[70%] bg-[#ff740e]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Scattered Dynamic Industrial Machinery Canvas */}
          <div className="relative w-full max-w-[1440px] h-[74vh] sm:h-[78vh] lg:h-[82vh] max-h-[720px] flex items-center justify-center">
            {FACTORY_COLLAGE.map((item, idx) => (
              <div
                key={idx}
                onClick={() => onNavigate('home', 'factory')}
                className={`absolute ${item.desktopClass} ${item.mobileClass} rounded-2xl sm:rounded-3xl overflow-hidden bg-[#11193d] shadow-[0_22px_55px_rgba(0,0,0,0.75)] border-2 sm:border-4 border-white/90 hover:rotate-0 hover:scale-110 hover:z-50 hover:shadow-[0_30px_75px_rgba(40,56,144,0.6)] transition-all duration-300 cursor-pointer group`}
                title="View Factory Infrastructure"
              >
                <div className="w-full h-full overflow-hidden bg-[#11193d]">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* ══════════════════════════════════════════════════════════════
            SLIDE 3: VIDEO TOUR + ONE LINE HEADLINE + YOUTUBE CTA LINK
            (Plays video & redirects to YouTube on click)
            ══════════════════════════════════════════════════════════════ */}
        <div className="w-full shrink-0 min-w-full h-full relative flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 overflow-hidden">
          
          {/* Ambient blurred backdrop video */}
          <div className="absolute inset-0 z-0 opacity-25 pointer-events-none overflow-hidden">
            <video
              src="/assets/facility-tour.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover blur-lg scale-110"
            />
          </div>

          <div className="relative z-20 max-w-4xl mx-auto w-full flex flex-col items-center text-center">

            {/* ONE SINGLE LINE AS REQUESTED */}
            <h1 className="font-headline font-bold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-snug max-w-3xl mb-4 sm:mb-6 drop-shadow-md">
              Watch Our High-Speed Paper Converting &amp; Notebook Manufacturing Tour
            </h1>

            {/* Cinema Video Player (Clicking redirects to YouTube channel) */}
            <div
              onClick={() => window.open(YOUTUBE_URL, '_blank', 'noopener,noreferrer')}
              className="relative max-w-2xl sm:max-w-3xl w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8)] border-2 sm:border-3 border-white/25 group cursor-pointer hover:border-[#ff0000] hover:shadow-red-600/40 transition-all duration-300"
              title="Click to watch full video on YouTube"
            >
              <video
                ref={videoRef}
                src="/assets/facility-tour.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
              />

              {/* YouTube Channel Badge */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-white text-xs font-semibold shadow">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff0000] animate-pulse" />
                <span>Twofold Stationery · Factory Tour</span>
              </div>

              {/* Center Play Overlay Icon */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-[#ff0000] text-white flex items-center justify-center shadow-2xl shadow-red-600/60 group-hover:scale-115 transition-transform duration-300">
                  <Play className="w-7 h-7 sm:w-10 sm:h-10 fill-white text-white translate-x-0.5" />
                </div>
              </div>

              {/* Bottom Right Direct Link */}
              <div className="absolute bottom-3 right-3 z-20 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/15 text-[11px] sm:text-xs text-white font-headline font-semibold flex items-center gap-1.5 group-hover:bg-[#ff0000] transition-colors">
                <span>Watch on YouTube</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* CTA BUTTONS ROW (Redirects to YouTube) */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-5 sm:mt-7">
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#ff0000] hover:bg-[#d90000] text-white font-headline font-bold text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2.5 shadow-xl shadow-red-600/30 hover:shadow-red-600/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 min-h-[46px]"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span>Watch on YouTube</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => onNavigate('contact')}
                className="px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-headline font-semibold text-xs sm:text-sm border border-white/20 hover:border-[#f0e846] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 backdrop-blur-sm min-h-[46px] flex items-center justify-center gap-2"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* ─────────────────────────────────────────────────────────────
          REAL SLIDER CONTROLS (Left/Right Floating Nav + Bottom Pills)
          ───────────────────────────────────────────────────────────── */}
      
      {/* Floating Left Navigation Arrow Button */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-[#ff740e] text-white border border-white/25 backdrop-blur-md flex items-center justify-center shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>

      {/* Floating Right Navigation Arrow Button */}
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-[#ff740e] text-white border border-white/25 backdrop-blur-md flex items-center justify-center shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>

      {/* Bottom Center Slide Selector Bar */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1.5 sm:gap-2.5 bg-black/70 backdrop-blur-lg px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/20 shadow-2xl">
        {[
          { label: 'Products', icon: Layers, idx: 0 },
          { label: 'Factory', icon: Factory, idx: 1 },
          { label: 'Video Tour', icon: VideoIcon, idx: 2 },
        ].map((item) => {
          const Icon = item.icon;
          const isActive = currentSlide === item.idx;
          return (
            <button
              key={item.idx}
              onClick={() => goToSlide(item.idx)}
              className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs font-headline font-semibold transition-all duration-300 flex items-center gap-1.5 sm:gap-2 ${
                isActive
                  ? item.idx === 2
                    ? 'bg-[#ff0000] text-white shadow-lg shadow-red-600/40'
                    : 'bg-[#ff740e] text-white shadow-lg shadow-orange-600/40'
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
