import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/websiteData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { contact } = COMPANY_DETAILS;

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 350);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 pointer-events-none">

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#151f52] text-white hover:bg-[#f0e846] hover:text-[#283890] shadow-md border border-white/20 flex items-center justify-center transition-all hover:scale-105 group"
          title="Back to Top"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}

      {/* WhatsApp Button — real brand icon */}
      <a
        href={contact.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto relative w-14 h-14 sm:w-16 sm:h-16 hover:scale-105 active:scale-95 transition-all duration-200 drop-shadow-2xl"
        title="Chat with us on WhatsApp"
        aria-label="Chat with us on WhatsApp"
      >
        {/* Live pulse indicator */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 z-10">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f0e846] opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#f0e846]" />
        </span>
        <WhatsAppIcon className="w-full h-full object-contain" />
      </a>

    </div>
  );
};
