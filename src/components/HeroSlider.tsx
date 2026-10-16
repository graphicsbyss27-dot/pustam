import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Factory,
  Play,
  Layers,
  Video,
} from 'lucide-react';

interface HeroSliderProps {
  onNavigate: (page: 'home' | 'contact', sectionId?: string) => void;
}

// 1. All products collage from /products/Products
const PRODUCT_COLLAGE = [
  { name: 'Exercise Books', image: '/products/Products/Exercise Books.jpg', tag: 'Pinned Books' },
  { name: 'Counter Books', image: '/products/Products/Counter Books.jpg', tag: 'Hardcover' },
  { name: 'Composition Books', image: '/products/Products/Composition Books.jpg', tag: 'Marble Flex' },
  { name: 'Spiral Notebooks', image: '/products/Products/Spiral Notebooks.jpg', tag: 'Single Coil' },
  { name: 'Double Wire Notebooks', image: '/products/Products/Double wire notebook.jpg', tag: 'Twin Loop' },
  { name: 'Notepads & Legal Pads', image: '/products/Products/Notepads.jpg', tag: 'Head Gummed' },
  { name: 'Hardbound Registers', image: '/products/Products/handbound.jpg', tag: 'Section Sewn' },
];

// 2. Factory machinery images from /public/Infra (no video)
const FACTORY_COLLAGE = [
  {
    title: 'Multi-Line Flexo Ruling & Converting Floor',
    subtitle: 'Continuous reel-to-sheet converting and ruling at industrial velocity',
    image: '/Infra/factory-ruling-printing-line.jpg',
    tag: 'Flexo Ruling Line',
  },
  {
    title: 'Precision Automated Paper Guillotine Cutting',
    subtitle: 'Computer-controlled cutting blocks for uniform notebook stacks',
    image: '/Infra/factory-interior-cutting.jpg',
    tag: 'Cutting & Sizing',
  },
  {
    title: 'Jumbo Reel Warehouse Logistics & Staging',
    subtitle: 'Forklift-handled reel storage supporting continuous operations',
    image: '/Infra/factory-warehouse-reels.jpg',
    tag: 'Warehouse & Logistics',
  },
  {
    title: 'Palghar Industrial Manufacturing Campus',
    subtitle: 'Purpose-built converting compound in Maharashtra, India',
    image: '/Infra/factory-aerial-facility.jpg',
    tag: 'Palghar Campus',
  },
];

