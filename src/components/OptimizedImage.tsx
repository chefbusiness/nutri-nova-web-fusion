
import { useState } from 'react';
import useLazyLoading from '@/hooks/useLazyLoading';
import LoadingSpinner from '@/components/LoadingSpinner';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  fallbackSrc?: string;
}

const OptimizedImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  fallbackSrc = '/placeholder.svg'
}: OptimizedImageProps) => {
  const { ref, isVisible } = useLazyLoading({ threshold: 0.1, rootMargin: '50px' });
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState(src);

  const shouldLoad = priority || isVisible;

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImageSrc(fallbackSrc);
    }
  };

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {shouldLoad && (
        <>
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-modern-gray-100">
              <LoadingSpinner size="sm" text="" />
            </div>
          )}
          <img
            src={imageSrc}
            alt={alt}
            width={width}
            height={height}
            onLoad={handleLoad}
            onError={handleError}
            className={`transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            } ${className}`}
            loading={priority ? 'eager' : 'lazy'}
          />
        </>
      )}
      {!shouldLoad && (
        <div className="w-full h-full bg-modern-gray-100 flex items-center justify-center">
          <div className="text-modern-gray-400 text-sm">Cargando imagen...</div>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
