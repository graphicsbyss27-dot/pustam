import React from 'react';
import { MapPin, Phone, Mail, Navigation, PhoneCall, ExternalLink } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { COMPANY_DETAILS } from '../data/websiteData';
import { WhatsAppIcon } from './WhatsAppIcon';

interface LocationSectionProps {
  onNavigate?: (page: 'home' | 'contact') => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onNavigate }) => {
  const { ref, isVisible } = useScrollReveal();
  const { contact, address } = COMPANY_DETAILS;

  return (
    <section
      id="location"
      ref={ref}
      className={`py-20 sm:py-28 bg-[#283890] relative overflow-hidden border-t border-white/10 scroll-mt-16 select-none reveal-fade-up ${
        isVisible ? 'reveal-visible' : ''
      }`}
    >
      {/* Ambient background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#151f52]/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Grid Layout (LEFT: Location Info | RIGHT: Map Embed) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* LEFT: Pustam Location Information (5 cols) */}
          <div className="lg:col-span-5 bg-[#151f52] rounded-3xl p-6 sm:p-8 md:p-10 border border-white/15 shadow-2xl flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Header */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-0.5 bg-[#f0e846]" />
                  <span className="text-[#f0e846] font-headline font-semibold text-xs uppercase tracking-widest">
                    LOCATION & DESK
                  </span>
                </div>
                <h2 className="font-headline font-bold text-3xl sm:text-4xl text-white tracking-tight">
                  Visit <span className="text-[#f0e846]">Pustam</span>
                </h2>
              </div>

              {/* Location Contact Details Block */}
              <div className="space-y-3.5">
                
                {/* Address */}
                <div className="p-4 rounded-2xl bg-[#1e2b70] border border-white/10 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#ff740e]">
                    <MapPin className="w-4 h-4" />
                    <span>Manufacturing Plant & Registered Office</span>
                  </div>
                  <p className="font-mono text-xs sm:text-sm text-white/90 leading-relaxed pt-1">
                    {address.line1},<br />
                    {address.line2},<br />
                    {address.city}, {address.state} {address.pincode}, {address.country}
                  </p>
                </div>

                {/* Phone */}
                <div className="p-3.5 rounded-xl bg-[#1e2b70] border border-white/10 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#283890] flex items-center justify-center text-[#f0e846] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="font-mono text-xs sm:text-sm text-white/90">
                    <span className="text-[11px] text-white/50 block">Phone & WhatsApp</span>
                    <a href={contact.phoneTel} className="hover:text-[#f0e846] transition-colors">{contact.phone}</a>
                  </div>
                </div>

                {/* Email */}
                <div className="p-3.5 rounded-xl bg-[#1e2b70] border border-white/10 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#283890] flex items-center justify-center text-[#f0e846] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="font-mono text-xs sm:text-sm text-white/90">
                    <span className="text-[11px] text-white/50 block">Email Enquiries</span>
                    <a href={contact.emailMailto} className="hover:text-[#f0e846] transition-colors break-all">{contact.email}</a>
                  </div>
                </div>

              </div>

              {/* Action Buttons: WhatsApp & Call Now */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-headline font-semibold text-xs flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow"
                >
                  <WhatsAppIcon className="w-4 h-4 rounded-sm object-contain shrink-0" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={contact.phoneTel}
                  className="py-3 px-4 rounded-xl bg-[#ff740e] hover:bg-[#ea6505] text-white font-headline font-semibold text-xs flex items-center justify-center gap-1.5 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
              </div>

            </div>

            {/* CTA: Get Directions */}
            <div className="pt-6 mt-6 border-t border-white/10">
              <a
                href={contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-[#f0e846] hover:bg-[#ff740e] text-[#283890] hover:text-white font-headline font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow flex items-center justify-center gap-2 group"
              >
                <span>Get Directions</span>
                <Navigation className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

          </div>

          {/* RIGHT: Map Visual (7 cols) */}
          <div className="lg:col-span-7 bg-[#151f52] rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl flex flex-col justify-between min-h-[360px] sm:min-h-[440px] relative overflow-hidden">
            
            {/* Map Container */}
            <div className="relative w-full h-full min-h-[300px] bg-[#1e2b70] rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center">
              
              {/* Map grid lines simulation */}
              <div className="absolute inset-0 bg-grid-pattern opacity-35" />
              
              {/* Stylized road / transport corridors */}
              <svg className="absolute inset-0 w-full h-full opacity-60" xmlns="http://www.w3.org/2000/svg">
                <path d="M 0,160 Q 220,110 440,190 T 880,150" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="8" />
                <path d="M 220,0 Q 300,200 360,420" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="6" />
                <path d="M 120,300 Q 440,210 700,310" fill="none" stroke="rgba(240,232,70,0.3)" strokeWidth="4" strokeDasharray="6 6" />
              </svg>

              {/* Pin Centerpiece with pulse */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff740e] opacity-75" />
                  <div className="w-14 h-14 rounded-full bg-[#ff740e] text-white flex items-center justify-center shadow-2xl border-4 border-white/40">
                    <MapPin className="w-7 h-7" />
                  </div>
                </div>
                <div className="w-10 h-2 bg-black/50 rounded-full blur-sm mt-2" />
              </div>

              {/* Location info badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#151f52]/95 backdrop-blur-md p-4 rounded-xl border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                <div>
                  <h4 className="font-headline font-bold text-sm text-white">
                    Pustam Paper Products
                  </h4>
                  <p className="text-xs font-mono text-white/70 mt-0.5">
                    Palghar Udyog Nagar, Palghar 401404, Maharashtra
                  </p>
                </div>

                <a
                  href={contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-[#f0e846] hover:text-[#283890] text-xs font-semibold text-white transition-colors flex items-center gap-1.5 shrink-0"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
