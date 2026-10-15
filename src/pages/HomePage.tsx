import React from 'react';
import { HeroSlider } from '../components/HeroSlider';
import { AboutSection } from '../components/AboutSection';
import { ProductsSection } from '../components/ProductsSection';
import { WhiteLabelSection } from '../components/WhiteLabelSection';
import { FactorySection } from '../components/FactorySection';
import { ExportGlobalSection } from '../components/ExportGlobalSection';
import { CertificationsSection } from '../components/CertificationsSection';
import { FinalCtaSection } from '../components/FinalCtaSection';

interface HomePageProps {
  onNavigate: (page: 'home' | 'contact', sectionId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full pt-14 sm:pt-16">
      
      {/* 1. Hero — Product & Manufacturing Slider */}
      <HeroSlider onNavigate={onNavigate} />

      {/* 2. Short About Us */}
      <AboutSection onNavigate={onNavigate} />

      {/* 3. Products Horizontal Scrolling Rail (7 Required Categories) */}
      <ProductsSection onNavigate={onNavigate} />

      {/* 4. White-Label Manufacturing */}
      <WhiteLabelSection onNavigate={onNavigate} />

      {/* 5. Factory & Manufacturing Infrastructure */}
      <FactorySection onNavigate={onNavigate} />

      {/* 6. Export & Global Reach (Shipments Worldwide Globe) */}
      <ExportGlobalSection onNavigate={onNavigate} />

      {/* 7. Certifications & Registrations (Restored with Official Documents) */}
      <CertificationsSection />

      {/* 8. Final CTA Section */}
      <FinalCtaSection onNavigate={onNavigate} />

    </div>
  );
};
