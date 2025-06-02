
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pattern-overlay-green">
      {/* Background with brand pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-nutinova-beige/90 via-nutinova-pistachi/60 to-nutinova-asparagus/40"></div>
      
      {/* Content */}
      <div className="pattern-content text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-nutinova-asparagus mb-8 leading-tight">
          Innovando para un
          <span className="block text-nutinova-moonstone">Futuro Alimentario</span>
          <span className="block text-nutinova-pistachi">Saludable y Sostenible</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-16 max-w-3xl mx-auto leading-relaxed">
          Empresa líder en la producción de alimentos veganos, sin gluten y sin azúcar. 
          Comprometidos con la innovación, sostenibilidad y el bienestar de nuestros consumidores.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-nutinova-asparagus hover:bg-nutinova-asparagus/90 text-white px-10 py-6 text-lg smooth-hover"
          >
            Conoce Nuestras Marcas
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-nutinova-moonstone text-nutinova-moonstone hover:bg-nutinova-moonstone hover:text-white px-10 py-6 text-lg smooth-hover"
          >
            Nuestra Historia
          </Button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-nutinova-asparagus" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
