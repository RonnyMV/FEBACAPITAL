'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ImageSkeleton from './ImageSkeleton';

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
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <div className="relative group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg">
        {!isLoaded && !hasError && (
          <ImageSkeleton
            width={400}
            height={280}
            className="absolute inset-0 z-10"
          />
        )}
        <Image
          src={project.image}
          alt={project.title}
          width={400}
          height={200}
          className={`w-full object-cover h-[280px] transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} md:group-hover:scale-105 md:transition-transform md:duration-300`}
          loading="lazy"
          onLoad={handleLoad}
          onError={handleError}
        />
        <div className="absolute bottom-4 left-4 z-20">
          <h3 className="text-white text-lg font-semibold drop-shadow-lg">
            {project.title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default RegularProject;
