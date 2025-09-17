'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import LazyImage from '@/components/ui/LazyImage';
import ImageWithSkeleton from '@/components/ui/ImageWithSkeleton';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
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

          <button className="md:hidden text-black" onClick={toggleMobileMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </header>

      <div className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div 
          className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} 
          onClick={toggleMobileMenu}
        ></div>
        
        <div className={`relative w-[360px] h-full bg-white ml-auto transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="w-full h-[84px] flex items-center justify-between px-4 border-b border-gray-200">
              <Image
                src="/images/logos/logo_header.png"
                alt="Logo"
                width={108}
                height={43}
                className="h-8 w-auto"
              />
              <button onClick={toggleMobileMenu} className="p-2">
                <img src="/images/icons/cross.svg" alt="Close" width={17} height={16} />
              </button>
            </div>

            <div className="flex flex-col h-[calc(100vh-84px)]">
              <div className="flex-1 px-4 py-6 overflow-y-auto">
                <nav className="space-y-6">
                  <a href="#" className="block text-black font-medium text-lg uppercase hover:text-green-600 transition-colors duration-200">HOME</a>
                  <a href="#" className="block text-black font-medium text-lg uppercase hover:text-green-600 transition-colors duration-200">SOBRE A LIVA</a>
                  <a href="#" className="block text-black font-medium text-lg uppercase hover:text-green-600 transition-colors duration-200">EMPREENDIMENTOS</a>
                  <a href="#" className="block text-black font-medium text-lg uppercase hover:text-green-600 transition-colors duration-200">NOTÍCIAS</a>
                  <a href="#" className="block text-black font-medium text-lg uppercase hover:text-green-600 transition-colors duration-200">CONTATO</a>
                </nav>

                <div className="mt-8">
                  <h3 className="text-black font-medium text-sm mb-4">Acompanhe nas redes</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="hover:opacity-80 transition">
                      <img src="/images/icons/facebook_footer_image.png" alt="Facebook" width={24.6} height={24.6} className="brightness-0" />
                    </a>
                    <a href="#" className="hover:opacity-80 transition">
                      <img src="/images/icons/instagram_footer_image.png" alt="Instagram" width={24.6} height={24.6} className="brightness-0" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 w-full h-[84px] flex items-center justify-center px-4 border-gray-200 bg-gray-50">
                <button className="btn-whatsapp" style={{width: '311px'}}>
                  <img src="/images/icons/whatsapp.png" alt="WhatsApp" width={13.48} height={13.48} className="mr-2" />
                  WHATSAPP
                </button>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Header;
