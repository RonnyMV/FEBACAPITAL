'use client';

import React from 'react';
import Image from 'next/image';
import LazyImage from '@/components/ui/LazyImage';
import ImageWithSkeleton from '@/components/ui/ImageWithSkeleton';

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm h-[84px]">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between pl-[135px] pr-[135px]">
        <div className="flex items-center justify-center">
          <Image
            src="/images/logos/logo_header.png"
            alt="Logo"
            width={108}
            height={43}
            className="h-8 w-auto"
            priority
          />
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-black hover:text-green-600 font-medium">HOME</a>
          <a href="#" className="text-black hover:text-green-600 font-medium">SOBRE A LIVA</a>
          <a href="#" className="text-black hover:text-green-600 font-medium">EMPREENDIMENTOS</a>
          <a href="#" className="text-black hover:text-green-600 font-medium">CONTATO</a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <a href="#" className="hover:opacity-80 transition">
              <img src="/images/icons/facebook_footer_image.png" alt="Facebook" width={24.6} height={24.6} className="brightness-0" />
            </a>
            <a href="#" className="hover:opacity-80 transition">
              <img src="/images/icons/instagram_footer_image.png" alt="Instagram" width={24.6} height={24.6} className="brightness-0" />
            </a>
          </div>
          <button className="btn-whatsapp">
                <img src="/images/icons/whatsapp.png" alt="WhatsApp" width={13.48} height={13.48} className="mr-2" />
            WHATSAPP
          </button>
        </div>

        <button className="md:hidden text-black">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;
