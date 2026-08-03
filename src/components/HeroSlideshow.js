"use client";

import { useState, useEffect } from 'react';

const images = [
  "https://pub-6c6783ed8ce64932a9644e8cfd52a4bf.r2.dev/images/hero.jpg",
  "https://pub-6c6783ed8ce64932a9644e8cfd52a4bf.r2.dev/images/hero_1.jpg",
  "https://pub-6c6783ed8ce64932a9644e8cfd52a4bf.r2.dev/images/hero_2.jpg"
];

export default function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full relative">
      {images.map((src, index) => (
        <img
          key={src}
          src={src}
          alt={`Kreonex Media Hero ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${
            index === currentIndex ? "opacity-100 scale-105" : "opacity-0 scale-100"
          }`}
          style={{ transformOrigin: 'center' }}
        />
      ))}
    </div>
  );
}
