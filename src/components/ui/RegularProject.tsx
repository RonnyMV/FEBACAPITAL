import React from 'react';
import Image from 'next/image';

interface RegularProjectProps {
  project: {
    id: number;
    title: string;
    image: string;
    badge: string;
    badgeColor: string;
  };
}

const RegularProject: React.FC<RegularProjectProps> = ({ project }) => {
  return (
    <div className="relative group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={project.image}
          alt={project.title}
          width={400}
          height={200}
          className="w-full object-cover group-hover:scale-105 transition-transform duration-300 h-[280px]"
        />
        <div className="absolute bottom-4 left-4">
          <h3 className="text-white text-lg font-semibold drop-shadow-lg">
            {project.title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default RegularProject;
