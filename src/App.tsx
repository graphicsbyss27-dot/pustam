import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';

export function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'contact'>('home');
  const [isLoading, setIsLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const timerRef = useRef<any>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.startsWith('#contact')) {
        setCurrentPage('contact');
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress(Math.min(Math.max((scrollTop / docHeight) * 100, 0), 100));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerLoader = (onLoaded?: () => void) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsLoading(true);
    setLoadingProgress(35);

    setTimeout(() => {
      setLoadingProgress(78);
    }, 120);

    setTimeout(() => {
      setLoadingProgress(100);
      if (onLoaded) onLoaded();
    }, 280);

    timerRef.current = setTimeout(() => {
      setIsLoading(false);
      setLoadingProgress(0);
    }, 550);
  };

  const handleNavigate = (page: 'home' | 'contact', sectionId?: string) => {
    triggerLoader(() => {
      if (sectionId) {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          el.classList.remove('section-nav-loaded');
          void el.offsetWidth; // trigger reflow
          el.classList.add('section-nav-loaded');
          setTimeout(() => el.classList.remove('section-nav-loaded'), 1400);
        }
      }
    });

    setCurrentPage(page);
    if (page === 'contact') {
      window.location.hash = 'contact';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (sectionId) {
        window.location.hash = sectionId;
      } else {
        window.location.hash = '';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#283890] text-white flex flex-col justify-between selection:bg-[#f0e846] selection:text-[#283890]">
      {/* Persistent Top Scroll Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] z-[99990] pointer-events-none overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#283890] via-[#ff740e] to-[#f0e846] transition-all duration-150 ease-out shadow-[0_0_10px_rgba(255,116,14,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Dynamic Top Section / Page Loading Bar */}
      {isLoading && (
        <div
          className="fixed top-0 left-0 right-0 h-[3.5px] z-[99999] pointer-events-none transition-opacity duration-300 overflow-hidden"
          style={{ opacity: loadingProgress === 100 ? 0.3 : 1 }}
        >
          <div
            className="h-full bg-gradient-to-r from-[#283890] via-[#ff740e] to-[#f0e846] shadow-[0_0_14px_rgba(255,116,14,0.9),0_0_24px_rgba(240,232,70,0.8)] transition-all duration-300 ease-out"
            style={{ width: `${loadingProgress}%` }}
          />
        </div>
      )}

      {/* 4. Navigation (Sticky on Scroll) */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Content */}
      <main className="flex-1 w-full">
        {currentPage === 'home' ? (
          <HomePage onNavigate={handleNavigate} />
        ) : (
          <ContactPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Floating Action Buttons (WhatsApp, Call, Scroll to Top) */}
      <FloatingActions />

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
