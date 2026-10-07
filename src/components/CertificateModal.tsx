import React from 'react';
import { X, ShieldCheck, Globe, FileCheck2, FileText, CheckCircle2 } from 'lucide-react';

export interface CertificateModalData {
  code: string;
  title: string;
  authority: string;
  placeholderText: string;
  details: string;
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
              {data.code} — Official Document Preview
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
          <div className="p-6 sm:p-8 rounded-2xl bg-[#151f52] border-2 border-dashed border-[#f0e846]/40 text-center space-y-4">
            
            <div className="w-16 h-16 mx-auto rounded-2xl bg-[#283890] border border-white/15 flex items-center justify-center text-[#f0e846] shadow-lg">
              <FileText className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-mono font-bold text-[#ff740e] uppercase tracking-wider block mb-1">
                {data.code} REGISTRATION CERTIFICATE
              </span>
              <h4 className="font-headline font-bold text-xl sm:text-2xl text-white">
                {data.title}
              </h4>
              <p className="text-xs text-white/70 italic mt-1">
                Issuing Authority: {data.authority}
              </p>
            </div>

            {/* Editable Document Slot Message */}
            <div className="p-4 rounded-xl bg-black/40 border border-white/10 max-w-md mx-auto">
              <p className="font-mono text-xs text-[#f0e846]">
                {data.placeholderText}
              </p>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs text-white/80 pt-2">
              <CheckCircle2 className="w-4 h-4 text-[#f0e846]" />
              <span>Government of India Compliance Record</span>
            </div>

          </div>

          {/* Details Info */}
          <p className="text-xs text-white/75 leading-relaxed text-center font-mono">
            {data.details}
          </p>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#151f52] border-t border-white/10 flex items-center justify-between text-xs text-white/70">
          <span>Pustam Paper Products Verification</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#f0e846] hover:bg-[#ff740e] text-[#283890] hover:text-white font-headline font-semibold transition-colors"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
};
