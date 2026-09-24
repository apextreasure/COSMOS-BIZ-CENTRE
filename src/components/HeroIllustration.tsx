import React from 'react';

export const HeroIllustration: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full max-w-[520px] aspect-square mx-auto flex items-center justify-center ${className}`}>
      {/* Ambient animated background glow layers */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#E5A93B]/20 via-[#C85A32]/15 to-transparent blur-3xl -z-10 animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute w-3/4 h-3/4 rounded-full bg-[#FAF8F5]/85 border border-[#E5A93B]/25 -z-5" />

      {/* Main SVG Vector Canvas */}
      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm select-none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="orbitGradHero" x1="50" y1="50" x2="450" y2="450" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F59E0B" />
            <stop offset="0.5" stopColor="#E5A93B" />
            <stop offset="1" stopColor="#C85A32" />
          </linearGradient>

          <linearGradient id="glassCardGrad" x1="100" y1="120" x2="350" y2="380" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFFFF" stopOpacity="0.96" />
            <stop offset="1" stopColor="#FBF7F0" stopOpacity="0.88" />
          </linearGradient>

          <linearGradient id="accentCardGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFFBEB" />
            <stop offset="1" stopColor="#FEF3C7" />
          </linearGradient>

          <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#1E2229" floodOpacity="0.09" />
          </filter>

          <filter id="glowGleam" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* 1. Animated Concentric Subtle Guide Orbits */}
        <g className="anim-orbit-1">
          <circle cx="250" cy="250" r="215" stroke="#E5A93B" strokeWidth="1.2" strokeDasharray="8 8" strokeOpacity="0.4" />
          {/* Orbiting star particle on outer orbit */}
          <circle cx="465" cy="250" r="3.5" fill="#E5A93B" />
        </g>

        <g className="anim-orbit-2">
          <circle cx="250" cy="250" r="165" stroke="#C85A32" strokeWidth="1.2" strokeDasharray="5 9" strokeOpacity="0.3" />
          {/* Orbiting star particle on middle orbit */}
          <circle cx="85" cy="250" r="3" fill="#C85A32" />
        </g>

        <g className="anim-orbit-3">
          <circle cx="250" cy="250" r="115" stroke="#1E2229" strokeWidth="0.9" strokeDasharray="3 7" strokeOpacity="0.16" />
        </g>

        {/* 2. Dynamic C-orbit sweep arc with pulsing satellite path */}
        <path
          d="M 370 130 A 180 180 0 1 0 410 330"
          stroke="url(#orbitGradHero)"
          strokeWidth="6.5"
          strokeLinecap="round"
          strokeOpacity="0.9"
        />

        {/* 3. Floating Connected Nodes with Beacon Ping Waves */}
        {/* Node 1: Startup & Business Setup (Top Right) */}
        <g transform="translate(370, 130)">
          <circle cx="0" cy="0" r="16" fill="none" stroke="#E5A93B" strokeWidth="1.5" className="anim-beacon-wave" />
          <circle cx="0" cy="0" r="22" fill="#FFFFFF" stroke="#E5A93B" strokeWidth="2.5" filter="url(#cardShadow)" />
          <circle cx="0" cy="0" r="9" fill="#E5A93B" />
          <circle cx="0" cy="0" r="4" fill="#FFFFFF" />
        </g>

        {/* Node 2: Foreign Worker & Permits (Bottom Right) */}
        <g transform="translate(410, 330)">
          <circle cx="0" cy="0" r="14" fill="none" stroke="#C85A32" strokeWidth="1.5" className="anim-beacon-wave" style={{ animationDelay: '1.2s' }} />
          <circle cx="0" cy="0" r="20" fill="#FFFFFF" stroke="#C85A32" strokeWidth="2.5" filter="url(#cardShadow)" />
          <circle cx="0" cy="0" r="8" fill="#C85A32" />
          <circle cx="0" cy="0" r="3.5" fill="#FFFFFF" />
        </g>

        {/* Node 3: Administration & Coordination (Left) */}
        <g transform="translate(90, 290)">
          <circle cx="0" cy="0" r="12" fill="none" stroke="#D97706" strokeWidth="1.5" className="anim-beacon-wave" style={{ animationDelay: '2.1s' }} />
          <circle cx="0" cy="0" r="18" fill="#FFFFFF" stroke="#D97706" strokeWidth="2" filter="url(#cardShadow)" />
          <circle cx="0" cy="0" r="7" fill="#D97706" />
          <circle cx="0" cy="0" r="3" fill="#FFFFFF" />
        </g>

        {/* 4. Central Glassmorphic Foundation Document / Centre Card */}
        <g filter="url(#cardShadow)" className="transition-transform duration-300 hover:scale-[1.02] cursor-pointer">
          {/* Back document sheet with slight offset */}
          <rect
            x="190"
            y="130"
            width="170"
            height="220"
            rx="12"
            fill="#FFFFFF"
            stroke="#EFE8DE"
            strokeWidth="2"
            transform="rotate(6 275 240)"
          />
          {/* Back sheet detail lines */}
          <path
            d="M 220 170 H 310 M 220 190 H 330 M 220 210 H 290"
            stroke="#DCD4C8"
            strokeWidth="3"
            strokeLinecap="round"
            transform="rotate(6 275 240)"
          />

          {/* Primary Main Document Card (Centered & Upright) */}
          <rect
            x="145"
            y="120"
            width="190"
            height="240"
            rx="14"
            fill="url(#glassCardGrad)"
            stroke="#E2D8CC"
            strokeWidth="1.5"
          />

          {/* Document Header Accent */}
          <rect x="170" y="145" width="48" height="6" rx="3" fill="#C85A32" />
          <circle cx="305" cy="148" r="5" fill="#E5A93B" className="animate-pulse" />

          {/* Document Content Lines */}
          <path d="M 170 172 H 295" stroke="#1E2229" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.8" />
          <path d="M 170 190 H 270" stroke="#1E2229" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.45" />
          <path d="M 170 208 H 290" stroke="#1E2229" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.45" />

          {/* Divider */}
          <path d="M 170 228 H 310" stroke="#E5A93B" strokeWidth="1" strokeDasharray="3 3" />

          {/* Interactive Checkmark Items with Shimmer */}
          <g transform="translate(170, 246)">
            <circle cx="6" cy="6" r="6.5" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5" />
            <path d="M 3 6 L 5.5 8.5 L 9 3.5" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="18" y="3.5" width="75" height="5" rx="2.5" fill="#4B5563" className="anim-shimmer" />
          </g>

          <g transform="translate(170, 270)">
            <circle cx="6" cy="6" r="6.5" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5" />
            <path d="M 3 6 L 5.5 8.5 L 9 3.5" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="18" y="3.5" width="95" height="5" rx="2.5" fill="#4B5563" className="anim-shimmer" style={{ animationDelay: '0.8s' }} />
          </g>

          <g transform="translate(170, 294)">
            <circle cx="6" cy="6" r="6.5" fill="#FFEDD5" stroke="#C85A32" strokeWidth="1.5" />
            <path d="M 3 6 L 5.5 8.5 L 9 3.5" stroke="#C85A32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="18" y="3.5" width="85" height="5" rx="2.5" fill="#4B5563" className="anim-shimmer" style={{ animationDelay: '1.6s' }} />
          </g>

          {/* Official Verification Seal / Stamp with Rotating Border & Glow */}
          <g transform="translate(275, 305)">
            <circle cx="16" cy="16" r="22" fill="#FFFBEB" stroke="#E5A93B" strokeWidth="1.5" strokeDasharray="4 3" className="anim-seal-spin" />
            <circle cx="16" cy="16" r="16" fill="#E5A93B" fillOpacity="0.18" />
            <path d="M 11 16 L 15 20 L 22 13" stroke="#C85A32" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>

        {/* 5. Animated Overlapping Connected Service Card - Bottom Left (Floating Bob) */}
        <g className="anim-badge-bottomleft" filter="url(#cardShadow)">
          <rect x="0" y="0" width="186" height="74" rx="14" fill="#FFFFFF" stroke="#E8E0D5" strokeWidth="1.5" />
          <circle cx="28" cy="37" r="16" fill="#FEF3C7" stroke="#E5A93B" strokeWidth="1.5" />
          {/* Small building / centre icon */}
          <path d="M 22 42 V 32 H 34 V 42 M 26 36 H 30" stroke="#D97706" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          <text x="52" y="32" fill="#1E2229" fontSize="14" fontWeight="700" fontFamily="sans-serif">
            One-Stop Centre
          </text>
          <text x="52" y="50" fill="#4B5563" fontSize="12" fontWeight="600" fontFamily="sans-serif">
            12 Coordinated Services
          </text>
        </g>

        {/* 6. Animated Floating Stamp Card - Top Right (Floating Bob) */}
        <g className="anim-badge-topright" filter="url(#cardShadow)">
          <rect x="0" y="0" width="158" height="62" rx="12" fill="#FFFFFF" stroke="#EFE9DE" strokeWidth="1.2" />
          <circle cx="24" cy="31" r="13" fill="#FFEDD5" />
          <path d="M 19 31 L 22.5 34.5 L 29 27" stroke="#C85A32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <text x="44" y="29" fill="#1E2229" fontSize="13.5" fontWeight="700" fontFamily="sans-serif">
            Document Ready
          </text>
          <text x="44" y="46" fill="#C85A32" fontSize="11.5" fontWeight="600" fontFamily="sans-serif">
            Verified Checklists
          </text>
        </g>
      </svg>
    </div>
  );
};

export default HeroIllustration;
