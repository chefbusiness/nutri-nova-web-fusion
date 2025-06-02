
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with organic pattern */}
      <div className="absolute inset-0 leaf-pattern organic-gradient"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/399fc273-cf88-4e19-a9d4-e7622dac8d07.png" 
            alt="Nutinova Foods" 
            className="h-24 mx-auto mb-8"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-nutinova-asparagus mb-6 leading-tight">
          Innovando para un
          <span className="block text-nutinova-moonstone">Futuro Alimentario</span>
          <span className="block text-nutinova-pistachi">Saludable y Sostenible</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
          Empresa líder en la producción de alimentos veganos, sin gluten y sin azúcar. 
          Comprometidos con la innovación, sostenibilidad y el bienestar de nuestros consumidores.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-nutinova-asparagus hover:bg-nutinova-asparagus/90 text-white px-8 py-4 text-lg smooth-hover"
          >
            Conoce Nuestras Marcas
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-nutinova-moonstone text-nutinova-moonstone hover:bg-nutinova-moonstone hover:text-white px-8 py-4 text-lg smooth-hover"
          >
            Nuestra Historia
          </Button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-nutinova-asparagus" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
