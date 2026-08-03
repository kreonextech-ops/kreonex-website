'use client';

import { useState, useEffect } from 'react';
import KreonexVideoPlayer from './KreonexVideoPlayer';
import { shuffleAssets } from '../data/mediaAssets';
import MediaLightbox from './MediaLightbox';

export default function VaultGrid() {
  const [assets, setAssets] = useState([]);
  const [selectedAsset, setSelectedAsset] = useState(null);

  // Shuffle on client-side mount to avoid hydration errors
  useEffect(() => {
    setAssets(shuffleAssets());
  }, []);

  return (
    <div className="w-full">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Filter Tabs - Light Theme */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-16 border-b border-black/10 pb-8">
          <button className="px-6 py-2 rounded-full bg-on-surface text-white font-bold text-sm tracking-wide shadow-md hover:-translate-y-1 transition-all">All Assets</button>
          <button className="px-6 py-2 rounded-full border border-black/10 text-on-surface-variant hover:text-primary hover:border-primary/50 hover:bg-white shadow-sm transition-all font-bold text-sm tracking-wide flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span> Commercial
          </button>
          <button className="px-6 py-2 rounded-full border border-black/10 text-on-surface-variant hover:text-primary hover:border-primary/50 hover:bg-white shadow-sm transition-all font-bold text-sm tracking-wide flex items-center gap-2">
            <span className="material-symbols-outlined !text-sm text-primary">auto_awesome</span> AI Generated
          </button>
          <button className="px-6 py-2 rounded-full border border-black/10 text-on-surface-variant hover:text-primary hover:border-primary/50 hover:bg-white shadow-sm transition-all font-bold text-sm tracking-wide">Behind The Scenes</button>
        </div>

        {/* Masonry Grid - Made columns wider (max 3) so videos are bigger */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {assets.map((asset, index) => (
            <div 
              key={index} 
              className="break-inside-avoid relative group rounded-3xl overflow-hidden bg-white border border-black/5 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedAsset(asset)}
            >
              
              {asset.type === 'video' ? (
                <div className="relative pointer-events-none">
                  {/* Videos take the full width of the column, which is now larger */}
                  <KreonexVideoPlayer 
                    src={asset.src} 
                    poster={asset.poster} 
                    autoPlay={false}
                  />
                  {/* Play Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-colors">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-white text-3xl ml-1">play_arrow</span>
                    </div>
                  </div>
                </div>
              ) : (
                <img 
                  src={asset.src} 
                  alt={asset.label} 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
              )}

              {/* Label Badge */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest text-on-surface uppercase border border-black/5 flex items-center gap-2 shadow-sm z-10">
                {asset.label.includes('AI') ? (
                  <span className="material-symbols-outlined !text-[12px] text-primary">auto_awesome</span>
                ) : asset.label.includes('Commercial') ? (
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                ) : null}
                {asset.label}
              </div>
            </div>
          ))}
        </div>
        
        {/* Load More Call to Action */}
        <div className="mt-20 text-center pb-24">
          <p className="text-on-surface-variant/50 font-label-caps text-xs tracking-widest mb-6 uppercase font-bold">PORTFOLIO V1.0</p>
          <button className="border border-black/10 bg-white px-8 py-4 rounded-full text-sm font-bold text-on-surface shadow-sm hover:shadow-xl hover:border-primary/30 transition-all tracking-wide hover:-translate-y-1">
            Load More Assets
          </button>
        </div>

      </div>

      {/* Global Lightbox */}
      <MediaLightbox asset={selectedAsset} onClose={() => setSelectedAsset(null)} />
    </div>
  );
}
