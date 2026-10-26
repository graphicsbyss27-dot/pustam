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
      className={`py-20 sm:py-28 bg-white relative overflow-hidden border-t border-slate-100 scroll-mt-16 select-none reveal-fade-up ${
        isVisible ? 'reveal-visible' : ''
      }`}
    >
      {/* Background subtle mesh glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#283890]/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* LEFT: Copy, Heading & Stats (Paperforce style) */}
          <div className="lg:col-span-5 space-y-7">

            {/* Main Headline */}
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-headline font-bold text-slate-900 tracking-tight leading-[1.12]">
                Made in India.{' '}
                <span className="inline-block text-3xl sm:text-4xl lg:text-[46px] align-middle ml-1 drop-shadow-sm">
                  🇮🇳
                </span>
                <br />
                <span className="text-[#283890]">Shipped Worldwide.</span>
              </h2>
            </div>

            {/* Narrative description */}
            <p className="font-body text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg">
              Pustam Paper Products seamlessly supplies high-volume paper stationery as per
              customized specifications to international brands, retailers, and distributors
              across the globe.
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-slate-200/90" />

            {/* Highlights (Clean capability metrics, no specific country lists) */}
            <div className="grid grid-cols-2 gap-6 sm:gap-8">
              <div>
                <div className="font-headline font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                  Worldwide
                </div>
                <div className="text-[11px] sm:text-xs font-headline font-bold text-slate-400 uppercase tracking-widest mt-1.5">
                  Global Supply Reach
                </div>
              </div>

              <div>
                <div className="font-headline font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                  JNPT Port
                </div>
                <div className="text-[11px] sm:text-xs font-headline font-bold text-slate-400 uppercase tracking-widest mt-1.5">
                  Direct Sea Freight Link
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={() => onNavigate && onNavigate('contact')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#283890] hover:bg-[#ff740e] text-white font-headline font-semibold text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Inquire for Global Export</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* RIGHT: Minimalist Interactive World Map (Antarctica excluded, points on continent lands) */}
          <div className="lg:col-span-7">
            <div className="relative w-full rounded-2xl bg-white/70 border border-slate-100 p-2 sm:p-4 shadow-sm hover:shadow-md transition-shadow duration-300">

              <style>{`
                @keyframes arcDash {
                  to {
                    stroke-dashoffset: -32;
                  }
                }
                .shipping-arc {
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
                  transform: scale(1.3);
                  fill: #ff740e;
                }
                .continent-node:hover .node-text {
                  fill: #1e2b70;
                  font-weight: 700;
                }
              `}</style>

              <svg
                viewBox="0 50 950 490"
                className="w-full h-auto select-none"
                style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.02))' }}
              >
                {/* Embedded clean SVG world map background (Antarctica removed) */}
                <image
                  href="/assets/world-map.svg"
                  x="0"
                  y="50"
                  width="950"
                  height="490"
                  preserveAspectRatio="xMidYMid meet"
                />

                {/* Shipping route arcs from Palghar to each continent landmass */}
                <g className="routes" opacity="0.75">
                  {CONTINENT_ROUTES.map((route) => (
                    <path
                      key={route.id}
                      d={route.d}
                      fill="none"
                      stroke="#283890"
                      strokeWidth="1.3"
                      className="shipping-arc"
                    />
                  ))}
                </g>

                {/* Continent Land Nodes (1 strictly per continent landmass, zero in water) */}
                <g className="continent-nodes">
                  {CONTINENT_NODES.map((node) => (
                    <g key={node.id} className="continent-node">
                      {/* Ambient ring */}
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r="7"
                        fill="#283890"
                        opacity="0.12"
                      />
                      {/* Inner dot on land */}
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r="3.5"
                        fill="#283890"
                        stroke="#ffffff"
                        strokeWidth="1.5"
                        className="node-dot transition-all duration-200"
                        style={{ transformOrigin: `${node.x}px ${node.y}px` }}
                      />
                      {/* Static Continent Label (Stable, no laggy tracking) */}
                      <text
                        x={node.labelX}
                        y={node.labelY}
                        textAnchor={node.textAnchor}
                        fill="#64748b"
                        fontSize="9"
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

                {/* Manufacturing Hub: Palghar, Maharashtra (West Coast of India: x=654.5, y=278.5) */}
                <g className="origin-hub">
                  {/* Expanding pulse wave rings */}
                  <circle
                    cx="654.5"
                    cy="278.5"
                    fill="none"
                    stroke="#283890"
                    strokeWidth="1.5"
                    className="pulse-ring-1"
                  />
                  <circle
                    cx="654.5"
                    cy="278.5"
                    fill="none"
                    stroke="#283890"
                    strokeWidth="1.2"
                    className="pulse-ring-2"
                  />

                  {/* Center origin marker */}
                  <circle
                    cx="654.5"
                    cy="278.5"
                    r="4.5"
                    fill="#283890"
                    stroke="#ffffff"
                    strokeWidth="2"
                  />

                  {/* Leader line to callout label */}
                  <line
                    x1="659"
                    y1="282"
                    x2="675"
                    y2="298"
                    stroke="#94a3b8"
                    strokeWidth="1"
                    strokeDasharray="2,2"
                  />
                  <line
                    x1="675"
                    y1="298"
                    x2="775"
                    y2="298"
                    stroke="#cbd5e1"
                    strokeWidth="1"
                  />

                  {/* Leader label text */}
                  <text
                    x="680"
                    y="293"
                    fill="#1e2b70"
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
                    fill="#64748b"
                    fontSize="8.5"
                    fontFamily="Inter, system-ui, sans-serif"
                  >
                    Palghar, Maharashtra
                  </text>
                </g>
              </svg>

              {/* Bottom static trust pill */}
              <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium px-2">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#283890]" />
                  Direct Containerized Sea &amp; Air Freight
                </span>
                <span className="font-mono text-[10px] text-slate-400">
                  Global Corridors Connected
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
