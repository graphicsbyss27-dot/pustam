import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Factory,
  Layers,
  Sparkles,
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/websiteData';
import { WhatsAppIcon } from './WhatsAppIcon';

interface HeroSliderProps {
  onNavigate: (page: 'home' | 'contact', sectionId?: string) => void;
}

// ─────────────────────────────────────────────────────────────
// 1. All 7 Products (Pure images, no text/data)
// ─────────────────────────────────────────────────────────────
const PRODUCT_IMAGES = [
  {
    image: '/products/Products/Exercise Books.jpg',
    alt: 'Exercise Books',
  },
  {
    image: '/products/Products/Counter Books.jpg',
    alt: 'Counter Books',
  },
  {
    image: '/products/Products/Composition Books.jpg',
    alt: 'Composition Books',
  },
  {
    image: '/products/Products/Double wire notebook.jpg',
    alt: 'Double Wire Notebooks',
  },
  {
    image: '/products/Products/Spiral Notebooks.jpg',
    alt: 'Spiral Notebooks',
  },
  {
    image: '/products/Products/Notepads.jpg',
    alt: 'Notepads & Legal Pads',
  },
  {
    image: '/products/Products/handbound.jpg',
    alt: 'Handbound Registers',
  },
];

// ─────────────────────────────────────────────────────────────
// 2. Factory Images (Pure industrial photography, no text/data)
// ─────────────────────────────────────────────────────────────
const FACTORY_IMAGES = [
  {
    image: '/assets/factory-assembly-line.jpg',
    alt: 'Automated Notebook Converting Assembly Line',
  },
  {
    image: '/assets/factory-ruling-automation.jpg',
    alt: 'Automated Wire-O & Flexo Ruling Department',
  },
  {
    image: '/assets/factory-aerial-facility.jpg',
    alt: 'Palghar Manufacturing Campus',
  },
  {
    image: '/assets/factory-interior-cutting.jpg',
    alt: 'Precision High-Speed Guillotine Cutting Line',
  },
  {
    image: '/assets/factory-warehouse-reels.jpg',
    alt: 'Controlled Parent Reel Storage Warehouse',
  },
];

