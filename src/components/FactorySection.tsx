import React, { useEffect } from 'react';
import { ExternalLink, Play, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface FactorySectionProps {
  onNavigate?: (page: 'home' | 'contact', sectionId?: string) => void;
}

const YOUTUBE_URL = 'https://youtube.com/@twofoldstationery?si=ooO3KW5As5621baS';

interface InfraTile {
  image: string;
  alt: string;
  colSpanClass: string;
  heightClass: string;
}

// 17 real facility photographs curated into a balanced 12-column Bento architecture
// Row 1: 8 + 4 = 12
// Row 2: 4 + 4 + 4 = 12
// Row 3: 4 + 8 = 12
// Row 4: 4 + 4 + 4 = 12
// Row 5: 6 + 6 = 12
// Row 6: 4 + 4 + 4 = 12
// Total = 17 items perfectly covering 100% width with ZERO blank spaces
const INFRA_IMAGES: InfraTile[] = [
  // Row 1 (12 cols total): Featured Aerial (8) + Machine (4)
  {
    image: '/Infra/Final Images Infra/factory-aerial-facility.jpg',
    alt: 'Pustam Infrastructure Facility Aerial View',
    colSpanClass: 'lg:col-span-8',
    heightClass: 'h-72 sm:h-80 md:h-[380px]',
  },
  {
    image: '/Infra/Final Images Infra/WhatsApp Image 2026-10-26 at 17.30.28.jpeg',
    alt: 'Manufacturing Facility Machinery',
    colSpanClass: 'lg:col-span-4',
    heightClass: 'h-72 sm:h-80 md:h-[380px]',
  },

  // Row 2 (12 cols total): 4 + 4 + 4
  {
    image: '/Infra/Final Images Infra/WhatsApp Image 2026-10-26 at 17.30.32.jpeg',
    alt: 'Manufacturing Facility Machinery',
    colSpanClass: 'lg:col-span-4',
    heightClass: 'h-64 sm:h-72 md:h-80',
  },
  {
    image: '/Infra/Final Images Infra/WhatsApp Image 2026-10-26 at 17.30.34 (1).jpeg',
    alt: 'Production Unit Floor',
    colSpanClass: 'lg:col-span-4',
    heightClass: 'h-64 sm:h-72 md:h-80',
  },
  {
    image: '/Infra/Final Images Infra/WhatsApp Image 2026-10-26 at 17.30.34.jpeg',
    alt: 'Industrial Manufacturing Line',
    colSpanClass: 'lg:col-span-4',
    heightClass: 'h-64 sm:h-72 md:h-80',
  },

  // Row 3 (12 cols total): Rotary Unit (4) + Wide Cutting Facility (8)
  {
    image: '/Infra/Final Images Infra/WhatsApp Image 2026-10-26 at 17.30.35.jpeg',
    alt: 'Production Machinery',
    colSpanClass: 'lg:col-span-4',
    heightClass: 'h-72 sm:h-80 md:h-[380px]',
  },
  {
    image: '/Infra/Final Images Infra/factory-interior-cutting.jpg',
    alt: 'Pustam Factory Production Floor and Cutting Line',
    colSpanClass: 'lg:col-span-8',
    heightClass: 'h-72 sm:h-80 md:h-[380px]',
  },

  // Row 4 (12 cols total): 4 + 4 + 4
  {
    image: '/Infra/Final Images Infra/WhatsApp Image 2026-10-26 at 17.30.36.jpeg',
    alt: 'Manufacturing Operations',
    colSpanClass: 'lg:col-span-4',
    heightClass: 'h-64 sm:h-72 md:h-80',
  },
  {
    image: '/Infra/Final Images Infra/WhatsApp Image 2026-10-26 at 17.30.38 (1).jpeg',
    alt: 'Industrial Paper Processing Line',
    colSpanClass: 'lg:col-span-4',
    heightClass: 'h-64 sm:h-72 md:h-80',
  },
  {
    image: '/Infra/Final Images Infra/WhatsApp Image 2026-10-26 at 17.30.39.jpeg',
    alt: 'Plant Production Section',
    colSpanClass: 'lg:col-span-4',
    heightClass: 'h-64 sm:h-72 md:h-80',
  },

  // Row 5 (12 cols total): 6 + 6
  {
    image: '/Infra/Final Images Infra/WhatsApp Image 2026-10-26 at 17.30.42.jpeg',
    alt: 'Factory Machine Area',
    colSpanClass: 'lg:col-span-6',
    heightClass: 'h-64 sm:h-72 md:h-80',
  },
  {
    image: '/Infra/Final Images Infra/WhatsApp Image 2026-10-26 at 17.30.45.jpeg',
    alt: 'Plant Operations Section',
    colSpanClass: 'lg:col-span-6',
    heightClass: 'h-64 sm:h-72 md:h-80',
  },

  // Row 6 (12 cols total): 4 + 4 + 4
  {
    image: '/Infra/Final Images Infra/WhatsApp Image 2026-10-26 at 17.30.47.jpeg',
    alt: 'Factory Equipment Installation',
    colSpanClass: 'lg:col-span-4',
    heightClass: 'h-64 sm:h-72 md:h-80',
  },
  {
    image: '/Infra/Final Images Infra/WhatsApp Image 2026-10-26 at 17.31.14 (1).jpeg',
    alt: 'Production Facility Section',
    colSpanClass: 'lg:col-span-4',
    heightClass: 'h-64 sm:h-72 md:h-80',
  },
  {
    image: '/Infra/Final Images Infra/WhatsApp Image 2026-10-26 at 17.31.16 (2).jpeg',
    alt: 'Factory Floor Operations',
    colSpanClass: 'lg:col-span-4',
    heightClass: 'h-64 sm:h-72 md:h-80',
  },

  // Row 7 (12 cols total): 6 + 6
  {
    image: '/Infra/Final Images Infra/WhatsApp Image 2026-10-26 at 17.31.16.jpeg',
    alt: 'Production Line Unit',
    colSpanClass: 'lg:col-span-6',
    heightClass: 'h-64 sm:h-72 md:h-80',
  },
  {
    image: '/Infra/Final Images Infra/WhatsApp Image 2026-10-26 at 17.31.17 (1).jpeg',
    alt: 'Quality Assurance & Certification Area',
    colSpanClass: 'lg:col-span-6',
    heightClass: 'h-64 sm:h-72 md:h-80',
  },
];

export const FactorySection: React.FC<FactorySectionProps> = ({ onNavigate }) => {
  const { ref, isVisible } = useScrollReveal();

  // High-performance continuous parallax: drives subtle image translation via CSS variable
  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.innerWidth < 768) {
      return;
    }

    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!node) return;
          const rect = node.getBoundingClientRect();
          const vh = window.innerHeight;
          // Only compute when within or adjacent to viewport
          if (rect.bottom > -100 && rect.top < vh + 100) {
            const center = rect.top + rect.height / 2;
            const dist = (vh / 2) - center;
            const shift = Math.max(-18, Math.min(18, dist * 0.035));
            node.style.setProperty('--parallax-y', `${shift.toFixed(1)}px`);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [ref]);

  return (
    <section
      id="factory"
      ref={ref}
      className={`py-24 sm:py-32 bg-gradient-to-b from-white via-[#f8faff] to-[#edf2fb] relative overflow-hidden border-t border-slate-200/80 scroll-mt-16 select-none reveal-fade-up ${
        isVisible ? 'reveal-visible' : ''
      }`}
    >
      {/* Subtle ambient light accents with parallax float */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[500px] bg-[#283890]/5 rounded-full blur-[140px] pointer-events-none parallax-float-slow" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[400px] bg-[#ff740e]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Coordinated sequence) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="seq-item seq-delay-1 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#283890]/8 border border-[#283890]/15 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#283890]" />
              <span className="text-[#283890] font-headline font-bold text-xs tracking-widest uppercase">
                MANUFACTURING INFRASTRUCTURE
              </span>
            </div>

            <h2 className="seq-item seq-delay-2 font-headline font-bold text-3xl sm:text-5xl md:text-6xl text-[#151f52] tracking-tight leading-[1.12]">
              Where Paper <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#283890] via-[#1e2b70] to-[#ff740e] bg-clip-text text-transparent">
                Takes Industrial Shape
              </span>
            </h2>

            <p className="seq-item seq-delay-3 font-body text-sm sm:text-base text-slate-600 leading-relaxed pt-1">
              Operating across our 30,000+ sq. ft. purpose-built converting plant in Palghar, Maharashtra. Converting 25 metric tonnes of paper daily with synchronized automation.
            </p>
          </div>

          {/* Quick Metrics Badges */}
          <div className="seq-item seq-delay-4 flex flex-wrap gap-2.5 pt-1 md:pt-0 shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-slate-700 text-xs font-mono font-medium border border-slate-200/90 shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#283890]" />
              30,000+ Sq. Ft.
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-slate-700 text-xs font-mono font-medium border border-slate-200/90 shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#ff740e]" />
              25 MT / Day
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-slate-700 text-xs font-mono font-medium border border-slate-200/90 shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#283890]" />
              Palghar Campus
            </span>
          </div>
        </div>


        {/* Balanced Bento Architecture Gallery (Progressive entrance + mask wipe reveals) */}
        <div className="bento-infra-grid mb-12">
          {INFRA_IMAGES.map((item, idx) => {
            // Apply subtle restrained parallax to key feature rows
            const hasParallax = idx === 0 || idx === 6 || idx === 10 || idx === 15;
            const staggerClass = `seq-delay-${Math.min((idx % 6) + 2, 8)}`;
            // Feature items get smooth mask wipe reveal
            const isWipeItem = idx === 0 || idx === 5 || idx === 6 || idx === 10;

            return (
              <div
                key={idx}
                className={`card-entrance ${staggerClass} w-full ${item.colSpanClass}`}
              >
                <div
                  className={`mask-wipe-container relative w-full ${item.heightClass} overflow-hidden rounded-2xl md:rounded-3xl bg-slate-100 border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-[#283890]/40 transition-all duration-500 hover:-translate-y-1 group`}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading={idx < 4 ? 'eager' : 'lazy'}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.tried) {
                        target.dataset.tried = '1';
                        if (item.image.startsWith('/Infra/')) {
                          target.src = item.image.replace('/Infra/', '/infra/');
                        }
                      }
                    }}
                    className={`w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out ${
                      isWipeItem ? 'mask-wipe-right' : ''
                    } ${hasParallax ? 'will-change-transform scale-[1.04]' : ''}`}
                    style={
                      hasParallax
                        ? {
                            transform: `translate3d(0, var(--parallax-y, 0px), 0)`,
                            transition: 'transform 0.1s cubic-bezier(0.2, 0, 0.2, 1)',
                          }
                        : undefined
                    }
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Video Redirect Banner to YouTube */}
        <div className="rounded-3xl bg-gradient-to-r from-[#151f52] via-[#1e2b70] to-[#283890] p-6 sm:p-8 md:p-10 shadow-xl border border-slate-200 text-white relative overflow-hidden">
          {/* Ambient glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-60 h-60 bg-[#f0e846]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            
            {/* Left Content */}
            <div className="space-y-2.5 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 text-red-300 border border-red-500/30 text-xs font-semibold font-headline">
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

            {/* Right Buttons - Apple-inspired button system */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-apple-base btn-apple-youtube px-6 py-3.5 text-xs sm:text-sm tracking-wide gap-2.5"
              >
                <Play className="w-4 h-4 fill-white shrink-0" />
                <span>Watch on YouTube</span>
                <ExternalLink className="w-3.5 h-3.5 text-white/80" />
              </a>

              {onNavigate && (
                <button
                  onClick={() => onNavigate('contact')}
                  className="btn-apple-base btn-apple-glass px-5 py-3.5 text-xs sm:text-sm tracking-wide gap-2"
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
