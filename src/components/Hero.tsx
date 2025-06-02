
import { Button } from '@/components/ui/button';
import { ChevronDown, ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Advanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-nutinova-beige/90 via-white to-nutinova-pistachi/40"></div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-nutinova-moonstone/5 to-transparent animate-pulse"></div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/edf24085-7476-4901-b83b-42b6939ff9da.png')] bg-[length:600px_600px] bg-repeat"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 animate-fade-in">
        {/* Enhanced Badge */}
        <div className="inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-md border border-nutinova-asparagus/20 rounded-full mb-16 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
          <Sparkles className="h-5 w-5 text-nutinova-moonstone mr-3 group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-nutinova-asparagus font-medium text-lg font-playwrite">Líder en Alimentación Saludable</span>
        </div>

        <h1 className="mb-16 leading-[0.85]">
          <span className="block text-nutinova-asparagus mb-6 text-5xl md:text-7xl lg:text-8xl font-poppins font-bold tracking-tight">
            Innovando para un
          </span>
          <span className="block bg-gradient-to-r from-nutinova-moonstone via-nutinova-pistachi to-nutinova-asparagus bg-clip-text text-transparent mb-6 text-6xl md:text-8xl lg:text-9xl font-nilland font-bold tracking-wider">
            Futuro Alimentario
          </span>
          <span className="block text-nutinova-asparagus text-4xl md:text-6xl lg:text-7xl font-poppins font-semibold">
            Saludable y Sostenible
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-20 max-w-5xl mx-auto leading-relaxed font-poppins font-light">
          Empresa líder en la producción de alimentos veganos, sin gluten y sin azúcar. 
          Comprometidos con la innovación, sostenibilidad y el bienestar de nuestros consumidores.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-24">
          <Button 
            size="lg" 
            className="group bg-gradient-to-r from-nutinova-asparagus to-nutinova-moonstone hover:from-nutinova-moonstone hover:to-nutinova-asparagus text-white px-16 py-8 text-xl rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 font-poppins font-medium"
          >
            Conoce Nuestras Marcas
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-nutinova-moonstone text-nutinova-moonstone hover:bg-nutinova-moonstone hover:text-white px-16 py-8 text-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/90 backdrop-blur-md font-poppins font-medium"
          >
            Nuestra Historia
          </Button>
        </div>
        
        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center animate-bounce-gentle">
            <span className="text-nutinova-asparagus text-sm font-medium mb-3 uppercase tracking-wider font-poppins">Descubre Más</span>
            <div className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg">
              <ChevronDown className="h-6 w-6 text-nutinova-asparagus" />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced floating elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-nutinova-pistachi/30 to-nutinova-moonstone/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-40 right-20 w-40 h-40 bg-gradient-to-br from-nutinova-moonstone/30 to-nutinova-asparagus/20 rounded-full blur-xl animate-float delay-1000"></div>
      <div className="absolute top-1/3 right-10 w-20 h-20 bg-gradient-to-br from-nutinova-asparagus/30 to-nutinova-pistachi/20 rounded-full blur-xl animate-float delay-500"></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-nutinova-beige/40 rounded-full blur-lg animate-pulse"></div>
    </section>
  );
};

export default Hero;
