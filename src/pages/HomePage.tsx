import React from 'react';
import { HeroSlider } from '../components/HeroSlider';
import { ManufacturingTicker } from '../components/ManufacturingTicker';
import { AboutSection } from '../components/AboutSection';
import { ProductsSection } from '../components/ProductsSection';
import { QualitySeamStrip } from '../components/QualitySeamStrip';
import { FactorySection } from '../components/FactorySection';
import { VisualDividerLogistics } from '../components/VisualDividerLogistics';
import { ExportGlobalSection } from '../components/ExportGlobalSection';
import { VisualDividerTrust } from '../components/VisualDividerTrust';
import { CertificationsSection } from '../components/CertificationsSection';
import { WhiteLabelSection } from '../components/WhiteLabelSection';

interface HomePageProps {
  onNavigate: (page: 'home' | 'contact', sectionId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">

      {/* 1. Hero — Product & Manufacturing Slider */}
      <HeroSlider onNavigate={onNavigate} />

      {/* 2. Short About Us */}
      <AboutSection onNavigate={onNavigate} />

      {/* 3. Products Horizontal Scrolling Rail (7 Required Categories) */}
      <ProductsSection onNavigate={onNavigate} />

      {/* Inter-Section Element: Live Industrial Capabilities Marquee Ticker (Moved downward) */}
      <ManufacturingTicker />

      {/* Inter-Section Element: Precision Technical Quality Seam */}
      <QualitySeamStrip />

      {/* 4. Factory & Manufacturing Infrastructure */}
      <FactorySection onNavigate={onNavigate} />

      {/* Pure Visual Design Breaker: Factory to Global Export Transit Conduit */}
      <VisualDividerLogistics />

      {/* 5. Export & Global Reach */}
      <ExportGlobalSection onNavigate={onNavigate} />

      {/* Pure Visual Design Breaker: Statutory Integrity & Foil Ribbon */}
      <VisualDividerTrust />

      {/* 6. Certifications & Registrations */}
      <CertificationsSection />

      {/* 7. White-Label Manufacturing — kept here, above footer CTA */}
      <WhiteLabelSection onNavigate={onNavigate} />

    </div>
  );
};
