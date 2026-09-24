import React, { useState } from 'react';
import { HeroIllustration } from '../components/HeroIllustration';
import { ServiceIcon } from '../components/ServiceIcon';
import { CosmosLogoSymbol } from '../components/Logo';
import { PageRoute } from '../components/Header';
import {
  Language,
  CONTACT_CONFIG,
  SERVICES_DATA,
  PORTFOLIO_DATA,
  REPORTED_ACHIEVEMENTS,
  FAQ_DATA,
} from '../data/content';
import {
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Clock,
  Sparkles,
  ChevronDown,
  ShieldCheck,
  FileCheck2,
  Users2,
  Building,
  HelpCircle,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageRoute, serviceId?: string) => void;
  language: Language;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, language }) => {
  const isEn = language === 'en';
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const featuredServices = SERVICES_DATA.slice(0, 6);
  const featuredPortfolio = PORTFOLIO_DATA.slice(0, 4);

  return (
    <div className="space-y-20 md:space-y-28 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative pt-8 md:pt-14 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headlines & Primary Actions (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Kicker / Descriptor */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100/80 border border-amber-300/50 text-[#C85A32] text-sm sm:text-base font-bold tracking-wide">
                <Sparkles className="w-4 h-4 text-[#D97706]" />
                <span>{isEn ? CONTACT_CONFIG.descriptorEn : CONTACT_CONFIG.descriptorBm}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1E2229] font-display tracking-tight leading-[1.15]">
                {isEn ? 'Your Business.' : 'Perniagaan Anda.'}{' '}
                <span className="text-[#C85A32]">{isEn ? 'Your Documents.' : 'Dokumen Anda.'}</span>{' '}
                <span className="text-[#D97706]">{isEn ? 'One Centre.' : 'Satu Pusat.'}</span>
              </h1>

              {/* Tagline Subheading */}
              <p className="text-xl sm:text-2xl font-medium text-[#484F5B] leading-snug">
                {isEn
                  ? 'A convenient centre helping individuals, entrepreneurs, and businesses with business setup, documentation, administration, and service coordination.'
                  : 'Pusat sehenti yang memudahkan individu, usahawan, dan syarikat dalam pendaftaran perniagaan, dokumentasi rasmi, pentadbiran, serta penyelarasan perkhidmatan.'}
              </p>

              {/* Concise Proof Points */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-base sm:text-[17px] text-[#3A414E] pt-1">
                <span className="flex items-center gap-2 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>{isEn ? '12 Coordinated Services' : '12 Perkhidmatan Bersepadu'}</span>
                </span>
                <span className="flex items-center gap-2 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>{isEn ? '20+ Yrs Profile Experience' : '20+ Thn Pengalaman Pasukan'}</span>
                </span>
                <span className="flex items-center gap-2 font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>{isEn ? 'Direct WhatsApp Support' : 'Sokongan Terus WhatsApp'}</span>
                </span>
              </div>

              {/* Action Buttons (CTAs) */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => onNavigate('services')}
                  className="touch-target px-7 py-3.5 bg-[#C85A32] hover:bg-[#B34A25] text-white text-lg font-semibold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group focus-visible:ring-2 focus-visible:ring-[#C85A32]"
                >
                  <span>{isEn ? 'Explore Services' : 'Terokai Perkhidmatan'}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href={`${CONTACT_CONFIG.whatsappBaseUrl}?text=${encodeURIComponent(
                    isEn
                      ? 'Hello COSMOS BIZ CENTRE, I would like to make an enquiry regarding your business and documentation services.'
                      : 'Salam COSMOS BIZ CENTRE, saya ingin membuat pertanyaan mengenai perkhidmatan perniagaan dan dokumentasi.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="touch-target px-7 py-3.5 bg-[#128C7E] hover:bg-[#075E54] text-white text-lg font-semibold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>{isEn ? 'WhatsApp Enquiry' : 'Pertanyaan WhatsApp'}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Abstract Document & Connected Services Illustration (5 cols) */}
            <div className="lg:col-span-5 flex justify-center">
              <HeroIllustration className="w-full max-w-md lg:max-w-none" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. THREE PILLARS / WHY CHOOSE US (From PDF Page 7) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-sm sm:text-[15px] uppercase tracking-wider text-[#C85A32] font-bold">
            {isEn ? 'Why Choose Us?' : 'Mengapa Memilih Kami?'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E2229] font-display mt-1">
            {isEn
              ? 'Clear Guidance & Systematic Document Readiness'
              : 'Panduan Jelas & Kesediaan Dokumen Sistematik'}
          </h2>
          <p className="text-lg text-[#5A6270] mt-2">
            {isEn
              ? 'Core values documented in the Kosmos Group profile guiding every client engagement.'
              : 'Nilai teras yang didokumentasikan dalam profil Kosmos Group membimbing setiap urusan pelanggan.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="glass-panel p-8 rounded-2xl border border-[#E5DFD4] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-[#D97706] mb-5 group-hover:scale-105 transition-transform">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#1E2229] font-display mb-2">
              {isEn ? 'Valuable with Instant Solution' : 'Bernilai dengan Penyelesaian Pantas'}
            </h3>
            <p className="text-[#3A414E] text-[17px] leading-relaxed">
              {isEn
                ? 'We quickly review your requirements and provide straightforward, practical pathways so you never waste time on redundant steps.'
                : 'Kami meneliti keperluan anda dengan pantas dan menyediakan langkah praktikal yang tepat tanpa membuang masa.'}
            </p>
          </div>

          {/* Card 2 */}
          <div className="glass-panel p-8 rounded-2xl border border-[#E5DFD4] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-[#C85A32] mb-5 group-hover:scale-105 transition-transform">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#1E2229] font-display mb-2">
              {isEn ? 'Time Efficient' : 'Menjimatkan Masa'}
            </h3>
            <p className="text-[#3A414E] text-[17px] leading-relaxed">
              {isEn
                ? 'Properly arranged dossiers and verified checklists prevent repeated document rejections and lengthy processing backlogs.'
                : 'Penyusunan dosier yang teratur dan semakan lengkap mengelakkan penolakan dokumen berulang dan kelewatan urusan.'}
            </p>
          </div>

          {/* Card 3 */}
          <div className="glass-panel p-8 rounded-2xl border border-[#E5DFD4] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-[#D97706] mb-5 group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#1E2229] font-display mb-2">
              {isEn ? 'Resourceful by Experience' : 'Berpengalaman & Berpengetahuan'}
            </h3>
            <p className="text-[#3A414E] text-[17px] leading-relaxed">
              {isEn
                ? 'Drawing upon over 20 years of collective team experience documented in the Kosmos Group profile across regulatory and documentation environments.'
                : 'Memanfaatkan lebih 20 tahun pengalaman kolektif pasukan yang dilaporkan dalam profil Kosmos Group dalam bidang pentadbiran dan peraturan.'}
            </p>
          </div>
        </div>
      </section>

      {/* 3. REPORTED ACHIEVEMENTS & TRACK RECORD (PDF Pages 4, 8, 9) */}
      <section className="bg-[#FAF5ED] py-16 border-y border-[#EBE2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-sm font-bold uppercase tracking-wider text-[#C85A32] bg-orange-100/90 px-3.5 py-1.5 rounded-full mb-2">
              {isEn ? 'Attributed Background' : 'Latar Belakang Rujukan'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E2229] font-display">
              {isEn
                ? 'Experience Reported in the Kosmos Group Profile'
                : 'Pengalaman Dilaporkan dalam Profil Kosmos Group'}
            </h2>
            <p className="text-[17px] text-[#484F5B] mt-2">
              {isEn
                ? 'Historical track record and capabilities documented across Kosmos Group entities (Kosmosjuta Ventures, Agensi Pekerjaan Cosmosworks, Cosmos Ventures Enterprise, Raztech Engineering).'
                : 'Rekod prestasi dan keupayaan bersejarah yang didokumentasikan merentasi entiti Kosmos Group.'}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {REPORTED_ACHIEVEMENTS.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/95 p-5 sm:p-6 rounded-2xl border border-[#E2D8CA] text-center shadow-2xs hover:shadow-sm transition-all"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-[#C85A32] font-display tabular-nums tracking-tight">
                  {isEn ? item.metric : item.metricBm}
                </div>
                <div className="text-lg font-bold text-[#1E2229] mt-2 leading-tight">
                  {isEn ? item.labelEn : item.labelBm}
                </div>
                <p className="text-[15px] sm:text-base text-[#3A414E] mt-2.5 leading-relaxed font-medium">
                  {isEn ? item.descEn : item.descBm}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-base sm:text-[17px] text-[#484F5B] mt-8 italic">
            {isEn
              ? '*Figures are referenced directly from the supplied Kosmos Group profile as historical benchmarks and are not presented as an independent audit.'
              : '*Angka-angka ini dirujuk terus daripada profil Kosmos Group yang dibekalkan sebagai penanda aras lampau dan bukan audit bebas.'}
          </p>
        </div>
      </section>

      {/* 4. SERVICE PREVIEWS (12 Services Highlights) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-sm sm:text-[15px] uppercase tracking-wider text-[#C85A32] font-bold">
              {isEn ? 'One-Stop Capabilities' : 'Keupayaan Pusat Sehenti'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E2229] font-display mt-1">
              {isEn ? 'Coordinated Business Services' : 'Perkhidmatan Perniagaan Bersepadu'}
            </h2>
            <p className="text-lg text-[#5A6270] mt-1 max-w-2xl">
              {isEn
                ? 'From business startup to official documentation, manpower coordination, and administrative back-office assistance.'
                : 'Daripada permulaan perniagaan hingga dokumentasi rasmi, penyelarasan tenaga kerja, dan sokongan pentadbiran pejabat.'}
            </p>
          </div>

          <button
            onClick={() => onNavigate('services')}
            className="touch-target px-5 py-2.5 border-2 border-[#C85A32] text-[#C85A32] hover:bg-[#C85A32] hover:text-white rounded-xl font-semibold text-[16px] transition-colors flex items-center gap-2 whitespace-nowrap self-start md:self-auto"
          >
            <span>{isEn ? 'View All 12 Services' : 'Lihat Semua 12 Perkhidmatan'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service) => (
            <div
              key={service.id}
              className="glass-panel p-6 sm:p-7 rounded-3xl border border-[#E8DFD3] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Visual Image Representation */}
                <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-5 border border-[#E8DFD3] bg-[#F2EDE5]">
                  <img
                    src={service.image}
                    alt={isEn ? service.imageAltEn : service.imageAltBm}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.triedFallback) {
                        target.dataset.triedFallback = 'true';
                        const parts = service.image.split('/');
                        const filename = parts[parts.length - 1]?.split('?')[0];
                        if (filename) {
                          target.src = `/assets/images/${filename}`;
                        }
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-75" />

                  {/* Brand logo badge floating on top-left of image */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-md rounded-xl border border-white/80 shadow-xs">
                    <CosmosLogoSymbol className="w-4 h-4" />
                    <span className="text-xs sm:text-sm font-bold font-display tracking-tight text-[#1E2229]">
                      COSMOS <span className="text-[#C85A32]">BIZ</span>
                    </span>
                  </div>

                  {/* Icon & Service Number Badge on top-right */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5">
                    <div className="w-7 h-7 rounded-lg bg-black/60 backdrop-blur-md text-amber-300 flex items-center justify-center border border-white/20">
                      <ServiceIcon name={service.icon} className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm font-mono font-bold text-white px-2.5 py-0.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/20">
                      {service.number}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#1E2229] font-display mb-2 leading-snug">
                  {isEn ? service.titleEn : service.titleBm}
                </h3>

                <p className="text-[15px] sm:text-base uppercase font-bold text-[#C85A32] mb-3 tracking-wide">
                  {isEn ? service.taglineEn : service.taglineBm}
                </p>

                <p className="text-[#3A414E] text-lg sm:text-[18px] leading-relaxed mb-5">
                  {isEn ? service.descEn : service.descBm}
                </p>

                <ul className="space-y-2.5 mb-6 text-[16px] sm:text-[17px] text-[#2C313A]">
                  {(isEn ? service.highlightsEn : service.highlightsBm).slice(0, 2).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#EFE8DD] flex items-center justify-between">
                <button
                  onClick={() => onNavigate('services', service.id)}
                  className="text-[16px] font-bold text-[#C85A32] hover:text-[#9C3B1B] flex items-center gap-1.5 focus-visible:ring-1 focus-visible:ring-[#C85A32] rounded"
                >
                  <span>{isEn ? 'Service Details' : 'Maklumat Lanjut'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`${CONTACT_CONFIG.whatsappBaseUrl}?text=${encodeURIComponent(
                    `Hello COSMOS BIZ CENTRE, I am interested in service ${service.number}: ${service.titleEn}. Could you please guide me on the next steps?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="touch-target px-4 py-2 bg-[#128C7E]/10 hover:bg-[#128C7E] text-[#128C7E] hover:text-white rounded-xl text-base font-bold transition-colors flex items-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. THE THREE-STEP PROCESS (From PDF Page 6) */}
      <section className="bg-gradient-to-b from-[#FAF8F5] via-[#F4EDE2] to-[#FAF8F5] py-16 border-y border-[#EAE1D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-sm sm:text-[15px] uppercase tracking-wider text-[#C85A32] font-bold">
              {isEn ? 'Systematic Workflow' : 'Aliran Kerja Sistematik'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E2229] font-display mt-1">
              {isEn ? 'The 3-Step Coordination Process' : 'Proses Penyelarasan 3 Langkah'}
            </h2>
            <p className="text-lg text-[#5A6270] mt-2">
              {isEn
                ? 'Structured procedure directly adapted from the Kosmos Group methodology.'
                : 'Tatacara berstruktur yang diadaptasi terus daripada metodologi Kosmos Group.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="glass-panel p-8 rounded-2xl border border-[#E5DDD0] shadow-sm relative">
              <div className="w-12 h-12 rounded-full bg-[#C85A32] text-white flex items-center justify-center font-display font-bold text-xl mb-5 shadow-sm">
                1
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1E2229] font-display mb-2">
                {isEn ? 'Enquire & Explain Needs' : 'Tanya & Nyatakan Keperluan'}
              </h3>
              <p className="text-base sm:text-[17px] font-bold uppercase tracking-wide text-[#C85A32] mb-3">
                {isEn
                  ? 'Provide & guide information according to rules'
                  : 'Panduan maklumat mengikut prosedur rasmi'}
              </p>
              <p className="text-[#3A414E] text-lg leading-relaxed">
                {isEn
                  ? 'Contact our centre via WhatsApp, call, or consultation. We identify your requirements and advise on applicable authority regulations and preliminary documentation checklists.'
                  : 'Hubungi kami melalui WhatsApp, telefon, atau hadir bertemu. Kami mendengar keperluan anda dan membimbing mengenai peraturan pihak berkuasa serta senarai semak awal.'}
              </p>
            </div>

            {/* Step 2 */}
            <div className="glass-panel p-8 rounded-2xl border border-[#E5DDD0] shadow-sm relative">
              <div className="w-12 h-12 rounded-full bg-[#D97706] text-white flex items-center justify-center font-display font-bold text-xl mb-5 shadow-sm">
                2
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1E2229] font-display mb-2">
                {isEn ? 'Review Documents & Coordinate' : 'Semak Dokumen & Penyelarasan'}
              </h3>
              <p className="text-base sm:text-[17px] font-bold uppercase tracking-wide text-[#D97706] mb-3">
                {isEn
                  ? 'Engaging client with the correct & legal resources'
                  : 'Menghubungkan pelanggan dengan sumber sah'}
              </p>
              <p className="text-[#3A414E] text-lg leading-relaxed">
                {isEn
                  ? 'We systematically review your existing papers, format required dossiers, and coordinate with appropriate legal or statutory channels to ensure submission readiness.'
                  : 'Kami menyemak kertas kerja semasa secara teliti, memformat dosier yang diperlukan, dan menyelaras bersama saluran sah yang berkaitan bagi memastikan kesempurnaan dokumen.'}
              </p>
            </div>

            {/* Step 3 */}
            <div className="glass-panel p-8 rounded-2xl border border-[#E5DDD0] shadow-sm relative">
              <div className="w-12 h-12 rounded-full bg-[#1E2229] text-white flex items-center justify-center font-display font-bold text-xl mb-5 shadow-sm">
                3
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1E2229] font-display mb-2">
                {isEn ? 'Follow Up & Support' : 'Tindakan Susulan & Sokongan'}
              </h3>
              <p className="text-base sm:text-[17px] font-bold uppercase tracking-wide text-[#5A6270] mb-3">
                {isEn
                  ? 'Simplify client administration management'
                  : 'Memudahkan pengurusan pentadbiran pelanggan'}
              </p>
              <p className="text-[#3A414E] text-lg leading-relaxed">
                {isEn
                  ? 'We maintain regular progress updates, follow through procedural milestones, and assist with renewals or ongoing administrative compliance.'
                  : 'Kami sentiasa mengemas kini perkembangan status, memantau peringkat prosedur, dan membantu dengan pembaharuan atau pematuhan pentadbiran seterusnya.'}
              </p>
            </div>
          </div>

          <div className="mt-8 text-center text-base sm:text-lg text-[#3A414E]">
            <span className="font-bold text-[#1E2229]">
              {isEn ? 'Notice:' : 'Peringatan:'}
            </span>{' '}
            {isEn
              ? 'Required documents depend strictly on the requested service category. We provide tailored checklists upon initial enquiry.'
              : 'Keperluan dokumen bergantung kepada kategori perkhidmatan yang dipohon. Kami menyediakan senarai semak khusus selepas perbincangan awal.'}
          </div>
        </div>
      </section>

      {/* 6. SELECTED PORTFOLIO HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-sm sm:text-[15px] uppercase tracking-wider text-[#C85A32] font-bold">
              {isEn ? 'Kosmos Group Track Record' : 'Rekod Pengalaman Kosmos Group'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E2229] font-display mt-1">
              {isEn ? 'Selected Project References' : 'Rujukan Projek Pilihan'}
            </h2>
            <p className="text-lg text-[#5A6270] mt-1">
              {isEn
                ? 'Historical engagements from the Kosmos Group of Companies profile.'
                : 'Tugasan bersejarah daripada profil Kosmos Group of Companies.'}
            </p>
          </div>

          <button
            onClick={() => onNavigate('portfolio')}
            className="touch-target px-5 py-2.5 border-2 border-[#C85A32] text-[#C85A32] hover:bg-[#C85A32] hover:text-white rounded-xl font-semibold text-[16px] transition-colors flex items-center gap-2 whitespace-nowrap self-start md:self-auto"
          >
            <span>{isEn ? 'Explore Full Portfolio' : 'Lihat Portfolio Penuh'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredPortfolio.map((item) => (
            <div
              key={item.id}
              className="glass-panel p-6 sm:p-7 rounded-2xl border border-[#E8DFD3] shadow-2xs hover:shadow-md transition-all space-y-3"
            >
              <div className="flex items-center justify-between text-sm sm:text-[15px] text-[#484F5B]">
                <span className="font-bold text-[#C85A32] uppercase tracking-wider">
                  {isEn ? item.sectorEn : item.sectorBm}
                </span>
                <span className="font-medium">{isEn ? item.locationEn : item.locationBm}</span>
              </div>

              <h3 className="text-xl font-bold text-[#1E2229] font-display">
                {isEn ? item.titleEn : item.titleBm}
              </h3>

              <p className="text-[#3A414E] text-[16px] leading-relaxed">
                {isEn ? item.scopeEn : item.scopeBm}
              </p>

              <div className="pt-3 border-t border-[#EFE8DD] flex items-center justify-between text-sm sm:text-[15px] text-[#5A6270]">
                <span>{isEn ? 'Client: ' : 'Pelanggan: '}<strong className="text-[#1E2229]">{item.clientOrEntity}</strong></span>
                <span className="text-amber-900 font-bold bg-amber-100/90 px-2.5 py-0.5 rounded text-sm">Kosmos Profile</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-sm sm:text-[15px] uppercase tracking-wider text-[#C85A32] font-bold">
            {isEn ? 'Clarity & FAQs' : 'Kemusykilan & Soalan Lazim'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E2229] font-display mt-1">
            {isEn ? 'Frequently Asked Questions' : 'Soalan Lazim'}
          </h2>
          <p className="text-lg text-[#5A6270] mt-2">
            {isEn
              ? 'Straightforward answers about our services, authority limits, and preparation steps.'
              : 'Jawapan telus mengenai perkhidmatan kami, batasan kuasa agensi, dan langkah persediaan.'}
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="glass-panel rounded-2xl border border-[#E8DFD3] overflow-hidden transition-all shadow-2xs"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="touch-target w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 focus-visible:ring-2 focus-visible:ring-[#C85A32]"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-lg text-[#1E2229]">
                    {isEn ? faq.questionEn : faq.questionBm}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#C85A32] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-[#3A414E] text-[17px] leading-relaxed border-t border-[#F2EBE0]/80">
                    {isEn ? faq.answerEn : faq.answerBm}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 8. CLOSING CONTACT BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#21252D] via-[#2A303C] to-[#1E2229] text-white p-8 sm:p-12 lg:p-14 rounded-3xl shadow-xl relative overflow-hidden">
          {/* Subtle warm decorative background orbs */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#E5A93B]/10 blur-3xl -z-0" />
          <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-[#C85A32]/15 blur-2xl -z-0" />

          <div className="relative z-10 max-w-3xl space-y-5">
            <span className="inline-block text-sm font-bold uppercase tracking-wider text-amber-300 bg-amber-900/50 px-4 py-1.5 rounded-full border border-amber-500/40">
              {isEn ? 'Start Your Consultation' : 'Mulakan Perundingan Anda'}
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white leading-tight">
              {isEn
                ? 'Ready to Organize Your Business & Documentation?'
                : 'Bersedia Menguruskan Dokumentasi & Perniagaan Anda?'}
            </h2>

            <p className="text-[#C5CDD9] text-lg sm:text-xl leading-relaxed">
              {isEn
                ? 'Reach out today for a consultation. Our team will review your needs and provide clear, compliant coordination.'
                : 'Hubungi kami hari ini untuk perundingan. Pasukan kami sedia menyemak keperluan anda dengan penyelarasan yang mematuhi peraturan.'}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={`${CONTACT_CONFIG.whatsappBaseUrl}?text=${encodeURIComponent(
                  isEn
                    ? 'Hello COSMOS BIZ CENTRE, I would like to enquire about getting assistance with my business documents.'
                    : 'Salam COSMOS BIZ CENTRE, saya ingin bertanya mengenai bantuan dokumentasi perniagaan saya.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="touch-target px-7 py-3.5 bg-[#128C7E] hover:bg-[#075E54] text-white text-lg font-semibold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2.5"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>{isEn ? 'WhatsApp Us Now' : 'Hubungi WhatsApp Sekarang'}</span>
              </a>

              <button
                onClick={() => onNavigate('contact')}
                className="touch-target px-7 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-lg font-semibold rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <span>{isEn ? 'View All Contact Options' : 'Lihat Semua Pilihan Hubungan'}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
