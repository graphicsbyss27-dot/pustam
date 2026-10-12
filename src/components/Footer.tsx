import React from 'react';
import { Phone, MessageSquare, MapPin, Mail, ArrowUp } from 'lucide-react';
import { PustamLogo } from './PustamLogo';

interface FooterProps {
  onNavigate: (page: 'home' | 'contact', sectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLink = (sectionId?: string) => {
    if (sectionId) {
      onNavigate('home', sectionId);
    } else {
      onNavigate('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#151f52] text-white border-t border-white/10 mt-auto select-none">
      {/* Decorative Brand Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-[#283890] via-[#f0e846] to-[#ff740e]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 pb-24 sm:pb-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 mb-10">
          
          {/* Column 1: Logo & Company Description Placeholder (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <PustamLogo size="md" />
            
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed max-w-md font-mono">
              [ADD SHORT COMPANY DESCRIPTION — Modern B2B Paper Products & Notebook Manufacturer. High-volume converting, custom private labeling, and container export supply.]
            </p>

            {/* Quick Action Channels: WhatsApp & Call */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp</span>
              </a>

              <a
                href="tel:"
                className="px-3.5 py-2 rounded-lg bg-[#ff740e] hover:bg-[#ea6505] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Us</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="font-headline font-bold text-sm sm:text-base text-[#f0e846] tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-white/80">
              <li>
                <button
                  onClick={() => handleLink('products')}
                  className="hover:text-[#f0e846] transition-colors"
                >
                  Products
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleLink('factory')}
                  className="hover:text-[#f0e846] transition-colors"
                >
                  Factory
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('certifications')}
                  className="hover:text-[#f0e846] transition-colors"
                >
                  Certifications
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#f0e846] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="font-headline font-bold text-sm sm:text-base text-[#f0e846] tracking-wide">
              Contact Details
            </h3>
            <div className="space-y-2.5 text-xs sm:text-sm text-white/80 font-mono">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#f0e846] shrink-0 mt-0.5" />
                <span>[ADD PHONE NUMBER]</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#f0e846] shrink-0 mt-0.5" />
                <span>[ADD EMAIL ADDRESS]</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#ff740e] shrink-0 mt-0.5" />
                <span>[ADD FACTORY / OFFICE ADDRESS]</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} PUSTAM PAPER PRODUCTS. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[#f0e846] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
