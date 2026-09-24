import React, { useState, useEffect } from 'react';
import { Header, PageRoute } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ContactPage } from './pages/ContactPage';
import { Language, CONTACT_CONFIG } from './data/content';

export function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [targetServiceId, setTargetServiceId] = useState<string | undefined>(undefined);

  // Sync route with window hash on mount and hashchange
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').toLowerCase();
      if (['home', 'about', 'services', 'portfolio', 'contact'].includes(hash)) {
        setCurrentPage(hash as PageRoute);
      } else if (!hash) {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageRoute, serviceId?: string) => {
    setCurrentPage(page);
    window.location.hash = `#/${page}`;
    if (serviceId) {
      setTargetServiceId(serviceId);
      setTimeout(() => {
        const el = document.getElementById(serviceId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleToggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'bm' : 'en'));
  };

  // Sync document title dynamically with page and language
  useEffect(() => {
    const pageTitles: Record<PageRoute, { en: string; bm: string }> = {
      home: {
        en: 'COSMOS BIZ CENTRE | One-Stop Business & Documentation Services',
        bm: 'COSMOS BIZ CENTRE | Pusat Sehenti Perkhidmatan Perniagaan & Dokumentasi',
      },
      about: {
        en: 'About Us | COSMOS BIZ CENTRE',
        bm: 'Tentang Kami | COSMOS BIZ CENTRE',
      },
      services: {
        en: '12 Coordinated Services | COSMOS BIZ CENTRE',
        bm: '12 Perkhidmatan Bersepadu | COSMOS BIZ CENTRE',
      },
      portfolio: {
        en: 'Kosmos Group Experience Portfolio | COSMOS BIZ CENTRE',
        bm: 'Portfolio Pengalaman Kosmos Group | COSMOS BIZ CENTRE',
      },
      contact: {
        en: 'Contact | COSMOS BIZ CENTRE',
        bm: 'Hubungi | COSMOS BIZ CENTRE',
      },
    };

    document.title = pageTitles[currentPage][language];
  }, [currentPage, language]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1E2229]">
      {/* Shared Header Navigation */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        language={language}
        onToggleLanguage={handleToggleLanguage}
      />

      {/* Main Page Routing View */}
      <main className="flex-1 transition-opacity duration-200" id="main-content">
        {currentPage === 'home' && (
          <HomePage onNavigate={handleNavigate} language={language} />
        )}
        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} language={language} />
        )}
        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            language={language}
            initialServiceId={targetServiceId}
          />
        )}
        {currentPage === 'portfolio' && (
          <PortfolioPage onNavigate={handleNavigate} language={language} />
        )}
        {currentPage === 'contact' && (
          <ContactPage language={language} />
        )}
      </main>

      {/* Shared Accessible Footer */}
      <Footer onNavigate={handleNavigate} language={language} />

      {/* Persistent Floating WhatsApp Action */}
      <FloatingWhatsApp language={language} />
    </div>
  );
}

export default App;
