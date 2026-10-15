import React, { useState } from 'react';
import { Globe, ShieldCheck, FileCheck2, ExternalLink, CheckCircle2 } from 'lucide-react';
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
      case 'IEC':   return <Globe className="w-6 h-6 text-[#283890]" />;
      case 'UDYAM': return <ShieldCheck className="w-6 h-6 text-[#ff740e]" />;
      case 'GST':   return <FileCheck2 className="w-6 h-6 text-[#283890]" />;
      default:      return <CheckCircle2 className="w-6 h-6 text-[#283890]" />;
    }
  };

  return (
    <section
      id="certifications"
      ref={ref}
      className={`py-20 sm:py-28 bg-[#f5f7ff] relative overflow-hidden scroll-mt-16 select-none reveal-fade-up ${
        isVisible ? 'reveal-visible' : ''
      }`}
    >
      {/* Decorative */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-96 bg-[#283890]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#283890] via-[#f0e846] to-[#ff740e]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-0.5 bg-[#283890]" />
            <span className="text-[#283890] font-headline font-semibold text-xs sm:text-sm uppercase tracking-widest">
              CERTIFICATIONS & REGISTRATIONS
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

        {/* 3 Certification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {certificatesData.map((cert) => (
            <div
              key={cert.code}
              onClick={() => setSelectedCert(cert)}
              className="p-7 rounded-3xl bg-white border border-[#283890]/10 hover:border-[#283890]/35 hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer group hover:-translate-y-1.5"
            >
              <div>
                {/* Header Icon & Code Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#f5f7ff] border border-[#283890]/15 flex items-center justify-center group-hover:bg-[#283890]/8 transition-colors group-hover:scale-105 group-hover:transition-transform">
                    {getIcon(cert.code)}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#283890]/8 border border-[#283890]/15 text-xs font-mono font-bold text-[#283890]">
                    {cert.code}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-headline font-bold text-xl text-[#151f52] mb-1.5 group-hover:text-[#283890] transition-colors">
                  {cert.title}
                </h3>

                {/* Authority */}
                <div className="text-xs text-slate-500 mb-4 italic">
                  {cert.authority}
                </div>

                {/* Reg Number Card */}
                <div className="p-4 rounded-xl bg-[#f5f7ff] border border-[#283890]/10 mb-4 group-hover:border-[#283890]/25 transition-colors space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                    Registration No:
                  </span>
                  <p className="font-mono text-xs sm:text-sm font-bold text-[#283890] tracking-wide break-all">
                    {cert.regNumber}
                  </p>
                  <span className="text-[11px] font-mono text-slate-500 block">
                    Issued: {cert.date}
                  </span>
                </div>

                <p className="text-xs text-slate-600 font-body leading-relaxed mb-4">
                  {cert.details}
                </p>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 group-hover:text-[#283890] transition-colors">
                <span className="font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#283890]" />
                  <span>View Official PDF</span>
                </span>
                <div className="w-6 h-6 rounded-lg bg-slate-100 flex items-center justify-center group-hover:bg-[#283890] group-hover:text-white transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
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
