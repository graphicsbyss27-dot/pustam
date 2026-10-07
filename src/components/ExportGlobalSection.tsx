import React from 'react';
import { Globe, ArrowRight, ShieldCheck, PackageCheck } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ExportGlobalSectionProps {
  onNavigate?: (page: 'home' | 'contact', sectionId?: string) => void;
}

export const ExportGlobalSection: React.FC<ExportGlobalSectionProps> = ({ onNavigate }) => {
  const { ref, isVisible } = useScrollReveal();

  const genericDestinations = [
    { id: '1', title: '[EXPORT CORRIDOR 01]', label: '[ADD DESTINATION SEAPORT / REGION]' },
    { id: '2', title: '[EXPORT CORRIDOR 02]', label: '[ADD DESTINATION SEAPORT / REGION]' },
    { id: '3', title: '[EXPORT CORRIDOR 03]', label: '[ADD DESTINATION SEAPORT / REGION]' },
    { id: '4', title: '[EXPORT CORRIDOR 04]', label: '[ADD DESTINATION SEAPORT / REGION]' },
  ];

  return (
    <section
      id="export"
      ref={ref}
      className={`py-20 sm:py-28 bg-[#1e2b70] relative overflow-hidden border-t border-white/10 scroll-mt-16 select-none reveal-fade-up ${
        isVisible ? 'reveal-visible' : ''
      }`}
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#283890]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-14">
          
          {/* Left Column: Eyebrow & Headline (7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            {/* Small Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#f0e846]" />
              <span className="text-[#f0e846] font-headline font-semibold text-xs sm:text-sm uppercase tracking-widest">
                GLOBAL REACH
              </span>
            </div>

            {/* Heading (Fredoka) */}
            <h2 className="font-headline font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              From India to the <span className="text-[#f0e846]">World</span>.
            </h2>
          </div>

          {/* Right Column: Editable Supporting Paragraph (5 cols) */}
          <div className="lg:col-span-5 space-y-4 lg:pt-2">
            <div className="p-5 rounded-2xl bg-[#151f52] border border-[#f0e846]/30 shadow-inner">
              <p className="font-mono text-xs sm:text-sm text-[#f0e846] leading-relaxed">
                [ADD OFFICIAL EXPORT DESCRIPTION HERE — International container consignments, moisture-proof export packaging, and port logistics.]
              </p>
              <p className="text-[11px] text-white/50 mt-2">
                (Export documentation, container shipping terms FOB/CIF, and overseas distribution network details can be customized here.)
              </p>
            </div>
          </div>

        </div>

        {/* Sophisticated India-to-World Animated Route Visual Canvas */}
        <div className="rounded-3xl bg-[#151f52] border border-white/15 p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden mb-12">
          
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#283890] flex items-center justify-center text-[#f0e846] border border-white/10">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-headline font-bold text-base sm:text-lg text-white">
                  Worldwide Shipment Routes
                </h3>
                <p className="text-xs text-white/60 font-mono">
                  Origin: India Manufacturing Hub → Global Seaports
                </p>
              </div>
            </div>

            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/80">
              <span className="w-2 h-2 rounded-full bg-[#f0e846] animate-pulse" />
              <span>Container Logistics (FCL / LCL)</span>
            </div>
          </div>

          {/* SVG Route Visualization Map */}
          <div className="relative w-full aspect-[16/8] sm:aspect-[16/7] bg-[#1e2b70]/90 rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center">
            
            <svg viewBox="0 0 900 420" className="w-full h-full">
              <defs>
                {/* Gradient for route lines */}
                <linearGradient id="exportLineGrad" x1="100%" y1="50%" x2="0%" y2="50%">
                  <stop offset="0%" stopColor="#f0e846" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#ff740e" stopOpacity="0.85" />
                </linearGradient>

                <linearGradient id="reverseLineGrad" x1="0%" y1="50%" x2="100%" y2="50%">
                  <stop offset="0%" stopColor="#f0e846" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#ff740e" stopOpacity="0.85" />
                </linearGradient>
              </defs>

              {/* Background Map Grid Coordinates */}
              <g opacity="0.15">
                <line x1="40" y1="105" x2="860" y2="105" stroke="#ffffff" strokeDasharray="4 6" />
                <line x1="40" y1="210" x2="860" y2="210" stroke="#ffffff" strokeDasharray="4 6" />
                <line x1="40" y1="315" x2="860" y2="315" stroke="#ffffff" strokeDasharray="4 6" />
                <line x1="225" y1="20" x2="225" y2="400" stroke="#ffffff" strokeDasharray="4 6" />
                <line x1="450" y1="20" x2="450" y2="400" stroke="#ffffff" strokeDasharray="4 6" />
                <line x1="675" y1="20" x2="675" y2="400" stroke="#ffffff" strokeDasharray="4 6" />
              </g>

              {/* Simplified Abstract Continental Contours */}
              <g fill="none" stroke="rgba(255, 255, 255, 0.18)" strokeWidth="1.5">
                <path d="M 330,90 Q 370,70 410,95 T 450,140" />
                <path d="M 370,170 Q 420,210 400,290 T 380,340" />
                <path d="M 640,120 Q 720,150 760,230" />
                <path d="M 120,110 Q 160,180 140,280" />
              </g>

              {/* Animated Route 1: India -> Generic Corridor 01 */}
              <path
                d="M 530,220 Q 420,170 340,180"
                fill="none"
                stroke="url(#exportLineGrad)"
                strokeWidth="2.5"
                strokeDasharray="6 4"
                className="animate-route-flow"
              />

              {/* Animated Route 2: India -> Generic Corridor 02 */}
              <path
                d="M 530,220 Q 430,130 320,105"
                fill="none"
                stroke="url(#exportLineGrad)"
                strokeWidth="2.5"
                strokeDasharray="6 4"
                className="animate-route-flow"
              />

              {/* Animated Route 3: India -> Generic Corridor 03 */}
              <path
                d="M 530,220 Q 430,280 340,310"
                fill="none"
                stroke="url(#exportLineGrad)"
                strokeWidth="2.5"
                strokeDasharray="6 4"
                className="animate-route-flow"
              />

              {/* Animated Route 4: India -> Generic Corridor 04 */}
              <path
                d="M 530,220 Q 640,250 720,230"
                fill="none"
                stroke="url(#reverseLineGrad)"
                strokeWidth="2.5"
                strokeDasharray="6 4"
                className="animate-route-flow"
              />

              {/* Animated Route 5: India -> Generic Corridor 05 */}
              <path
                d="M 530,220 Q 300,100 130,160"
                fill="none"
                stroke="url(#exportLineGrad)"
                strokeWidth="2.5"
                strokeDasharray="6 4"
                className="animate-route-flow"
                opacity="0.8"
              />

              {/* Moving Pulse Transit Dots along the routes */}
              <circle r="4" fill="#ff740e">
                <animateMotion
                  path="M 530,220 Q 420,170 340,180"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle r="4" fill="#ff740e">
                <animateMotion
                  path="M 530,220 Q 430,130 320,105"
                  dur="4.5s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle r="4" fill="#ff740e">
                <animateMotion
                  path="M 530,220 Q 430,280 340,310"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle r="4" fill="#ff740e">
                <animateMotion
                  path="M 530,220 Q 640,250 720,230"
                  dur="4.2s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Generic Destination 01 Marker */}
              <g>
                <circle cx="340" cy="180" r="5" fill="#ff740e" />
                <circle cx="340" cy="180" r="9" fill="#ff740e" opacity="0.3" className="animate-ping" />
                <text x="340" y="165" fill="#ffffff" fontSize="11" fontWeight="600" textAnchor="middle" fontFamily="'Be Vietnam Pro', sans-serif">
                  [DESTINATION 01]
                </text>
              </g>

              {/* Generic Destination 02 Marker */}
              <g>
                <circle cx="320" cy="105" r="5" fill="#ff740e" />
                <circle cx="320" cy="105" r="9" fill="#ff740e" opacity="0.3" className="animate-ping" />
                <text x="320" y="90" fill="#ffffff" fontSize="11" fontWeight="600" textAnchor="middle" fontFamily="'Be Vietnam Pro', sans-serif">
                  [DESTINATION 02]
                </text>
              </g>

              {/* Generic Destination 03 Marker */}
              <g>
                <circle cx="340" cy="310" r="5" fill="#ff740e" />
                <circle cx="340" cy="310" r="9" fill="#ff740e" opacity="0.3" className="animate-ping" />
                <text x="340" y="330" fill="#ffffff" fontSize="11" fontWeight="600" textAnchor="middle" fontFamily="'Be Vietnam Pro', sans-serif">
                  [DESTINATION 03]
                </text>
              </g>

              {/* Generic Destination 04 Marker */}
              <g>
                <circle cx="720" cy="230" r="5" fill="#ff740e" />
                <circle cx="720" cy="230" r="9" fill="#ff740e" opacity="0.3" className="animate-ping" />
                <text x="720" y="215" fill="#ffffff" fontSize="11" fontWeight="600" textAnchor="middle" fontFamily="'Be Vietnam Pro', sans-serif">
                  [DESTINATION 04]
                </text>
              </g>

              {/* Generic Destination 05 Marker */}
              <g>
                <circle cx="130" cy="160" r="5" fill="#ff740e" />
                <circle cx="130" cy="160" r="9" fill="#ff740e" opacity="0.3" className="animate-ping" />
                <text x="130" y="145" fill="#ffffff" fontSize="11" fontWeight="600" textAnchor="middle" fontFamily="'Be Vietnam Pro', sans-serif">
                  [DESTINATION 05]
                </text>
              </g>

              {/* INDIA ORIGIN POINT */}
              <g>
                <circle cx="530" cy="220" r="18" fill="#f0e846" opacity="0.25" className="animate-ping" />
                <circle cx="530" cy="220" r="10" fill="#f0e846" opacity="0.5" />
                <circle cx="530" cy="220" r="6" fill="#f0e846" />
                
                <rect x="470" y="240" width="120" height="24" rx="6" fill="#151f52" stroke="#f0e846" strokeWidth="1.5" />
                <text x="530" y="256" fill="#f0e846" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="Fredoka">
                  INDIA (ORIGIN)
                </text>
              </g>
            </svg>

          </div>

        </div>

        {/* Generic Destination Corridors Placeholders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {genericDestinations.map((dest) => (
            <div
              key={dest.id}
              className="p-4 rounded-2xl bg-[#151f52] border border-white/10 hover:border-[#f0e846]/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-xs font-bold text-[#ff740e]">
                  {dest.title}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#f0e846]" />
              </div>
              <p className="font-mono text-xs text-white/70">
                {dest.label}
              </p>
            </div>
          ))}
        </div>

        {/* Packaging & Compliance Support Bar */}
        <div className="p-5 rounded-2xl bg-[#151f52] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/80">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <PackageCheck className="w-4 h-4 text-[#f0e846]" />
              <span>Moisture-Proof Sea Cargo Packaging</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#ff740e]" />
              <span>DGFT IEC Registered Export Documentation</span>
            </div>
          </div>

          <button
            onClick={() => onNavigate && onNavigate('contact')}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[#f0e846] hover:bg-[#ff740e] text-[#283890] hover:text-white font-headline font-bold text-xs tracking-wide transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-1.5 shrink-0 shadow min-h-[44px]"
          >
            <span>Inquire for Export Consignment</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
