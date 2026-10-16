import React from 'react';

interface PustamLogoProps {
  className?: string;
  variant?: 'full' | 'mark-only';
  size?: 'sm' | 'md' | 'lg';
}

export const PustamLogo: React.FC<PustamLogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md',
}) => {
  const heights = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16',
  };

  return (
    <div className={`flex items-center select-none ${className}`}>
      <img
        src="/assets/PUSTAM.png"
        alt="PUSTAM PAPER PRODUCTS"
        className={`${heights[size]} w-auto object-contain rounded-md`}
      />
    </div>
  );
};
