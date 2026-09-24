import React, { useState } from 'react';
import { Logo } from './Logo';
import { Language, CONTACT_CONFIG } from '../data/content';
import { MessageCircle, Menu, X, Globe, PhoneCall } from 'lucide-react';

export type PageRoute = 'home' | 'about' | 'services' | 'portfolio' | 'contact';

interface HeaderProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  language: Language;
  onToggleLanguage: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  language,
  onToggleLanguage,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageRoute; labelEn: string; labelBm: string }[] = [
    { id: 'home', labelEn: 'Home', labelBm: 'Utama' },
    { id: 'about', labelEn: 'About', labelBm: 'Tentang' },
    { id: 'services', labelEn: 'Services', labelBm: 'Perkhidmatan' },
    { id: 'portfolio', labelEn: 'Portfolio', labelBm: 'Portfolio' },
    { id: 'contact', labelEn: 'Contact', labelBm: 'Hubungi' },
  ];

  const handleNavClick = (page: PageRoute) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E8DFD3] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Zone 1: Brand Wordmark (Single visual anchor) */}
          <div className="shrink-0">
            <button
              onClick={() => handleNavClick('home')}
              className="text-left focus-visible:ring-2 focus-visible:ring-[#C85A32] rounded-lg p-1 transition-opacity hover:opacity-90"
              aria-label="COSMOS BIZ CENTRE Home"
            >
              <Logo variant="header" showDescriptor={true} />
            </button>
          </div>

          {/* Zone 2: Navigation Links (5 main links, clean text with active states) */}
          <nav
            className="hidden lg:flex items-center space-x-1 xl:space-x-2"
            aria-label="Primary Navigation"
          >
            {navLinks.map((item) => {
              const isActive = currentPage === item.id;
              const label = language === 'en' ? item.labelEn : item.labelBm;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`touch-target px-4 py-2 text-[17px] font-medium transition-all rounded-md relative whitespace-nowrap focus-visible:ring-2 focus-visible:ring-[#C85A32] ${
                    isActive
                      ? 'text-[#C85A32] font-semibold'
                      : 'text-[#2C313A] hover:text-[#1E2229] hover:bg-[#F2ECE1]/60'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {label}
                  {isActive && (
                    <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#C85A32] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Actions (WhatsApp CTA + Compact EN/BM Switch) */}
          <div className="flex items-center space-x-2.5 sm:space-x-3.5">
            {/* Language Switch */}
            <button
              onClick={onToggleLanguage}
              className="touch-target px-3.5 py-2 border border-[#D5C9B8] bg-white/90 hover:bg-white text-[#2C313A] text-base font-semibold rounded-lg shadow-2xs transition-all flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-[#C85A32]"
              aria-label={`Switch language to ${language === 'en' ? 'Bahasa Melayu' : 'English'}`}
              title={`Switch language to ${language === 'en' ? 'Bahasa Melayu' : 'English'}`}
            >
              <Globe className="w-4 h-4 text-[#D97706]" />
              <span className={language === 'en' ? 'font-bold text-[#C85A32]' : 'text-[#484F5B]'}>
                EN
              </span>
              <span className="text-[#A59F95]">|</span>
              <span className={language === 'bm' ? 'font-bold text-[#C85A32]' : 'text-[#484F5B]'}>
                BM
              </span>
            </button>

            {/* Prominent WhatsApp Action Button */}
            <a
              href={`${CONTACT_CONFIG.whatsappBaseUrl}?text=${encodeURIComponent(
                language === 'en'
                  ? 'Hello COSMOS BIZ CENTRE, I would like to enquire about your business and documentation services.'
                  : 'Salam COSMOS BIZ CENTRE, saya ingin bertanya tentang perkhidmatan perniagaan dan dokumentasi.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="touch-target px-4 py-2.5 bg-[#128C7E] hover:bg-[#075E54] text-white text-[15px] sm:text-[16px] font-semibold rounded-lg shadow-sm hover:shadow transition-all flex items-center gap-2 whitespace-nowrap focus-visible:ring-2 focus-visible:ring-[#128C7E]"
              aria-label="WhatsApp Enquiry (opens in new tab)"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span className="hidden sm:inline">WhatsApp</span>
              <span className="sm:hidden">Chat</span>
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex lg:hidden items-center justify-center p-2 text-[#2C313A] hover:bg-[#EFE7DC] rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-[#C85A32]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E8DFD3] bg-[#FAF8F5] shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 pt-3 pb-6 space-y-1.5 max-w-md mx-auto">
            {navLinks.map((item) => {
              const isActive = currentPage === item.id;
              const label = language === 'en' ? item.labelEn : item.labelBm;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`touch-target w-full text-left px-4 py-3 rounded-lg text-lg font-medium transition-colors ${
                    isActive
                      ? 'bg-[#E5A93B]/15 text-[#C85A32] font-semibold border-l-4 border-[#C85A32]'
                      : 'text-[#2C313A] hover:bg-[#F2ECE1]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {label}
                </button>
              );
            })}

            {/* Mobile Contact Quick Actions */}
            <div className="pt-4 mt-2 border-t border-[#E8DFD3] grid grid-cols-2 gap-2">
              <a
                href={`tel:${CONTACT_CONFIG.primaryPhone}`}
                className="touch-target px-3 py-2.5 bg-white border border-[#D5C9B8] text-[#1E2229] rounded-lg text-base font-semibold flex items-center justify-center gap-1.5 shadow-2xs"
              >
                <PhoneCall className="w-4 h-4 text-[#C85A32]" />
                <span>Call Us</span>
              </a>
              <a
                href={`${CONTACT_CONFIG.whatsappBaseUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="touch-target px-3 py-2.5 bg-[#128C7E] text-white rounded-lg text-base font-semibold flex items-center justify-center gap-1.5 shadow-2xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