export const HeroSlider: React.FC<HeroSliderProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
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

  // Autoplay slider (pauses on hover)
  useEffect(() => {
    if (!isPaused) {
      const slideDuration = 6500;
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
      className="relative w-full h-[84vh] sm:h-[86vh] lg:h-[88vh] max-h-[850px] min-h-[580px] flex items-center justify-center bg-[#070b20] overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* ─────────────────────────────────────────────────────────────
          GLOBAL KEYFRAME ANIMATIONS (GPU Accelerated)
          ───────────────────────────────────────────────────────────── */}
      <style>{`
        /* Foil Shimmer effect */
        @keyframes foilShimmer {
          0% { transform: translateX(-160%) skewX(-25deg); }
          50% { transform: translateX(260%) skewX(-25deg); }
          100% { transform: translateX(260%) skewX(-25deg); }
        }
        .animate-foil-shimmer {
          animation: foilShimmer 3.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        /* Continuous paper wave ribbon animation */
        @keyframes waveFlow1 {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -800; }
        }
        .animate-wave-flow-1 {
          stroke-dasharray: 12, 16;
          animation: waveFlow1 22s linear infinite;
        }
        @keyframes waveFlow2 {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 800; }
        }
        .animate-wave-flow-2 {
          stroke-dasharray: 8, 12;
          animation: waveFlow2 26s linear infinite;
        }

        /* Breathing Aura & Ambient Lighting */
        @keyframes auraBreath {
          0%, 100% { transform: scale(1) translate(0, 0); opacity: 0.35; }
          50% { transform: scale(1.15) translate(20px, -15px); opacity: 0.65; }
        }
        .animate-aura-1 {
          animation: auraBreath 8s ease-in-out infinite;
        }
        @keyframes auraBreath2 {
          0%, 100% { transform: scale(1.1) translate(0, 0); opacity: 0.3; }
          50% { transform: scale(0.92) translate(-25px, 20px); opacity: 0.6; }
        }
        .animate-aura-2 {
          animation: auraBreath2 10s ease-in-out infinite;
        }

        /* Floating Golden Foil Dust Particles */
        @keyframes floatDust1 {
          0% { transform: translateY(0px) rotate(0deg); opacity: 0.2; }
          50% { transform: translateY(-35px) rotate(180deg); opacity: 0.85; }
          100% { transform: translateY(-70px) rotate(360deg); opacity: 0.1; }
        }
        .animate-dust-1 {
          animation: floatDust1 7s ease-in-out infinite;
        }
        @keyframes floatDust2 {
          0% { transform: translateY(0px) rotate(0deg); opacity: 0.15; }
          50% { transform: translateY(-45px) rotate(-180deg); opacity: 0.9; }
          100% { transform: translateY(-90px) rotate(-360deg); opacity: 0.1; }
        }
        .animate-dust-2 {
          animation: floatDust2 9s ease-in-out infinite 1.5s;
        }

        /* Slide 1: Flowing Notebook Ruled Lines Motion */
        @keyframes flowRuling {
          0% { transform: translateY(0); }
          100% { transform: translateY(32px); }
        }
        .animate-flow-ruling {
          animation: flowRuling 6s linear infinite;
        }

        /* Slide 2: Precision Industrial Laser Beam Sweep */
        @keyframes laserSweep {
          0% { transform: translateY(-100%); opacity: 0; }
          15% { opacity: 0.8; }
          85% { opacity: 0.8; }
          100% { transform: translateY(800%); opacity: 0; }
        }
        .animate-laser-sweep {
          animation: laserSweep 5s ease-in-out infinite;
        }

        /* Target Bracket Pulse for White-Label Box */
        @keyframes targetPulse {
          0%, 100% { transform: scale(1); opacity: 0.85; }
          50% { transform: scale(1.02); opacity: 1; filter: drop-shadow(0 0 12px #f0e846); }
        }
        .animate-target-box {
          animation: targetPulse 2.8s ease-in-out infinite;
        }
      `}</style>

      {/* Deep Ambient Cosmic Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c133a] via-[#070b20] to-[#040612] pointer-events-none" />

      {/* ─────────────────────────────────────────────────────────────
          SLIDE 1: PURE PRODUCT IMAGES MERGED COLLAGE + MOTION BACKGROUND
          - Motion: Flowing notebook blue ruling lines & drifting stardust
          ───────────────────────────────────────────────────────────── */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex items-center justify-center overflow-hidden ${
          currentSlide === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
        }`}
      >
        {/* Slide 1 Motion Background Layer */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="animate-aura-1 absolute top-1/4 left-1/4 w-[600px] h-[350px] bg-[#283890]/30 rounded-full blur-[120px]" />
          <div className="animate-aura-2 absolute bottom-1/4 right-1/4 w-[450px] h-[300px] bg-[#ff740e]/15 rounded-full blur-[110px]" />

          {/* Flowing Notebook Ruled Lines */}
          <div className="absolute inset-0 opacity-15 overflow-hidden">
            <svg className="w-full h-[150%] animate-flow-ruling" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="ruledLines" width="100%" height="32" patternUnits="userSpaceOnUse">
                  <line x1="0" y1="0" x2="100%" y2="0" stroke="#38bdf8" strokeWidth="1" strokeDasharray="6 8" />
                  <line x1="0" y1="31" x2="100%" y2="31" stroke="#f0e846" strokeWidth="0.5" opacity="0.4" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#ruledLines)" />
            </svg>
          </div>

          <div className="animate-dust-1 absolute top-[25%] left-[15%] w-2 h-2 rounded-full bg-[#f0e846] shadow-[0_0_10px_#f0e846]" />
          <div className="animate-dust-2 absolute top-[60%] right-[18%] w-2 h-2 rounded-full bg-[#38bdf8] shadow-[0_0_10px_#38bdf8]" />
        </div>

        {/* Slide 1 Content: Pure Product Mosaic Collage */}
        <div className="relative z-20 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full h-full pt-4 sm:pt-6 pb-16 sm:pb-20 flex items-center justify-center">
          <div className="w-full h-full max-h-[70vh] grid grid-cols-12 gap-2 sm:gap-3.5 p-2 sm:p-3 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-2xl">
            
            {/* Left Dominant Column (2 products) */}
            <div className="col-span-4 sm:col-span-3 flex flex-col gap-2 sm:gap-3.5 h-full">
              <div
                onClick={() => onNavigate('home', 'products')}
                className="flex-1 rounded-2xl overflow-hidden bg-white shadow-lg border border-white/40 cursor-pointer group hover:scale-[1.02] hover:shadow-orange-500/20 transition-all duration-300"
                title="View Exercise Books"
              >
                <img
                  src={PRODUCT_IMAGES[0].image}
                  alt={PRODUCT_IMAGES[0].alt}
                  loading="eager"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div
                onClick={() => onNavigate('home', 'products')}
                className="flex-1 rounded-2xl overflow-hidden bg-white shadow-lg border border-white/40 cursor-pointer group hover:scale-[1.02] hover:shadow-orange-500/20 transition-all duration-300"
                title="View Spiral Notebooks"
              >
                <img
                  src={PRODUCT_IMAGES[4].image}
                  alt={PRODUCT_IMAGES[4].alt}
                  loading="eager"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Center Big Feature Item (1 large hero showcase) */}
            <div
              onClick={() => onNavigate('home', 'products')}
              className="col-span-4 sm:col-span-4 h-full rounded-2xl overflow-hidden bg-white shadow-2xl border-2 border-white/60 cursor-pointer group hover:scale-[1.02] hover:shadow-blue-500/30 transition-all duration-300 relative"
              title="View Counter Books"
            >
              <img
                src={PRODUCT_IMAGES[1].image}
                alt={PRODUCT_IMAGES[1].alt}
                loading="eager"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Center-Right Column (2 products) */}
            <div className="col-span-4 sm:col-span-3 flex flex-col gap-2 sm:gap-3.5 h-full">
              <div
                onClick={() => onNavigate('home', 'products')}
                className="flex-1 rounded-2xl overflow-hidden bg-white shadow-lg border border-white/40 cursor-pointer group hover:scale-[1.02] hover:shadow-orange-500/20 transition-all duration-300"
                title="View Composition Books"
              >
                <img
                  src={PRODUCT_IMAGES[2].image}
                  alt={PRODUCT_IMAGES[2].alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div
                onClick={() => onNavigate('home', 'products')}
                className="flex-1 rounded-2xl overflow-hidden bg-white shadow-lg border border-white/40 cursor-pointer group hover:scale-[1.02] hover:shadow-orange-500/20 transition-all duration-300"
                title="View Double Wire Notebooks"
              >
                <img
                  src={PRODUCT_IMAGES[3].image}
                  alt={PRODUCT_IMAGES[3].alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Far Right Stack Column (2 products) */}
            <div className="hidden sm:flex sm:col-span-2 flex-col gap-2 sm:gap-3.5 h-full">
              <div
                onClick={() => onNavigate('home', 'products')}
                className="flex-1 rounded-2xl overflow-hidden bg-white shadow-lg border border-white/40 cursor-pointer group hover:scale-[1.02] hover:shadow-orange-500/20 transition-all duration-300"
                title="View Notepads"
              >
                <img
                  src={PRODUCT_IMAGES[5].image}
                  alt={PRODUCT_IMAGES[5].alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div
                onClick={() => onNavigate('home', 'products')}
                className="flex-1 rounded-2xl overflow-hidden bg-white shadow-lg border border-white/40 cursor-pointer group hover:scale-[1.02] hover:shadow-orange-500/20 transition-all duration-300"
                title="View Handbound Registers"
              >
                <img
                  src={PRODUCT_IMAGES[6].image}
                  alt={PRODUCT_IMAGES[6].alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          SLIDE 2: PURE INFRASTRUCTURE IMAGES + INDUSTRIAL MOTION BACKGROUND
          - Motion: Precision Laser Beam Sweep + CAD Blueprint Grid
          ───────────────────────────────────────────────────────────── */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex items-center justify-center overflow-hidden ${
          currentSlide === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
        }`}
      >
        {/* Slide 2 Motion Background Layer */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="animate-aura-1 absolute top-1/3 left-1/3 w-[550px] h-[350px] bg-[#ff740e]/20 rounded-full blur-[130px]" />
          <div className="animate-aura-2 absolute bottom-10 right-10 w-[600px] h-[400px] bg-[#283890]/35 rounded-full blur-[120px]" />

          {/* Technical Blueprint Grid */}
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          {/* Precision Laser Scanning Beam */}
          <div className="animate-laser-sweep absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ff740e] to-transparent shadow-[0_0_15px_#ff740e]" />
          
          <div className="animate-dust-1 absolute top-[30%] left-[20%] w-2 h-2 rounded-full bg-[#ff740e] shadow-[0_0_10px_#ff740e]" />
          <div className="animate-dust-2 absolute top-[70%] right-[15%] w-2 h-2 rounded-full bg-[#f0e846] shadow-[0_0_10px_#f0e846]" />
        </div>

        {/* Slide 2 Content: Pure Infrastructure Mosaic */}
        <div className="relative z-20 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full h-full pt-4 sm:pt-6 pb-16 sm:pb-20 flex items-center justify-center">
          <div className="w-full h-full max-h-[70vh] grid grid-cols-12 gap-2 sm:gap-3.5 p-2 sm:p-3 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-2xl">
            
            {/* Left Major Showcase: Automated Assembly Line */}
            <div
              onClick={() => onNavigate('home', 'factory')}
              className="col-span-12 sm:col-span-6 h-full rounded-2xl overflow-hidden bg-[#11193d] shadow-2xl border border-white/30 cursor-pointer group hover:scale-[1.01] hover:border-[#ff740e]/60 transition-all duration-300"
              title="Automated Assembly Line"
            >
              <img
                src={FACTORY_IMAGES[0].image}
                alt={FACTORY_IMAGES[0].alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
              />
            </div>

            {/* Right Supporting 4-Grid of Industrial Photos */}
            <div className="col-span-12 sm:col-span-6 grid grid-cols-2 gap-2 sm:gap-3.5 h-full">
              
              {/* Automated Binding Floor */}
              <div
                onClick={() => onNavigate('home', 'factory')}
                className="rounded-2xl overflow-hidden bg-[#11193d] shadow-lg border border-white/20 cursor-pointer group hover:scale-[1.02] hover:border-[#f0e846]/60 transition-all duration-300"
                title="Automated Wire-O & Binding"
              >
                <img
                  src={FACTORY_IMAGES[1].image}
                  alt={FACTORY_IMAGES[1].alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Plant Aerial Campus */}
              <div
                onClick={() => onNavigate('home', 'factory')}
                className="rounded-2xl overflow-hidden bg-[#11193d] shadow-lg border border-white/20 cursor-pointer group hover:scale-[1.02] hover:border-[#f0e846]/60 transition-all duration-300"
                title="Palghar Industrial Campus"
              >
                <img
                  src={FACTORY_IMAGES[2].image}
                  alt={FACTORY_IMAGES[2].alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Precision Cutting Line */}
              <div
                onClick={() => onNavigate('home', 'factory')}
                className="rounded-2xl overflow-hidden bg-[#11193d] shadow-lg border border-white/20 cursor-pointer group hover:scale-[1.02] hover:border-[#f0e846]/60 transition-all duration-300"
                title="Precision Guillotine Cutting"
              >
                <img
                  src={FACTORY_IMAGES[3].image}
                  alt={FACTORY_IMAGES[3].alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Parent Reel Storage */}
              <div
                onClick={() => onNavigate('home', 'factory')}
                className="rounded-2xl overflow-hidden bg-[#11193d] shadow-lg border border-white/20 cursor-pointer group hover:scale-[1.02] hover:border-[#f0e846]/60 transition-all duration-300"
                title="Raw Reel Warehouse Logistics"
              >
                <img
                  src={FACTORY_IMAGES[4].image}
                  alt={FACTORY_IMAGES[4].alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          SLIDE 3: BUILD YOUR BRAND WITH US (SIMPLE, RECTANGULAR & ANIMATED)
          - No excess data
          - Clean horizontal rectangular white-label notebook showcase
          - "YOUR LOGO FITS HERE" target frame with foil shimmer
          - Motion background (paper ribbons + gold dust + aura)
          ───────────────────────────────────────────────────────────── */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex items-center justify-center overflow-hidden ${
          currentSlide === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
        }`}
      >
        {/* Slide 3 Animated Motion Layer */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Breathing Aurora Light Centerpiece */}
          <div className="animate-aura-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] sm:w-[950px] h-[550px] bg-gradient-to-tr from-[#283890]/40 via-[#f0e846]/15 to-[#ff740e]/25 rounded-full blur-[140px]" />
          <div className="animate-aura-2 absolute top-1/3 right-1/4 w-[450px] h-[350px] bg-[#38bdf8]/20 rounded-full blur-[110px]" />

          {/* Floating Gold Foil Particles */}
          <div className="absolute inset-0">
            <div className="animate-dust-1 absolute top-[18%] left-[12%] w-2 h-2 rounded-full bg-[#f0e846] shadow-[0_0_12px_#f0e846]" />
            <div className="animate-dust-2 absolute top-[65%] left-[16%] w-1.5 h-1.5 rounded-full bg-[#ff740e] shadow-[0_0_10px_#ff740e]" />
            <div className="animate-dust-1 absolute top-[28%] right-[16%] w-2.5 h-2.5 rounded-full bg-[#f0e846] shadow-[0_0_15px_#f0e846]" />
            <div className="animate-dust-2 absolute top-[72%] right-[20%] w-1.5 h-1.5 rounded-full bg-[#38bdf8] shadow-[0_0_10px_#38bdf8]" />
            <div className="animate-dust-1 absolute top-[48%] left-[8%] w-1 h-1 rounded-full bg-white shadow-[0_0_8px_white]" />
            <div className="animate-dust-2 absolute top-[52%] right-[10%] w-2 h-2 rounded-full bg-[#f0e846] shadow-[0_0_12px_#f0e846]" />
          </div>

          {/* Flowing Paper Web Ribbons */}
          <svg
            className="absolute inset-0 w-full h-full opacity-40 sm:opacity-50"
            viewBox="0 0 1440 600"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="goldWebGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#283890" stopOpacity="0.1" />
                <stop offset="30%" stopColor="#f0e846" stopOpacity="0.8" />
                <stop offset="70%" stopColor="#ff740e" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#283890" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="cyanWebGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#f0e846" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            <path
              d="M -100 280 C 300 120, 600 440, 1000 240 C 1200 140, 1400 320, 1600 220"
              stroke="url(#goldWebGrad3)"
              strokeWidth="2.5"
              className="animate-wave-flow-1"
            />
            <path
              d="M -100 340 C 250 480, 700 160, 1100 380 C 1300 480, 1450 260, 1600 360"
              stroke="url(#cyanWebGrad3)"
              strokeWidth="1.8"
              className="animate-wave-flow-2"
            />
          </svg>
        </div>

        {/* Slide 3 Foreground Content: Simple & Rectangular */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full pt-4 sm:pt-6 pb-16 sm:pb-20 flex flex-col justify-center items-center">
          
          {/* SINGLE-LINE HEADLINE */}
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              Build Your Brand <span className="text-[#f0e846]">With Us.</span>
            </h2>
          </div>

          {/* ── SIMPLE RECTANGULAR WHITE-LABEL NOTEBOOK CANVAS ── */}
          <div className="relative w-full max-w-3xl rounded-3xl bg-gradient-to-r from-[#0f172a]/95 via-[#151f52]/95 to-[#1e2b70]/95 border-2 border-white/20 p-6 sm:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.85)] flex flex-col items-center justify-center text-center overflow-hidden mb-6 sm:mb-8">
            
            {/* Animated Foil Shimmer sweeping across the rectangle */}
            <div
              className="animate-foil-shimmer absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(240, 232, 70, 0.45) 50%, transparent 100%)',
                width: '60%',
                filter: 'blur(10px)',
              }}
            />

            {/* Notebook Spine / Bound Edge Left Accent */}
            <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/70 via-white/10 to-transparent border-r border-white/15 pointer-events-none" />

            {/* Top Minimal Pill */}
            <div className="relative z-10 mb-4 sm:mb-5">
              <span className="px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-mono font-medium tracking-widest text-[#f0e846] border border-[#f0e846]/30 uppercase">
                WHITE-LABEL NOTEBOOK OEM
              </span>
            </div>

            {/* Central Animated Target Box: "YOUR LOGO FITS HERE" */}
            <div className="animate-target-box relative z-10 w-full max-w-md p-5 sm:p-7 rounded-2xl bg-black/40 backdrop-blur-md border-2 border-dashed border-[#f0e846]/70 shadow-2xl">
              
              {/* Corner Registration Brackets */}
              <div className="absolute -top-1.5 -left-1.5 w-3.5 h-3.5 border-t-2 border-l-2 border-white" />
              <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 border-t-2 border-r-2 border-white" />
              <div className="absolute -bottom-1.5 -left-1.5 w-3.5 h-3.5 border-b-2 border-l-2 border-white" />
              <div className="absolute -bottom-1.5 -right-1.5 w-3.5 h-3.5 border-b-2 border-r-2 border-white" />

              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#f0e846] animate-pulse" />
              </div>

              <div className="font-headline font-bold text-lg sm:text-2xl tracking-wider uppercase text-white drop-shadow">
                YOUR LOGO FITS HERE
              </div>

              <div className="text-xs sm:text-sm font-mono text-[#f0e846] tracking-wide mt-1">
                Custom Foil · Deboss · Any GSM · Retail Packaging
              </div>
            </div>

            {/* Subtle bottom note */}
            <div className="relative z-10 mt-4 text-[11px] font-mono text-white/50 tracking-wider">
              100% PRIVATE LABEL NOTEBOOK MANUFACTURING
            </div>

          </div>

          {/* ── SIMPLE STRAIGHTFORWARD CTAs ── */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-[#f0e846] hover:bg-[#ff740e] text-[#151f52] hover:text-white font-headline font-bold text-xs sm:text-sm tracking-wide shadow-xl shadow-yellow-500/25 transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <span>Start Brand Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={COMPANY_DETAILS.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-headline font-semibold text-xs sm:text-sm transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30"
              title="WhatsApp Us"
            >
              <WhatsAppIcon className="w-4 h-4 object-contain rounded-sm" />
              <span>WhatsApp OEM Desk</span>
            </a>
          </div>

        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          SLIDER CONTROLS & NAVIGATION STRIP
          ───────────────────────────────────────────────────────────── */}
      
      {/* Floating Left Navigation Arrow Button */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#ff740e] text-white border border-white/20 backdrop-blur-md flex items-center justify-center shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Floating Right Navigation Arrow Button */}
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#ff740e] text-white border border-white/20 backdrop-blur-md flex items-center justify-center shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Bottom Center Slide Selector Bar */}
      <div className="absolute bottom-2.5 sm:bottom-3.5 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1.5 sm:gap-2.5 bg-black/80 backdrop-blur-lg px-2.5 sm:px-4 py-1.5 rounded-full border border-white/20 shadow-2xl">
        {[
          { label: 'Products', icon: Layers, idx: 0 },
          { label: 'Infrastructure', icon: Factory, idx: 1 },
          { label: 'Build Your Brand', icon: Sparkles, idx: 2 },
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
                    ? 'bg-[#f0e846] text-[#151f52] shadow-lg shadow-yellow-500/40'
                    : 'bg-[#ff740e] text-white shadow-lg shadow-orange-600/40'
                  : 'text-white/60 hover:text-white hover:bg-white/10'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{item.label}</span>
              {isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              )}
            </button>
          );
        })}
      </div>

    </section>
  );
};
