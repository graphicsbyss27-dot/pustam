import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { PustamLogo } from './PustamLogo';

interface NavbarProps {
  currentPage: 'home' | 'contact';
  onNavigate: (page: 'home' | 'contact', sectionId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (sectionId?: string) => {
    setMobileMenuOpen(false);
    if (sectionId) {
      if (currentPage !== 'home') {
        onNavigate('home', sectionId);
      } else {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'glass-nav py-2.5 shadow-md shadow-black/20 border-b border-white/10'
          : 'bg-[#283890] py-3.5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* LEFT: Pustam Logo */}
        <button
          onClick={() => handleLinkClick()}
          className="flex items-center focus:outline-none"
          aria-label="Pustam Paper Products Home"
        >
          <PustamLogo size="sm" />
        </button>

        {/* CENTER / RIGHT: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-8">
          <button
            onClick={() => handleLinkClick()}
            className={`text-sm font-medium transition-colors hover:text-[#f0e846] ${
              currentPage === 'home' ? 'text-[#f0e846] font-semibold' : 'text-white/90'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleLinkClick('about')}
            className="text-sm font-medium text-white/90 hover:text-[#f0e846] transition-colors"
          >
            About
          </button>
          <button
            onClick={() => handleLinkClick('products')}
            className="text-sm font-medium text-white/90 hover:text-[#f0e846] transition-colors"
          >
            Products
          </button>
          <button
            onClick={() => handleLinkClick('export')}
            className="text-sm font-medium text-white/90 hover:text-[#f0e846] transition-colors"
          >
            Export
          </button>
          <button
            onClick={() => handleLinkClick('factory')}
            className="text-sm font-medium text-white/90 hover:text-[#f0e846] transition-colors"
          >
            Factory
          </button>
          <button
            onClick={() => handleLinkClick('certifications')}
            className="text-sm font-medium text-white/90 hover:text-[#f0e846] transition-colors"
          >
            Certifications
          </button>
          <button
            onClick={handleContactClick}
            className={`text-sm font-medium transition-colors hover:text-[#f0e846] ${
              currentPage === 'contact' ? 'text-[#f0e846] font-semibold' : 'text-white/90'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* CTA: Contact Us Button */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={handleContactClick}
            className="px-4 py-2 rounded-lg bg-[#f0e846] hover:bg-[#ff740e] text-[#283890] hover:text-white font-headline font-semibold text-xs sm:text-sm tracking-wide transition-all duration-200 shadow flex items-center gap-1.5 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* MOBILE & TABLET: Menu Button on Right */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-white/10 text-white hover:bg-white/20 focus:outline-none transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#f0e846]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* MOBILE & TABLET: Clean Full-width Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#151f52]/98 backdrop-blur-xl border-t border-white/15 px-4 sm:px-6 pt-3 pb-6 space-y-1.5 mt-2 shadow-2xl animate-fadeIn">
          <button
            onClick={() => handleLinkClick()}
            className="block w-full text-left py-3 px-4 rounded-xl text-sm font-medium text-white hover:bg-white/10 hover:text-[#f0e846] min-h-[44px] flex items-center"
          >
            Home
          </button>
          <button
            onClick={() => handleLinkClick('about')}
            className="block w-full text-left py-3 px-4 rounded-xl text-sm font-medium text-white hover:bg-white/10 hover:text-[#f0e846] min-h-[44px] flex items-center"
          >
            About
          </button>
          <button
            onClick={() => handleLinkClick('products')}
            className="block w-full text-left py-3 px-4 rounded-xl text-sm font-medium text-white hover:bg-white/10 hover:text-[#f0e846] min-h-[44px] flex items-center"
          >
            Products
          </button>
          <button
            onClick={() => handleLinkClick('export')}
            className="block w-full text-left py-3 px-4 rounded-xl text-sm font-medium text-white hover:bg-white/10 hover:text-[#f0e846] min-h-[44px] flex items-center"
          >
            Export
          </button>
          <button
            onClick={() => handleLinkClick('factory')}
            className="block w-full text-left py-3 px-4 rounded-xl text-sm font-medium text-white hover:bg-white/10 hover:text-[#f0e846] min-h-[44px] flex items-center"
          >
            Factory
          </button>
          <button
            onClick={() => handleLinkClick('certifications')}
            className="block w-full text-left py-3 px-4 rounded-xl text-sm font-medium text-white hover:bg-white/10 hover:text-[#f0e846] min-h-[44px] flex items-center"
          >
            Certifications
          </button>
          <button
            onClick={handleContactClick}
            className="block w-full text-left py-3 px-4 rounded-xl text-sm font-medium text-white hover:bg-white/10 hover:text-[#f0e846] min-h-[44px] flex items-center"
          >
            Contact
          </button>

          <div className="pt-3 border-t border-white/10">
            <button
              onClick={handleContactClick}
              className="w-full py-3.5 px-4 rounded-xl bg-[#f0e846] hover:bg-[#ff740e] text-[#283890] hover:text-white font-headline font-bold text-sm flex items-center justify-center gap-2 shadow transition-all duration-200 min-h-[48px]"
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
