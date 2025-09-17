'use client';

import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className='w-full bg-white py-16 md:py-24'>
      <div className='container mx-auto px-4 pl-[135px] pr-[135px]'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          
          <div className='relative hidden lg:block'>
            <Image
              src='/images/image.svg'
              alt='Imagem homem e criança'
              width={500}
              height={500}
              className='rounded-2xl'
            />
          </div>
          <div className='space-y-6'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight'>
              Construimos confiança e{' '}
              <span className='green-design'>realizamos sonhos!</span>
            </h2>
            
            <p className='text-lg text-gray-600 leading-relaxed'>
              Na Liva, cada projeto é planejado para facilitar a vida dos moradores, 
              trazendo uma sensação máxima de bem-estar. Espaços que abrigam histórias 
              de vida e que são desenvolvidos para que você viva momentos incríveis 
              ao lado da sua família.
            </p>
            
            <button className='btn-about mt-8'>
              SAIBA MAIS
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
