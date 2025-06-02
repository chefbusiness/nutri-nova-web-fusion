
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen bg-white pt-16 lg:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-5rem)] items-center">
          
          {/* Content - Left Side */}
          <div className="lg:col-span-6 xl:col-span-5 pt-8 lg:pt-0">
            <div className="space-y-8">
              
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-modern-gray-100 rounded-full">
                <span className="text-modern-gray-600 text-sm font-medium">Líder en Alimentación Saludable</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-modern-gray-900 leading-[0.9] tracking-tight">
                  El futuro de la
                  <span className="block">alimentación</span>
                  <span className="block text-nutinova-asparagus">saludable</span>
                </h1>
                
                <p className="text-lg sm:text-xl text-modern-gray-600 leading-relaxed max-w-lg">
                  Productos veganos, sin gluten y sin azúcar que transforman 
                  la experiencia alimentaria sin comprometer el sabor.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-modern-gray-900 hover:bg-modern-gray-800 text-white px-8 py-4 text-lg rounded-xl group"
                >
                  Ver Productos
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-modern-gray-300 text-modern-gray-700 hover:bg-modern-gray-50 px-8 py-4 text-lg rounded-xl"
                >
                  Nuestra Historia
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-modern-gray-200">
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-modern-gray-900">100%</div>
                  <div className="text-sm text-modern-gray-600">Vegano</div>
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-modern-gray-900">0%</div>
                  <div className="text-sm text-modern-gray-600">Gluten</div>
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-modern-gray-900">2024</div>
                  <div className="text-sm text-modern-gray-600">Fundada</div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual - Right Side */}
          <div className="lg:col-span-6 xl:col-span-7 relative">
            <div className="relative h-64 sm:h-80 lg:h-[600px] bg-modern-gray-100 rounded-3xl overflow-hidden">
              {/* Full frame image with overlay elements */}
              <img 
                src="/lovable-uploads/beb99197-c563-4416-8d30-f1137d1141fa.png" 
                alt="Nutinova Foods Product"
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Overlay gradient for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-br from-nutinova-beige/20 to-nutinova-pistachi/20"></div>
              
              {/* Text overlay */}
              <div className="absolute bottom-8 left-8 right-8 text-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-modern-gray-700 text-lg font-medium">Nutinova Foods</div>
                  <div className="text-modern-gray-500 text-sm">Alimentación Saludable</div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-8 right-8 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                <span className="text-2xl">🌱</span>
              </div>
              <div className="absolute top-8 left-8 w-20 h-12 bg-nutinova-moonstone rounded-xl flex items-center justify-center">
                <span className="text-white text-sm font-medium">Sin Gluten</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
