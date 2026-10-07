import React from 'react';
import { HeroSlider } from '../components/HeroSlider';
import { AboutSection } from '../components/AboutSection';
import { ProductsSection } from '../components/ProductsSection';
import { ClientsMarquee } from '../components/ClientsMarquee';
import { ExportGlobalSection } from '../components/ExportGlobalSection';
import { FactorySection } from '../components/FactorySection';
import { CertificationsSection } from '../components/CertificationsSection';
import { LocationSection } from '../components/LocationSection';
import { FinalCtaSection } from '../components/FinalCtaSection';

interface HomePageProps {
  onNavigate: (page: 'home' | 'contact', sectionId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full pt-14 sm:pt-16">
      
      {/* 2. Hero — 5-Image Slider */}
      <HeroSlider onNavigate={onNavigate} />

      {/* 3. Short About Us */}
      <AboutSection onNavigate={onNavigate} />

      {/* 4. Products / Services Horizontal Scrolling Rail */}
      <ProductsSection onNavigate={onNavigate} />

      {/* 5. Clients Logo Infinite Scrolling Bar */}
      <ClientsMarquee />

      {/* 6. Export / Global Reach Section */}
      <ExportGlobalSection onNavigate={onNavigate} />

      {/* 7. Factory & Manufacturing Section */}
      <FactorySection onNavigate={onNavigate} />

      {/* 8. Certifications Section (IEC / UDYAM / GST) */}
      <CertificationsSection />

      {/* 9. Location & Address Section */}
      <LocationSection onNavigate={() => onNavigate('contact')} />

      {/* 10. Final CTA Section */}
      <FinalCtaSection onNavigate={onNavigate} />

    </div>
  );
};
