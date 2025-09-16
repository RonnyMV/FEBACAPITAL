import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroBanner from '@/components/sections/HeroBanner';
import AboutSection from '@/components/sections/AboutSection';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroBanner />
        <AboutSection />
        
        <section className="py-16 px-4 md:px-8 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-black mb-2">
                Confira todos os
              </h2>
              <h2 className="text-3xl md:text-4xl font-light">
                <span className="text-black">empreendimentos da </span>
                <span className="text-green-600 font-semibold">Liva</span>
              </h2>
            </div>
            
            <div className="text-center text-gray-600 py-20">
              <p className="text-xl">Seções em desenvolvimento...</p>
              <p className="mt-2">Em breve: Brand Value, Contact Form, Project Gallery</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
