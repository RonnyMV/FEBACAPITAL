import React from 'react';
import Image from 'next/image';

interface FeaturedProjectProps {
  project: {
    id: number;
    title: string;
    image: string;
    badge: string;
    badgeColor: string;
  };
}

const FeaturedProject: React.FC<FeaturedProjectProps> = ({ project }) => {
  return (
<div className="relative group cursor-pointer lg:row-span-2 lg:col-span-2">
  <div className="relative overflow-hidden rounded-lg">
    <Image
      src={project.image}
      alt={project.title}
      width={800}
      height={600}
      className="w-full h-[590px] object-cover transition-transform duration-300 group-hover:scale-105"
    />

    <div className="absolute inset-0 z-10 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    
     <div className="absolute left-6 bottom-24 z-20 transition-all duration-300 group-hover:-translate-y-38">
       <span className={`px-4 py-3 rounded-md h-[42px] flex items-center justify-center text-sm font-semibold shadow-md ${project.badgeColor}`}>
         {project.badge}
       </span>
     </div>

    <div className="absolute left-6 right-6 bottom-6 z-20 opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
      <div className="text-white text-left max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 uppercase tracking-wide">
          {project.title}
        </h2>

        <div className="grid grid-cols-2 gap-12 mb-8">
          <div>
            <p className="text-sm opacity-80 mb-1">Cidade</p>
            <p className="text-lg font-semibold">Barra Velha</p>
          </div>
          <div>
            <p className="text-sm opacity-80 mb-1">Bairro</p>
            <p className="text-lg font-semibold">Tabuleiro</p>
          </div>
        </div>

        <div className="space-y-4 max-w-xl">
            <div className="flex items-center gap-3">
              <img src="/images/bedroom.svg" alt="Bedroom" width={19} height={19} className="text-black" />
              <span className="text-sm">Apartamento com 3 dormitórios sendo 1 suíte</span>
            </div>

            <div className="flex items-center gap-3">
              <img src="/images/camera.svg" alt="Security" width={19} height={19} className="text-black" />
              <span className="text-sm">Condomínio Fechado</span>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default FeaturedProject;
