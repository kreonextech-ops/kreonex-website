'use client';
import { useRef, useState, useEffect } from 'react';

export default function KreonexVideoPlayer({ src, poster, className = '', autoPlay = false, loop = true, muted = true }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isHovered, setIsHovered] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (autoPlay && videoRef.current) {
      videoRef.current.play().catch(e => console.log('Autoplay prevented:', e));
    }
  }, [autoPlay]);

  const togglePlay = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(err => {
          console.error("Video playback failed", err);
        });
      }
    }
  };

  return (
    <div 
      className={`relative group overflow-hidden cursor-pointer ${className} h-full w-full bg-black/5`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        loop={loop}
        muted={muted}
        playsInline
        preload="metadata"
        onLoadedData={() => setHasLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${hasLoaded || poster ? 'opacity-100' : 'opacity-0'}`}
      />
      
      {/* Loading State / Blank State */}
      {(!hasLoaded && !poster) && (
        <div className="absolute inset-0 flex items-center justify-center animate-pulse bg-black/10"></div>
      )}
      
      {/* Overlay to dim video when paused or hovered */}
      <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${(!isPlaying || isHovered) ? 'opacity-100' : 'opacity-0'}`}></div>

      {/* Play/Pause Button Overlay */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${(!isPlaying || isHovered) ? 'opacity-100' : 'opacity-0'}`}>
        <button 
          onClick={togglePlay}
          className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-110 shadow-xl"
        >
          <span className="material-symbols-outlined !text-3xl ml-1">
            {isPlaying ? 'pause' : 'play_arrow'}
          </span>
        </button>
      </div>
    </div>
  );
}
