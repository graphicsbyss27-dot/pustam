import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Navigation,
  Send,
  CheckCircle2,
  PhoneCall,
  ArrowLeft,
  Sparkles,
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
      className={`pt-24 sm:pt-28 pb-28 sm:pb-20 bg-white min-h-screen relative overflow-hidden select-none reveal-fade-up ${
        isVisible ? 'reveal-visible' : ''
      }`}
    >
      {/* Subtle gradient wash — light and airy */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#283890] via-[#f0e846] to-[#ff740e]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#eef1ff_0%,_transparent_55%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#fff8e6]/80 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Back navigation */}
        <div className="mb-6">
          <button
            onClick={() => onNavigate && onNavigate('home')}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-500 hover:text-[#283890] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Hero Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#283890]/8 border border-[#283890]/20 text-[#283890] text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="font-headline tracking-wider uppercase">GET IN TOUCH</span>
          </div>

          <h1 className="font-headline font-bold text-4xl sm:text-5xl md:text-6xl text-[#151f52] tracking-tight leading-tight mb-4">
            Let's <span className="text-[#283890]">Talk</span>.
          </h1>

          <p className="font-body text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
            Have a requirement, partnership opportunity or product enquiry? Get in touch with Pustam.
          </p>
        </div>

        {/* Quick CTA Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">

          {/* WhatsApp */}
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-white border border-[#25D366]/30 hover:border-[#25D366]/60 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-between group shadow-sm"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 shrink-0 drop-shadow group-hover:scale-105 transition-transform">
                <WhatsAppIcon className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-headline font-bold text-base sm:text-lg text-[#151f52]">WhatsApp Us</h3>
                <p className="text-xs text-slate-500">Direct message for quick inquiries &amp; product questions</p>
              </div>
            </div>
            <span className="px-3.5 py-1.5 rounded-lg bg-[#25D366] text-white font-headline font-semibold text-xs shrink-0 group-hover:bg-[#20ba59] transition-colors">
              Chat
            </span>
          </a>

          {/* Call Us */}
          <a
            href={contact.phoneTel}
            className="p-5 rounded-2xl bg-white border border-[#ff740e]/30 hover:border-[#ff740e]/60 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-between group shadow-sm"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#ff740e] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-headline font-bold text-base sm:text-lg text-[#151f52]">Call Us</h3>
                <p className="text-xs text-slate-500">Speak directly with our production &amp; sales coordinators</p>
              </div>
            </div>
            <span className="px-3.5 py-1.5 rounded-lg bg-[#ff740e] text-white font-headline font-semibold text-xs shrink-0 group-hover:bg-[#ea6505] transition-colors">
              Call
            </span>
          </a>
        </div>

        {/* Main 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-14">

          {/* LEFT: Contact Info + Map */}
          <div className="lg:col-span-5 space-y-6">

            {/* Contact Info Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-5">
              <h2 className="font-headline font-bold text-xl sm:text-2xl text-[#151f52]">
                Contact Information
              </h2>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700 font-mono">

                {/* Phone */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#283890] flex items-center justify-center text-[#f0e846] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-sans">Phone</span>
                    {contact.phone}
                  </div>
                </div>

                {/* Email */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#283890] flex items-center justify-center text-[#f0e846] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-sans">Email</span>
                    <a href={contact.emailMailto} className="hover:text-[#283890] transition-colors break-all">
                      {contact.email}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                  <div className="w-8 h-8 shrink-0">
                    <WhatsAppIcon className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-sans">WhatsApp</span>
                    {contact.whatsappDisplay}
                  </div>
                </div>

                {/* Address */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#283890] flex items-center justify-center text-[#ff740e] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-sans">Address</span>
                    <span className="leading-relaxed">
                      {address.line1}, {address.line2}, {address.city}, {address.state} {address.pincode}, {address.country}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-headline font-bold text-lg text-[#151f52]">
                  Plant &amp; Office Location
                </h3>
                <a
                  href={contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-lg bg-[#283890]/8 hover:bg-[#283890] text-[#283890] hover:text-white text-xs font-semibold transition-colors flex items-center gap-1 shrink-0"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map iframe */}
              <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-slate-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.6!2d72.7785!3d19.6973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71a6e6b6a6b6b%3A0x0!2sPalghar%20Udyog%20Nagar!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Pustam Paper Products – Palghar Udyog Nagar"
                  className="absolute inset-0 w-full h-full"
                />
              </div>

              <a
                href={contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#283890] hover:bg-[#1e2b70] text-white font-headline font-bold text-xs sm:text-sm tracking-wide transition-all shadow flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Get Directions</span>
                <Navigation className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm">

              <div className="mb-6">
                <h2 className="font-headline font-bold text-2xl sm:text-3xl text-[#151f52] mb-2">
                  Send an Enquiry
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 font-body">
                  Fill out your details and specifications below. Our manufacturing desk will respond promptly.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-[#f5f7ff] border border-[#283890]/15 text-center animate-fadeIn space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#283890] text-white flex items-center justify-center shadow-xl">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="font-headline font-bold text-2xl text-[#151f52]">
                    Enquiry Sent Successfully!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto font-body">
                    Thank you for contacting Pustam Paper Products. Our production and sales team will review your enquiry and get back to you shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-[#ff740e] text-white font-headline font-semibold text-xs tracking-wide shadow"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">

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
                        className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#283890] focus:ring-1 focus:ring-[#283890]/20 transition-colors font-body"
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
                        className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#283890] focus:ring-1 focus:ring-[#283890]/20 transition-colors font-body"
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
                        className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#283890] focus:ring-1 focus:ring-[#283890]/20 transition-colors font-body"
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
                        className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#283890] focus:ring-1 focus:ring-[#283890]/20 transition-colors font-body"
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
                      className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#283890] focus:ring-1 focus:ring-[#283890]/20 transition-colors font-body"
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
                      className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-[#283890] focus:ring-1 focus:ring-[#283890]/20 transition-colors resize-none font-body"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 sm:py-4 rounded-xl bg-[#283890] hover:bg-[#ff740e] text-white font-headline font-bold text-sm sm:text-base tracking-wide transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-xl flex items-center justify-center gap-2 group disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending Enquiry...
                      </span>
                    ) : (
                      <>
                        <span>Send Enquiry</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-slate-400 font-body">
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
