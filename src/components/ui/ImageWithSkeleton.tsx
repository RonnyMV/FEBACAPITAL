'use client';

import React, { useState } from 'react';
import ImageSkeleton from './ImageSkeleton';

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  rounded?: boolean;
  loading?: 'lazy' | 'eager';
}

const ImageWithSkeleton: React.FC<ImageWithSkeletonProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  rounded = false,
  loading = 'lazy',
}) => {
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
    <div className={`relative ${className}`}>
      {!isLoaded && !hasError && (
        <ImageSkeleton
          width={width}
          height={height}
          className="absolute inset-0"
          rounded={rounded}
        />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
};

export default ImageWithSkeleton;
