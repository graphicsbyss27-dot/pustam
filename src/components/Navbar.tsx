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
    onNavigate('home', sectionId);
  };

  const handleContactClick = () => {
    setMobileMenuOpen(false);
    onNavigate('contact');
  };

  const navLinkClass = (sectionId?: string) => {
    const active = isActive(sectionId);
    return `text-sm font-semibold transition-all duration-200 relative py-1 ${
      active
        ? 'text-[#283890] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#ff740e] after:rounded-full'
        : 'text-slate-700 hover:text-[#283890]'
    }`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none pt-3 sm:pt-4 px-4 sm:px-6">
      <div
        className={`max-w-6xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl pointer-events-auto transition-all duration-300 flex items-center justify-between navbar-pill-glass ${
          scrolled ? 'scrolled shadow-2xl' : 'shadow-xl'
        }`}
      >

        {/* LEFT: Logo Badge with clean matching rounded-xl */}
        <button
          onClick={() => handleLinkClick()}
          className="flex items-center focus:outline-none group shrink-0"
          aria-label="Pustam Paper Products Home"
        >
          <div className="p-1 rounded-xl bg-transparent transition-all duration-200 group-hover:scale-105 flex items-center">
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
            className="btn-apple-base btn-apple-primary px-5 py-2.5 text-xs sm:text-sm gap-1.5"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* MOBILE: Hamburger */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-2xl bg-black/[0.05] text-slate-800 hover:bg-black/[0.08] border border-black/10 backdrop-blur-md focus:outline-none transition-all flex items-center justify-center active:scale-95"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#ff740e]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE: Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden navbar-drawer rounded-2xl border border-white/80 px-4 sm:px-6 pt-3 pb-6 space-y-1.5 mt-2 shadow-2xl animate-fadeIn pointer-events-auto">
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
              className={`block w-full text-left py-3 px-4 rounded-xl text-sm font-semibold min-h-[44px] flex items-center justify-between transition-all duration-150 ${
                isActive(id)
                  ? 'bg-[#283890]/10 text-[#283890] font-bold border-l-2 border-[#ff740e]'
                  : 'text-slate-700 hover:bg-black/5 hover:text-[#283890]'
              }`}
            >
              <span>{label}</span>
              {isActive(id) && <span className="w-2 h-2 rounded-full bg-[#ff740e]" />}
            </button>
          ))}

          <div className="pt-3 border-t border-slate-200">
            <button
              onClick={handleContactClick}
              className="btn-apple-base btn-apple-primary w-full py-3.5 px-4 text-sm gap-2 min-h-[48px]"
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
