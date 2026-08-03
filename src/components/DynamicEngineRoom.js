'use client';

import { useState, useEffect } from 'react';
import KreonexVideoPlayer from './KreonexVideoPlayer';
import { shuffleAssets } from '../data/mediaAssets';
import MediaLightbox from './MediaLightbox';

export default function DynamicEngineRoom() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [assets, setAssets] = useState([]);
  const [selectedAsset, setSelectedAsset] = useState(null);

  useEffect(() => {
    setAssets(shuffleAssets());
  }, []);

  const nextSlide = () => setActiveIndex((current) => current + 1);
  const prevSlide = () => setActiveIndex((current) => Math.max(0, current - 1));

  // Increase items per volume to 8 so it creates a dense, gap-less gallery
  const itemsPerVolume = 8;
  const maxVolumes = Math.floor(assets.length / itemsPerVolume);
  const currentVolIndex = assets.length > 0 ? activeIndex % maxVolumes : 0;
  
  const currentItems = assets.slice(currentVolIndex * itemsPerVolume, (currentVolIndex + 1) * itemsPerVolume);

  return (
    <div className="relative">
      
      {/* Flexbox justified grid: flex-grow fills all empty gaps perfectly */}
      <div className="flex flex-wrap justify-center content-start gap-3 min-h-[500px] mb-12">
        {currentItems.map((item, idx) => (
          <div 
            key={`${currentVolIndex}-${idx}`} 
            // flex-grow ensures the item expands to fill any empty space on the right, making edges perfectly flush!
            className="relative h-[200px] md:h-[240px] lg:h-[280px] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer group bg-surface-pearl flex-grow border border-black/5"
            onClick={() => setSelectedAsset(item)}
          >
            {item.type === 'video' ? (
              <div className="relative h-full w-full pointer-events-none">
                <KreonexVideoPlayer src={item.src} autoPlay={true} muted={true} />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors flex items-center justify-center z-20">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-white text-xl ml-0.5">play_arrow</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative h-full w-full pointer-events-none">
                {/* object-cover combined with flex-grow creates a perfect Flickr/Google Photos style grid */}
                <img src={item.src} alt={item.label} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 z-20 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
              </div>
            )}

            {/* Label Overlay */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-[10px] font-bold text-on-surface shadow-lg z-30 flex items-center gap-2 pointer-events-none">
              {item.label.includes('AI') ? (
                <span className="material-symbols-outlined !text-[12px] text-primary">auto_awesome</span>
              ) : item.label.includes('Commercial') ? (
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
              ) : null}
              {item.label}
            </div>
          </div>
        ))}
      </div>

      {/* Manual Slider Controls */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-surface/90 backdrop-blur-md p-2 rounded-full shadow-lg border border-border-subtle z-30">
        <button 
          onClick={prevSlide}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 active:scale-95 transition-all text-on-surface"
          aria-label="Previous Media"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div className="px-4 font-bold text-sm tracking-widest text-on-surface/50 select-none">
          VOL {((currentVolIndex) + 1).toString().padStart(2, '0')}
        </div>
        <button 
          onClick={nextSlide}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 active:scale-95 transition-all text-on-surface"
          aria-label="Next Media"
        >
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>

      <MediaLightbox asset={selectedAsset} onClose={() => setSelectedAsset(null)} />
    </div>
  );
}
