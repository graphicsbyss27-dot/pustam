import React from 'react';
import { Phone, MessageSquare, MapPin, Mail, ArrowUp } from 'lucide-react';
import { PustamLogo } from './PustamLogo';
import { COMPANY_DETAILS } from '../data/websiteData';

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

  const { contact, address } = COMPANY_DETAILS;

  return (
    <footer className="bg-[#151f52] text-white border-t border-white/10 mt-auto select-none">
      {/* Decorative Brand Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-[#283890] via-[#f0e846] to-[#ff740e]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 pb-24 sm:pb-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 mb-10">
          
          {/* Column 1: Logo & Company Description (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <PustamLogo size="md" />
            
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed max-w-md font-body">
              White-label notebook manufacturer based in Palghar, India. We partner with Indian brands and international buyers to produce exercise books, registers, spiral notebooks and drawing books at scale.
            </p>

            {/* Quick Action Channels: WhatsApp & Call */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp</span>
              </a>

              <a
                href={contact.phoneTel}
                className="px-3.5 py-2 rounded-lg bg-[#ff740e] hover:bg-[#ea6505] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Us</span>
              </a>
            </div>

            {/* GSTIN & PAN */}
            <div className="pt-1 text-[11px] text-white/50 font-mono space-y-0.5">
              <div>GSTIN: {COMPANY_DETAILS.gstin}</div>
              <div>PAN: {COMPANY_DETAILS.pan}</div>
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
                  onClick={() => handleLink('white-label')}
                  className="hover:text-[#f0e846] transition-colors"
                >
                  White-Label
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('factory')}
                  className="hover:text-[#f0e846] transition-colors"
                >
                  Manufacturing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('export')}
                  className="hover:text-[#f0e846] transition-colors"
                >
                  Export
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
                <a href={contact.phoneTel} className="hover:text-[#f0e846] transition-colors">
                  {contact.phone}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#f0e846] shrink-0 mt-0.5" />
                <a href={contact.emailMailto} className="hover:text-[#f0e846] transition-colors break-all">
                  {contact.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#ff740e] shrink-0 mt-0.5" />
                <a href={contact.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#f0e846] transition-colors leading-relaxed">
                  {address.line1}, {address.line2}, {address.city}, {address.state} {address.pincode}, {address.country}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1 font-mono text-[11px] text-white/70">
            <span>© {new Date().getFullYear()} Pustam Paper Products</span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span>GSTIN: 27BNZPC4332C1Z1</span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span>IEC: BNZPC4332C</span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span>UDYAM: UDYAM-MH-17-0069099</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[#f0e846] transition-colors shrink-0"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
