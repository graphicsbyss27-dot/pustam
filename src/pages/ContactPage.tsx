import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  PhoneCall,
  ArrowLeft,
  Sparkles,
  Navigation,
  ExternalLink,
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { COMPANY_DETAILS } from '../data/websiteData';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

interface ContactPageProps {
  onNavigate?: (page: 'home' | 'contact') => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const { ref, isVisible } = useScrollReveal();
  const { contact, address } = COMPANY_DETAILS;
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    productRequirement: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        fullName: '',
        companyName: '',
        email: '',
        phoneNumber: '',
        productRequirement: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <div
      ref={ref}
      className={`pt-24 sm:pt-28 pb-28 sm:pb-20 bg-gradient-to-b from-[#f8faff] via-white to-[#edf2fb] min-h-screen relative overflow-hidden select-none reveal-fade-up ${
        isVisible ? 'reveal-visible' : ''
      }`}
    >
      {/* Top brand tri-color highlight */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#283890] via-[#f0e846] to-[#ff740e]" />
      
      {/* Ambient background glows */}
      <div className="absolute top-20 right-10 w-[550px] h-[400px] bg-[#283890]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-[500px] h-[450px] bg-[#ff740e]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle background dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#283890 1.2px, transparent 1.2px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Back navigation */}
        <div className="mb-8">
          <button
            onClick={() => onNavigate && onNavigate('home')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-slate-200/80 text-xs sm:text-sm font-medium text-slate-600 hover:text-[#283890] hover:border-[#283890]/30 hover:shadow-sm transition-all group backdrop-blur-md"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Hero Header */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <div className="seq-item seq-delay-1 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#283890]/8 border border-[#283890]/15 backdrop-blur-md text-[#283890] text-xs font-semibold mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#283890] animate-pulse" />
            <span className="font-headline tracking-widest uppercase">GET IN TOUCH</span>
          </div>

          <h1 className="seq-item seq-delay-2 font-headline font-bold text-4xl sm:text-5xl md:text-6xl text-[#151f52] tracking-tight leading-[1.12] mb-4">
            Let's <span className="bg-gradient-to-r from-[#283890] via-[#1e2b70] to-[#ff740e] bg-clip-text text-transparent">Talk</span>.
          </h1>

          <p className="seq-item seq-delay-3 font-body text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
            Have a requirement, partnership opportunity or product enquiry? Get in touch with Pustam.
          </p>
        </div>

        {/* Quick CTA Cards (Interactive Frosted Tactile Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-12">

          {/* WhatsApp Card */}
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 sm:p-6 rounded-3xl bg-white/90 border border-emerald-500/25 hover:border-emerald-500/60 hover:shadow-xl hover:shadow-emerald-950/5 transition-all duration-300 hover:-translate-y-1 flex items-center justify-between group shadow-sm backdrop-blur-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-500/10 transition-colors" />

            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center p-2.5 shrink-0 group-hover:scale-110 transition-transform">
                <WhatsAppIcon className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-headline font-bold text-base sm:text-lg text-[#151f52] group-hover:text-emerald-700 transition-colors">
                  WhatsApp Us
                </h3>
                <p className="text-xs text-slate-500 font-body">
                  Direct message for quick inquiries &amp; product questions
                </p>
              </div>
            </div>

            <span className="relative z-10 px-4 py-2 rounded-xl bg-[#25D366] text-white font-headline font-semibold text-xs shrink-0 group-hover:bg-[#20ba59] transition-all duration-300 shadow-md shadow-emerald-500/20 group-hover:scale-105">
              Chat
            </span>
          </a>

          {/* Call Us Card */}
          <a
            href={contact.phoneTel}
            className="p-5 sm:p-6 rounded-3xl bg-white/90 border border-[#ff740e]/25 hover:border-[#ff740e]/60 hover:shadow-xl hover:shadow-orange-950/5 transition-all duration-300 hover:-translate-y-1 flex items-center justify-between group shadow-sm backdrop-blur-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff740e]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#ff740e]/10 transition-colors" />

            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#ff740e] shrink-0 group-hover:scale-110 transition-transform">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-headline font-bold text-base sm:text-lg text-[#151f52] group-hover:text-[#ff740e] transition-colors">
                  Call Us
                </h3>
                <p className="text-xs text-slate-500 font-body">
                  Speak directly with our production &amp; sales coordinators
                </p>
              </div>
            </div>

            <span className="relative z-10 px-4 py-2 rounded-xl bg-[#ff740e] text-white font-headline font-semibold text-xs shrink-0 group-hover:bg-[#ea6505] transition-all duration-300 shadow-md shadow-orange-500/20 group-hover:scale-105">
              Call
            </span>
          </a>
        </div>

        {/* Main 2-Column Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start mb-14">

          {/* LEFT: Contact Information & Palghar Plant Location (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">

            {/* Contact Info Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white/95 border border-slate-200/90 shadow-xl shadow-blue-950/5 backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#283890]/5 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 mb-4">
                <h2 className="font-headline font-bold text-xl sm:text-2xl text-[#151f52] mb-1">
                  Contact Information
                </h2>
                <p className="text-xs text-slate-500 font-body">
                  Direct commercial &amp; production channels
                </p>
              </div>

              <div className="space-y-2.5 relative z-10">

                {/* Phone */}
                <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100 hover:border-[#283890]/30 hover:bg-white hover:shadow-md transition-all duration-200 flex items-center gap-3.5 group">
                  <div className="w-9 h-9 rounded-xl bg-[#283890]/10 border border-[#283890]/15 flex items-center justify-center text-[#283890] shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-body font-semibold text-slate-400 block uppercase tracking-wider">Phone</span>
                    <a href={contact.phoneTel} className="text-xs sm:text-sm text-slate-800 font-body font-medium hover:text-[#283890] transition-colors">
                      {contact.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100 hover:border-[#283890]/30 hover:bg-white hover:shadow-md transition-all duration-200 flex items-center gap-3.5 group">
                  <div className="w-9 h-9 rounded-xl bg-[#283890]/10 border border-[#283890]/15 flex items-center justify-center text-[#283890] shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-body font-semibold text-slate-400 block uppercase tracking-wider">Email</span>
                    <a href={contact.emailMailto} className="text-xs sm:text-sm text-slate-800 font-body font-medium hover:text-[#283890] transition-colors break-all">
                      {contact.email}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100 hover:border-emerald-500/30 hover:bg-white hover:shadow-md transition-all duration-200 flex items-center gap-3.5 group">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center p-1.5 shrink-0 group-hover:scale-105 transition-transform">
                    <WhatsAppIcon className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <span className="text-[10px] font-body font-semibold text-slate-400 block uppercase tracking-wider">WhatsApp</span>
                    <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-slate-800 font-body font-medium hover:text-[#25D366] transition-colors">
                      {contact.whatsappDisplay}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="p-3 sm:p-3.5 rounded-2xl bg-slate-50/80 border border-slate-100 hover:border-[#ff740e]/30 hover:bg-white hover:shadow-md transition-all duration-200 flex items-start gap-3.5 group">
                  <div className="w-9 h-9 rounded-xl bg-[#ff740e]/10 border border-[#ff740e]/20 flex items-center justify-center text-[#ff740e] shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-body font-semibold text-slate-400 block uppercase tracking-wider">Address</span>
                    <p className="text-xs sm:text-sm text-slate-700 font-body leading-relaxed break-words">
                      {address.line1}, {address.line2}, {address.city}, {address.state} {address.pincode}, {address.country}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Location & Real Map Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white/95 border border-slate-200/90 shadow-xl shadow-blue-950/5 space-y-4 backdrop-blur-xl relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-headline font-bold text-lg sm:text-xl text-[#151f52]">
                    Plant &amp; Facility Location
                  </h3>
                  <span className="text-xs text-slate-500 font-body">Palghar Udyog Nagar Campus</span>
                </div>
                <div className="w-9 h-9 rounded-xl bg-[#283890]/8 flex items-center justify-center text-[#283890]">
                  <MapPin className="w-4 h-4" />
                </div>
              </div>

              {/* Real Interactive Google Map Embed */}
              <div className="relative h-44 sm:h-48 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100">
                <iframe
                  title="Pustam Paper Products Palghar Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.3039777933104!2d72.7663273!3d19.7093077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71dc1c1f28b57%3A0x6b8ee9ffb0a2fa0b!2sPalghar%20Udyog%20Nagar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Get Directions Button */}
              <a
                href={contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-apple-base btn-apple-primary w-full py-3.5 text-xs sm:text-sm tracking-wide gap-2 group"
              >
                <Navigation className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                <span>Get Directions in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-white/80" />
              </a>
            </div>

          </div>

          {/* RIGHT: Contact Form (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="p-7 sm:p-9 md:p-11 rounded-3xl bg-white/95 border border-slate-200/90 shadow-xl shadow-blue-950/5 backdrop-blur-xl relative overflow-hidden flex-1 flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#283890]/5 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 mb-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#283890]/8 text-[#283890] text-xs font-mono font-medium mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-[#ff740e]" />
                  <span>Direct OEM Manufacturing Desk</span>
                </div>
                <h2 className="font-headline font-bold text-2xl sm:text-3xl text-[#151f52] mb-2 tracking-tight">
                  Send an Enquiry
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 font-body">
                  Fill out your details and specifications below. Our manufacturing desk will respond promptly.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-[#f8faff] to-[#edf2fb] border border-[#283890]/20 text-center animate-fadeIn space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[#283890] to-[#151f52] text-[#f0e846] flex items-center justify-center shadow-xl">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="font-headline font-bold text-2xl text-[#151f52]">
                    Enquiry Sent Successfully!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto font-body leading-relaxed">
                    Thank you for contacting Pustam Paper Products. Our production and sales team will review your enquiry and get back to you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-apple-base btn-apple-primary px-7 py-3 text-xs tracking-wide"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-10 space-y-4 sm:space-y-5">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 font-body">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Rajesh Patel"
                        className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-slate-50 border border-slate-200/90 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#283890] focus:ring-2 focus:ring-[#283890]/15 transition-all font-body hover:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 font-body">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g. Apex Stationery Ltd"
                        className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-slate-50 border border-slate-200/90 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#283890] focus:ring-2 focus:ring-[#283890]/15 transition-all font-body hover:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 font-body">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="buyer@domain.com"
                        className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-slate-50 border border-slate-200/90 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#283890] focus:ring-2 focus:ring-[#283890]/15 transition-all font-body hover:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 font-body">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-slate-50 border border-slate-200/90 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#283890] focus:ring-2 focus:ring-[#283890]/15 transition-all font-body hover:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 font-body">
                      Product / Requirement
                    </label>
                    <input
                      type="text"
                      name="productRequirement"
                      value={formData.productRequirement}
                      onChange={handleChange}
                      placeholder="e.g. Exercise Notebooks, Registers, Copier Reams, Custom GSM..."
                      className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-slate-50 border border-slate-200/90 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#283890] focus:ring-2 focus:ring-[#283890]/15 transition-all font-body hover:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5 font-body">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please enter your quantity requirement, specifications, or inquiry details..."
                      className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-slate-50 border border-slate-200/90 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#283890] focus:ring-2 focus:ring-[#283890]/15 transition-all resize-none font-body hover:bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-apple-base btn-apple-primary w-full py-4 text-sm sm:text-base tracking-wide gap-2.5 group disabled:opacity-50 mt-2 shadow-lg"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-[#101738] border-t-transparent rounded-full animate-spin" />
                        Sending Enquiry...
                      </span>
                    ) : (
                      <>
                        <span>Send Direct Enquiry</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-slate-400 font-body pt-1">
                    We maintain commercial confidentiality. No third-party data sharing.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
