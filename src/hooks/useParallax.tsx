
import { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface UseParallaxProps {
  speed?: number;
  enabled?: boolean;
}

const useParallax = ({ speed = 0.5, enabled = true }: UseParallaxProps = {}) => {
  const [offset, setOffset] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Disable parallax on mobile devices
    if (!enabled || isMobile) return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxOffset = scrolled * speed;
      setOffset(parallaxOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, enabled, isMobile]);

  // Return 0 offset on mobile to disable parallax effect
  return isMobile ? 0 : offset;
};

export default useParallax;
