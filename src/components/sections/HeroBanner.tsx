'use client';

import React, { useState, useEffect } from 'react';

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  badge: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=600&fit=crop',
    title: 'Barra View',
    subtitle: 'Apartamento com 3 dormitórios sendo 1 suíte',
    badge: 'PRÉ LANÇAMENTO'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=600&fit=crop',
    title: 'Horizonte Residence',
    subtitle: 'Apartamento com 2 dormitórios',
    badge: 'LANÇAMENTO'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=600&fit=crop',
    title: 'Vista Premium',
    subtitle: 'Apartamento com 4 dormitórios sendo 2 suítes',
    badge: 'PRÉ LANÇAMENTO'
  }
];

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleMouseEnter = () => setIsPlaying(false);
  const handleMouseLeave = () => setIsPlaying(true);

  return (
    <section 
      className="relative w-full h-[400px] md:h-[540px] lg:h-[520px] overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="region"
      aria-label="Rotative Banner"
    >
      <div className="relative w-full h-full">
        <img
          src={slides[currentSlide].image}
          alt={`Vista do ${slides[currentSlide].title}`}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        
        <div className="absolute inset-0 bg-black bg-opacity-30 z-10" />
        
        <div className="absolute left-6 md:left-10 top-1/2 transform -translate-y-1/2 z-20">
          <span className="text-xs font-semibold text-white uppercase mb-2 tracking-wider block">
            {slides[currentSlide].badge}
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white mb-1">
            {slides[currentSlide].title}
          </h2>
          <span className="inline-block bg-green-200 bg-opacity-80 text-green-900 px-3 py-1 rounded text-xs md:text-sm font-medium">
            {slides[currentSlide].subtitle}
          </span>
          <button className="mt-4 border border-white text-white px-5 py-2 rounded hover:bg-white hover:text-black font-semibold transition block">
            SAIBA MAIS
          </button>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-80 text-white w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded z-30 hover:bg-opacity-100 transition focus:ring-2 focus:ring-green-300"
          aria-label="Anterior"
        >
          <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-80 text-white w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded z-30 hover:bg-opacity-100 transition focus:ring-2 focus:ring-green-300"
          aria-label="Próximo"
        >
          <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === currentSlide 
                  ? 'bg-white' 
                  : 'bg-white bg-opacity-50'
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
