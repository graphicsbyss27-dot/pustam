import React from 'react';
import { ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import { PRODUCTS_PLACEHOLDERS } from '../data/websiteData';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ProductsSectionProps {
  onNavigate?: (page: 'home' | 'contact', sectionId?: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onNavigate }) => {
  const { ref: sectionRef, isVisible } = useScrollReveal();

  const handleInquiry = () => {
    if (onNavigate) {
      onNavigate('contact');
    }
  };

  // 7 products arranged into a visually balanced, creative Bento grid:
  // Card 1 (Hero Center Pinned Exercise Books): 7 cols, larger photography spotlight
  // Card 2 (Counter Books): 5 cols
  // Cards 3, 4, 5: 4 cols each (equal 3-card balanced middle row)
  // Cards 6, 7: 6 cols each (equal 2-card balanced bottom row)
  // Total: 100% full-width grid coverage with zero gaps
  const getCardLayout = (index: number) => {
    switch (index) {
      case 0:
        return {
          colSpan: 'lg:col-span-7',
          imageHeight: 'h-64 sm:h-72 md:h-80',
          isFeatured: true,
        };
      case 1:
        return {
          colSpan: 'lg:col-span-5',
          imageHeight: 'h-64 sm:h-72 md:h-80',
          isFeatured: false,
        };
      case 2:
      case 3:
      case 4:
        return {
          colSpan: 'lg:col-span-4',
          imageHeight: 'h-52 sm:h-60',
          isFeatured: false,
        };
      case 5:
      case 6:
      default:
        return {
          colSpan: 'lg:col-span-6',
          imageHeight: 'h-56 sm:h-64',
          isFeatured: false,
        };
    }
  };

  return (
    <section
      id="products"
      ref={sectionRef}
      className={`py-24 sm:py-32 bg-[#070b20] relative overflow-hidden border-t border-white/10 scroll-mt-16 select-none reveal-fade-up ${
        isVisible ? 'reveal-visible' : ''
      }`}
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[700px] h-[500px] bg-[#283890]/25 rounded-full blur-[140px] pointer-events-none parallax-float-slow" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[400px] bg-[#ff740e]/15 rounded-full blur-[140px] pointer-events-none parallax-float-fast" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md shadow-inner">
              <span className="w-2 h-2 rounded-full bg-[#f0e846]" />
              <span className="text-[#f0e846] font-headline font-semibold text-xs tracking-widest uppercase">
                PRODUCT SHOWCASE
              </span>
            </div>

            <h2 className="font-headline font-bold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.12]">
              Engineered Notebooks <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#f0e846] via-white to-[#ff740e] bg-clip-text text-transparent">
                For Every Sector
              </span>
            </h2>

            <p className="font-body text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl">
              Explore our core notebook formats manufactured at 25 MT/day capacity. Clean craftsmanship, premium paper opacity, and global export packaging.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={handleInquiry}
              className="btn-apple-base btn-apple-primary px-6 py-3.5 text-xs sm:text-sm tracking-wide gap-2"
            >
              <span>Request Full Product Catalogue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Creative Bento Product Grid — All 7 categories cleanly displayed */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-7 mb-14">
          {PRODUCTS_PLACEHOLDERS.map((product, idx) => {
            const layout = getCardLayout(idx);

            return (
              <div
                key={product.id}
                className={`group rounded-3xl bg-gradient-to-b from-white/[0.07] via-white/[0.03] to-white/[0.01] border border-white/10 hover:border-[#f0e846]/50 p-5 sm:p-6 backdrop-blur-xl transition-all duration-400 hover:shadow-2xl hover:shadow-[#283890]/20 hover:-translate-y-1.5 flex flex-col justify-between ${layout.colSpan}`}
              >
                <div>
                  {/* Card Header (Product Index & Tag) */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="font-headline font-extrabold text-xl sm:text-2xl text-[#f0e846]">
                        {product.number}
                      </span>
                      {layout.isFeatured && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-[#ff740e]/20 text-[#ff740e] border border-[#ff740e]/30">
                          Featured Line
                        </span>
                      )}
                    </div>
                    <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-[#f0e846] transition-colors">
                      <BookOpen className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Clean Product Photography Display (No website-generated text overlays inside) */}
                  <div className={`relative w-full ${layout.imageHeight} rounded-2xl overflow-hidden bg-slate-900 border border-white/10 mb-5`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* Clean Typography Outside the Image */}
                  <h3 className="font-headline font-bold text-lg sm:text-xl text-white mb-2 group-hover:text-[#f0e846] transition-colors leading-snug">
                    {product.name}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2">
                    {product.description}
                  </p>
                </div>

                {/* Single Clear Standardized Apple CTA Button */}
                <div className="pt-5 mt-4 border-t border-white/10">
                  <button
                    onClick={handleInquiry}
                    className="btn-apple-base btn-apple-glass w-full py-2.5 px-4 text-xs tracking-wide gap-2"
                  >
                    <span>Enquire for {product.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner for Custom Configurations */}
        <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 sm:p-6 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#ff740e]/15 border border-[#ff740e]/30 flex items-center justify-center text-[#ff740e] shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="font-headline font-bold text-sm sm:text-base text-white">
                Custom Substrates, Bindings &amp; Cover Artworks Available
              </div>
              <div className="text-xs text-slate-400 font-body">
                We manufacture to your target GSM (54 - 160 GSM), French rulings, legal headers, and branding specifications.
              </div>
            </div>
          </div>

          <button
            onClick={handleInquiry}
            className="btn-apple-base btn-apple-primary px-6 py-2.5 text-xs sm:text-sm tracking-wide gap-2 shrink-0"
          >
            <span>Custom Order Desk</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
