import React, { useState } from 'react';
import { Globe, ShieldCheck, FileCheck2, ExternalLink, CheckCircle2, FileText, Download } from 'lucide-react';
import { CertificateModal, CertificateModalData } from './CertificateModal';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const CertificationsSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();
  const [selectedCert, setSelectedCert] = useState<CertificateModalData | null>(null);

  const certificatesData: CertificateModalData[] = [
    {
      code: 'IEC',
      title: 'Import Export Code (IEC)',
      authority: 'Directorate General of Foreign Trade (DGFT), Govt. of India',
      regNumber: 'BNZPC4332C',
      date: '22/11/2022',
      pdfUrl: '/documents/pustam-iec-certificate.pdf',
      signatory: 'Rakesh Ankush Chavan',
      details: 'Registered for legal commercial export operations and overseas container trade from Indian seaports.',
    },
    {
      code: 'UDYAM',
      title: 'MSME UDYAM Registration',
      authority: 'Ministry of Micro, Small & Medium Enterprises, Govt. of India',
      regNumber: 'UDYAM-MH-17-0069099',
      date: '01/09/2022',
      pdfUrl: '/documents/pustam-udyam-certificate.pdf',
      signatory: 'Pustam Paper Products',
      details: 'Government recognized paper products converting enterprise (NIC 17093 & 18121) adhering to national industrial standards.',
    },
    {
      code: 'GST',
      title: 'GST Registration (REG-06)',
      authority: 'Goods and Services Tax Network, Govt. of India',
      regNumber: '27BNZPC4332C1Z1',
      date: '22/07/2022 (Amended 14/08/2024)',
      pdfUrl: '/documents/pustam-gst-certificate.pdf',
      signatory: 'Rakesh Ankush Chavan',
      details: 'Fully regularized Indian tax entity enabling compliant interstate commerce and transparent B2B domestic invoicing.',
    },
  ];

  const getIcon = (code: string) => {
    switch (code) {
      case 'IEC':
        return <Globe className="w-6 h-6 text-[#f0e846]" />;
      case 'UDYAM':
        return <ShieldCheck className="w-6 h-6 text-[#ff740e]" />;
      case 'GST':
        return <FileCheck2 className="w-6 h-6 text-[#f0e846]" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-[#f0e846]" />;
    }
  };

  return (
    <section
      id="certifications"
      ref={ref}
      className={`py-20 sm:py-28 bg-[#1e2b70] relative overflow-hidden border-t border-white/10 scroll-mt-16 select-none reveal-fade-up ${
        isVisible ? 'reveal-visible' : ''
      }`}
    >
      {/* Background Decor */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#f0e846]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-0.5 bg-[#f0e846]" />
            <span className="text-[#f0e846] font-headline font-semibold text-xs sm:text-sm uppercase tracking-widest">
              CERTIFICATIONS & REGISTRATIONS
            </span>
            <span className="w-6 h-0.5 bg-[#f0e846]" />
          </div>

          <h2 className="font-headline font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-3">
            Built on <span className="text-[#f0e846]">Trust</span>.
          </h2>

          <p className="font-body text-sm sm:text-base text-white/80 leading-relaxed">
            Registered and compliant with Indian industrial authorities for legal trade transparency, domestic supply, and global container exports.
          </p>
        </div>

        {/* 3 Clean Certification Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {certificatesData.map((cert) => (
            <div
              key={cert.code}
              onClick={() => setSelectedCert(cert)}
              className="p-7 rounded-3xl bg-[#151f52] border border-white/15 hover:border-[#f0e846]/60 transition-all duration-300 flex flex-col justify-between shadow-xl cursor-pointer group hover:-translate-y-1.5"
            >
              <div>
                {/* Header Icon & Code Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#283890] border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(cert.code)}
                  </div>

                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-bold text-[#f0e846]">
                    {cert.code}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-headline font-bold text-xl text-white mb-1.5 group-hover:text-[#f0e846] transition-colors">
                  {cert.title}
                </h3>

                {/* Authority */}
                <div className="text-xs text-white/60 mb-4 italic">
                  {cert.authority}
                </div>

                {/* Document Information Card with Registration Number */}
                <div className="p-4 rounded-xl bg-[#1e2b70] border border-white/10 mb-4 group-hover:border-[#f0e846]/40 transition-colors space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-white/60 block">
                    Registration No:
                  </span>
                  <p className="font-mono text-xs sm:text-sm font-bold text-[#f0e846] tracking-wide break-all">
                    {cert.regNumber}
                  </p>
                  <span className="text-[11px] font-mono text-white/70 block">
                    Issued: {cert.date}
                  </span>
                </div>

                <p className="text-xs text-white/75 font-body leading-relaxed mb-4">
                  {cert.details}
                </p>
              </div>

              {/* Bottom Action Trigger */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/75 group-hover:text-white">
                <span className="font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#f0e846]" />
                  <span>View Official PDF</span>
                </span>
                <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-[#f0e846] group-hover:text-[#283890] transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ExternalLink className="w-3.5 h-3.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Certificate Preview Modal */}
      <CertificateModal
        isOpen={Boolean(selectedCert)}
        onClose={() => setSelectedCert(null)}
        data={selectedCert}
      />
    </section>
  );
};
