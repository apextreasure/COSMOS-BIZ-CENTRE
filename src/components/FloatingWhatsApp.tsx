import React, { useState } from 'react';
import { CONTACT_CONFIG, Language } from '../data/content';
import { MessageCircle, X } from 'lucide-react';

interface FloatingWhatsAppProps {
  language: Language;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ language }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const isEn = language === 'en';

  const defaultMessage = isEn
    ? 'Hello COSMOS BIZ CENTRE, I would like to make an enquiry regarding your business and documentation services.'
    : 'Salam COSMOS BIZ CENTRE, saya ingin membuat pertanyaan mengenai perkhidmatan perniagaan dan dokumentasi anda.';

  const whatsappUrl = `${CONTACT_CONFIG.whatsappBaseUrl}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Quick Help Bubble (dismissible or shown on hover) */}
      {showTooltip && (
        <div className="mb-3 max-w-xs p-3.5 bg-white rounded-2xl shadow-xl border border-[#E8DFD3] text-sm text-[#1E2229] relative animate-in fade-in slide-in-from-bottom-2 duration-200">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 p-1 text-[#717A88] hover:text-[#1E2229] rounded"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <p className="font-bold text-sm text-[#C85A32] uppercase tracking-wider mb-1">
            COSMOS BIZ CENTRE
          </p>
          <p className="text-[15px] leading-relaxed text-[#2C313A]">
            {isEn
              ? 'Need quick assistance with your documentation or business registration? Chat with us on WhatsApp.'
              : 'Perlukan bantuan pantas mengenai pendaftaran syarikat atau permit? Hubungi kami di WhatsApp.'}
          </p>
          <div className="mt-2 text-right">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-bold text-[#128C7E] hover:underline"
            >
              {isEn ? 'Start Chat →' : 'Mula Chat →'}
            </a>
          </div>
        </div>
      )}

      {/* Primary Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="touch-target w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center focus-visible:ring-4 focus-visible:ring-emerald-400 group"
        aria-label="Chat directly on WhatsApp (opens new tab)"
        title={isEn ? 'Chat with COSMOS BIZ CENTRE on WhatsApp' : 'Hubungi COSMOS BIZ CENTRE melalui WhatsApp'}
      >
        <MessageCircle className="w-7 h-7 fill-current group-hover:scale-110 transition-transform" />
        <span className="sr-only">WhatsApp Enquiry</span>
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
