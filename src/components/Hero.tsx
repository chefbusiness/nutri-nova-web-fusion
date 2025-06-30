
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import useParallax from '@/hooks/useParallax';
import useSmoothScroll from '@/hooks/useSmoothScroll';
import NewsletterModal from '@/components/NewsletterModal';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const parallaxOffset = useParallax({ speed: 0.3 });
  const { scrollToSection } = useSmoothScroll();
  const isMobile = useIsMobile();

  const handleViewBrands = () => {
    scrollToSection('marcas');
  };

  const handleViewAbout = () => {
    scrollToSection('sobre');
  };

  return (
    <>
      <section id="inicio" className="min-h-screen bg-white pt-16 lg:pt-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-5rem)] items-center">
            
            {/* Content - Mobile First (text on top) */}
            <div className="lg:col-span-6 xl:col-span-5 pt-4 lg:pt-0 order-1 lg:order-1 relative z-10">
              <div className="space-y-4 lg:space-y-8">
                
                {/* Badge */}
                <div className="inline-flex items-center px-3 py-1.5 lg:px-4 lg:py-2 bg-modern-gray-100 rounded-full animate-fade-in">
                  <span className="text-modern-gray-600 text-xs sm:text-sm font-medium">Líder en Alimentación Saludable</span>
                </div>

                {/* Main Headline */}
                <div className="space-y-3 lg:space-y-6">
                  <h1 className="sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-modern-gray-900 leading-[0.9] tracking-tight text-4xl animate-slide-in">
                    El futuro de la
                    <span className="block">alimentación</span>
                    <span className="block text-nutinova-asparagus">saludable</span>
                  </h1>
                  
                  <p className="text-base sm:text-lg lg:text-xl text-modern-gray-600 leading-relaxed max-w-lg animate-fade-in">
                    Productos veganos, sin gluten y sin azúcar que transforman 
                    la experiencia alimentaria sin comprometer el sabor.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 animate-fade-in">
                  <Button 
                    size="lg" 
                    onClick={handleViewBrands}
                    className="bg-modern-gray-900 hover:bg-modern-gray-800 text-white px-6 py-3 lg:px-8 lg:py-4 text-base lg:text-lg rounded-xl group transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    Ver Marcas
                    <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    onClick={handleViewAbout}
                    className="border-2 border-modern-gray-300 text-modern-gray-700 hover:bg-modern-gray-50 px-6 py-3 lg:px-8 lg:py-4 text-base lg:text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-md"
                  >
                    Nuestra Historia
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 lg:gap-8 pt-4 lg:pt-8 border-t border-modern-gray-200 animate-fade-in">
                  <div className="text-center group cursor-pointer">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-modern-gray-900 group-hover:text-nutinova-asparagus transition-colors duration-300">100%</div>
                    <div className="text-xs sm:text-sm text-modern-gray-600">Vegano</div>
                  </div>
                  <div className="text-center group cursor-pointer">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-modern-gray-900 group-hover:text-nutinova-asparagus transition-colors duration-300">0%</div>
                    <div className="text-xs sm:text-sm text-modern-gray-600">Gluten</div>
                  </div>
                  <div className="text-center group cursor-pointer">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-modern-gray-900 group-hover:text-nutinova-asparagus transition-colors duration-300">2024</div>
                    <div className="text-xs sm:text-sm text-modern-gray-600">Fundada</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual - Mobile Second (image below text) */}
            <div className="lg:col-span-6 xl:col-span-7 relative order-2 lg:order-2">
              <div 
                className="relative h-80 sm:h-96 lg:h-[600px] bg-modern-gray-100 rounded-2xl lg:rounded-3xl overflow-hidden"
                style={{ transform: `translateY(${parallaxOffset}px)` }}
              >
                {/* Full frame image with overlay elements */}
                <img 
                  src="/lovable-uploads/beb99197-c563-4416-8d30-f1137d1141fa.png" 
                  alt="Nutinova Foods Product" 
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105" 
                />
                
                {/* Overlay gradient for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-nutinova-beige/20 to-nutinova-pistachi/20"></div>
                
                {/* Text overlay - Better positioned for mobile */}
                <div className={`absolute inset-x-0 flex justify-center px-3 ${
                  isMobile ? 'bottom-8' : 'bottom-3 sm:bottom-6 lg:bottom-8'
                }`}>
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg lg:rounded-xl p-3 sm:p-4 lg:p-6 max-w-xs sm:max-w-sm w-full text-center transition-all duration-300 hover:bg-white/95 hover:scale-105">
                    <div className="text-modern-gray-700 text-base sm:text-lg lg:text-xl font-bold">Nutinova Foods</div>
                    <div className="text-modern-gray-500 text-sm sm:text-base lg:text-base">Alimentación Saludable</div>
                    <Button
                      size="sm"
                      onClick={() => setIsNewsletterOpen(true)}
                      className="mt-2 bg-nutinova-asparagus hover:bg-nutinova-asparagus/90 text-white text-xs"
                    >
                      Suscríbete
                    </Button>
                  </div>
                </div>
                
                {/* Floating elements - Smaller and better positioned for mobile */}
                <div className="absolute top-3 sm:top-4 lg:top-8 right-3 sm:right-4 lg:right-8 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-white rounded-lg lg:rounded-2xl shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl">
                  <span className="text-base sm:text-lg lg:text-2xl">🌱</span>
                </div>
                <div className="absolute top-3 sm:top-4 lg:top-8 left-3 sm:left-4 lg:left-8 w-14 h-6 sm:w-16 sm:h-8 lg:w-20 lg:h-12 bg-nutinova-moonstone rounded-md lg:rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg">
                  <span className="text-white text-xs sm:text-sm lg:text-sm font-medium">Sin Gluten</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsletterModal 
        isOpen={isNewsletterOpen} 
        onClose={() => setIsNewsletterOpen(false)} 
      />
    </>
  );
};

export default Hero;
