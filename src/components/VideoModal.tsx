import React from 'react';
import { X, Play, Shield, Cpu, PackageCheck, Zap } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0f172a]/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#1e2b70] rounded-2xl border border-white/20 shadow-2xl z-10 animate-fadeIn">
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-5 sm:px-6 py-3.5 sm:py-4 border-b border-white/10 bg-[#151f52]/95 backdrop-blur-md">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff740e] animate-pulse" />
            <h3 className="font-headline font-bold text-base sm:text-lg text-white">
              Pustam Factory Converting & Production Tour
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

        {/* Video Player Display Container */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
          {/* Background Factory Loop / Mock Player */}
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
            alt="Factory machinery line"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-black/40" />

          {/* Player Overlay Message */}
          <div className="relative z-10 text-center px-4 max-w-lg">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-full bg-[#ff740e] text-white flex items-center justify-center shadow-2xl border-4 border-white/20">
              <Play className="w-8 h-8 fill-current ml-1" />
            </div>
            <h4 className="font-headline font-bold text-xl sm:text-2xl text-white mb-2">
              High-Speed Reel Converting & Automatic Binding
            </h4>
            <p className="text-xs sm:text-sm text-white/80 font-mono bg-black/50 px-3 py-1.5 rounded-md border border-white/10 inline-block">
              [ADD FACTORY VIDEO LINK / EMBED OR MP4 FILE]
            </p>
          </div>

          {/* Watermark badge */}
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-md border border-white/10 text-[11px] font-semibold text-[#f0e846]">
            PUSTAM CONVERTING FACILITY
          </div>
        </div>

        {/* Machine specs bar */}
        <div className="px-6 py-4 bg-[#151f52] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-white/80 border-t border-white/10">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#f0e846]" />
            <span>High-Speed Ruling</span>
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
