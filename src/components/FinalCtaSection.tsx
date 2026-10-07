import React from 'react';
import { ArrowRight, MessageSquare, Sparkles, ShieldCheck } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface FinalCtaSectionProps {
  onNavigate: (page: 'home' | 'contact') => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onNavigate }) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className={`py-20 sm:py-28 bg-[#1e2b70] relative overflow-hidden border-t border-white/10 select-none reveal-fade-up ${
        isVisible ? 'reveal-visible' : ''
      }`}
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#283890]/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f0e846]/15 border border-[#f0e846]/40 text-[#f0e846] text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-[#f0e846]" />
          <span className="font-headline tracking-wide uppercase">
            DIRECT FACTORY PARTNERSHIP
          </span>
        </div>

        {/* Big Fredoka Heading */}
        <h2 className="font-headline font-bold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.15] max-w-3xl mx-auto mb-5">
          Let's Build Something <br className="hidden sm:inline" />
          <span className="text-[#f0e846]">With Paper</span>.
        </h2>

        {/* Supporting Text Placeholder (Be Vietnam) */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="p-4 rounded-2xl bg-[#151f52]/80 border border-[#f0e846]/30 mb-3">
            <p className="font-mono text-xs sm:text-sm text-[#f0e846] leading-relaxed">
              [ADD OFFICIAL CTA COPY — Connect with our manufacturing desk for wholesale volume quotations, custom private labeling, and global export schedules.]
            </p>
          </div>
          <p className="font-body text-xs sm:text-sm text-white/80">
            From institutional notebooks and office registers to container-load overseas shipments.
          </p>
        </div>

        {/* Dual Action Buttons (Contact Us + WhatsApp Us) */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4 mb-10 max-w-sm sm:max-w-none mx-auto">
          
          {/* Button 1: Contact Us */}
          <button
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-xl bg-[#f0e846] hover:bg-[#ff740e] text-[#283890] hover:text-white font-headline font-bold text-sm sm:text-base tracking-wide transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-xl shadow-black/25 flex items-center justify-center gap-2.5 group min-h-[48px]"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Button 2: WhatsApp Us */}
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-headline font-semibold text-sm sm:text-base tracking-wide transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-xl flex items-center justify-center gap-2 min-h-[48px]"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>WhatsApp Us</span>
          </a>

        </div>

        {/* Trust Note */}
        <div className="flex items-center justify-center gap-2 text-xs text-white/70">
          <ShieldCheck className="w-4 h-4 text-[#f0e846]" />
          <span>Fast response time for distributors, school boards, and international buyers.</span>
        </div>

      </div>
    </section>
  );
};
