'use client';

import Image from 'next/image';
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
    image: '/images/banners/image_banner_1.png',
    title: 'Barra View',
    subtitle: 'Apartamento com 3 dormitórios sendo 1 suíte',
    badge: 'PRÉ LANÇAMENTO',
  },
  {
    id: 2,
    image: '/images/banners/image_banner_2.png',
    title: 'Horizonte Residence',
    subtitle: 'Apartamento com 2 dormitórios',
    badge: 'LANÇAMENTO',
  },
  {
    id: 3,
    image: '/images/banners/image_banner_3.png',
    title: 'Vista Premium',
    subtitle: 'Apartamento com 4 dormitórios sendo 2 suítes',
    badge: 'PRÉ LANÇAMENTO',
  },
];

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [, setSlideDirection] = useState<'left' | 'right'>('right');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!isPlaying || isTransitioning) return;

    const interval = setInterval(() => {
      setSlideDirection('right');
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, isTransitioning]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setSlideDirection('right');
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setSlideDirection('left');
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
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
      <div className="relative w-full h-full overflow-hidden">
        <div
          className="flex h-full transition-transform duration-500 ease-in-out will-change-transform"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="min-w-full">
              <Image
                src={slide.image}
                alt={`Vista do ${slide.title}`}
                width={1920}
                height={1080}
                className="w-full h-auto"
                priority={currentSlide === 0}
              />
            </div>
          ))}
        </div>

        <div className="absolute inset-0" />

        <div className="absolute left-6 md:left-10 top-1/3 md:top-1/2 transform -translate-y-1/2 z-20 ml-16">
          <span className="text-xs font-semibold text-white uppercase mb-2 tracking-wider block text-[12px]">
            {slides[currentSlide].badge}
          </span>
          <h2 className="text-[32px] md:text-[4xl] lg:text-[80px] font-extrabold text-white mb-1 ">
            {slides[currentSlide].title}
          </h2>
          <span className="inline-block green-design-clear text-black text-[12px] px-3 py-1 rounded text-xs md:text-sm font-medium">
            {slides[currentSlide].subtitle}
          </span>
          <div className="mt-4 md:mb-0">
            <button className="btn-about btn-about--hero">SAIBA MAIS</button>
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/3 md:top-1/2 transform -translate-y-1/2 bg-black/40 text-white w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-md z-30 hover:bg-black/60 transition focus:outline-none"
          aria-label="Anterior"
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/3 md:top-1/2 transform -translate-y-1/2 bg-black/40 text-white w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-md z-30 hover:bg-black/60 transition focus:outline-none"
          aria-label="Próximo"
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (isTransitioning) return;
                setSlideDirection(index > currentSlide ? 'right' : 'left');
                setIsTransitioning(true);
                setCurrentSlide(index);
                setTimeout(() => setIsTransitioning(false), 500);
              }}
              className={`w-3 h-3 rounded-full transition ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
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
