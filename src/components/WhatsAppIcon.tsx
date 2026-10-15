import React from 'react';

interface WhatsAppIconProps {
  className?: string;
  alt?: string;
}

/**
 * WhatsApp brand icon component using the client-provided authentic brand asset.
 * Uses cache-busted unique filename to bypass browser image caching.
 */
export const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({
  className = 'w-5 h-5 object-contain shrink-0',
  alt = 'WhatsApp',
}) => {
  return (
    <img
      src="/assets/whatsapp-brand-icon.png"
      alt={alt}
      className={className}
      loading="eager"
      decoding="async"
      draggable={false}
    />
  );
};
