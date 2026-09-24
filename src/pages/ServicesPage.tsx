import React, { useState } from 'react';
import { ServiceIcon } from '../components/ServiceIcon';
import { CosmosLogoSymbol } from '../components/Logo';
import { PageRoute } from '../components/Header';
import { Language, CONTACT_CONFIG, SERVICES_DATA, ServiceItem } from '../data/content';
import {
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  FileCheck,
  Search,
  Sparkles,
  HelpCircle,
  Briefcase,
  Users,
  Compass,
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageRoute) => void;
  language: Language;
  initialServiceId?: string;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  language,
  initialServiceId,
}) => {
  const isEn = language === 'en';
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', labelEn: 'All 12 Services', labelBm: 'Semua 12 Perkhidmatan' },
    { id: 'setup', labelEn: 'Startup & Corporate', labelBm: 'Permulaan & Korporat' },
    { id: 'documentation', labelEn: 'Official Documentation', labelBm: 'Dokumentasi Rasmi' },
    { id: 'manpower', labelEn: 'Manpower & Permits', labelBm: 'Tenaga Kerja & Permit' },
    { id: 'support', labelEn: 'Admin & Business Support', labelBm: 'Sokongan Pentadbiran' },
  ];

  const filteredServices = SERVICES_DATA.filter((service) => {
    const matchesCategory =
      selectedCategory === 'all' || service.category === selectedCategory;
    const title = isEn ? service.titleEn : service.titleBm;
    const desc = isEn ? service.descEn : service.descBm;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      query === '' ||
      title.toLowerCase().includes(query) ||
      desc.toLowerCase().includes(query) ||
      service.number.includes(query);
    return matchesCategory && matchesSearch;
  });

  const getServiceWhatsAppUrl = (service: ServiceItem) => {
    const message = isEn
      ? `Hello COSMOS BIZ CENTRE, I would like to enquire about Service ${service.number}: ${service.titleEn}. Please guide me on required documents and the next steps.`
      : `Salam COSMOS BIZ CENTRE, saya ingin bertanya tentang Perkhidmatan ${service.number}: ${service.titleBm}. Mohon bantuan mengenai dokumen yang diperlukan dan langkah seterusnya.`;
    return `${CONTACT_CONFIG.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="space-y-20 md:space-y-24 pb-16">
      {/* 1. PAGE HEADER */}
      <section className="pt-10 md:pt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100/80 border border-amber-300/50 text-[#C85A32] text-sm sm:text-base font-bold tracking-wide">
            <Sparkles className="w-4 h-4 text-[#D97706]" />
            <span>{isEn ? 'Comprehensive Service Directory' : 'Direktori Perkhidmatan Lengkap'}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1E2229] font-display tracking-tight leading-[1.15]">
            {isEn ? 'Our 12 Coordinated' : '12 Perkhidmatan Bersepadu'}{' '}
            <span className="text-[#C85A32]">{isEn ? 'Business Services' : 'Perniagaan'}</span>
          </h1>

          <p className="text-xl sm:text-2xl font-medium text-[#484F5B] leading-relaxed">
            {isEn
              ? 'Convenient assistance and procedural coordination for individuals, entrepreneurs, and established enterprises in one dedicated centre.'
              : 'Bantuan mudah dan penyelarasan prosedur bagi individu, usahawan, dan syarikat di satu pusat sehenti.'}
          </p>
        </div>

        {/* Advisory Transparency Banner */}
        <div className="mt-8 p-5 bg-amber-50/95 rounded-2xl border border-amber-200 text-sm sm:text-base text-[#3A414E] leading-relaxed flex items-start gap-3.5 shadow-2xs">
          <ShieldAlert className="w-5 h-5 text-[#C85A32] shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#1E2229] font-bold block mb-1">
              {isEn ? 'Advisory & Coordination Notice:' : 'Notis Nasihat & Penyelarasan:'}
            </strong>
            {isEn
              ? 'COSMOS BIZ CENTRE provides documentation compilation, administrative coordination, and advisory support. We are not a government agency, embassy, law firm, bank, or insurer, and we do not guarantee statutory approvals. Official permits and approvals remain within the exclusive statutory discretion of the respective government authorities.'
              : 'COSMOS BIZ CENTRE menyediakan penyusunan dokumen, penyelarasan pentadbiran, dan khidmat nasihat. Kami bukan jabatan kerajaan, kedutaan, firma guaman, bank, atau syarikat insurans, dan kami tidak menjamin kelulusan statutori. Kelulusan permit dan visa tertakluk sepenuhnya kepada budi bicara pihak berkuasa berkenaan.'}
          </div>
        </div>
      </section>

      {/* 2. FILTER & SEARCH CONTROLS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-6 border-b border-[#E8DFD3]">
          {/* Segmented Category Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`touch-target px-4.5 py-2.5 text-base font-semibold rounded-xl transition-all whitespace-nowrap focus-visible:ring-2 focus-visible:ring-[#C85A32] ${
                  selectedCategory === cat.id
                    ? 'bg-[#C85A32] text-white shadow-xs'
                    : 'bg-white/85 hover:bg-white text-[#3A414E] border border-[#DCD3C7]'
                }`}
              >
                {isEn ? cat.labelEn : cat.labelBm}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px] md:w-72">
            <Search className="w-4 h-4 text-[#717A88] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isEn ? 'Search services...' : 'Cari perkhidmatan...'}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#D5CABB] rounded-xl text-base text-[#1E2229] focus:outline-none focus:ring-2 focus:ring-[#C85A32] shadow-2xs"
            />
          </div>
        </div>

        {/* 3. SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="glass-panel p-6 sm:p-7 rounded-3xl border border-[#E5DFD4] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Visual Image Representation featuring Malay male/female professionals */}
                <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden mb-5 border border-[#E8DFD3] bg-[#F2EDE5]">
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
                    <div className="w-8 h-8 rounded-lg bg-black/60 backdrop-blur-md text-amber-300 flex items-center justify-center border border-white/20">
                      <ServiceIcon name={service.icon} className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-mono font-bold text-white px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/20">
                      {service.number}
                    </span>
                  </div>

                  {/* Micro caption over image bottom */}
                  <div className="absolute bottom-2.5 left-3 right-3 text-sm text-white font-semibold truncate drop-shadow-xs">
                    {isEn ? service.taglineEn : service.taglineBm}
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-2xl font-bold text-[#1E2229] font-display mb-1.5 leading-snug">
                  {isEn ? service.titleEn : service.titleBm}
                </h3>

                {/* Short Subtitle */}
                <p className="text-sm sm:text-[15px] uppercase tracking-wider font-bold text-[#C85A32] mb-3">
                  {isEn ? service.taglineEn : service.taglineBm}
                </p>

                {/* Description */}
                <p className="text-[#3A414E] text-[17px] leading-relaxed mb-5">
                  {isEn ? service.descEn : service.descBm}
                </p>

                {/* Scope Highlights */}
                <div className="space-y-2 mb-6 pt-3 border-t border-[#EFE8DD]">
                  <span className="text-sm uppercase tracking-wider text-[#484F5B] font-bold block">
                    {isEn ? 'Key Coordination Scope:' : 'Skop Penyelarasan Utama:'}
                  </span>
                  <ul className="space-y-2 text-[15px] sm:text-base text-[#2C313A]">
                    {(isEn ? service.highlightsEn : service.highlightsBm).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Service Action Button (Prefilled WhatsApp Link) */}
              <div className="pt-4 border-t border-[#EFE8DD]">
                <a
                  href={getServiceWhatsAppUrl(service)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="touch-target w-full px-4 py-3 bg-[#128C7E] hover:bg-[#075E54] text-white text-base font-bold rounded-xl shadow-xs transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>
                    {isEn ? `Enquire for Service ${service.number}` : `Tanya Perkhidmatan ${service.number}`}
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16 text-[#5A6270]">
            <p className="text-lg">
              {isEn ? 'No services found matching your criteria.' : 'Tiada perkhidmatan dijumpai.'}
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 text-base font-semibold text-[#C85A32] underline"
            >
              {isEn ? 'Reset filters' : 'Tetapkan semula'}
            </button>
          </div>
        )}
      </section>

      {/* 4. DOCUMENTED CAPABILITIES SECTION (From Kosmos Group Profile) */}
      <section className="bg-[#FAF5ED] py-16 border-y border-[#EBE2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-sm font-bold uppercase tracking-wider text-[#C85A32] bg-orange-100/90 px-3.5 py-1.5 rounded-full mb-2">
              {isEn ? 'Profile Capabilities' : 'Keupayaan Profil'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E2229] font-display">
              {isEn
                ? 'Capabilities Documented in the Kosmos Group Profile'
                : 'Keupayaan Didokumentasikan Dalam Profil Kosmos Group'}
            </h2>
            <p className="text-lg text-[#5A6270] mt-2">
              {isEn
                ? 'Cross-functional operational support capabilities reported across group entities.'
                : 'Keupayaan operasi rentas fungsi yang dilaporkan merentasi entiti kumpulan.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-7 rounded-2xl border border-[#E0D5C5] space-y-3 shadow-2xs">
              <h4 className="text-xl font-bold text-[#1E2229] font-display">
                {isEn ? 'Recruitment Process Outsourcing (RPO)' : 'Penyumberan Luar Pengambilan (RPO)'}
              </h4>
              <p className="text-[#3A414E] text-base sm:text-[17px] leading-relaxed">
                {isEn
                  ? 'Candidate sourcing pipelines, preliminary interviews, and workforce onboarding coordination for specialized technical and general industries.'
                  : 'Saluran pencarian calon, temu duga awal, dan penyelarasan kemasukan pekerja bagi industri teknikal khusus serta umum.'}
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#E0D5C5] space-y-3 shadow-2xs">
              <h4 className="text-xl font-bold text-[#1E2229] font-display">
                {isEn ? 'Permit Applications & Renewals' : 'Permohonan & Pembaharuan Permit'}
              </h4>
              <p className="text-[#3A414E] text-base sm:text-[17px] leading-relaxed">
                {isEn
                  ? 'Tracking renewal milestones, medical verification paperwork, levy vouchers, and liaison for ongoing legal workforce continuity.'
                  : 'Pemantauan tarikh luput pembaharuan, kertas kerja pemeriksaan perubatan, baucar levi, dan kelangsungan undang-undang tenaga kerja.'}
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#E0D5C5] space-y-3 shadow-2xs">
              <h4 className="text-xl font-bold text-[#1E2229] font-display">
                {isEn ? 'Local Authority Licensing Support' : 'Sokongan Lesen Pihak Berkuasa Tempatan'}
              </h4>
              <p className="text-[#3A414E] text-base sm:text-[17px] leading-relaxed">
                {isEn
                  ? 'Compilation of municipal council premise licenses, signboard approvals, and operational health & zoning prerequisites.'
                  : 'Penyusunan permohonan lesen premis majlis perbandaran, papan iklan, dan prasyarat kesihatan serta zon operasi.'}
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#E0D5C5] space-y-3 shadow-2xs">
              <h4 className="text-xl font-bold text-[#1E2229] font-display">
                {isEn ? 'Quota Documentation Services' : 'Dokumentasi Kuota Sektor'}
              </h4>
              <p className="text-[#3A414E] text-base sm:text-[17px] leading-relaxed">
                {isEn
                  ? 'Supporting dossier compilation for agriculture, services, and construction sector quotas with proper justification paperwork.'
                  : 'Penyediaan dosier sokongan bagi kuota sektor pertanian, perkhidmatan, dan pembinaan dengan kertas kerja justifikasi teratur.'}
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#E0D5C5] space-y-3 shadow-2xs">
              <h4 className="text-xl font-bold text-[#1E2229] font-display">
                {isEn ? 'Skills & Training Course Organizer' : 'Penganjur Kursus Kemahiran & Latihan'}
              </h4>
              <p className="text-[#3A414E] text-base sm:text-[17px] leading-relaxed">
                {isEn
                  ? 'Coordination of professional development programs, national youth training tours, and corporate capacity-building workshops.'
                  : 'Penyelarasan program pembangunan profesional, jelajah latihan belia kebangsaan, dan bengkel pembinaan kapasiti korporat.'}
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#E0D5C5] space-y-3 shadow-2xs">
              <h4 className="text-xl font-bold text-[#1E2229] font-display">
                {isEn ? 'Event Management & CSR Programmes' : 'Pengurusan Acara & Program CSR'}
              </h4>
              <p className="text-[#3A414E] text-base sm:text-[17px] leading-relaxed">
                {isEn
                  ? 'Planning and on-ground execution for corporate social responsibility, international exhibitions, and community engagement campaigns.'
                  : 'Perancangan dan pelaksanaan lapangan bagi tanggungjawab sosial korporat, pameran antarabangsa, serta kempen komuniti.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DOCUMENT READINESS GUIDE */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-[#E5DFD4] shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#C85A32] flex items-center justify-center">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#1E2229] font-display">
                {isEn ? 'Document Readiness Checklist' : 'Panduan Kesediaan Dokumen'}
              </h3>
              <p className="text-sm sm:text-base text-[#484F5B] font-medium">
                {isEn ? 'Helpful preparation before initiating your consultation' : 'Persediaan berguna sebelum memulakan rundingan'}
              </p>
            </div>
          </div>

          <p className="text-[#3A414E] text-lg leading-relaxed">
            {isEn
              ? 'To enable swift review and accurate advice, we recommend having the following foundational documents prepared when reaching out to our centre:'
              : 'Bagi membolehkan semakan pantas dan nasihat tepat, kami mencadangkan penyediaan dokumen asas berikut apabila menghubungi pusat kami:'}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base text-[#2C313A]">
            <div className="p-4.5 bg-white/90 rounded-xl border border-[#EAE1D3] space-y-2">
              <strong className="text-[#C85A32] block text-lg font-bold">
                {isEn ? '1. Identification & Corporate Profile' : '1. Pengenalan Diri & Profil Syarikat'}
              </strong>
              <p className="text-[#484F5B] text-base leading-relaxed">
                {isEn
                  ? 'Identity Card (IC) or valid passport copies of directors/applicants, SSM certificate, and current business particulars.'
                  : 'Salinan Kad Pengenalan atau pasport sah pengarah/pemohon, sijil pendaftaran SSM, dan maklumat perniagaan terkini.'}
              </p>
            </div>

            <div className="p-4.5 bg-white/90 rounded-xl border border-[#EAE1D3] space-y-2">
              <strong className="text-[#C85A32] block text-lg font-bold">
                {isEn ? '2. Existing Approvals & Passes' : '2. Kelulusan & Pas Sedia Ada'}
              </strong>
              <p className="text-[#484F5B] text-base leading-relaxed">
                {isEn
                  ? 'Copies of current work permits, visa stamps, quota letters, or local council licenses requiring renewal or coordination.'
                  : 'Salinan permit kerja semasa, cop visa, surat kelulusan kuota, atau lesen majlis perbandaran yang memerlukan tindakan.'}
              </p>
            </div>

            <div className="p-4.5 bg-white/90 rounded-xl border border-[#EAE1D3] space-y-2">
              <strong className="text-[#C85A32] block text-lg font-bold">
                {isEn ? '3. Tenancy & Premise Records' : '3. Perjanjian Sewa & Rekod Premis'}
              </strong>
              <p className="text-[#484F5B] text-base leading-relaxed">
                {isEn
                  ? 'Commercial tenancy agreement drafts, premises floor plans, or assessment tax receipts for licensing support.'
                  : 'Draf perjanjian sewaan komersial, pelan lantai premis, atau resit cukai taksiran bagi sokongan pelesenan.'}
              </p>
            </div>

            <div className="p-4.5 bg-white/90 rounded-xl border border-[#EAE1D3] space-y-2">
              <strong className="text-[#C85A32] block text-lg font-bold">
                {isEn ? '4. Specific Request Summary' : '4. Ringkasan Permohonan Khusus'}
              </strong>
              <p className="text-[#484F5B] text-base leading-relaxed">
                {isEn
                  ? 'A brief note outlining your target deadline, specific issues faced, or preferred operational timeframe.'
                  : 'Nota ringkas menerangkan sasaran tarikh akhir, cabaran yang dihadapi, atau tempoh operasi yang diharapkan.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONTACT CALLOUT */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
        <h2 className="text-3xl font-bold text-[#1E2229] font-display">
          {isEn ? 'Need Assistance with a Custom Combination of Services?' : 'Perlukan Bantuan Gabungan Perkhidmatan?'}
        </h2>
        <p className="text-lg text-[#5A6270]">
          {isEn
            ? 'We frequently coordinate multi-stage requirements, such as business setup together with premise licensing and workforce documentation.'
            : 'Kami sering menyelaras keperluan berbilang peringkat, seperti pendaftaran syarikat bersama pelesenan premis dan dokumentasi pekerja.'}
        </p>
        <button
          onClick={() => onNavigate('contact')}
          className="touch-target px-8 py-3.5 bg-[#C85A32] hover:bg-[#B34A25] text-white text-lg font-semibold rounded-xl shadow-md transition-all inline-flex items-center gap-2"
        >
          <span>{isEn ? 'Enquire with Our Team' : 'Bincang Bersama Pasukan Kami'}</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </section>
    </div>
  );
};

export default ServicesPage;
