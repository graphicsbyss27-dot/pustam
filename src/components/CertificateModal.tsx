import React from 'react';
import { X, ShieldCheck, Globe, FileCheck2, FileText, CheckCircle2, ExternalLink, Calendar, User, MapPin } from 'lucide-react';

export interface CertificateModalData {
  code: string;
  title: string;
  authority: string;
  details: string;
  regNumber: string;
  date: string;
  pdfUrl: string;
  signatory?: string;
  subType?: string;
  address?: string;
}

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: CertificateModalData | null;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  data,
}) => {
  if (!isOpen || !data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 select-none">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0f172a]/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-[#1e2b70] rounded-3xl border border-white/20 shadow-2xl z-10 animate-fadeIn">
        
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-5 sm:px-6 py-3.5 sm:py-4 border-b border-white/10 bg-[#151f52]/95 backdrop-blur-md">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#f0e846] animate-pulse" />
            <h3 className="font-headline font-bold text-base sm:text-lg text-white">
              {data.code} — Official Government Registration
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Document Canvas */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Document Framing Box */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#151f52] border border-white/15 space-y-5 text-left">
            
            {/* Top Badge & Code */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#283890] border border-white/15 flex items-center justify-center text-[#f0e846] shadow-md">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold text-[#ff740e] uppercase tracking-wider block">
                    GOVERNMENT OF INDIA
                  </span>
                  <h4 className="font-headline font-bold text-lg sm:text-xl text-white">
                    {data.title}
                  </h4>
                </div>
              </div>

              <span className="px-3 py-1 rounded-full bg-[#f0e846]/10 border border-[#f0e846]/30 text-xs font-mono font-bold text-[#f0e846]">
                {data.code}
              </span>
            </div>

            {/* Official Registration Number Card */}
            <div className="p-4 rounded-xl bg-[#0f172a]/70 border border-white/15 space-y-1">
              <div className="text-[11px] font-mono text-white/60 uppercase tracking-wider">
                Registration / Identification Number:
              </div>
              <div className="font-mono font-bold text-base sm:text-lg text-[#f0e846] tracking-wide break-all">
                {data.regNumber}
              </div>
            </div>

            {/* Metadata Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs text-white/85">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-[10px] uppercase font-mono text-white/50 block">Issuing Authority</span>
                <span className="font-medium text-white">{data.authority}</span>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-[10px] uppercase font-mono text-white/50 block">Registration / Effective Date</span>
                <span className="font-medium text-white">{data.date}</span>
              </div>

              {data.signatory && (
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-[10px] uppercase font-mono text-white/50 block">Authorized Signatory / Legal Name</span>
                  <span className="font-medium text-white">{data.signatory}</span>
                </div>
              )}

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-[10px] uppercase font-mono text-white/50 block">Manufacturing Location</span>
                <span className="font-medium text-white">Palghar, Maharashtra, India (401404)</span>
              </div>
            </div>

            {/* Scope / Details */}
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
              <p className="text-xs text-white/75 leading-relaxed font-body">
                {data.details}
              </p>
            </div>

            {/* Verification status bar */}
            <div className="flex items-center gap-2 text-xs text-[#f0e846] font-medium pt-1">
              <CheckCircle2 className="w-4 h-4 text-[#f0e846]" />
              <span>Verified Government Registration Certificate on File</span>
            </div>

          </div>

          {/* Action Button: View PDF only */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={data.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 rounded-xl bg-[#f0e846] hover:bg-[#ff740e] text-[#283890] hover:text-white font-headline font-bold text-xs sm:text-sm text-center transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <ExternalLink className="w-4 h-4" />
              <span>View Official Certificate (PDF)</span>
            </a>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#151f52] border-t border-white/10 flex items-center justify-between text-xs text-white/70">
          <span>Pustam Paper Products — Palghar, Maharashtra</span>
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-headline transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
