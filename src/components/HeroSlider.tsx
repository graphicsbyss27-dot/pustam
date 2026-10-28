import React from 'react';
import { Product3DCoverflow } from './Product3DCoverflow';

interface HeroSliderProps {
  onNavigate: (page: 'home' | 'contact', sectionId?: string) => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onNavigate }) => {
  return (
    <section
      className="relative w-full h-screen min-h-[620px] max-h-[1080px] flex items-center justify-center bg-[#070b20] overflow-hidden select-none pt-16 sm:pt-20 pb-4"
    >
      {/* Deep Ambient Cosmic Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c133a] via-[#070b20] to-[#040612] pointer-events-none" />

      {/* Clean & Minimal Ambient Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#283890]/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-[#f0e846]/5 rounded-full blur-[120px]" />
      </div>

      {/* Hero Content: Interactive 3D Coverflow with Horizontal Drag & Momentum */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full pt-6 sm:pt-8 pb-8 flex items-center justify-center">
        <Product3DCoverflow onNavigate={onNavigate} />
      </div>
    </section>
  );
};
