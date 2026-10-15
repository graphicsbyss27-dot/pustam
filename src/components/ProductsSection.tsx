import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { PRODUCTS_PLACEHOLDERS } from '../data/websiteData';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ProductsSectionProps {
  onNavigate?: (page: 'home' | 'contact', sectionId?: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onNavigate }) => {
  const { ref: sectionRef, isVisible } = useScrollReveal();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Update scroll progress & arrow state
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll > 0) {
        setScrollProgress((scrollLeft / maxScroll) * 100);
        setCanScrollLeft(scrollLeft > 10);
        setCanScrollRight(scrollLeft < maxScroll - 10);
      }
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => el.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 380;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleInquiry = () => {
    if (onNavigate) {
      onNavigate('contact');
    }
  };

  return (
    <section
      id="products"
      ref={sectionRef}
      className={`py-20 sm:py-28 bg-[#283890] relative overflow-hidden border-t border-white/10 scroll-mt-16 select-none reveal-fade-up ${
        isVisible ? 'reveal-visible' : ''
      }`}
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-[#1e2b70]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            {/* Small Label */}
            <div className="flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#f0e846]" />
              <span className="text-[#f0e846] font-headline font-semibold text-xs sm:text-sm uppercase tracking-widest">
                Our Range
              </span>
            </div>

            {/* Section Heading (Fredoka) */}
            <h2 className="font-headline font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              Products & <span className="text-[#f0e846]">Solutions</span>
            </h2>

            {/* Supporting Text (Be Vietnam) */}
            <p className="font-body text-sm sm:text-base text-white/85 leading-relaxed">
              Explore the paper products and solutions offered by Pustam.
            </p>
          </div>

          {/* Desktop Left / Right Navigation Controls */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-white/60 hidden sm:inline font-mono">
              Drag or Swipe Horizontally ›
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-all duration-200 active:scale-95 ${
                  canScrollLeft
                    ? 'bg-[#151f52] hover:bg-[#f0e846] text-white hover:text-[#283890] border-white/20 shadow-md hover:-translate-y-0.5'
                    : 'bg-[#151f52]/40 text-white/30 border-white/5 cursor-not-allowed'
                }`}
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-all duration-200 active:scale-95 ${
                  canScrollRight
                    ? 'bg-[#151f52] hover:bg-[#f0e846] text-white hover:text-[#283890] border-white/20 shadow-md hover:-translate-y-0.5'
                    : 'bg-[#151f52]/40 text-white/30 border-white/5 cursor-not-allowed'
                }`}
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Scrolling Product Rail */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 pt-2 no-scrollbar scroll-smooth snap-x snap-mandatory cursor-grab active:cursor-grabbing -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {PRODUCTS_PLACEHOLDERS.map((item) => {
            const isYellow = item.accent === 'yellow';
            const accentColor = isYellow ? '#f0e846' : '#ff740e';

            return (
              <div
                key={item.id}
                className="flex-none w-[82vw] max-w-[320px] sm:max-w-none sm:w-[340px] md:w-[380px] snap-start rounded-3xl bg-[#151f52] border border-white/15 hover:border-white/30 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden shadow-2xl flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar with Number */}
                  <div className="p-5 sm:p-6 pb-3 sm:pb-4 flex items-center justify-between border-b border-white/10">
                    <span
                      className="font-headline font-bold text-3xl sm:text-4xl tracking-tight transition-transform duration-300 group-hover:scale-105"
                      style={{ color: accentColor }}
                    >
                      {item.number}
                    </span>
                  </div>

                  {/* Product Image */}
                  <div className="relative h-44 sm:h-56 bg-[#1e2b70] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#151f52] via-transparent to-transparent" />
                  </div>

                  {/* Product Details Content */}
                  <div className="p-5 sm:p-6 pt-4 space-y-2">
                    <h3 className="font-headline font-bold text-base sm:text-xl text-white group-hover:text-[#f0e846] transition-colors">
                      {item.name}
                    </h3>
                    <p className="font-mono text-xs sm:text-sm text-white/75 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Action Footer with Arrow Trigger */}
                <div className="p-5 sm:p-6 pt-0">
                  <button
                    onClick={handleInquiry}
                    className="w-full py-3 px-3.5 sm:px-4 rounded-xl bg-[#1e2b70] hover:bg-[#ff740e] text-white font-headline font-semibold text-xs sm:text-sm transition-all flex items-center justify-between group/btn border border-white/10 hover:border-transparent active:scale-[0.99] min-h-[44px]"
                  >
                    <span>Send an Enquiry</span>
                    <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-[#283890] transition-colors group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 shrink-0 ml-2">
                      <ArrowUpRight className="w-4 h-4 transition-transform" />
                    </div>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visible Scroll Progress Bar Indicator */}
        <div className="mt-8 flex items-center justify-between gap-4 max-w-md mx-auto">
          <span className="font-mono text-xs text-white/50">01</span>
          <div className="flex-1 h-1 bg-white/15 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#f0e846] transition-all duration-200 rounded-full"
              style={{ width: `${Math.max(20, scrollProgress)}%` }}
            />
          </div>
          <span className="font-mono text-xs text-white/50">
            {PRODUCTS_PLACEHOLDERS.length.toString().padStart(2, '0')}
          </span>
        </div>

      </div>
    </section>
  );
};
