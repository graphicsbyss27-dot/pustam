import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { HERO_SLIDES } from '../data/websiteData';

interface HeroSliderProps {
  onNavigate: (page: 'home' | 'contact', sectionId?: string) => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef<any>(null);

  const totalSlides = HERO_SLIDES.length;

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setTimeout(() => setIsAnimating(false), 700);
  };

  // Autoplay with interaction pause
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, currentSlide, isAnimating]);

  const slide = HERO_SLIDES[currentSlide];

  const handleCta = (action: 'contact' | 'products') => {
    if (action === 'contact') {
      onNavigate('contact');
    } else {
      onNavigate('home', 'products');
    }
  };

  return (
    <section
      className="relative w-full min-h-[78vh] sm:min-h-[86vh] lg:min-h-[90vh] flex items-center bg-[#283890] overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* 5 Layered Visual Image Slides with Subtle Scale & Smooth Crossfade */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background Image with subtle zoom */}
            <img
              src={item.image}
              alt={item.title}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              className={`w-full h-full object-cover object-center transition-transform duration-[6000ms] ease-out ${
                index === currentSlide ? 'scale-105' : 'scale-100'
              }`}
            />

            {/* Controlled Brand Gradient Masking (Blue #283890 overlay to ensure 100% text readability) */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#283890] via-[#283890]/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#283890] via-transparent to-black/30" />
            
            {/* Subtle brand geometry mask accent */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#283890]/20 pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 sm:pt-24 md:pt-28 pb-28 sm:pb-24">
        <div key={currentSlide} className="max-w-2xl lg:max-w-3xl animate-hero-text">
          
          {/* Subtle Accent Tagline */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f0e846]/15 border border-[#f0e846]/30 text-[#f0e846] text-xs sm:text-sm font-semibold mb-4 sm:mb-5 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#ff740e]" />
            <span className="tracking-wide uppercase font-headline">
              {slide.tagline}
            </span>
          </div>

          {/* Short Headline (Fredoka) */}
          <h1 className="font-headline font-bold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.12] mb-4 sm:mb-5 drop-shadow-sm">
            {slide.title}
          </h1>

          {/* Small Supporting Statement Placeholder (Be Vietnam) */}
          <p className="font-body text-xs sm:text-base md:text-lg text-white/85 font-normal leading-relaxed mb-6 sm:mb-8 max-w-xl font-mono">
            {slide.subtitle}
          </p>

          {/* CTA Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5">
            <button
              onClick={() => handleCta(slide.ctaAction)}
              className="px-6 sm:px-7 py-3.5 sm:py-3.5 rounded-xl bg-[#f0e846] hover:bg-[#ff740e] text-[#283890] hover:text-white font-headline font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 shadow-lg hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group min-h-[44px]"
            >
              <span>{slide.ctaText}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className="px-5 sm:px-6 py-3.5 sm:py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-headline font-semibold text-xs sm:text-sm border border-white/20 hover:border-[#f0e846] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 backdrop-blur-sm text-center min-h-[44px] flex items-center justify-center"
            >
              Direct Factory Inquiry
            </button>
          </div>

        </div>
      </div>

      {/* Slide Navigation & Indicator Strip (Bottom Right / Mobile Bottom) */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-8 lg:right-12 z-20 flex items-center gap-3 sm:gap-4 bg-[#151f52]/90 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl border border-white/15 shadow-xl">
        
        {/* Slide Counter (01 / 05) */}
        <div className="font-headline font-semibold text-xs sm:text-sm text-white/90 flex items-center gap-1">
          <span className="text-[#f0e846] font-bold">0{currentSlide + 1}</span>
          <span className="text-white/40">/</span>
          <span className="text-white/70">0{totalSlides}</span>
        </div>

        {/* Slide Progress Pill Dots */}
        <div className="flex items-center gap-1.5">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentSlide
                  ? 'w-5 sm:w-6 bg-[#f0e846]'
                  : 'w-1.5 sm:w-2 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Manual Arrow Navigation */}
        <div className="flex items-center gap-1 border-l border-white/10 pl-1.5 sm:pl-2">
          <button
            onClick={prevSlide}
            className="p-1 rounded-md text-white/80 hover:text-[#f0e846] hover:bg-white/10 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            className="p-1 rounded-md text-white/80 hover:text-[#f0e846] hover:bg-white/10 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
