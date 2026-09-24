import React, { useState } from 'react';
import { PageRoute } from '../components/Header';
import { Language, PORTFOLIO_DATA, CONTACT_CONFIG, PortfolioItem } from '../data/content';
import {
  Briefcase,
  FileCheck2,
  GraduationCap,
  Sparkles,
  MapPin,
  Building,
  Info,
  ArrowRight,
  Filter,
} from 'lucide-react';

interface PortfolioPageProps {
  onNavigate: (page: PageRoute) => void;
  language: Language;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onNavigate, language }) => {
  const isEn = language === 'en';
  const [activeFilter, setActiveFilter] = useState<'all' | 'recruitment' | 'documentation' | 'training'>('all');

  const filterTabs = [
    { id: 'all', labelEn: 'All Experience', labelBm: 'Semua Pengalaman' },
    { id: 'recruitment', labelEn: 'Recruitment & Permits', labelBm: 'Pengambilan & Permit' },
    { id: 'documentation', labelEn: 'Documentation Support', labelBm: 'Sokongan Dokumentasi' },
    { id: 'training', labelEn: 'Training & CSR', labelBm: 'Latihan & CSR' },
  ];

  const filteredProjects = PORTFOLIO_DATA.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'recruitment':
        return <Briefcase className="w-5 h-5 text-[#C85A32]" />;
      case 'documentation':
        return <FileCheck2 className="w-5 h-5 text-[#D97706]" />;
      case 'training':
        return <GraduationCap className="w-5 h-5 text-[#2563EB]" />;
      default:
        return <Building className="w-5 h-5 text-[#C85A32]" />;
    }
  };

  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      {/* 1. PAGE HEADER */}
      <section className="pt-10 md:pt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100/80 border border-amber-300/50 text-[#C85A32] text-sm sm:text-base font-bold tracking-wide">
            <Sparkles className="w-4 h-4 text-[#D97706]" />
            <span>{isEn ? 'Kosmos Group Profile Portfolio' : 'Portfolio Profil Kosmos Group'}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1E2229] font-display tracking-tight leading-[1.15]">
            {isEn ? 'Selected Experience from the' : 'Pengalaman Terpilih daripada'}{' '}
            <span className="text-[#C85A32]">{isEn ? 'Kosmos Group Profile' : 'Profil Kosmos Group'}</span>
          </h1>

          <p className="text-xl sm:text-2xl font-medium text-[#484F5B] leading-relaxed">
            {isEn
              ? 'A curated record of recruitment, permit facilitation, official documentation, and international CSR engagements documented in the Kosmos Group of Companies profile.'
              : 'Rekod terpilih mengenai pengambilan tenaga kerja, pemudahan permit, dokumentasi rasmi, dan program CSR antarabangsa seperti didokumentasikan dalam profil Kosmos Group of Companies.'}
          </p>
        </div>

        {/* Attribution & Context Card */}
        <div className="mt-8 p-5 bg-amber-50/90 rounded-2xl border border-amber-200 text-sm sm:text-base text-[#3A414E] leading-relaxed flex items-start gap-3.5 shadow-2xs">
          <Info className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#1E2229] font-bold block mb-1">
              {isEn ? 'Attribution & Editorial Notice:' : 'Notis Rujukan & Integriti:'}
            </strong>
            {isEn
              ? 'All entries listed on this page represent historical engagements, client scopes, and public programmes reported in the Kosmos Group profile document (Pages 8, 9, and 10). In accordance with factual accuracy standards, text-led cards are presented without fabricated photographs or artificial endorsements. Undated items reflect completed historical projects.'
              : 'Semua rekod dalam halaman ini merujuk kepada tugasan lampau, skop pelanggan, dan program awam yang dilaporkan dalam profil Kosmos Group (Halaman 8, 9, dan 10). Mengikut piawaian ketepatan fakta, kad berteraskan teks dipaparkan tanpa manipulasi gambar atau testimoni rekaan. Projek tanpa tarikh merujuk kepada tugasan lampau yang telah selesai.'}
          </div>
        </div>
      </section>

      {/* 2. FILTER CONTROLS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 border-b border-[#E8DFD3] scrollbar-none">
          <span className="text-sm sm:text-[15px] uppercase font-bold text-[#484F5B] flex items-center gap-1.5 mr-2 shrink-0">
            <Filter className="w-4 h-4 text-[#C85A32]" />
            <span>{isEn ? 'Category:' : 'Kategori:'}</span>
          </span>
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`touch-target px-5 py-2.5 text-base font-semibold rounded-xl transition-all whitespace-nowrap focus-visible:ring-2 focus-visible:ring-[#C85A32] ${
                activeFilter === tab.id
                  ? 'bg-[#C85A32] text-white shadow-xs'
                  : 'bg-white/85 hover:bg-white text-[#3A414E] border border-[#DCD3C7]'
              }`}
            >
              {isEn ? tab.labelEn : tab.labelBm}
            </button>
          ))}
        </div>

        {/* 3. PROJECT CARDS GRID (TEXT-LED AS MANDATED) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredProjects.map((item) => (
            <div
              key={item.id}
              className="glass-panel p-7 rounded-3xl border border-[#E5DFD4] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group space-y-4"
            >
              <div className="space-y-3">
                {/* Sector & Location Metadata */}
                <div className="rounded-2xl border border-[#F0E3D2] bg-gradient-to-br from-[#FFF8EA] via-white to-[#FAF5ED] p-3.5 shadow-2xs">
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#EAD8BF] text-[#C85A32] flex items-center justify-center shadow-2xs shrink-0">
                      {getCategoryIcon(item.category)}
                    </div>
                    <div className="min-w-0 flex-1 space-y-2">
                      <div className="text-[13px] sm:text-sm font-extrabold uppercase tracking-[0.08em] leading-snug text-[#C85A32] break-words">
                        {isEn ? item.sectorEn : item.sectorBm}
                      </div>
                      <div className="inline-flex max-w-full items-start gap-1.5 rounded-full bg-white/90 border border-[#EAD8BF] px-2.5 py-1 text-[13px] sm:text-sm font-semibold leading-snug text-[#4B5563] shadow-2xs">
                        <MapPin className="w-3.5 h-3.5 text-[#D97706] shrink-0 mt-0.5" />
                        <span className="min-w-0 break-words">{isEn ? item.locationEn : item.locationBm}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project / Client Title */}
                <h3 className="text-xl font-bold text-[#1E2229] font-display leading-snug group-hover:text-[#C85A32] transition-colors">
                  {isEn ? item.titleEn : item.titleBm}
                </h3>

                {/* Scope of Support */}
                <div className="p-3.5 bg-[#FAF5ED] rounded-xl border border-[#EDE2D2] text-base text-[#2C313A] font-semibold leading-relaxed">
                  {isEn ? item.scopeEn : item.scopeBm}
                </div>

                {/* Engagement Details */}
                <p className="text-[#3A414E] text-base leading-relaxed">
                  {isEn ? item.detailsEn : item.detailsBm}
                </p>
              </div>

              {/* Attribution Footer */}
              <div className="pt-3 border-t border-[#EFE8DD] flex items-center justify-between text-sm sm:text-[15px] text-[#5A6270]">
                <span>
                  <strong className="text-[#1E2229]">{isEn ? 'Entity: ' : 'Entiti: '}</strong>
                  {item.clientOrEntity}
                </span>
                <span className="px-3 py-1 rounded-md bg-amber-100/90 text-amber-900 font-bold text-sm tracking-wide">
                  Kosmos Profile
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SUMMARY METRICS CALLOUT */}
      <section className="bg-gradient-to-r from-[#212630] to-[#1A1D24] text-white py-14 rounded-3xl max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 shadow-xl">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-sm uppercase font-bold tracking-wider text-amber-300">
            {isEn ? 'Proven Delivery' : 'Rekod Terbukti'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display">
            {isEn
              ? 'Multi-Sector Documentation & Coordination Readiness'
              : 'Kesediaan Penyelarasan & Dokumentasi Rentas Sektor'}
          </h2>
          <p className="text-[#C5CDD9] text-lg leading-relaxed max-w-2xl mx-auto">
            {isEn
              ? 'From heavy offshore energy platforms to nationwide training tours, our background brings structured attention to detail for your business.'
              : 'Daripada platform tenaga luar pantai hingga ke siri jelajah latihan kebangsaan, latar belakang kami membawakan ketelitian berstruktur untuk perniagaan anda.'}
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="touch-target px-8 py-3.5 bg-[#C85A32] hover:bg-[#B34A25] text-white text-lg font-semibold rounded-xl shadow-md transition-all inline-flex items-center gap-2"
            >
              <span>{isEn ? 'Initiate an Enquiry' : 'Mulakan Pertanyaan'}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
