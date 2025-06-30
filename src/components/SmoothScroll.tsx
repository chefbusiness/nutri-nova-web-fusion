
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';
import useSmoothScroll from '@/hooks/useSmoothScroll';

const SmoothScroll = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollToTop } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <Button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 rounded-full w-12 h-12 bg-nutinova-asparagus hover:bg-nutinova-asparagus/90 shadow-lg transition-all duration-300 hover:scale-110"
      size="icon"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
};

export default SmoothScroll;
