import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ExportGlobalSectionProps {
  onNavigate?: (page: 'home' | 'contact', sectionId?: string) => void;
}

// 7 Key Continent Land Points (strictly on continent landmasses, no ocean points, Antarctica ignored)
const CONTINENT_NODES = [
  {
    id: 'na',
    name: 'North America',
    x: 205,
    y: 205,
    textAnchor: 'middle' as const,
    labelX: 205,
    labelY: 188,
  },
  {
    id: 'sa',
    name: 'South America',
    x: 315,
    y: 410,
    textAnchor: 'middle' as const,
    labelX: 315,
    labelY: 432,
  },
  {
    id: 'eu',
    name: 'Europe',
    x: 475,
    y: 175,
    textAnchor: 'middle' as const,
    labelX: 475,
    labelY: 158,
  },
  {
    id: 'me',
    name: 'Middle East',
    x: 585,
    y: 275,
    textAnchor: 'middle' as const,
    labelX: 585,
    labelY: 260,
  },
  {
    id: 'af',
    name: 'Africa',
    x: 520,
    y: 330,
    textAnchor: 'middle' as const,
    labelX: 520,
    labelY: 352,
  },
  {
    id: 'as',
    name: 'Asia',
    x: 730,
    y: 240,
    textAnchor: 'middle' as const,
    labelX: 730,
    labelY: 224,
  },
  {
    id: 'au',
    name: 'Australia',
    x: 805,
    y: 450,
    textAnchor: 'middle' as const,
    labelX: 805,
    labelY: 472,
  },
];

// Arcs connecting Manufacturing Hub (Palghar, Maharashtra on West Coast of India: 654.5, 278.5)
const CONTINENT_ROUTES = [
  { id: 'route-na', d: 'M 654.5 278.5 Q 430 110 205 205' },
  { id: 'route-eu', d: 'M 654.5 278.5 Q 560 160 475 175' },
  { id: 'route-me', d: 'M 654.5 278.5 Q 620 260 585 275' },
  { id: 'route-af', d: 'M 654.5 278.5 Q 585 340 520 330' },
  { id: 'route-sa', d: 'M 654.5 278.5 Q 450 390 315 410' },
  { id: 'route-as', d: 'M 654.5 278.5 Q 700 230 730 240' },
  { id: 'route-au', d: 'M 654.5 278.5 Q 750 390 805 450' },
];

