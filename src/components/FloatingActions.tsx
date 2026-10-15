import React, { useState, useEffect } from 'react';
import { MessageSquare, ArrowUp } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/websiteData';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { contact } = COMPANY_DETAILS;

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

      {/* WhatsApp Button only - Phone Call icon removed per specifications */}
      <a
        href={contact.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl flex items-center justify-center transition-all hover:scale-105 group border-2 border-white/40"
        title="Chat with us on WhatsApp"
        aria-label="Chat with us on WhatsApp"
      >
        <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#f0e846]"></span>
        </span>
        <MessageSquare className="w-6 h-6 fill-current text-white" />
      </a>

    </div>
  );
};
