import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { PustamLogo } from './PustamLogo';

interface NavbarProps {
  currentPage: 'home' | 'contact';
  onNavigate: (page: 'home' | 'contact', sectionId?: string) => void;
}

const NAV_SECTIONS = ['about', 'products', 'factory', 'export', 'certifications'] as const;

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  /* ── Scroll-based header shadow ── */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ── Scroll spy with IntersectionObserver ── */
  useEffect(() => {
    if (currentPage !== 'home') {
      setActiveSection(null);
      return;
    }

    // Map that tracks ratio for each section
    const ratioMap: Record<string, number> = {};

    observerRef.current?.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratioMap[entry.target.id] = entry.intersectionRatio;
        });

        // At the very top (no section visible), clear active
        const topOfPage = window.scrollY < 80;
        if (topOfPage) {
          setActiveSection(null);
          return;
        }

        // Pick the section with the highest visible ratio
        let best = '';
        let bestRatio = 0;
        for (const [id, ratio] of Object.entries(ratioMap)) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            best = id;
          }
        }
        setActiveSection(best || null);
      },
      {
        rootMargin: '-64px 0px -40% 0px', // navbar height offset at top, 40% threshold at bottom
        threshold: [0, 0.05, 0.1, 0.2, 0.3, 0.4, 0.5],
      }
    );

    // Observe all sections
    NAV_SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [currentPage]);

  /* ── Helpers ── */
  const isActive = (sectionId?: string) => {
    if (currentPage !== 'home') return false;
    if (!sectionId) return activeSection === null; // Home tab active at top
    return activeSection === sectionId;
  };

  const handleLinkClick = (sectionId?: string) => {
    setMobileMenuOpen(false);
    if (sectionId) {
      if (currentPage !== 'home') {
        onNavigate('home', sectionId);
      } else {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      onNavigate('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    setMobileMenuOpen(false);
    onNavigate('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinkClass = (sectionId?: string) => {
    const active = isActive(sectionId);
    return `text-sm font-semibold transition-all duration-200 relative py-1 hover:text-[#283890] ${
      active
        ? 'text-[#283890] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#ff740e] after:rounded-full'
        : 'text-slate-600'
    }`;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        scrolled
          ? 'bg-white/96 backdrop-blur-md py-2 shadow-md shadow-slate-900/5 border-b border-slate-200/90'
          : 'bg-white py-3 sm:py-3.5 shadow-sm border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* LEFT: Logo Badge */}
        <button
          onClick={() => handleLinkClick()}
          className="flex items-center focus:outline-none group shrink-0"
          aria-label="Pustam Paper Products Home"
        >
          <div className="px-3 sm:px-4 py-1.5 rounded-xl bg-[#283890] shadow-md shadow-[#283890]/20 border border-[#3b4cb8] flex items-center group-hover:scale-105 group-hover:shadow-lg group-hover:border-[#f0e846]/60 transition-all duration-200">
            <PustamLogo size="sm" />
          </div>
        </button>

        {/* CENTER: Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          <button onClick={() => handleLinkClick()} className={navLinkClass()}>
            Home
          </button>
          <button onClick={() => handleLinkClick('about')} className={navLinkClass('about')}>
            About
          </button>
          <button onClick={() => handleLinkClick('products')} className={navLinkClass('products')}>
            Products
          </button>
          <button onClick={() => handleLinkClick('factory')} className={navLinkClass('factory')}>
            Manufacturing
          </button>
          <button onClick={() => handleLinkClick('export')} className={navLinkClass('export')}>
            Export
          </button>
          <button onClick={() => handleLinkClick('certifications')} className={navLinkClass('certifications')}>
            Certifications
          </button>
        </nav>

        {/* RIGHT: Contact CTA */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={handleContactClick}
            className="px-5 py-2.5 rounded-xl bg-[#283890] hover:bg-[#ff740e] text-white font-headline font-semibold text-xs sm:text-sm tracking-wide transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-1.5 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* MOBILE: Hamburger */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-200 focus:outline-none transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#283890]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE: Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-slate-200 px-4 sm:px-6 pt-3 pb-6 space-y-1.5 mt-2 shadow-xl animate-fadeIn">
          {[
            { label: 'Home', id: undefined },
            { label: 'About', id: 'about' },
            { label: 'Products', id: 'products' },
            { label: 'Manufacturing', id: 'factory' },
            { label: 'Export', id: 'export' },
            { label: 'Certifications', id: 'certifications' },
          ].map(({ label, id }) => (
            <button
              key={label}
              onClick={() => handleLinkClick(id)}
              className={`block w-full text-left py-3 px-4 rounded-xl text-sm font-semibold min-h-[44px] flex items-center transition-all duration-150 ${
                isActive(id)
                  ? 'bg-[#283890]/8 text-[#283890] border-l-2 border-[#ff740e]'
                  : 'text-slate-800 hover:bg-slate-100 hover:text-[#283890]'
              }`}
            >
              {label}
            </button>
          ))}

          <div className="pt-3 border-t border-slate-200">
            <button
              onClick={handleContactClick}
              className="w-full py-3.5 px-4 rounded-xl bg-[#283890] hover:bg-[#ff740e] text-white font-headline font-bold text-sm flex items-center justify-center gap-2 shadow transition-all duration-200 min-h-[48px]"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
