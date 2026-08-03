'use client';

import { useEffect } from 'react';

export default function MediaLightbox({ asset, onClose }) {
  // Prevent scrolling on the body when lightbox is open
  useEffect(() => {
    if (asset) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [asset]);

  if (!asset) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-12 animate-fade-in"
      onClick={onClose}
    >
      {/* Close Button */}
      <button 
        className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center text-white transition-all z-[110]"
        onClick={onClose}
      >
        <span className="material-symbols-outlined text-2xl">close</span>
      </button>

      {/* Media Container */}
      <div 
        className="relative max-w-[1200px] w-full max-h-[90vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the media itself
      >
        {asset.type === 'video' ? (
          <video 
            src={asset.src}
            controls
            autoPlay
            muted
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />
        ) : (
          <img 
            src={asset.src} 
            alt={asset.label} 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />
        )}

        {/* Label Overlay (Optional) */}
        <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
          <span className="text-white text-sm font-bold tracking-widest uppercase">{asset.label}</span>
        </div>
      </div>
    </div>
  );
}
