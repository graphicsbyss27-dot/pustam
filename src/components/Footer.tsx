import React from 'react';
import { Phone, MessageSquare, MapPin, Mail, ArrowUp, ArrowRight, Globe, Award, Package } from 'lucide-react';
import { PustamLogo } from './PustamLogo';
import { COMPANY_DETAILS } from '../data/websiteData';

interface FooterProps {
  onNavigate: (page: 'home' | 'contact', sectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleLink = (sectionId?: string) => {
    if (sectionId) {
      onNavigate('home', sectionId);
    } else {
      onNavigate('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const { contact, address } = COMPANY_DETAILS;

  const quickLinks = [
    { label: 'About Us', id: 'about' },
    { label: 'Products', id: 'products' },
    { label: 'White-Label', id: 'white-label' },
    { label: 'Manufacturing', id: 'factory' },
    { label: 'Export', id: 'export' },
    { label: 'Certifications', id: 'certifications' },
  ];

  const credentials = [
    { icon: Award, label: 'GSTIN', value: COMPANY_DETAILS.gstin },
    { icon: Globe, label: 'IEC', value: 'BNZPC4332C' },
    { icon: Package, label: 'UDYAM', value: 'UDYAM-MH-17-0069099' },
  ];

  return (
    <footer className="bg-[#0d1538] text-white select-none relative overflow-hidden">

      {/* Top accent gradient stripe */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#283890] via-[#f0e846] to-[#ff740e]" />

      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[400px] bg-[#283890]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-[#ff740e]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8 relative z-10">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/8">

          {/* Col 1: Brand Block — 5 cols */}
          <div className="lg:col-span-5 space-y-5">
            <PustamLogo size="md" />

            <p className="text-[13px] sm:text-sm text-white/65 leading-relaxed max-w-sm font-body">
              White-label notebook manufacturer based in Palghar, Maharashtra. We partner with
              Indian brands, merchant exporters and international buyers to produce exercise books,
              registers, spiral notebooks and drawing books at industrial scale.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-white text-xs font-semibold border border-[#25D366]/30 hover:border-[#25D366] transition-all duration-200"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp</span>
              </a>
              <a
                href={contact.phoneTel}
                className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#ff740e]/15 hover:bg-[#ff740e] text-[#ff740e] hover:text-white text-xs font-semibold border border-[#ff740e]/30 hover:border-[#ff740e] transition-all duration-200"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Us</span>
              </a>
              <button
                onClick={() => onNavigate('contact')}
                className="group inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#283890]/50 hover:bg-[#283890] text-white/80 hover:text-white text-xs font-semibold border border-white/10 hover:border-[#f0e846]/40 transition-all duration-200"
              >
                <span>Send Enquiry</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Credentials */}
            <div className="flex flex-col gap-2 pt-2">
              {credentials.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-2 text-[11px] text-white/40 font-mono">
                  <Icon className="w-3 h-3 text-white/30 shrink-0" />
                  <span className="text-white/30">{label}:</span>
                  <span className="text-white/55">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links — 3 cols */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-headline font-bold text-sm sm:text-[15px] text-white tracking-wide uppercase">
              Navigate
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, id }) => (
                <li key={label}>
                  <button
                    onClick={() => handleLink(id)}
                    className="group flex items-center gap-2 text-xs sm:text-[13px] text-white/55 hover:text-[#f0e846] transition-colors duration-150 font-body"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-[#f0e846] group-hover:scale-125 transition-all duration-150 shrink-0" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Details — 4 cols */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-headline font-bold text-sm sm:text-[15px] text-white tracking-wide uppercase">
              Contact
            </h4>
            <div className="space-y-4">
              <a href={contact.phoneTel} className="group flex items-start gap-3 text-xs sm:text-[13px] text-white/55 hover:text-white transition-colors duration-150">
                <div className="w-7 h-7 rounded-lg bg-[#283890]/60 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#f0e846]/40 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#ff740e]" />
                </div>
                <div>
                  <div className="text-[10px] text-white/30 uppercase tracking-wider font-mono mb-0.5">Phone</div>
                  <div className="font-mono">{contact.phone}</div>
                </div>
              </a>

              <a href={contact.emailMailto} className="group flex items-start gap-3 text-xs sm:text-[13px] text-white/55 hover:text-white transition-colors duration-150">
                <div className="w-7 h-7 rounded-lg bg-[#283890]/60 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#f0e846]/40 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#f0e846]" />
                </div>
                <div>
                  <div className="text-[10px] text-white/30 uppercase tracking-wider font-mono mb-0.5">Email</div>
                  <div className="font-mono break-all">{contact.email}</div>
                </div>
              </a>

              <a href={contact.mapsUrl} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3 text-xs sm:text-[13px] text-white/55 hover:text-white transition-colors duration-150">
                <div className="w-7 h-7 rounded-lg bg-[#283890]/60 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#f0e846]/40 transition-colors">
                  <MapPin className="w-3.5 h-3.5 text-[#ff740e]" />
                </div>
                <div>
                  <div className="text-[10px] text-white/30 uppercase tracking-wider font-mono mb-0.5">Address</div>
                  <div className="font-body leading-relaxed">
                    {address.line1}, {address.line2},<br />
                    {address.city}, {address.state} {address.pincode},<br />
                    {address.country}
                  </div>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-7 text-[11px] text-white/30">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1 font-mono">
            <span>© {new Date().getFullYear()} Pustam Paper Products</span>
            <span className="hidden sm:inline text-white/15">|</span>
            <span>All rights reserved.</span>
            <span className="hidden sm:inline text-white/15">|</span>
            <span>Palghar, Maharashtra, India</span>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-1.5 text-white/35 hover:text-[#f0e846] transition-colors duration-200"
          >
            <span className="font-mono uppercase tracking-wider text-[10px]">Back to top</span>
            <div className="w-6 h-6 rounded-md bg-white/5 group-hover:bg-[#f0e846]/15 border border-white/10 group-hover:border-[#f0e846]/30 flex items-center justify-center transition-all duration-200">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
};
