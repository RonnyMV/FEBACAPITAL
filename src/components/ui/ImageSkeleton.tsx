import React from 'react';

interface ImageSkeletonProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  rounded?: boolean;
}

const ImageSkeleton: React.FC<ImageSkeletonProps> = ({
  width = '100%',
  height = '200px',
  className = '',
  rounded = false,
}) => {
  return (
    <div
      className={`
        bg-gray-200 animate-pulse
        ${rounded ? 'rounded-full' : 'rounded-lg'}
        ${className}
      `}
      style={{ width, height }}
    >
      <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded-inherit" />
    </div>
  );
};

export default ImageSkeleton;
