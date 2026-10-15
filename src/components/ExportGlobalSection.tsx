import React from 'react';
import { Globe, ArrowRight, PackageCheck, Anchor, ShieldCheck } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ExportGlobalSectionProps {
  onNavigate?: (page: 'home' | 'contact', sectionId?: string) => void;
}

export const ExportGlobalSection: React.FC<ExportGlobalSectionProps> = ({ onNavigate }) => {
  const { ref, isVisible } = useScrollReveal();

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12 sm:mb-14">
          
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
              Shipments <span className="text-[#f0e846]">Worldwide</span>.
            </h2>
          </div>

          {/* Right Column: Supporting Paragraph (5 cols) */}
          <div className="lg:col-span-5 space-y-4 lg:pt-2">
            <p className="font-body text-sm sm:text-base text-white/85 leading-relaxed">
              From India to international markets, Pustam Paper Products supplies notebook products to buyers worldwide, supported by manufacturing capabilities and export-ready packaging.
            </p>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#f0e846]/10 border border-[#f0e846]/25 text-[#f0e846] text-xs font-semibold">
              <Globe className="w-4 h-4" />
              <span className="font-headline tracking-wide">International Container Shipments</span>
            </div>
          </div>

        </div>

        {/* Elegant Animated Globe Shipping Visual Canvas */}
        <div className="rounded-3xl bg-[#151f52] border border-white/15 p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden mb-12">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 relative z-20">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#283890] flex items-center justify-center text-[#f0e846] border border-white/10">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-headline font-bold text-base sm:text-lg text-white">
                  Worldwide Shipping Corridors
                </h3>
                <p className="text-xs text-white/60 font-mono">
                  Manufacturing Origin: India (Palghar) → Global Ports & Buyers
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/80 self-start sm:self-auto font-mono">
              <span className="w-2 h-2 rounded-full bg-[#f0e846] animate-pulse" />
              <span>Active International Despatch</span>
            </div>
          </div>

          {/* Globe Container Visual */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/8] md:aspect-[21/9] bg-[#101b44] rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center">
            
            {/* Subtle Starfield / Grid Background */}
            <div className="absolute inset-0 bg-grid-pattern opacity-15" />
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-[#0a122e] pointer-events-none" />

            {/* Responsive Animated Globe SVG */}
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-full relative z-10 select-none pointer-events-none"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                {/* Radial gradient for globe sphere depth */}
                <radialGradient id="globeSphere" cx="42%" cy="42%" r="60%">
                  <stop offset="0%" stopColor="#283890" stopOpacity="0.85" />
                  <stop offset="65%" stopColor="#182361" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#0b1238" stopOpacity="1" />
                </radialGradient>

                {/* Outer Atmosphere Glow */}
                <radialGradient id="atmosphereGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="85%" stopColor="#3b4cb8" stopOpacity="0" />
                  <stop offset="97%" stopColor="#f0e846" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#ff740e" stopOpacity="0.4" />
                </radialGradient>

                {/* Gradients for Shipping Arcs */}
                <linearGradient id="arcEast" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f0e846" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#ff740e" stopOpacity="0.3" />
                </linearGradient>

                <linearGradient id="arcWest" x1="100%" y1="0%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#f0e846" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#ff740e" stopOpacity="0.3" />
                </linearGradient>
              </defs>

              {/* Central Globe Sphere */}
              <g transform="translate(500, 250)">
                
                {/* Atmosphere Rim */}
                <circle cx="0" cy="0" r="185" fill="none" stroke="url(#atmosphereGlow)" strokeWidth="6" opacity="0.6" />
                
                {/* Main Sphere Body */}
                <circle cx="0" cy="0" r="180" fill="url(#globeSphere)" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />

                {/* Latitude Ellipses */}
                <ellipse cx="0" cy="0" rx="180" ry="18" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="3 4" />
                <ellipse cx="0" cy="-60" rx="169" ry="15" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="3 4" />
                <ellipse cx="0" cy="60" rx="169" ry="15" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="3 4" />
                <ellipse cx="0" cy="-120" rx="134" ry="12" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="3 4" />
                <ellipse cx="0" cy="120" rx="134" ry="12" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="3 4" />

                {/* Longitude Meridians */}
                <ellipse cx="0" cy="0" rx="55" ry="180" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
                <ellipse cx="0" cy="0" rx="115" ry="180" fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="1" />
                <line x1="0" y1="-180" x2="0" y2="180" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />

                {/* Simplified Continental Silhouettes (Eastern Hemisphere & Asia Central) */}
                {/* Eurasia Continent Silhouette */}
                <path
                  d="M -50 -105 Q -20 -115 15 -100 Q 55 -95 90 -70 Q 110 -50 85 -25 Q 60 -10 35 -15 Q 15 -35 -10 -40 Q -35 -40 -60 -65 Z"
                  fill="rgba(240, 232, 70, 0.12)"
                  stroke="rgba(240, 232, 70, 0.28)"
                  strokeWidth="1.2"
                />

                {/* Indian Subcontinent Silhouette */}
                <path
                  d="M 5 -35 Q 25 -32 40 -25 Q 35 10 20 30 Q 10 15 5 -10 Z"
                  fill="rgba(240, 232, 70, 0.25)"
                  stroke="#f0e846"
                  strokeWidth="1.5"
                />

                {/* Africa Silhouette */}
                <path
                  d="M -75 -45 Q -55 -40 -45 -15 Q -40 25 -65 75 Q -85 50 -95 15 Q -105 -20 -75 -45 Z"
                  fill="rgba(255, 255, 255, 0.08)"
                  stroke="rgba(255, 255, 255, 0.2)"
                  strokeWidth="1.2"
                />

                {/* Southeast Asia / Australasia Silhouette */}
                <path
                  d="M 75 10 Q 105 15 120 40 Q 105 75 80 55 Q 65 30 75 10 Z"
                  fill="rgba(255, 255, 255, 0.08)"
                  stroke="rgba(255, 255, 255, 0.2)"
                  strokeWidth="1.2"
                />

                {/* Americas Western Rim (Curved at Horizon) */}
                <path
                  d="M -150 -70 Q -130 -40 -140 10 Q -155 45 -145 90 Q -175 60 -170 -30 Z"
                  fill="rgba(255, 255, 255, 0.06)"
                  stroke="rgba(255, 255, 255, 0.15)"
                  strokeWidth="1"
                />

                {/* India Origin Hub (Centered at approx x: 22, y: 0) */}
                <g transform="translate(22, 2)">
                  {/* Radar pulse rings */}
                  <circle cx="0" cy="0" r="14" fill="none" stroke="#f0e846" strokeWidth="1.5" opacity="0.6" className="animate-ping" />
                  <circle cx="0" cy="0" r="7" fill="#ff740e" stroke="#ffffff" strokeWidth="1.5" />
                  <circle cx="0" cy="0" r="3" fill="#f0e846" />
                </g>
              </g>

              {/* Shipping Arcs extending outward across the globe */}
              {/* Arc 1: India to Middle East & GCC */}
              <path
                id="routeMiddleEast"
                d="M 522 252 Q 440 210 370 230"
                fill="none"
                stroke="url(#arcWest)"
                strokeWidth="2.5"
                strokeDasharray="6 4"
                className="animate-pulse"
              />

              {/* Arc 2: India to Europe & UK */}
              <path
                id="routeEurope"
                d="M 522 252 Q 420 120 280 150"
                fill="none"
                stroke="url(#arcWest)"
                strokeWidth="2.5"
                strokeDasharray="6 4"
              />

              {/* Arc 3: India to North America (via Atlantic corridor) */}
              <path
                id="routeAmericas"
                d="M 522 252 Q 350 80 150 170"
                fill="none"
                stroke="url(#arcWest)"
                strokeWidth="2"
                strokeDasharray="5 5"
              />

              {/* Arc 4: India to Africa */}
              <path
                id="routeAfrica"
                d="M 522 252 Q 450 310 380 340"
                fill="none"
                stroke="url(#arcWest)"
                strokeWidth="2.2"
                strokeDasharray="6 4"
              />

              {/* Arc 5: India to Southeast Asia & Asia-Pacific */}
              <path
                id="routeAsiaPacific"
                d="M 522 252 Q 620 240 730 270"
                fill="none"
                stroke="url(#arcEast)"
                strokeWidth="2.5"
                strokeDasharray="6 4"
              />

              {/* Arc 6: India to Far East */}
              <path
                id="routeFarEast"
                d="M 522 252 Q 650 170 820 190"
                fill="none"
                stroke="url(#arcEast)"
                strokeWidth="2"
                strokeDasharray="5 5"
              />

              {/* Destination Hub Markers */}
              {/* Middle East Marker */}
              <circle cx="370" cy="230" r="5" fill="#f0e846" stroke="#283890" strokeWidth="2" />
              <text x="350" y="215" fill="#ffffff" fontSize="12" fontFamily="monospace" textAnchor="end" opacity="0.9">
                Middle East & GCC
              </text>

              {/* Europe Marker */}
              <circle cx="280" cy="150" r="5" fill="#f0e846" stroke="#283890" strokeWidth="2" />
              <text x="260" y="140" fill="#ffffff" fontSize="12" fontFamily="monospace" textAnchor="end" opacity="0.9">
                UK & Europe
              </text>

              {/* Americas Marker */}
              <circle cx="150" cy="170" r="5" fill="#ff740e" stroke="#ffffff" strokeWidth="2" />
              <text x="140" y="195" fill="#ffffff" fontSize="12" fontFamily="monospace" textAnchor="end" opacity="0.9">
                North America
              </text>

              {/* Africa Marker */}
              <circle cx="380" cy="340" r="5" fill="#f0e846" stroke="#283890" strokeWidth="2" />
              <text x="360" y="360" fill="#ffffff" fontSize="12" fontFamily="monospace" textAnchor="end" opacity="0.9">
                African Markets
              </text>

              {/* Asia Pacific Marker */}
              <circle cx="730" cy="270" r="5" fill="#f0e846" stroke="#283890" strokeWidth="2" />
              <text x="745" y="285" fill="#ffffff" fontSize="12" fontFamily="monospace" textAnchor="start" opacity="0.9">
                Southeast Asia
              </text>

              {/* Global Markets Far East Marker */}
              <circle cx="820" cy="190" r="5" fill="#ff740e" stroke="#ffffff" strokeWidth="2" />
              <text x="835" y="195" fill="#ffffff" fontSize="12" fontFamily="monospace" textAnchor="start" opacity="0.9">
                Worldwide Ports
              </text>

              {/* Origin Callout Badge above India */}
              <g transform="translate(522, 215)">
                <rect x="-65" y="-22" width="130" height="22" rx="6" fill="#151f52" stroke="#f0e846" strokeWidth="1.2" />
                <text x="0" y="-7" fill="#f0e846" fontSize="10.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
                  ORIGIN: INDIA
                </text>
              </g>
            </svg>

            {/* Bottom Caption Pill */}
            <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto bg-[#151f52]/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/15 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#f0e846] shrink-0" />
              <p className="text-xs text-white/80 font-mono">
                Containerised sea freight through major Indian container ports to buyers worldwide.
              </p>
            </div>

          </div>

        </div>

        {/* 3 Export Infrastructure Trust Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-2xl bg-[#151f52] border border-white/10 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#283890] flex items-center justify-center text-[#f0e846] mb-3">
              <PackageCheck className="w-5 h-5" />
            </div>
            <h4 className="font-headline font-bold text-base text-white">
              Export-Ready Packaging
            </h4>
            <p className="text-xs text-white/70 leading-relaxed font-body">
              Heavy-duty shrink wrapping and corrugated export cartons protect notebooks from sea-transit humidity and handling.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#151f52] border border-white/10 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#283890] flex items-center justify-center text-[#ff740e] mb-3">
              <Anchor className="w-5 h-5" />
            </div>
            <h4 className="font-headline font-bold text-base text-white">
              Port Accessibility
            </h4>
            <p className="text-xs text-white/70 leading-relaxed font-body">
              Located in Palghar, Maharashtra with efficient highway transit directly connecting to Mumbai seaports (Nhava Sheva / JNPT).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#151f52] border border-white/10 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#283890] flex items-center justify-center text-[#f0e846] mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-headline font-bold text-base text-white">
              Registered Export Licencing
            </h4>
            <p className="text-xs text-white/70 leading-relaxed font-body">
              Full DGFT Import Export Code (IEC: BNZPC4332C) and MSME regularisation enabling compliant international trade.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