const YOUTUBE_URL = 'https://youtube.com/@twofoldstationery?si=ooO3KW5As5621baS';

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
      className="relative w-full min-h-[86vh] sm:min-h-[88vh] lg:min-h-[92vh] flex items-center justify-center bg-[#0d163d] overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Ambient Brand Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#121c4e] via-[#0d163d] to-[#070b24]" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[350px] bg-[#283890]/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[300px] bg-[#ff740e]/10 rounded-full blur-3xl pointer-events-none" />

      {/* ─────────────────────────────────────────────────────────────
          SLIDE 1: PURE PRODUCT COLLAGE (All images from public/products/Products)
          ───────────────────────────────────────────────────────────── */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex items-center justify-center ${
          currentSlide === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
        }`}
      >
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16 sm:pt-20 pb-20 sm:pb-24">
          
          {/* Header Badge */}
          <div className="flex items-center justify-between gap-3 mb-3 sm:mb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#f0e846] text-xs font-semibold backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#f0e846]" />
              <span className="tracking-wide uppercase font-headline">
                Complete Product Range · 7 Core Stationery Categories
              </span>
            </div>

            <button
              onClick={() => onNavigate('home', 'products')}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs text-white/80 hover:text-[#f0e846] transition-colors font-semibold"
            >
              <span>View Full Catalog</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 7-Card Bento Product Collage Grid */}
          <div className="grid grid-cols-12 gap-2.5 sm:gap-3.5 lg:gap-4">
            
            {/* Top Row: 3 Wide Cards (col-span-4 each) */}
            {PRODUCT_COLLAGE.slice(0, 3).map((item) => (
              <div
                key={item.name}
                onClick={() => onNavigate('home', 'products')}
                className="col-span-12 sm:col-span-4 h-36 sm:h-44 lg:h-52 group relative rounded-2xl overflow-hidden bg-[#151f52] border border-white/15 hover:border-[#f0e846]/70 shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  loading="eager"
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 left-3 right-3 flex items-end justify-between pointer-events-none">
                  <div>
                    <span className="text-[10px] text-[#f0e846] font-mono uppercase tracking-wider block mb-0.5">
                      {item.tag}
                    </span>
                    <h3 className="text-white text-xs sm:text-sm font-headline font-bold drop-shadow">
                      {item.name}
                    </h3>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-[#f0e846] group-hover:text-[#283890] text-white flex items-center justify-center transition-colors">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            ))}

            {/* Bottom Row: 4 Cards (col-span-3 each) */}
            {PRODUCT_COLLAGE.slice(3, 7).map((item) => (
              <div
                key={item.name}
                onClick={() => onNavigate('home', 'products')}
                className="col-span-6 sm:col-span-3 h-32 sm:h-40 lg:h-44 group relative rounded-2xl overflow-hidden bg-[#151f52] border border-white/15 hover:border-[#f0e846]/70 shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-2 left-2.5 right-2.5 flex items-end justify-between pointer-events-none">
                  <div>
                    <span className="text-[9px] sm:text-[10px] text-[#f0e846] font-mono uppercase tracking-wider block">
                      {item.tag}
                    </span>
                    <h3 className="text-white text-[11px] sm:text-xs font-headline font-bold drop-shadow line-clamp-1">
                      {item.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}

          </div>

        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          SLIDE 2: FACTORY & MACHINERIES COLLAGE (Images from public/Infra, no video)
          ───────────────────────────────────────────────────────────── */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex items-center justify-center ${
          currentSlide === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
        }`}
      >
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16 sm:pt-20 pb-20 sm:pb-24">
          
          {/* Header Badge */}
          <div className="flex items-center justify-between gap-3 mb-3 sm:mb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#f0e846] text-xs font-semibold backdrop-blur-md">
              <Factory className="w-3.5 h-3.5 text-[#ff740e]" />
              <span className="tracking-wide uppercase font-headline">
                Palghar Converting Campus · 25 MT / Day Machinery Infrastructure
              </span>
            </div>

            <button
              onClick={() => onNavigate('home', 'factory')}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs text-white/80 hover:text-[#f0e846] transition-colors font-semibold"
            >
              <span>Explore Infrastructure</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 4-Card Industrial Bento Collage */}
          <div className="grid grid-cols-12 gap-3 sm:gap-4 lg:gap-5">
            
            {/* Left Main Hero Machinery Card (7 cols) */}
            <div
              onClick={() => onNavigate('home', 'factory')}
              className="col-span-12 lg:col-span-7 h-56 sm:h-72 lg:h-[400px] group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#151f52] border border-white/15 hover:border-[#f0e846]/70 shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <img
                src={FACTORY_COLLAGE[0].image}
                alt={FACTORY_COLLAGE[0].title}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 pointer-events-none">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#ff740e] text-white text-[10px] font-mono font-bold uppercase mb-1.5 shadow">
                  {FACTORY_COLLAGE[0].tag}
                </span>
                <h3 className="text-white font-headline font-bold text-base sm:text-xl lg:text-2xl drop-shadow mb-1">
                  {FACTORY_COLLAGE[0].title}
                </h3>
                <p className="text-white/80 text-xs sm:text-sm font-body max-w-xl hidden sm:block">
                  {FACTORY_COLLAGE[0].subtitle}
                </p>
              </div>
            </div>

            {/* Right Column (5 cols) */}
            <div className="col-span-12 lg:col-span-5 flex flex-col gap-3 sm:gap-4">
              
              {/* Top Tile: Precision Cutting Line */}
              <div
                onClick={() => onNavigate('home', 'factory')}
                className="h-32 sm:h-38 lg:h-[190px] group relative rounded-2xl overflow-hidden bg-[#151f52] border border-white/15 hover:border-[#f0e846]/70 shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <img
                  src={FACTORY_COLLAGE[1].image}
                  alt={FACTORY_COLLAGE[1].title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 pointer-events-none">
                  <span className="text-[10px] text-[#f0e846] font-mono uppercase tracking-wider block">
                    {FACTORY_COLLAGE[1].tag}
                  </span>
                  <h4 className="text-white font-headline font-bold text-xs sm:text-sm drop-shadow">
                    {FACTORY_COLLAGE[1].title}
                  </h4>
                </div>
              </div>

              {/* Bottom 2 Split Tiles: Warehouse Reels & Palghar Campus */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {FACTORY_COLLAGE.slice(2, 4).map((item) => (
                  <div
                    key={item.title}
                    onClick={() => onNavigate('home', 'factory')}
                    className="h-32 sm:h-38 lg:h-[194px] group relative rounded-2xl overflow-hidden bg-[#151f52] border border-white/15 hover:border-[#f0e846]/70 shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 pointer-events-none">
                      <span className="text-[9px] sm:text-[10px] text-[#f0e846] font-mono uppercase tracking-wider block">
                        {item.tag}
                      </span>
                      <h4 className="text-white font-headline font-bold text-[11px] sm:text-xs drop-shadow line-clamp-1">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          SLIDE 3: VIDEO TOUR + ONE LINE + CTA BUTTON (Redirects to YouTube)
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

        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16 sm:pt-20 pb-20 sm:pb-24 flex flex-col items-center text-center">
          
          {/* Tagline Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/20 border border-red-500/40 text-red-200 text-xs font-semibold mb-3 sm:mb-4 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#ff0000] animate-pulse" />
            <span className="tracking-wide uppercase font-headline">
              Official Production Video Tour
            </span>
          </div>

          {/* ONE LINE OF HEADLINE TEXT (as requested) */}
          <h1 className="font-headline font-bold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight max-w-3xl mb-4 sm:mb-6 drop-shadow-md">
            Watch Our High-Speed Paper Converting & Notebook Manufacturing Tour
          </h1>

          {/* Interactive Cinema Video Frame (Clicking redirects to YouTube channel) */}
          <div
            onClick={() => window.open(YOUTUBE_URL, '_blank', 'noopener,noreferrer')}
            className="relative max-w-2xl sm:max-w-3xl w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 group cursor-pointer hover:border-[#ff0000] hover:shadow-red-600/30 transition-all duration-300"
            title="Click to watch on YouTube"
          >
            <video
              ref={videoRef}
              src="/assets/facility-tour.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
            />

            {/* Top YouTube live badge */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-white text-xs font-semibold shadow">
              <span className="w-2 h-2 rounded-full bg-[#ff0000] animate-pulse" />
              <span>Twofold Stationery · YouTube Channel</span>
            </div>

            {/* Glowing Red Play Center Overlay */}
            <div className="absolute inset-0 bg-black/35 group-hover:bg-black/15 transition-colors flex items-center justify-center">
              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-[#ff0000] text-white flex items-center justify-center shadow-2xl shadow-red-600/60 group-hover:scale-115 transition-transform duration-300">
                <Play className="w-7 h-7 sm:w-10 sm:h-10 fill-white text-white translate-x-0.5" />
              </div>
            </div>

            {/* Bottom-right Direct Link Badge */}
            <div className="absolute bottom-3 right-3 z-20 px-3 py-1.5 rounded-lg bg-black/75 backdrop-blur-md border border-white/15 text-[11px] sm:text-xs text-white font-headline font-semibold flex items-center gap-1.5 group-hover:bg-[#ff0000] transition-colors">
              <span>Open on YouTube</span>
              <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </div>
          </div>

          {/* CTA Buttons Row (as requested) */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-5 sm:mt-7">
            
            {/* Primary CTA: Watch on YouTube */}
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

            {/* Secondary CTA: Partner With Us */}
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

      {/* ─────────────────────────────────────────────────────────────
          SLIDER CONTROLS & NAVIGATION STRIP
          ───────────────────────────────────────────────────────────── */}
      <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-6 lg:right-10 z-30 flex items-center gap-1.5 sm:gap-2.5 bg-[#0d163d]/90 backdrop-blur-md p-1.5 sm:p-2 rounded-2xl border border-white/15 shadow-2xl">
        
        {/* Slide 1 Pill Button */}
        <button
          onClick={() => goToSlide(0)}
          className={`px-3 py-1.5 rounded-xl text-xs font-headline font-semibold flex items-center gap-1.5 transition-all duration-200 ${
            currentSlide === 0
              ? 'bg-[#283890] text-[#f0e846] border border-[#f0e846]/40 shadow'
              : 'text-white/60 hover:text-white hover:bg-white/5'
          }`}
          aria-label="Slide 1: Products Collage"
        >
          <Layers className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">01 Products</span>
          <span className="sm:hidden">01</span>
        </button>

        {/* Slide 2 Pill Button */}
        <button
          onClick={() => goToSlide(1)}
          className={`px-3 py-1.5 rounded-xl text-xs font-headline font-semibold flex items-center gap-1.5 transition-all duration-200 ${
            currentSlide === 1
              ? 'bg-[#283890] text-[#f0e846] border border-[#f0e846]/40 shadow'
              : 'text-white/60 hover:text-white hover:bg-white/5'
          }`}
          aria-label="Slide 2: Factory Machineries"
        >
          <Factory className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">02 Factory</span>
          <span className="sm:hidden">02</span>
        </button>

        {/* Slide 3 Pill Button */}
        <button
          onClick={() => goToSlide(2)}
          className={`px-3 py-1.5 rounded-xl text-xs font-headline font-semibold flex items-center gap-1.5 transition-all duration-200 ${
            currentSlide === 2
              ? 'bg-[#ff0000] text-white border border-red-400/40 shadow-lg shadow-red-600/30'
              : 'text-white/60 hover:text-white hover:bg-white/5'
          }`}
          aria-label="Slide 3: Video Tour"
        >
          <Video className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">03 Video Tour</span>
          <span className="sm:hidden">03</span>
        </button>

        {/* Manual Arrow Controls */}
        <div className="flex items-center gap-1 border-l border-white/15 pl-1.5 sm:pl-2">
          <button
            onClick={prevSlide}
            className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
