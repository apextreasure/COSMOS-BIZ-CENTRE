import React, { useState } from 'react';
import { Language, CONTACT_CONFIG, SERVICES_DATA } from '../data/content';
import {
  Phone,
  Mail,
  MessageCircle,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle,
  Copy,
  Sparkles,
  AlertCircle,
} from 'lucide-react';

interface ContactPageProps {
  language: Language;
}

export const ContactPage: React.FC<ContactPageProps> = ({ language }) => {
  const isEn = language === 'en';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'General Business & Documentation Enquiry',
    message: '',
  });

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      return;
    }

    // Compose formatted WhatsApp enquiry message
    const lines = [
      `*Enquiry for COSMOS BIZ CENTRE*`,
      `---------------------------------`,
      `*Name:* ${formData.name}`,
      `*Phone:* ${formData.phone}`,
      `*Service Required:* ${formData.service}`,
      `*Message:*`,
      formData.message.trim() || (isEn ? 'I would like to enquire about your services.' : 'Saya ingin bertanya mengenai perkhidmatan anda.'),
      `---------------------------------`,
      `_Sent via cosmosbizcentre.com enquiry form_`,
    ];

    const encodedText = encodeURIComponent(lines.join('\n'));
    const url = `${CONTACT_CONFIG.whatsappBaseUrl}?text=${encodedText}`;

    setFormSubmitted(true);

    // Open WhatsApp in new tab/window
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      {/* 1. PAGE HEADER */}
      <section className="pt-10 md:pt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100/80 border border-amber-300/50 text-[#C85A32] text-sm sm:text-base font-bold tracking-wide">
            <Sparkles className="w-4 h-4 text-[#D97706]" />
            <span>{isEn ? 'Direct Contact Channels' : 'Saluran Hubungan Terus'}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1E2229] font-display tracking-tight leading-[1.15]">
            {isEn ? 'Connect with' : 'Hubungi'}{' '}
            <span className="text-[#C85A32]">COSMOS BIZ CENTRE</span>
          </h1>

          <p className="text-xl sm:text-2xl font-medium text-[#484F5B] leading-relaxed">
            {isEn
              ? 'Reach out directly through WhatsApp, phone, or email to discuss your business documentation and administrative needs.'
              : 'Hubungi kami terus melalui WhatsApp, panggilan telefon, atau emel untuk membincangkan keperluan dokumentasi dan pentadbiran perniagaan anda.'}
          </p>
        </div>
      </section>

      {/* 2. MAIN GRID: CONTACT CHANNELS & INTERACTIVE WHATSAPP FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Official Contact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-2xl font-bold text-[#1E2229] font-display">
              {isEn ? 'Direct Communication Channels' : 'Saluran Komunikasi Rasmi'}
            </h2>

            {/* Primary Phone / WhatsApp Card */}
            <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-[#E5DFD4] shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#128C7E] flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 fill-current" />
                </div>
                <span className="text-sm font-bold uppercase tracking-wider text-[#128C7E] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  {isEn ? 'Primary Contact' : 'Talian Utama'}
                </span>
              </div>

              <div>
                <span className="text-sm uppercase font-bold text-[#484F5B] block">
                  {isEn ? 'Primary Contact Phone' : 'Telefon Hubungan Utama'}
                </span>
                <a
                  href={`tel:${CONTACT_CONFIG.primaryPhone}`}
                  className="text-2xl sm:text-3xl font-bold font-display text-[#1E2229] hover:text-[#C85A32] transition-colors block mt-0.5"
                >
                  {CONTACT_CONFIG.primaryPhoneDisplay}
                </a>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href={CONTACT_CONFIG.whatsappBaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="touch-target flex-1 px-4 py-2.5 bg-[#128C7E] hover:bg-[#075E54] text-white text-base font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{isEn ? 'Open WhatsApp Chat' : 'Buka WhatsApp'}</span>
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy(CONTACT_CONFIG.primaryPhone, 'primary')}
                  className="touch-target px-4 py-2.5 bg-white border border-[#D5CABB] text-[#2C313A] hover:bg-[#FAF8F5] text-base font-semibold rounded-xl transition-colors flex items-center gap-1.5"
                  title="Copy phone number"
                >
                  {copiedField === 'primary' ? (
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4 text-[#717A88]" />
                  )}
                  <span className="text-sm font-bold">{copiedField === 'primary' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Secondary Phone Card */}
            <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-[#E5DFD4] shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#C85A32] flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="text-sm font-bold uppercase tracking-wider text-[#C85A32] bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                  {isEn ? 'Secondary Line' : 'Talian Kedua'}
                </span>
              </div>

              <div>
                <span className="text-sm uppercase font-bold text-[#484F5B] block">
                  {isEn ? 'Alternate Contact' : 'Hubungi Alternatif'}
                </span>
                <a
                  href={`tel:${CONTACT_CONFIG.secondaryPhone}`}
                  className="text-2xl sm:text-3xl font-bold font-display text-[#1E2229] hover:text-[#C85A32] transition-colors block mt-0.5"
                >
                  {CONTACT_CONFIG.secondaryPhoneDisplay}
                </a>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href={`tel:${CONTACT_CONFIG.secondaryPhone}`}
                  className="touch-target flex-1 px-4 py-2.5 bg-[#FAF8F5] border border-[#D5CABB] hover:bg-white text-[#1E2229] text-base font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#C85A32]" />
                  <span>{isEn ? 'Call Secondary Line' : 'Panggil Talian Kedua'}</span>
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy(CONTACT_CONFIG.secondaryPhone, 'secondary')}
                  className="touch-target px-4 py-2.5 bg-white border border-[#D5CABB] text-[#2C313A] hover:bg-[#FAF8F5] text-base font-semibold rounded-xl transition-colors flex items-center gap-1.5"
                  title="Copy secondary phone"
                >
                  {copiedField === 'secondary' ? (
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4 text-[#717A88]" />
                  )}
                  <span className="text-sm font-bold">{copiedField === 'secondary' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Email Card */}
            <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-[#E5DFD4] shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-[#D97706] flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-sm font-bold uppercase tracking-wider text-[#D97706] bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  {isEn ? 'Official Email' : 'Emel Rasmi'}
                </span>
              </div>

              <div>
                <span className="text-sm uppercase font-bold text-[#484F5B] block">
                  {isEn ? 'Electronic Correspondence' : 'Surat-Menyurat Elektronik'}
                </span>
                <a
                  href={`mailto:${CONTACT_CONFIG.email}`}
                  className="text-xl sm:text-2xl font-bold font-display text-[#1E2229] hover:text-[#C85A32] transition-colors block mt-0.5 break-all"
                >
                  {CONTACT_CONFIG.email}
                </a>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href={`mailto:${CONTACT_CONFIG.email}`}
                  className="touch-target flex-1 px-4 py-2.5 bg-[#FAF8F5] border border-[#D5CABB] hover:bg-white text-[#1E2229] text-base font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4 text-[#D97706]" />
                  <span>{isEn ? 'Compose Email' : 'Hantar Emel'}</span>
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy(CONTACT_CONFIG.email, 'email')}
                  className="touch-target px-4 py-2.5 bg-white border border-[#D5CABB] text-[#2C313A] hover:bg-[#FAF8F5] text-base font-semibold rounded-xl transition-colors flex items-center gap-1.5"
                  title="Copy email address"
                >
                  {copiedField === 'email' ? (
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4 text-[#717A88]" />
                  )}
                  <span className="text-sm font-bold">{copiedField === 'email' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Privacy & Safe Enquiries Note */}
            <div className="p-4.5 bg-white/80 rounded-2xl border border-[#E8DFD3] text-sm sm:text-[15px] text-[#3A414E] space-y-1.5 leading-relaxed">
              <div className="flex items-center gap-2 font-bold text-[#1E2229]">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>{isEn ? 'Safe Document Privacy Standard' : 'Piawaian Privasi Dokumen'}</span>
              </div>
              <p>
                {isEn
                  ? 'We do not ask for passport files or sensitive credentials via online form uploads. Initial enquiries are routed safely through WhatsApp or direct phone consultation.'
                  : 'Kami tidak meminta fail pasport atau dokumen pengenalan sensitif melalui muat naik borang web. Pertanyaan awal disalurkan terus melalui WhatsApp atau panggilan telefon.'}
              </p>
            </div>
          </div>

          {/* Right Column: WhatsApp Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-[#E5DFD4] shadow-md space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2229] font-display">
                  {isEn ? 'Prepare WhatsApp Enquiry' : 'Sediakan Mesej Pertanyaan WhatsApp'}
                </h2>
                <p className="text-[17px] text-[#484F5B] mt-1">
                  {isEn
                    ? 'Fill out the form below. When you click submit, it will launch WhatsApp with your pre-formatted message ready to send.'
                    : 'Isi borang di bawah. Apabila anda menekan hantar, sistem akan membuka WhatsApp dengan mesej yang telah siap disusun untuk dihantar.'}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="block text-base font-bold text-[#1E2229]">
                    {isEn ? 'Your Name / Representative' : 'Nama Anda / Wakil'} <span className="text-[#C85A32]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={isEn ? 'e.g., Sarah Lee / Ahmad Razali' : 'cth: Sarah Lee / Ahmad Razali'}
                    className="w-full px-4 py-3 bg-white border border-[#D5CABB] rounded-xl text-base text-[#1E2229] focus:outline-none focus:ring-2 focus:ring-[#C85A32] shadow-2xs"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-phone" className="block text-base font-bold text-[#1E2229]">
                    {isEn ? 'Phone / WhatsApp Number' : 'Nombor Telefon / WhatsApp'} <span className="text-[#C85A32]">*</span>
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={isEn ? '+60 12-345 6789' : '+60 12-345 6789'}
                    className="w-full px-4 py-3 bg-white border border-[#D5CABB] rounded-xl text-base text-[#1E2229] focus:outline-none focus:ring-2 focus:ring-[#C85A32] shadow-2xs"
                  />
                </div>

                {/* Service Selection */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-service" className="block text-base font-bold text-[#1E2229]">
                    {isEn ? 'Interested Service' : 'Perkhidmatan Yang Diperlukan'} <span className="text-[#C85A32]">*</span>
                  </label>
                  <select
                    id="contact-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-[#D5CABB] rounded-xl text-base text-[#1E2229] focus:outline-none focus:ring-2 focus:ring-[#C85A32] shadow-2xs"
                  >
                    <option value="General Business & Documentation Enquiry">
                      {isEn ? 'General Business & Documentation Enquiry' : 'Pertanyaan Umum Perniagaan & Dokumentasi'}
                    </option>
                    {SERVICES_DATA.map((service) => (
                      <option key={service.id} value={`${service.number}. ${service.titleEn}`}>
                        {service.number}. {isEn ? service.titleEn : service.titleBm}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="block text-base font-bold text-[#1E2229]">
                    {isEn ? 'Brief Description of Needs' : 'Keterangan Ringkas Keperluan'}
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={
                      isEn
                        ? 'Please outline your company nature, document status, or required support timeframe...'
                        : 'Sila nyatakan jenis perniagaan, status dokumen semasa, atau tempoh masa yang diharapkan...'
                    }
                    className="w-full px-4 py-3 bg-white border border-[#D5CABB] rounded-xl text-base text-[#1E2229] focus:outline-none focus:ring-2 focus:ring-[#C85A32] shadow-2xs"
                  />
                </div>

                {/* Form Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="touch-target w-full px-6 py-4 bg-[#128C7E] hover:bg-[#075E54] text-white text-lg font-bold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 focus-visible:ring-2 focus-visible:ring-emerald-500"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span>{isEn ? 'Open & Chat on WhatsApp' : 'Buka & Hantar Mesej WhatsApp'}</span>
                  </button>
                </div>

                {/* Clarification about form behaviour */}
                <div className="p-3.5 bg-amber-50/90 rounded-xl border border-amber-200 text-sm sm:text-[15px] text-[#3A414E] flex items-start gap-2.5 leading-relaxed">
                  <AlertCircle className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
                  <p>
                    {isEn
                      ? 'Note: Submitting this form prepares your details and opens the official WhatsApp chat on your device. It does not store your information on a remote server or claim to send automated background SMS.'
                      : 'Peringatan: Menghantar borang ini menyusun maklumat anda dan membuka aplikasi WhatsApp pada peranti anda. Ia tidak menyimpan maklumat anda pada pelayan jauh atau menghantar SMS automatik.'}
                  </p>
                </div>
              </form>

              {formSubmitted && (
                <div className="p-4.5 bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-xl text-base font-medium flex items-center gap-2.5">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>
                    {isEn
                      ? 'WhatsApp window opened! If it did not appear, check your pop-up blocker or use the direct buttons on the left.'
                      : 'Tetingkap WhatsApp telah dibuka! Jika ia tidak muncul, sila semak tetapan penyekat pop-up atau klik butang terus di sebelah kiri.'}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
