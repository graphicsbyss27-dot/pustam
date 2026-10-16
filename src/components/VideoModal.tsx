import React, { useState } from 'react';
import { X, Shield, Cpu, PackageCheck, Zap, Factory } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/websiteData';
import { WhatsAppIcon } from './WhatsAppIcon';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPhoto?: PhotoKey;
}

type PhotoKey = 'ruling' | 'cutting' | 'warehouse' | 'aerial';

interface PhotoInfo {
  url: string;
  label: string;
  tag: string;
  description: string;
}

const PHOTOS: Record<PhotoKey, PhotoInfo> = {
  ruling: {
    url: '/assets/factory-ruling-printing-line.jpg',
    label: 'Ruling & Printing',
    tag: 'FLEXO RULING & CONTINUOUS WEB UNWIND',
    description: 'High-speed web ruling cylinders running continuous reels with precise line margin accuracy and instant ink drying.',
  },
  cutting: {
    url: '/assets/factory-interior-cutting.jpg',
    label: 'Cutting Line',
    tag: 'PRECISION PAPER CUTTING & INSPECTION',
    description: 'Heavy-duty industrial paper guillotines converting paper blocks into uniform notebook stacks with active manual checks.',
  },
  warehouse: {
    url: '/assets/factory-warehouse-reels.jpg',
    label: 'Logistics Warehouse',
    tag: 'JUMBO REEL STAGING & DISPATCH BAY',
    description: 'High-ceiling raw material storage, forklift transit, and export container staging for worldwide shipment.',
  },
  aerial: {
    url: '/assets/factory-aerial-facility.jpg',
    label: 'Palghar Plant',
    tag: 'PALGHAR MANUFACTURING INFRASTRUCTURE',
    description: 'Our dedicated manufacturing premises in Palghar Udyog Nagar supporting 25 metric tonnes of daily paper conversion.',
  },
};

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, initialPhoto = 'ruling' }) => {
  const [activePhoto, setActivePhoto] = useState<PhotoKey>(initialPhoto);

  React.useEffect(() => {
    if (initialPhoto) {
      setActivePhoto(initialPhoto);
    }
  }, [initialPhoto, isOpen]);

  if (!isOpen) return null;

  const current = PHOTOS[activePhoto];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 select-none">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0f172a]/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#1e2b70] rounded-3xl border border-white/20 shadow-2xl z-10 animate-fadeIn">
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-5 sm:px-6 py-3.5 sm:py-4 border-b border-white/10 bg-[#151f52]/95 backdrop-blur-md">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#f0e846] animate-pulse" />
            <h3 className="font-headline font-bold text-base sm:text-lg text-white">
              Pustam Manufacturing Infrastructure & Production Floor
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

        {/* Display Container with Real Infrastructure Images */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
          {/* Active Real Photo */}
          <img
            src={current.url}
            alt={current.label}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#151f52]/45 to-black/40" />

          {/* Watermark badge */}
          <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md px-3 py-1 rounded-md border border-white/10 text-[11px] font-semibold text-[#f0e846]">
            {current.tag}
          </div>

          {/* Photo Switcher Pills */}
          <div className="absolute top-4 right-4 flex flex-wrap items-center gap-1.5 sm:gap-2 z-10">
            {(Object.keys(PHOTOS) as PhotoKey[]).map((key) => {
              const photo = PHOTOS[key];
              const isActive = activePhoto === key;
              return (
                <button
                  key={key}
                  onClick={() => setActivePhoto(key)}
                  className={`px-2.5 sm:px-3 py-1 rounded-lg text-[11px] sm:text-xs font-headline font-semibold transition-all ${
                    isActive
                      ? 'bg-[#f0e846] text-[#283890] shadow-md scale-105'
                      : 'bg-black/60 text-white/80 hover:text-white border border-white/15'
                  }`}
                >
                  {photo.label}
                </button>
              );
            })}
          </div>

          {/* Overlay Message & WhatsApp CTA */}
          <div className="relative z-10 text-center px-4 max-w-xl">
            <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-2.5 rounded-full bg-[#ff740e] text-white flex items-center justify-center shadow-2xl border-4 border-white/20">
              <Factory className="w-6 h-6" />
            </div>
            <h4 className="font-headline font-bold text-lg sm:text-2xl text-white mb-1.5">
              {current.label}
            </h4>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed mb-4 max-w-md mx-auto">
              {current.description}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              <a
                href={COMPANY_DETAILS.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-headline font-bold transition-all shadow-lg hover:scale-105"
              >
                <WhatsAppIcon className="w-4 h-4 rounded-sm object-contain shrink-0" />
                <span>Request Video Walkthrough on WhatsApp</span>
              </a>
              <a
                href={COMPANY_DETAILS.contact.emailMailto}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-headline font-semibold transition-colors border border-white/20"
              >
                <span>Email for Facility Audit</span>
              </a>
            </div>
          </div>
        </div>

        {/* Machine specs bar */}
        <div className="px-6 py-4 bg-[#151f52] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-white/80 border-t border-white/10">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#f0e846]" />
            <span>25 Tonnes/Day Converting</span>
          </div>
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-[#ff740e]" />
            <span>Automated Wire Binding</span>
          </div>
          <div className="flex items-center gap-2">
            <PackageCheck className="w-4 h-4 text-[#f0e846]" />
            <span>Moisture Seal Wrapping</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#ff740e]" />
            <span>100% Quality Inspection</span>
          </div>
        </div>
      </div>
    </div>
  );
};
