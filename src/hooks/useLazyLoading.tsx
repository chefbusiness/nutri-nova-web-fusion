
import { useState, useEffect, useRef } from 'react';

interface UseLazyLoadingProps {
  threshold?: number;
  rootMargin?: string;
}

const useLazyLoading = ({ 
  threshold = 0.1, 
  rootMargin = '50px' 
}: UseLazyLoadingProps = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isVisible };
};

export default useLazyLoading;