export const ExportGlobalSection: React.FC<ExportGlobalSectionProps> = ({ onNavigate }) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="export"
      ref={ref}
      className={`py-24 sm:py-32 bg-[#070b20] relative overflow-hidden border-t border-white/10 scroll-mt-16 select-none reveal-fade-up ${
        isVisible ? 'reveal-visible' : ''
      }`}
    >
      {/* Background ambient mesh glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#283890]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-[#f0e846]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Pill Badge */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md mb-5 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-[#ff740e] animate-pulse" />
            <span className="text-[#ff740e] font-headline font-semibold text-xs tracking-widest uppercase">
              GLOBAL LOGISTICS &amp; EXPORT NETWORK
            </span>
          </div>

          <h2 className="font-headline font-bold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.12]">
            Made in India.{' '}
            <span className="inline-block text-3xl sm:text-4xl lg:text-[46px] align-middle ml-1 drop-shadow-sm">
              🇮🇳
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#f0e846] via-white to-[#ff740e] bg-clip-text text-transparent">
              Supplied Worldwide.
            </span>
          </h2>

          <p className="mt-5 font-body text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
            Direct containerized exports from our Palghar plant via JNPT port. Seamless ocean freight shipping for stationery distributors and retail chains on 5 continents.
          </p>
        </div>

        {/* Bento Grid layout: 3D Illustration + Interactive Global Map + Key Metric Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* 3D Global Logistics Card (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-gradient-to-br from-[#0e163d]/90 via-[#0a1030]/80 to-[#070b20]/90 border border-white/10 p-6 sm:p-7 relative overflow-hidden backdrop-blur-xl group hover:border-[#f0e846]/40 transition-all duration-500 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="relative h-60 sm:h-64 w-full rounded-2xl overflow-hidden mb-6 border border-white/10">
                <img
                  src="/assets/illustrations/global-export-3d.jpg"
                  alt="Pustam 3D Global Export Logistics"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1030] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] text-white/90 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Active Freight Lanes
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-headline font-bold text-xl sm:text-2xl text-white">
                  Port Proximity &amp; Rapid Dispatch
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 font-body leading-relaxed">
                  Located just 95 km from JNPT (Nhava Sheva), India's premier container port, enabling short drayage times, priority gate-ins, and flexible sea container loading.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/5 grid grid-cols-2 gap-4">
              <div>
                <div className="font-headline font-bold text-2xl sm:text-3xl text-[#f0e846]">95 km</div>
                <div className="text-[11px] text-slate-400 font-medium">To JNPT Port</div>
              </div>
              <div>
                <div className="font-headline font-bold text-2xl sm:text-3xl text-white">FCL / LCL</div>
                <div className="text-[11px] text-slate-400 font-medium">Container Options</div>
              </div>
            </div>

            <div className="mt-6 pt-2">
              <button
                onClick={() => onNavigate && onNavigate('contact')}
                className="btn-apple-base btn-apple-primary w-full px-6 py-3.5 text-xs sm:text-sm tracking-wide gap-2.5"
              >
                <span>Request Export Catalogue &amp; Rates</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Interactive Live Route Map (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-gradient-to-br from-[#0c133a]/80 via-[#0a0f2c]/90 to-[#070b20] border border-white/10 p-5 sm:p-7 relative overflow-hidden backdrop-blur-xl shadow-2xl flex flex-col justify-between group hover:border-white/20 transition-all duration-500">

            <div>
              <div className="flex items-center justify-between mb-4 px-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#f0e846]" />
                  <span className="text-xs font-headline font-bold uppercase tracking-wider text-slate-300">
                    Interactive Trade Corridors
                  </span>
                </div>
                <span className="font-mono text-[11px] text-[#f0e846]/80 bg-[#f0e846]/10 px-2.5 py-0.5 rounded-full border border-[#f0e846]/20">
                  Palghar Hub Active
                </span>
              </div>

              <div className="relative w-full rounded-2xl bg-black/30 border border-white/5 p-2 sm:p-3 overflow-hidden">
                <style>{`
                  @keyframes arcDash {
                    to {
                      stroke-dashoffset: -32;
                    }
                  }
                  .shipping-arc-glow {
                    stroke-dasharray: 4, 4;
                    animation: arcDash 1.8s linear infinite;
                  }
                  @keyframes pulseGlow {
                    0% { r: 5; opacity: 0.9; }
                    50% { r: 14; opacity: 0.25; }
                    100% { r: 20; opacity: 0; }
                  }
                  .pulse-ring-1 {
                    animation: pulseGlow 2.4s cubic-bezier(0.2, 0.8, 0.2, 1) infinite;
                  }
                  .pulse-ring-2 {
                    animation: pulseGlow 2.4s cubic-bezier(0.2, 0.8, 0.2, 1) infinite 0.8s;
                  }
                  .continent-node {
                    cursor: default;
                    transition: transform 0.2s ease;
                  }
                  .continent-node:hover .node-dot {
                    transform: scale(1.4);
                    fill: #f0e846;
                  }
                  .continent-node:hover .node-text {
                    fill: #ffffff;
                    font-weight: 700;
                  }
                `}</style>

                <svg
                  viewBox="0 50 950 490"
                  className="w-full h-auto select-none"
                  style={{ filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.4))' }}
                >
                  {/* Embedded clean SVG world map background */}
                  <image
                    href="/assets/world-map.svg"
                    x="0"
                    y="50"
                    width="950"
                    height="490"
                    preserveAspectRatio="xMidYMid meet"
                    opacity="0.35"
                    style={{ filter: 'invert(1) hue-rotate(180deg) brightness(0.7)' }}
                  />

                  {/* Shipping route arcs from Palghar to each continent landmass */}
                  <g className="routes" opacity="0.9">
                    {CONTINENT_ROUTES.map((route) => (
                      <path
                        key={route.id}
                        d={route.d}
                        fill="none"
                        stroke="#f0e846"
                        strokeWidth="1.5"
                        className="shipping-arc-glow"
                      />
                    ))}
                  </g>

                  {/* Continent Land Nodes */}
                  <g className="continent-nodes">
                    {CONTINENT_NODES.map((node) => (
                      <g key={node.id} className="continent-node">
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r="8"
                          fill="#f0e846"
                          opacity="0.2"
                        />
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r="4"
                          fill="#f0e846"
                          stroke="#070b20"
                          strokeWidth="1.5"
                          className="node-dot transition-all duration-200"
                          style={{ transformOrigin: `${node.x}px ${node.y}px` }}
                        />
                        <text
                          x={node.labelX}
                          y={node.labelY}
                          textAnchor={node.textAnchor}
                          fill="#cbd5e1"
                          fontSize="9.5"
                          fontWeight="600"
                          fontFamily="Outfit, system-ui, sans-serif"
                          letterSpacing="0.4"
                          className="node-text transition-colors duration-200"
                        >
                          {node.name}
                        </text>
                      </g>
                    ))}
                  </g>

                  {/* Manufacturing Hub: Palghar */}
                  <g className="origin-hub">
                    <circle
                      cx="654.5"
                      cy="278.5"
                      fill="none"
                      stroke="#ff740e"
                      strokeWidth="1.8"
                      className="pulse-ring-1"
                    />
                    <circle
                      cx="654.5"
                      cy="278.5"
                      fill="none"
                      stroke="#ff740e"
                      strokeWidth="1.2"
                      className="pulse-ring-2"
                    />
                    <circle
                      cx="654.5"
                      cy="278.5"
                      r="5"
                      fill="#ff740e"
                      stroke="#ffffff"
                      strokeWidth="2"
                    />
                    <line
                      x1="659"
                      y1="282"
                      x2="675"
                      y2="298"
                      stroke="#ff740e"
                      strokeWidth="1"
                      strokeDasharray="2,2"
                    />
                    <line
                      x1="675"
                      y1="298"
                      x2="785"
                      y2="298"
                      stroke="#ff740e"
                      strokeWidth="1"
                    />
                    <text
                      x="680"
                      y="293"
                      fill="#ffffff"
                      fontSize="9.5"
                      fontWeight="700"
                      fontFamily="Outfit, system-ui, sans-serif"
                      letterSpacing="0.6"
                    >
                      MANUFACTURING HUB
                    </text>
                    <text
                      x="680"
                      y="308"
                      fill="#f0e846"
                      fontSize="8.5"
                      fontFamily="Inter, system-ui, sans-serif"
                    >
                      Palghar, Maharashtra
                    </text>
                  </g>
                </svg>
              </div>
            </div>

            {/* Bottom trade compliance pills */}
            <div className="mt-5 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Customs Clearance &amp; Fumigated Wooden Pallets
              </span>
              <span className="font-mono text-[11px] text-slate-400">
                FOB • CIF • CFR Incoterms
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
