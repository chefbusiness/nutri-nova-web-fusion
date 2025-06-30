
import { useCallback } from 'react';

const useSmoothScroll = () => {
  const scrollToSection = useCallback((sectionId: string, offset: number = 80) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return { scrollToSection, scrollToTop };
};

export default useSmoothScroll;
