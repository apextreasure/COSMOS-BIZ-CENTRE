import React from 'react';

interface LogoProps {
  variant?: 'header' | 'footer' | 'mark-only';
  className?: string;
  showDescriptor?: boolean;
}

export const CosmosLogoSymbol: React.FC<{ className?: string; isLight?: boolean }> = ({
  className = 'w-10 h-10',
  isLight = false,
}) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} shrink-0`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={isLight ? 'orbitGradLight' : 'orbitGradDark'} x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F59E0B" />
          <stop offset="0.5" stopColor="#E5A93B" />
          <stop offset="1" stopColor="#C85A32" />
        </linearGradient>
        <linearGradient id={isLight ? 'docGradLight' : 'docGradDark'} x1="36" y1="28" x2="64" y2="72" gradientUnits="userSpaceOnUse">
          <stop stopColor={isLight ? '#FFFFFF' : '#1E2229'} />
          <stop offset="1" stopColor={isLight ? '#E5E7EB' : '#2D323E'} />
        </linearGradient>
      </defs>

      {/* Outer C-Shaped Orbital Ring */}
      <path
        d="M68 22 A 38 38 0 1 0 74 74"
        stroke={`url(#${isLight ? 'orbitGradLight' : 'orbitGradDark'})`}
        strokeWidth="7"
        strokeLinecap="round"
      />

      {/* Orbital Satellite Node / Service Point */}
      <circle cx="75" cy="24" r="5" fill="#C85A32" />
      <circle cx="75" cy="24" r="2.5" fill="#FEF3C7" />

      {/* Stylized Document & Structure Core */}
      <rect
        x="36"
        y="30"
        width="28"
        height="38"
        rx="3"
        fill={`url(#${isLight ? 'docGradLight' : 'docGradDark'})`}
        stroke={isLight ? '#FFFFFF' : '#1E2229'}
        strokeWidth="1.5"
      />

      {/* Building / Document Architectural Lines */}
      <path
        d="M42 40 H58 M42 47 H58 M42 54 H52 M42 61 H50"
        stroke="#E5A93B"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* Center Keystone Dot */}
      <circle cx="58" cy="61" r="2" fill="#C85A32" />
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({
  variant = 'header',
  className = '',
  showDescriptor = true,
}) => {
  const isFooter = variant === 'footer';

  if (variant === 'mark-only') {
    return <CosmosLogoSymbol className={className || 'w-10 h-10'} isLight={isFooter} />;
  }

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      <CosmosLogoSymbol
        className={isFooter ? 'w-11 h-11 md:w-12 md:h-12' : 'w-10 h-10 md:w-11 md:h-11'}
        isLight={isFooter}
      />
      <div className="flex flex-col">
        <div className="flex items-center tracking-tight font-extrabold leading-none">
          <span className={`text-xl md:text-2xl font-display ${isFooter ? 'text-white' : 'text-[#1E2229]'}`}>
            COSMOS
          </span>
          <span className="text-xl md:text-2xl font-display text-[#E5A93B] ml-1.5 font-bold">
            BIZ
          </span>
          <span className={`text-xl md:text-2xl font-display ml-1.5 font-medium ${isFooter ? 'text-amber-200' : 'text-[#C85A32]'}`}>
            CENTRE
          </span>
        </div>
        {showDescriptor && (
          <span
            className={
              isFooter
                ? 'text-xs sm:text-sm font-semibold tracking-wider uppercase mt-1 text-amber-200/90'
                : 'text-xs font-semibold tracking-normal text-[#484F5B] mt-0.5'
            }
          >
            {isFooter ? 'One-Stop Business & Documentation Services' : 'Business & Documentation'}
          </span>
        )}
      </div>
    </div>
  );
};

export default Logo;
