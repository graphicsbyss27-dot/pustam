import React from 'react';
import { Globe, ShieldCheck, FileCheck2, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const CertificationsSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  const certificates = [
    {
      code: 'IEC',
      title: 'Import Export Code',
      authority: 'Directorate General of Foreign Trade (DGFT)',
      pdfUrl: '/documents/pustam-iec-certificate.pdf',
      color: '#283890',
    },
    {
      code: 'UDYAM',
      title: 'MSME UDYAM Registration',
      authority: 'Ministry of MSME, Govt. of India',
      pdfUrl: '/documents/pustam-udyam-certificate.pdf',
      color: '#ff740e',
    },
    {
      code: 'GST',
      title: 'GST Registration',
      authority: 'GST Network, Govt. of India',
      pdfUrl: '/documents/pustam-gst-certificate.pdf',
      color: '#0284c7',
    },
  ];

  const getIcon = (code: string) => {
    switch (code) {
      case 'IEC':   return <Globe className="w-6 h-6 text-[#283890]" />;
      case 'UDYAM': return <ShieldCheck className="w-6 h-6 text-[#ff740e]" />;
      case 'GST':   return <FileCheck2 className="w-6 h-6 text-[#0284c7]" />;
      default:      return <FileCheck2 className="w-6 h-6 text-[#283890]" />;
    }
  };

  return (
    <section
      id="certifications"
      ref={ref}
      className={`py-24 sm:py-32 bg-gradient-to-b from-white via-[#f8faff] to-[#edf2fb] relative overflow-hidden border-t border-slate-200/80 scroll-mt-16 select-none reveal-fade-up ${
        isVisible ? 'reveal-visible' : ''
      }`}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#283890]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#283890]/8 border border-[#283890]/15 backdrop-blur-md mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#283890] animate-pulse" />
            <span className="text-[#283890] font-headline font-bold text-xs tracking-widest uppercase">
              STATUTORY TRUST &amp; COMPLIANCE
            </span>
          </div>

          <h2 className="font-headline font-bold text-3xl sm:text-5xl md:text-6xl text-[#151f52] tracking-tight leading-[1.12]">
            Certified &amp; Registered <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#283890] via-[#1e2b70] to-[#ff740e] bg-clip-text text-transparent">
              Global Paper Partner
            </span>
          </h2>

          <p className="mt-5 font-body text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
            Fully accredited under Indian statutory authorities for corporate transparency, legal trade clearance, and frictionless container exports.
          </p>
        </div>

        {/* Cards — clicking opens PDF directly */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <a
              key={cert.code}
              href={cert.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-[#283890]/40 hover:shadow-2xl hover:shadow-blue-950/10 transition-all duration-300 flex flex-col justify-between cursor-pointer group hover:-translate-y-1.5 shadow-lg shadow-blue-950/5"
            >
              <div>
                {/* Icon + Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform"
                    style={{
                      backgroundColor: `${cert.color}12`,
                      border: `1px solid ${cert.color}25`,
                    }}
                  >
                    {getIcon(cert.code)}
                  </div>
                  <span
                    className="px-3 py-1 rounded-full border text-[11px] font-mono font-bold tracking-wider"
                    style={{
                      color: cert.color,
                      backgroundColor: `${cert.color}10`,
                      borderColor: `${cert.color}30`,
                    }}
                  >
                    {cert.code}
                  </span>
                </div>

                {/* Title + Authority */}
                <h3 className="font-headline font-bold text-lg sm:text-xl text-[#151f52] mb-2 group-hover:text-[#283890] transition-colors leading-tight">
                  {cert.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-body">{cert.authority}</p>
              </div>

              {/* CTA */}
              <div className="flex items-center justify-between text-xs font-bold text-[#283890] pt-6 mt-6 border-t border-slate-100 group-hover:text-[#ff740e] transition-colors">
                <span>View Official Certificate</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
