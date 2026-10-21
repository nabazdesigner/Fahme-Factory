import React from 'react';

interface FahmeLogoProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  glow?: boolean;
}

export const FahmeLogo: React.FC<FahmeLogoProps> = ({ 
  className = '',
  size = 'md',
  glow = false,
}) => {
  // Proportions matching the official badge logo (4:3 ratio: 1000 x 750)
  const sizeClasses = {
    xs: 'w-12 sm:w-14 h-auto',
    sm: 'w-24 sm:w-28 h-auto',
    md: 'w-44 xs:w-52 sm:w-60 md:w-68 lg:w-76 xl:w-84 2xl:w-96 3xl:w-[420px] h-auto',
    lg: 'w-64 sm:w-80 md:w-96 lg:w-[420px] xl:w-[500px] 2xl:w-[580px] h-auto',
    xl: 'w-80 sm:w-96 md:w-[480px] lg:w-[560px] xl:w-[640px] h-auto',
  }[size];

  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 select-none ${className}`}>
      {/* Very subtle ambient golden warmth only when glow is true (neon کاڵ) */}
      {glow && (
        <div 
          className="absolute inset-0 rounded-2xl bg-amber-400/10 blur-xl pointer-events-none -z-10"
          aria-hidden="true"
        />
      )}

      {/* Official Fahme Logo rendered directly as a transparent PNG photo asset */}
      <img
        src="/fahme_logo.png"
        alt="FAHME BLOCK MACHINE FACTORY Logo"
        className={`${sizeClasses} object-contain drop-shadow-[0_4px_16px_rgba(0,0,0,0.65)]`}
        loading="eager"
        decoding="async"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
