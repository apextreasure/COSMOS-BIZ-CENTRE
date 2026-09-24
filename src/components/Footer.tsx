import React from 'react';
import { Logo } from './Logo';
import { Language, CONTACT_CONFIG, SERVICES_DATA } from '../data/content';
import { PageRoute } from './Header';
import { Phone, Mail, MessageCircle, ExternalLink, ShieldCheck, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, language }) => {
  const isEn = language === 'en';

  const quickLinks: { id: PageRoute; labelEn: string; labelBm: string }[] = [
    { id: 'home', labelEn: 'Home', labelBm: 'Laman Utama' },
    { id: 'about', labelEn: 'About Company', labelBm: 'Tentang Syarikat' },
    { id: 'services', labelEn: 'All 12 Services', labelBm: 'Semua 12 Perkhidmatan' },
    { id: 'portfolio', labelEn: 'Selected Portfolio', labelBm: 'Portfolio Pilihan' },
    { id: 'contact', labelEn: 'Contact', labelBm: 'Hubungi' },
  ];

  return (
    <footer className="bg-[#1A1D24] text-white pt-16 pb-12 border-t border-[#2D333F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Tagline (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Logo variant="footer" showDescriptor={true} />
            <p className="text-amber-200 text-lg font-medium italic pt-1">
              {isEn ? CONTACT_CONFIG.taglineEn : CONTACT_CONFIG.taglineBm}
            </p>
            <p className="text-[#A3ABB8] text-[16px] leading-relaxed max-w-md">
              {isEn
                ? 'A convenient centre helping individuals, entrepreneurs, and businesses with business setup, official documentation, administration, and service coordination.'
                : 'Pusat sehenti yang memudahkan urusan individu, usahawan, dan syarikat dalam pendaftaran perniagaan, dokumentasi rasmi, pentadbiran, serta penyelarasan perkhidmatan.'}
            </p>

            {/* Profile Attribution Notice */}
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-sm sm:text-[15px] text-[#A8B2C1] leading-relaxed">
              <span className="font-bold text-amber-300 block mb-1">
                {isEn ? 'Attribution Notice:' : 'Nota Rujukan:'}
              </span>
              {isEn
                ? 'Historical projects, collective experience (>20 years), and figures are referenced from the Kosmos Group of Companies profile (including Kosmosjuta Ventures Sdn Bhd, Agensi Pekerjaan Cosmosworks Sdn Bhd, and Raztech Engineering Sdn Bhd).'
                : 'Projek lampau, pengalaman kolektif (>20 tahun), dan data rujukan diambil daripada profil Kosmos Group of Companies (termasuk Kosmosjuta Ventures Sdn Bhd, Agensi Pekerjaan Cosmosworks Sdn Bhd, dan Raztech Engineering Sdn Bhd).'}
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-semibold text-lg font-display tracking-tight border-b border-white/10 pb-2">
              {isEn ? 'Navigation' : 'Navigasi'}
            </h4>
            <ul className="space-y-1">
              {quickLinks.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      onNavigate(item.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-[#D1D5DB] hover:text-[#E5A93B] text-[16px] transition-colors flex items-center gap-2 py-1.5 text-left w-full focus-visible:ring-1 focus-visible:ring-amber-400 rounded"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-[#C85A32] shrink-0" />
                    <span>{isEn ? item.labelEn : item.labelBm}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services Summary (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-semibold text-lg font-display tracking-tight border-b border-white/10 pb-2">
              {isEn ? 'Services' : 'Perkhidmatan'}
            </h4>
            <ul className="space-y-1.5 text-[15px] text-[#C2C9D6]">
              {SERVICES_DATA.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => {
                      onNavigate('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-amber-200 text-left transition-colors truncate max-w-full block py-1 font-medium"
                  >
                    {isEn ? service.titleEn : service.titleBm}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    onNavigate('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-amber-300 hover:text-amber-200 font-bold text-sm flex items-center gap-1 pt-1"
                >
                  <span>{isEn ? '+ View All 12 Services' : '+ Lihat Semua 12 Perkhidmatan'}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Direct Channels (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-semibold text-lg font-display tracking-tight border-b border-white/10 pb-2">
              {isEn ? 'Direct Contact' : 'Hubungi Terus'}
            </h4>
            <div className="space-y-3.5 text-base">
              <div>
                <span className="text-sm uppercase tracking-wider text-amber-300 font-bold block">
                  {isEn ? 'Primary Contact' : 'Talian Utama'}
                </span>
                <a
                  href={`tel:${CONTACT_CONFIG.primaryPhone}`}
                  className="text-white hover:text-amber-300 font-medium flex items-center gap-2 mt-0.5"
                >
                  <Phone className="w-4 h-4 text-[#E5A93B]" />
                  <span>{CONTACT_CONFIG.primaryPhoneDisplay}</span>
                </a>
              </div>

              <div>
                <span className="text-sm uppercase tracking-wider text-[#A8B2C1] font-semibold block">
                  {isEn ? 'Secondary Line' : 'Talian Kedua'}
                </span>
                <a
                  href={`tel:${CONTACT_CONFIG.secondaryPhone}`}
                  className="text-[#D1D5DB] hover:text-white flex items-center gap-2 mt-0.5"
                >
                  <Phone className="w-4 h-4 text-[#9BA3AF]" />
                  <span>{CONTACT_CONFIG.secondaryPhoneDisplay}</span>
                </a>
              </div>

              <div>
                <span className="text-sm uppercase tracking-wider text-[#A8B2C1] font-semibold block">
                  {isEn ? 'Official Email' : 'Emel Rasmi'}
                </span>
                <a
                  href={`mailto:${CONTACT_CONFIG.email}`}
                  className="text-[#D1D5DB] hover:text-amber-300 flex items-center gap-2 mt-0.5 break-all"
                >
                  <Mail className="w-4 h-4 text-[#E5A93B] shrink-0" />
                  <span>{CONTACT_CONFIG.email}</span>
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={CONTACT_CONFIG.whatsappBaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="touch-target w-full px-4 py-2.5 bg-[#128C7E] hover:bg-[#075E54] text-white font-semibold rounded-lg text-base flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{isEn ? 'Chat on WhatsApp' : 'Mesej di WhatsApp'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Privacy Assurance */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm sm:text-[15px] text-[#A3ABB8]">
          <div className="text-center md:text-left space-y-1.5">
            <p>
              © {new Date().getFullYear()} {CONTACT_CONFIG.brandName}.{' '}
              {isEn ? 'All rights reserved.' : 'Hak cipta terpelihara.'}
            </p>
            <p className="text-sm text-[#9BA3AF] leading-relaxed">
              {isEn
                ? 'Privacy Note: Our online enquiry triggers a direct WhatsApp chat on your device. We do not require or collect passport copies or sensitive identity uploads through this website.'
                : 'Nota Privasi: Borang pertanyaan membuka mesej WhatsApp terus pada peranti anda. Kami tidak meminta salinan pasport atau muat naik dokumen sensitif melalui laman web ini.'}
            </p>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1.5 text-amber-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{isEn ? 'Responsible Facilitation' : 'Pengurusan Bertanggungjawab'}</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
