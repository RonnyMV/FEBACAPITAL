'use client';

import React from 'react';
import Image from 'next/image';
import ContactForm from '@/components/ui/ContactForm';

const ContactSection = () => {
  return (
    <section className="w-full ">
      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-0 min-h-[600px]">
          <div className="lg:col-span-7 bg-black p-8 lg:p-12 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 leading-tight">
              Fale agora com um consultor de vendas
            </h2>

            <p className="text-base md:text-lg text-white mb-8 opacity-90">
              Tire suas dúvidas e conheça de perto o seu novo jeito de morar.
            </p>

            <div className="mb-8">
              <h3 className="text-lg md:text-xl font-semibold text-white mb-4">
                Consultores online
              </h3>
              <div className="flex items-center -space-x-3">
                <div className="h-12 w-12 rounded-full ring-2 ring-white overflow-hidden">
                  <Image
                    src="/images/consultants/consultant_1.png"
                    alt="Consultor 1"
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="h-12 w-12 rounded-full ring-2 ring-white overflow-hidden">
                  <Image
                    src="/images/consultants/consultant_2.png"
                    alt="Consultor 2"
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="h-12 w-12 rounded-full ring-2 ring-white overflow-hidden">
                  <Image
                    src="/images/consultants/consultant_3.png"
                    alt="Consultor 3"
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 relative hidden lg:block">
            <div className="absolute inset-0">
              <Image
                src="/images/image_section_3.jpg"
                alt="Background"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div
          className="absolute z-20 w-full max-w-sm lg:max-w-md px-4 lg:px-0"
          style={{ left: 'calc(70% - 12rem)', top: 'calc(50% - 15.5rem)' }}
        >
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
