import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/websiteData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FloatingActions: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { contact } = COMPANY_DETAILS;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const progress = Math.min(Math.max((scrollTop / docHeight) * 100, 0), 100);
        setScrollProgress(progress);
      }
      setShowScrollTop(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // SVG circular stroke calculation for 44px circle (radius 18)
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">

      {/* Scroll to Top with Real-Time Circular SVG Progress Ring */}
      <button
        onClick={scrollToTop}
        className={`pointer-events-auto relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0a0f2c]/90 backdrop-blur-md text-white shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group ${
          showScrollTop
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        title={`Scroll to Top (${Math.round(scrollProgress)}%)`}
        aria-label="Scroll to top"
      >
        {/* Circular Progress SVG */}
        <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 44 44">
          <circle
            cx="22"
            cy="22"
            r={radius}
            fill="none"
            stroke="rgba(255, 255, 255, 0.15)"
            strokeWidth="2.5"
          />
          <circle
            cx="22"
            cy="22"
            r={radius}
            fill="none"
            stroke="#ff740e"
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-150 ease-out"
          />
        </svg>

        {/* Center Arrow Icon */}
        <ArrowUp className="w-4 h-4 text-white group-hover:-translate-y-0.5 group-hover:text-[#f0e846] transition-all duration-200" />
      </button>

      {/* WhatsApp Floating Action Button */}
      <a
        href={contact.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto relative w-14 h-14 sm:w-16 sm:h-16 hover:scale-105 active:scale-95 transition-all duration-200 drop-shadow-2xl"
        title="Chat with us on WhatsApp"
        aria-label="Chat with us on WhatsApp"
      >
        {/* Pulsing online badge */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 z-10">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#25D366] border border-white" />
        </span>
        <WhatsAppIcon className="w-full h-full object-contain drop-shadow-md" />
      </a>

    </div>
  );
};
