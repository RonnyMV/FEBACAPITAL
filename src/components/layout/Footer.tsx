'use client';

import React from 'react';
import Image from 'next/image';
import LazyImage from '@/components/ui/LazyImage';
import ImageWithSkeleton from '@/components/ui/ImageWithSkeleton';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <LazyImage
                src="/images/logos/footer_logo.png"
                alt="Liva Logo"
                width={108}
                height={43}
                className="h-8 w-auto brightness-0 invert opacity-60" 
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed w-[231px]">
            Duis aute irure dolor in reprehenderit 
            in voluptate velit esse cillum dolore 
            eu fugiat nulla pariatur. 
            </p>
          </div>

          <div>
            <h3 className="green-design font-semibold mb-4">NAVEGUE NO SITE</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white hover:text-green-600 transition">HOME</a></li>
              <li><a href="#" className="text-white hover:text-green-600 transition">SOBRE A LIVA</a></li>
              <li><a href="#" className="text-white hover:text-green-600 transition">EMPREENDIMENTOS</a></li>
              <li><a href="#" className="text-white hover:text-green-600 transition">NOTÍCIAS</a></li>
              <li><a href="#" className="text-white hover:text-green-600 transition">CONTATO</a></li>
            </ul>
          </div>

          <div className="text-center flex flex-col justify-center">
            <h3 className="text-white font-semibold mb-4 text-sm flex justify-start">Acompanhe nas redes</h3>
            <div className="flex justify-start space-x-2">
              <a href="#" className="hover:opacity-80 transition">
                <img src="/images/icons/facebook_footer_image.png" alt="Facebook" width={24.6} height={24.6} />
              </a>
              <a href="#" className="hover:opacity-80 transition">
                <img src="/images/icons/instagram_footer_image.png" alt="Instagram" width={24.6} height={24.6} />
              </a>
            </div>
          </div>

          <div>
            <div className="space-y-4">
              <div className="text-white text-center">
                <p className="text-sm mb-2">Duis aute irure dolor in reprehenderit</p>
                <p className="text-sm mb-6">in voluptate velit esse cillum dolore</p>
              </div>
              <div className="text-center flex flex-col items-center">
                <p className="text-white text-lg mb-2">(11) 9909-9091</p>
                <p className="green-design text-lg mb-4">contato@liva.com.br</p>
                <button className="btn-whatsapp">
                  <img src="/images/icons/whatsapp.png" alt="WhatsApp" width={13.48} height={13.48} className="mr-2" />
                  WHATSAPP
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Liva Empreendimentos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
