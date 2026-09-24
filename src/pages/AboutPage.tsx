import React from 'react';
import { PageRoute } from '../components/Header';
import {
  Language,
  CONTACT_CONFIG,
  TEAM_MEMBERS,
  REPORTED_ACHIEVEMENTS,
} from '../data/content';
import {
  Target,
  Compass,
  CheckCircle2,
  Users,
  Building2,
  ArrowRight,
  ShieldAlert,
  Award,
  Sparkles,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageRoute) => void;
  language: Language;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, language }) => {
  const isEn = language === 'en';

  return (
    <div className="space-y-20 md:space-y-28 pb-16">
      {/* 1. PAGE HEADER */}
      <section className="pt-10 md:pt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100/80 border border-amber-300/50 text-[#C85A32] text-sm sm:text-base font-bold tracking-wide">
            <Building2 className="w-4 h-4 text-[#D97706]" />
            <span>{isEn ? 'Corporate Overview' : 'Gambaran Korporat'}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1E2229] font-display tracking-tight leading-[1.15]">
            {isEn ? 'About' : 'Tentang'}{' '}
            <span className="text-[#C85A32]">COSMOS BIZ CENTRE</span>
          </h1>

          <p className="text-xl sm:text-2xl font-medium text-[#484F5B] leading-relaxed">
            {isEn
              ? 'A dedicated, convenient centre establishing a single point of contact for business setup, documentation, administration, and service coordination.'
              : 'Pusat sehenti berdedikasi yang menyediakan satu titik penghubung mudah bagi pendaftaran perniagaan, dokumentasi rasmi, pentadbiran, serta penyelarasan perkhidmatan.'}
          </p>
        </div>
      </section>

      {/* 2. INTRODUCTION & KOSMOS GROUP BACKGROUND */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-[#E5DFD4] shadow-sm space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1E2229] font-display">
                {isEn
                  ? 'A Single Point of Contact for Administration'
                  : 'Satu Titik Hubungan Bagi Urusan Pentadbiran'}
              </h2>

              <p className="text-[#3A414E] text-lg leading-relaxed">
                {isEn
                  ? 'COSMOS BIZ CENTRE was conceptualized to remove the friction, confusion, and repetitive delays individuals and growing enterprises face when dealing with statutory filings, permits, and business administration. Instead of visiting multiple disparate agencies, clients receive coordinated guidance in one comfortable centre.'
                  : 'COSMOS BIZ CENTRE diwujudkan untuk menghapuskan kekeliruan, pembaziran masa, dan kelewatan yang sering dialami oleh individu serta usahawan semasa menguruskan pemfailan statutori, permit, dan pentadbiran perniagaan. Daripada berurusan dengan pelbagai jabatan berasingan, pelanggan kini menerima bimbingan tersusun di satu pusat.'}
              </p>

              <p className="text-[#3A414E] text-lg leading-relaxed">
                {isEn
                  ? 'Our operational capabilities and advisory foundations build upon the extensive experience detailed in the supplied Kosmos Group profile—encompassing documentation consultancy, manpower support, recruitment process outsourcing (RPO), corporate training, event management, and CSR coordination.'
                  : 'Asas nasihat dan keupayaan operasi kami memanfaatkan pengalaman luas yang didokumentasikan dalam profil Kosmos Group—merangkumi perundingan dokumentasi, sokongan tenaga kerja, penyumberan luar pengambilan (RPO), latihan korporat, pengurusan acara, serta penyelarasan CSR.'}
              </p>

              {/* Mention of Entities from Profile */}
              <div className="pt-4 border-t border-[#EFE7DC] space-y-2.5">
                <span className="text-sm uppercase font-bold tracking-wider text-[#C85A32] block">
                  {isEn ? 'Entities Documented in Kosmos Group Profile:' : 'Entiti Terlibat Dalam Profil Kosmos Group:'}
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-base text-[#3A414E]">
                  {CONTACT_CONFIG.groupEntities.map((entity, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#E5A93B]" />
                      <span className="font-medium">{entity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Objectives (Proposed COSMOS Positioning) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FAF5ED] p-8 sm:p-9 rounded-3xl border border-[#E9DFCF] shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#C85A32] flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1E2229] font-display">
                    {isEn ? 'Proposed Objectives' : 'Objektif Pusat'}
                  </h3>
                  <span className="text-sm sm:text-[15px] text-[#484F5B] font-medium">
                    {isEn ? 'COSMOS BIZ CENTRE strategic goals' : 'Sasaran strategik COSMOS BIZ CENTRE'}
                  </span>
                </div>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 shrink-0" />
                  <div>
                    <strong className="text-[#1E2229] block text-lg font-bold">
                      {isEn ? 'Simplify Administration' : 'Memudahkan Pentadbiran'}
                    </strong>
                    <span className="text-[#484F5B] text-base leading-relaxed">
                      {isEn
                        ? 'Streamline multi-step governmental and commercial paperwork into plain, structured checklists.'
                        : 'Memudahkan urusan kertas kerja agensi dan komersial kepada senarai semak yang teratur.'}
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 shrink-0" />
                  <div>
                    <strong className="text-[#1E2229] block text-lg font-bold">
                      {isEn ? 'Improve Document Readiness' : 'Meningkatkan Kesediaan Dokumen'}
                    </strong>
                    <span className="text-[#484F5B] text-base leading-relaxed">
                      {isEn
                        ? 'Ensure dossiers and submission forms meet authority prerequisites prior to official filing.'
                        : 'Memastikan dosier dan borang permohonan memenuhi prasyarat agensi sebelum penyerahan.'}
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 shrink-0" />
                  <div>
                    <strong className="text-[#1E2229] block text-lg font-bold">
                      {isEn ? 'Save Clients Time' : 'Menjimatkan Masa Pelanggan'}
                    </strong>
                    <span className="text-[#484F5B] text-base leading-relaxed">
                      {isEn
                        ? 'Free founders, HR teams, and individuals from bureaucratic bottlenecks and repetitive visits.'
                        : 'Membebaskan pengasas syarikat, pasukan HR, dan individu daripada kelewatan birokrasi.'}
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-1 shrink-0" />
                  <div>
                    <strong className="text-[#1E2229] block text-lg font-bold">
                      {isEn ? 'Connect with Appropriate Providers' : 'Menghubungkan Pembekal Tepat'}
                    </strong>
                    <span className="text-[#484F5B] text-base leading-relaxed">
                      {isEn
                        ? 'Liaise directly with authorized legal practitioners, certified translators, and vetted logistics resources.'
                        : 'Menghubungkan pelanggan dengan pengamal perundangan bertauliah dan sumber terjemahan sah.'}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROPOSED VISION & MISSION (Proposed Brand Positioning) */}
      <section className="bg-gradient-to-r from-[#212630] to-[#1A1D24] text-white py-16 rounded-3xl max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 shadow-xl">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <span className="text-sm uppercase font-bold tracking-wider text-amber-300">
              {isEn ? 'Brand Direction & Values' : 'Hala Tuju & Nilai Jenama'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display">
              {isEn ? 'Vision & Mission' : 'Visi & Misi'}
            </h2>
            <p className="text-[#C2C9D6] text-base italic">
              {isEn
                ? 'Proposed strategic positioning for COSMOS BIZ CENTRE'
                : 'Kedudukan strategik yang dicadangkan bagi COSMOS BIZ CENTRE'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center font-bold">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white font-display">
                {isEn ? 'Our Vision' : 'Visi Kami'}
              </h3>
              <p className="text-[#D1D5DB] text-lg leading-relaxed">
                {isEn
                  ? 'To become a trusted one-stop centre for business, documentation, and manpower support—recognized for procedural integrity, efficiency, and seamless coordination.'
                  : 'Menjadi pusat sehenti yang dipercayai bagi sokongan perniagaan, dokumentasi, dan tenaga kerja—dikenali kerana integriti prosedur, kecekapan, serta penyelarasan lancar.'}
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-400/20 text-[#E5A93B] flex items-center justify-center font-bold">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white font-display">
                {isEn ? 'Our Mission' : 'Misi Kami'}
              </h3>
              <p className="text-[#D1D5DB] text-lg leading-relaxed">
                {isEn
                  ? 'To simplify documentation and manpower processes through clear guidance, responsible coordination, and meticulous attention to applicable statutory procedures.'
                  : 'Memudahkan proses dokumentasi dan tenaga kerja melalui panduan jelas, penyelarasan bertanggungjawab, serta ketelitian terhadap tatacara statutori berkaitan.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TEAM FEATURED IN KOSMOS GROUP PROFILE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-sm font-bold uppercase tracking-wider text-[#C85A32] bg-orange-100/90 px-3.5 py-1.5 rounded-full mb-2">
            {isEn ? 'Source Attribution' : 'Rujukan Profil'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E2229] font-display">
            {isEn
              ? 'Team Featured in the Kosmos Group Profile'
              : 'Pasukan Ditampilkan Dalam Profil Kosmos Group'}
          </h2>
          <p className="text-lg text-[#5A6270] mt-2">
            {isEn
              ? 'A dynamic experienced team from diverse backgrounds with more than 20 years in sales marketing, copywriting, consultancy, foreign language translation, and administrative management.'
              : 'Pasukan berpengalaman dari pelbagai latar belakang dengan lebih 20 tahun dalam pemasaran, penulisan, perundingan, penterjemahan bahasa, serta pengurusan pentadbiran.'}
          </p>
        </div>

        {/* Role-Based Organisation Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={idx}
              className="glass-panel p-8 rounded-3xl border border-[#E5DFD4] shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <div>
                {/* Elegant Monogram Badge (No invented photos) */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#FAF5ED] to-[#EFE4D2] border-2 border-[#E5A93B]/40 flex items-center justify-center text-2xl font-bold font-display text-[#C85A32] shadow-2xs mb-5">
                  {member.initials}
                </div>

                <div className="space-y-1 mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1E2229] font-display">
                    {member.name}
                  </h3>
                  <div className="text-[#C85A32] font-bold text-base">
                    {isEn ? member.roleEn : member.roleBm}
                  </div>
                  <div className="text-sm uppercase tracking-wider text-[#5A6270] font-semibold">
                    {isEn ? member.experienceEn : member.experienceBm}
                  </div>
                </div>

                <p className="text-[#484F5B] text-[16px] leading-relaxed">
                  {isEn ? member.profileFocusEn : member.profileFocusBm}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EFE7DC] text-sm text-[#5A6270]">
                <span>{isEn ? 'Kosmos Group Profile Reference: Page 4' : 'Rujukan Profil Kosmos Group: Halaman 4'}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. ACHIEVEMENTS REPORTED IN PROFILE */}
      <section className="bg-[#FAF5ED] py-16 border-y border-[#EBE2D4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-sm font-bold uppercase tracking-wider text-[#C85A32]">
              {isEn ? 'Historical Benchmarks' : 'Penanda Aras Bersejarah'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E2229] font-display mt-1">
              {isEn
                ? 'Experience Reported in the Kosmos Group Profile'
                : 'Pengalaman Dilaporkan Dalam Profil Kosmos Group'}
            </h2>
            <p className="text-lg text-[#5A6270] mt-2">
              {isEn
                ? 'The following figures are recorded in the supplied Kosmos Group profile document.'
                : 'Angka-angka berikut direkodkan dalam dokumen profil Kosmos Group yang dibekalkan.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {REPORTED_ACHIEVEMENTS.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-[#E0D5C5] text-center shadow-2xs"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-[#C85A32] font-display tabular-nums">
                  {isEn ? item.metric : item.metricBm}
                </div>
                <div className="text-lg font-bold text-[#1E2229] mt-2 leading-snug">
                  {isEn ? item.labelEn : item.labelBm}
                </div>
                <p className="text-[14px] sm:text-[15px] text-[#484F5B] mt-2 leading-relaxed font-medium">
                  {isEn ? item.descEn : item.descBm}
                </p>
              </div>
            ))}
          </div>

          {/* Important Disclaimers & Integrity Note */}
          <div className="mt-10 p-5 rounded-2xl bg-amber-50/90 border border-amber-200 max-w-4xl mx-auto flex items-start gap-3.5 text-sm sm:text-[15px] text-[#3A414E] leading-relaxed">
            <ShieldAlert className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#1E2229] block mb-1 font-bold">
                {isEn ? 'Compliance & Factual Integrity Statement' : 'Penyataan Integriti & Pematuhan'}
              </strong>
              {isEn
                ? 'COSMOS BIZ CENTRE presents these metrics strictly as reported in the Kosmos Group profile. We do not sum these numbers, assert independent third-party audit, or imply that COSMOS BIZ CENTRE independently completed past group undertakings. All services are performed as administrative coordination and documentation support.'
                : 'COSMOS BIZ CENTRE memaparkan data ini semata-mata sebagaimana dilaporkan dalam profil Kosmos Group. Kami tidak menggabungkan angka-angka ini atau mendakwa bahawa COSMOS BIZ CENTRE secara berasingan telah menyempurnakan projek lampau kumpulan. Semua khidmat dijalankan sebagai sokongan dan penyelarasan pentadbiran.'}
            </div>
          </div>
        </div>
      </section>

      {/* 6. NEXT STEP CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1E2229] font-display">
          {isEn
            ? 'Discover How We Can Support Your Operations'
            : 'Ketahui Bagaimana Kami Boleh Membantu Urusan Anda'}
        </h2>
        <p className="text-lg text-[#5A6270] max-w-2xl mx-auto">
          {isEn
            ? 'Explore our full suite of 12 business and documentation services or chat directly with our team.'
            : 'Terokai kesemua 12 perkhidmatan perniagaan dan dokumentasi kami atau hubungi pasukan kami.'}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={() => onNavigate('services')}
            className="touch-target px-7 py-3.5 bg-[#C85A32] hover:bg-[#B34A25] text-white text-lg font-semibold rounded-xl shadow-md transition-all flex items-center gap-2"
          >
            <span>{isEn ? 'View All 12 Services' : 'Lihat Semua 12 Perkhidmatan'}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="touch-target px-7 py-3.5 bg-white border border-[#D5C9B8] hover:bg-[#F2ECE1] text-[#1E2229] text-lg font-semibold rounded-xl transition-all"
          >
            <span>{isEn ? 'Contact Centre' : 'Hubungi Pusat'}</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
