
import { useState, useEffect } from 'react';

interface UseParallaxProps {
  speed?: number;
  enabled?: boolean;
}

const useParallax = ({ speed = 0.5, enabled = true }: UseParallaxProps = {}) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (!enabled) return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxOffset = scrolled * speed;
      setOffset(parallaxOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, enabled]);

  return offset;
};

export default useParallax;
