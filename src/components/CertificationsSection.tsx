import React from 'react';
import { Globe, ShieldCheck, FileCheck2, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const CertificationsSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  const certificates = [
    {
      code: 'IEC',
      title: 'Import Export Code',
      authority: 'DGFT, Govt. of India',
      pdfUrl: '/documents/pustam-iec-certificate.pdf',
    },
    {
      code: 'UDYAM',
      title: 'MSME UDYAM Registration',
      authority: 'Ministry of MSME, Govt. of India',
      pdfUrl: '/documents/pustam-udyam-certificate.pdf',
    },
    {
      code: 'GST',
      title: 'GST Registration',
      authority: 'GST Network, Govt. of India',
      pdfUrl: '/documents/pustam-gst-certificate.pdf',
    },
  ];

  const getIcon = (code: string) => {
    switch (code) {
      case 'IEC':   return <Globe className="w-7 h-7 text-[#283890]" />;
      case 'UDYAM': return <ShieldCheck className="w-7 h-7 text-[#ff740e]" />;
      case 'GST':   return <FileCheck2 className="w-7 h-7 text-[#283890]" />;
      default:      return <FileCheck2 className="w-7 h-7 text-[#283890]" />;
    }
  };

  const badgeClass = (code: string) =>
    code === 'UDYAM'
      ? 'text-[#ff740e] bg-[#ff740e]/10 border-[#ff740e]/20'
      : 'text-[#283890] bg-[#283890]/8 border-[#283890]/15';

  return (
    <section
      id="certifications"
      ref={ref}
      className={`py-20 sm:py-28 bg-[#f5f7ff] relative overflow-hidden scroll-mt-16 select-none reveal-fade-up ${
        isVisible ? 'reveal-visible' : ''
      }`}
    >
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-96 bg-[#283890]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#283890] via-[#f0e846] to-[#ff740e]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-0.5 bg-[#283890]" />
            <span className="text-[#283890] font-headline font-semibold text-xs sm:text-sm uppercase tracking-widest">
              CERTIFICATIONS &amp; REGISTRATIONS
            </span>
            <span className="w-6 h-0.5 bg-[#283890]" />
          </div>
          <h2 className="font-headline font-bold text-3xl sm:text-4xl md:text-5xl text-[#151f52] tracking-tight mb-3">
            Built on <span className="text-[#283890]">Trust</span>.
          </h2>
          <p className="font-body text-sm sm:text-base text-slate-600 leading-relaxed">
            Registered and compliant with Indian industrial authorities for legal trade transparency, domestic supply, and global container exports.
          </p>
        </div>

        {/* Cards — clicking opens PDF directly */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {certificates.map((cert) => (
            <a
              key={cert.code}
              href={cert.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-left p-6 rounded-2xl bg-white border border-[#283890]/10 hover:border-[#283890]/35 hover:shadow-xl transition-all duration-300 flex flex-col gap-4 cursor-pointer group hover:-translate-y-1.5 focus:outline-none focus:ring-2 focus:ring-[#283890]/30"
            >
              {/* Icon + Badge */}
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#f5f7ff] border border-[#283890]/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {getIcon(cert.code)}
                </div>
                <span className={`px-3 py-1 rounded-full border text-[11px] font-mono font-bold ${badgeClass(cert.code)}`}>
                  {cert.code}
                </span>
              </div>

              {/* Title + Authority */}
              <div className="flex-1">
                <h3 className="font-headline font-bold text-lg text-[#151f52] mb-1 group-hover:text-[#283890] transition-colors leading-tight">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-500 leading-snug">{cert.authority}</p>
              </div>

              {/* CTA */}
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#283890]/70 group-hover:text-[#283890] transition-colors pt-3 border-t border-slate-100">
                <span>View Document</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
