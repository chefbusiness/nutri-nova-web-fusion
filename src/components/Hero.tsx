
import { Button } from '@/components/ui/button';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-nutinova-beige/80 via-white to-nutinova-pistachi/30"></div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/edf24085-7476-4901-b83b-42b6939ff9da.png')] bg-[length:400px_400px] bg-repeat"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 animate-fade-in">
        {/* Badge */}
        <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm border border-nutinova-asparagus/20 rounded-full mb-12 shadow-lg">
          <span className="text-nutinova-asparagus font-medium text-lg">Líder en Alimentación Saludable</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-12 leading-[0.9]">
          <span className="block text-nutinova-asparagus mb-4">Innovando para un</span>
          <span className="block bg-gradient-to-r from-nutinova-moonstone via-nutinova-pistachi to-nutinova-asparagus bg-clip-text text-transparent mb-4">
            Futuro Alimentario
          </span>
          <span className="block text-nutinova-asparagus text-5xl md:text-6xl lg:text-7xl">
            Saludable y Sostenible
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
          Empresa líder en la producción de alimentos veganos, sin gluten y sin azúcar. 
          Comprometidos con la innovación, sostenibilidad y el bienestar de nuestros consumidores.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
          <Button 
            size="lg" 
            className="group bg-nutinova-asparagus hover:bg-nutinova-asparagus/90 text-white px-12 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            Conoce Nuestras Marcas
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-nutinova-moonstone text-nutinova-moonstone hover:bg-nutinova-moonstone hover:text-white px-12 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm"
          >
            Nuestra Historia
          </Button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center animate-bounce">
            <span className="text-nutinova-asparagus text-sm font-medium mb-2 uppercase tracking-wider">Scroll</span>
            <ChevronDown className="h-6 w-6 text-nutinova-asparagus" />
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-nutinova-pistachi/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-40 right-20 w-32 h-32 bg-nutinova-moonstone/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-10 w-16 h-16 bg-nutinova-asparagus/20 rounded-full blur-xl animate-pulse delay-500"></div>
    </section>
  );
};

export default Hero;
