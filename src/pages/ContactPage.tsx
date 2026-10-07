import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Navigation,
  Send,
  CheckCircle2,
  PhoneCall,
  ArrowLeft,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ContactPageProps {
  onNavigate?: (page: 'home' | 'contact') => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const { ref, isVisible } = useScrollReveal();
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

    // Simulate clean form submission
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
      className={`pt-24 sm:pt-28 pb-28 sm:pb-20 bg-[#283890] min-h-screen relative overflow-hidden select-none reveal-fade-up ${
        isVisible ? 'reveal-visible' : ''
      }`}
    >
      {/* Background Decor */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#1e2b70]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-[#151f52]/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb / Back to Home navigation */}
        <div className="mb-6">
          <button
            onClick={() => onNavigate && onNavigate('home')}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-white/70 hover:text-[#f0e846] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Contact Hero Section */}
        <div className="max-w-3xl mb-12">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f0e846]/15 border border-[#f0e846]/30 text-[#f0e846] text-xs font-semibold mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#f0e846]" />
            <span className="font-headline tracking-wider uppercase">
              GET IN TOUCH
            </span>
          </div>

          {/* Heading (Fredoka) */}
          <h1 className="font-headline font-bold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight mb-4">
            Let's <span className="text-[#f0e846]">Talk</span>.
          </h1>

          {/* Supporting Text (Be Vietnam) */}
          <p className="font-body text-base sm:text-lg text-white/85 leading-relaxed max-w-2xl">
            Have a requirement, partnership opportunity or product enquiry? Get in touch with Pustam.
          </p>
        </div>

        {/* Action Buttons: WhatsApp Us + Call Us */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          
          {/* WhatsApp Us Button Card */}
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-[#25D366]/20 border border-[#25D366]/40 hover:bg-[#25D366]/30 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-between group shadow-lg"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                <MessageSquare className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h3 className="font-headline font-bold text-base sm:text-lg text-white">
                  WhatsApp Us
                </h3>
                <p className="text-xs text-white/75">
                  Direct message for quick inquiries & product questions
                </p>
              </div>
            </div>
            <span className="px-3.5 py-1.5 rounded-lg bg-[#25D366] text-white font-headline font-semibold text-xs shrink-0 group-hover:bg-[#20ba59] transition-colors">
              Chat
            </span>
          </a>

          {/* Call Us Button Card */}
          <a
            href="tel:"
            className="p-5 rounded-2xl bg-[#ff740e]/20 border border-[#ff740e]/40 hover:bg-[#ff740e]/30 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-between group shadow-lg"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#ff740e] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-headline font-bold text-base sm:text-lg text-white">
                  Call Us
                </h3>
                <p className="text-xs text-white/75">
                  Speak directly with our production & sales coordinators
                </p>
              </div>
            </div>
            <span className="px-3.5 py-1.5 rounded-lg bg-[#ff740e] text-white font-headline font-semibold text-xs shrink-0 group-hover:bg-[#ea6505] transition-colors">
              Call
            </span>
          </a>

        </div>

        {/* Main 2-Column Responsive Layout (Desktop: Left Info / Right Form | Mobile: Stacked) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-14">
          
          {/* LEFT COLUMN: Contact Information & Location Map (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Information Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#151f52] border border-white/15 shadow-xl space-y-5">
              <h2 className="font-headline font-bold text-xl sm:text-2xl text-white">
                Contact Information
              </h2>

              <div className="space-y-3.5 text-xs sm:text-sm text-white/85 font-mono">
                
                {/* Phone */}
                <div className="p-3.5 rounded-xl bg-[#1e2b70] border border-white/10 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#283890] flex items-center justify-center text-[#f0e846] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-white/50 block">Phone</span>
                    [ADD PHONE NUMBER]
                  </div>
                </div>

                {/* Email */}
                <div className="p-3.5 rounded-xl bg-[#1e2b70] border border-white/10 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#283890] flex items-center justify-center text-[#f0e846] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-white/50 block">Email</span>
                    [ADD EMAIL ADDRESS]
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="p-3.5 rounded-xl bg-[#1e2b70] border border-white/10 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#283890] flex items-center justify-center text-[#25D366] shrink-0">
                    <MessageSquare className="w-4 h-4 fill-current" />
                  </div>
                  <div>
                    <span className="text-[11px] text-white/50 block">WhatsApp</span>
                    [ADD WHATSAPP NUMBER]
                  </div>
                </div>

                {/* Address */}
                <div className="p-3.5 rounded-xl bg-[#1e2b70] border border-white/10 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#283890] flex items-center justify-center text-[#ff740e] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-white/50 block">Address</span>
                    <span className="leading-relaxed">
                      [ADD FULL ADDRESS — Manufacturing Plant & Registered Office, City, State, PIN Code, India]
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Location & Map Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#151f52] border border-white/15 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-headline font-bold text-lg text-white">
                  Plant & Office Location
                </h3>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-lg bg-white/10 hover:bg-[#f0e846] hover:text-[#283890] text-xs font-semibold text-white transition-colors flex items-center gap-1 shrink-0"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Replaceable Map Container */}
              <div className="relative h-48 sm:h-56 bg-[#1e2b70] rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                
                {/* Visual Pin */}
                <div className="relative z-10 flex flex-col items-center animate-bounce">
                  <div className="w-12 h-12 rounded-full bg-[#ff740e] text-white flex items-center justify-center shadow-xl border-4 border-white/40">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="w-8 h-1.5 bg-black/40 rounded-full blur-sm mt-1" />
                </div>

                {/* Map placeholder banner */}
                <div className="absolute bottom-3 left-3 right-3 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-center">
                  <p className="font-mono text-[11px] text-[#f0e846]">
                    [ADD GOOGLE MAP EMBED]
                  </p>
                </div>
              </div>

              {/* Get Directions Button */}
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#f0e846] hover:bg-[#ff740e] text-[#283890] hover:text-white font-headline font-bold text-xs sm:text-sm tracking-wide transition-all shadow flex items-center justify-center gap-2 group"
              >
                <span>Get Directions</span>
                <Navigation className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN: Clean Professional Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-[#151f52] border border-white/15 shadow-2xl">
              
              <div className="mb-6">
                <h2 className="font-headline font-bold text-2xl sm:text-3xl text-white mb-2">
                  Send an Enquiry
                </h2>
                <p className="text-xs sm:text-sm text-white/75 font-body">
                  Fill out your details and specifications below. Our manufacturing desk will respond promptly.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-[#1e2b70] border border-[#f0e846]/60 text-center animate-fadeIn space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#f0e846] text-[#283890] flex items-center justify-center shadow-xl">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="font-headline font-bold text-2xl text-white">
                    Enquiry Sent Successfully!
                  </h3>
                  <p className="text-sm text-white/80 max-w-md mx-auto font-body">
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
                  
                  {/* Row 1: Full Name * & Company Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-1.5 font-body">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Rajesh Patel"
                        className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#1e2b70] border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#f0e846] transition-colors font-body"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-1.5 font-body">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g. Apex Stationery Ltd"
                        className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#1e2b70] border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#f0e846] transition-colors font-body"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email * & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-1.5 font-body">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="buyer@domain.com"
                        className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#1e2b70] border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#f0e846] transition-colors font-body"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-1.5 font-body">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#1e2b70] border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#f0e846] transition-colors font-body"
                      />
                    </div>
                  </div>

                  {/* Row 3: Product / Requirement */}
                  <div>
                    <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-1.5 font-body">
                      Product / Requirement
                    </label>
                    <input
                      type="text"
                      name="productRequirement"
                      value={formData.productRequirement}
                      onChange={handleChange}
                      placeholder="e.g. Exercise Notebooks, Registers, Copier Reams, Custom GSM..."
                      className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#1e2b70] border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#f0e846] transition-colors font-body"
                    />
                  </div>

                  {/* Row 4: Message * */}
                  <div>
                    <label className="block text-xs font-semibold text-white/90 uppercase tracking-wider mb-1.5 font-body">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please enter your quantity requirement, specifications, or inquiry details..."
                      className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#1e2b70] border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#f0e846] transition-colors resize-none font-body"
                    />
                  </div>

                  {/* Submit Button: Send Enquiry */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 sm:py-4 rounded-xl bg-[#f0e846] hover:bg-[#ff740e] text-[#283890] hover:text-white font-headline font-bold text-sm sm:text-base tracking-wide transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-xl flex items-center justify-center gap-2 group disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-[#283890] border-t-transparent rounded-full animate-spin" />
                        Sending Enquiry...
                      </span>
                    ) : (
                      <>
                        <span>Send Enquiry</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-white/60 font-body">
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
