import React from 'react';
import { HeroSlider } from '../components/HeroSlider';
import { AboutSection } from '../components/AboutSection';
import { ProductsSection } from '../components/ProductsSection';
import { FactorySection } from '../components/FactorySection';
import { ExportGlobalSection } from '../components/ExportGlobalSection';
import { CertificationsSection } from '../components/CertificationsSection';
import { WhiteLabelSection } from '../components/WhiteLabelSection';
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

      {/* 4. Factory & Manufacturing Infrastructure */}
      <FactorySection onNavigate={onNavigate} />

      {/* 5. Export & Global Reach */}
      <ExportGlobalSection onNavigate={onNavigate} />

      {/* 6. Certifications & Registrations */}
      <CertificationsSection />

      {/* 7. White-Label Manufacturing — kept here, above footer CTA */}
      <WhiteLabelSection onNavigate={onNavigate} />

      {/* 8. Final CTA Section */}
      <FinalCtaSection onNavigate={onNavigate} />

    </div>
  );
};
