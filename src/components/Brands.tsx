
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Brands = () => {
  return (
    <section id="marcas" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-modern-gray-900 mb-6">
            Nuestras Marcas
          </h2>
          <p className="text-lg sm:text-xl text-modern-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cada marca refleja nuestro compromiso con la calidad, innovación y sostenibilidad.
          </p>
        </div>

        {/* Dainut Brand - Hero Layout */}
        <Card className="bg-modern-gray-50 border-0 shadow-sm mb-16 lg:mb-24 overflow-hidden">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-12 gap-0">
              
              {/* Brand Info */}
              <div className="lg:col-span-7 p-8 lg:p-16 flex flex-col justify-center">
                <div className="flex items-center mb-8">
                  <img 
                    src="/lovable-uploads/09d38c43-f4b6-425c-9720-01b46cb1a59f.png" 
                    alt="Dainut"
                    className="h-12 w-auto mr-4"
                  />
                  <div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-modern-gray-900">Dainut</h3>
                    <div className="text-sm text-nutinova-asparagus font-medium">Lanzamiento 2024</div>
                  </div>
                </div>
                
                <p className="text-lg lg:text-xl text-modern-gray-600 mb-8 leading-relaxed">
                  Nuestra marca pionera en alternativas lácteas veganas, libres de gluten y sin azúcar. 
                  Productos que transforman los clásicos sabores sin compromiso.
                </p>

                {/* Products */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-nutinova-asparagus rounded-full mr-4"></div>
                    <span className="text-modern-gray-700">Dulce de Leche de Almendras Vegano</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-nutinova-asparagus rounded-full mr-4"></div>
                    <span className="text-modern-gray-700">Leche Condensada de Almendras Vegana</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {['100% Vegano', 'Sin Gluten', 'Sin Azúcar', 'Rico en Almendras'].map((feature) => (
                    <span 
                      key={feature}
                      className="px-4 py-2 bg-white text-modern-gray-700 rounded-xl text-sm font-medium border border-modern-gray-200"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Button 
                  className="bg-modern-gray-900 hover:bg-modern-gray-800 text-white w-fit px-6 py-3 rounded-xl group"
                >
                  Conoce Más sobre Dainut
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </div>

              {/* Visual Section */}
              <div className="lg:col-span-5 bg-gradient-to-br from-nutinova-beige/30 to-nutinova-pistachi/20 p-8 lg:p-16 flex items-center justify-center min-h-[400px] lg:min-h-[600px]">
                <div className="text-center">
                  <div className="w-32 h-32 lg:w-48 lg:h-48 bg-white rounded-3xl shadow-lg flex items-center justify-center mx-auto mb-8 relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                    <img 
                      src="/lovable-uploads/46e59cc7-60ef-4de3-ad94-553f7a75e6c7.png" 
                      alt="Dainut Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl lg:text-2xl font-bold text-modern-gray-900 mb-2">
                    Primera en el mercado
                  </h4>
                  <p className="text-modern-gray-600">
                    Pioneros en alternativas lácteas veganas
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Future Brands */}
        <div className="text-center">
          <Card className="bg-modern-gray-50 border-0 shadow-sm max-w-4xl mx-auto">
            <CardContent className="p-8 lg:p-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-modern-gray-900 mb-6">
                Más Marcas en Desarrollo
              </h3>
              <p className="text-lg text-modern-gray-600 mb-8 leading-relaxed">
                Nutinova Foods continúa innovando y expandiendo su portafolio. 
                Mantente al día con nuestros próximos lanzamientos.
              </p>
              <Button 
                variant="outline" 
                className="border-2 border-modern-gray-300 text-modern-gray-700 hover:bg-modern-gray-50 px-6 py-3 rounded-xl"
              >
                Suscríbete a Nuestras Noticias
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Brands;
