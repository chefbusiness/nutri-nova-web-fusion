
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';

const Brands = () => {
  const brands = [
    {
      name: 'Dainut',
      description: 'Nuestra marca pionera en alternativas lácteas veganas, libres de gluten y sin azúcar.',
      products: [
        'Dulce de Leche de Almendras Vegano',
        'Leche Condensada de Almendras Vegana'
      ],
      features: ['100% Vegano', 'Sin Gluten', 'Sin Azúcar', 'Rico en Almendras'],
      color: 'nutinova-pistachi',
      image: '/lovable-uploads/09d38c43-f4b6-425c-9720-01b46cb1a59f.png'
    }
  ];

  return (
    <section id="marcas" className="py-16 sm:py-24 lg:py-48 bg-gradient-to-br from-nutinova-beige/30 via-white to-nutinova-beige/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-16 sm:mb-24 lg:mb-32 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 sm:px-6 py-3 bg-nutinova-pistachi/10 border border-nutinova-pistachi/20 rounded-full mb-8 sm:mb-12">
            <Star className="h-4 w-4 sm:h-5 w-5 text-nutinova-pistachi mr-2" />
            <span className="text-nutinova-pistachi font-medium text-sm sm:text-base lg:text-lg">Nuestro Portfolio</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-nutinova-asparagus mb-8 sm:mb-12 leading-tight px-4">
            Marcas que 
            <span className="block bg-gradient-to-r from-nutinova-moonstone to-nutinova-pistachi bg-clip-text text-transparent">
              Transforman Vidas
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light px-4">
            Cada marca bajo el paraguas de Nutinova Foods refleja nuestro compromiso con la calidad, 
            innovación y sostenibilidad, ofreciendo productos que transforman la experiencia alimentaria.
          </p>
        </div>

        <div className="grid gap-12 sm:gap-16 lg:gap-20">
          {brands.map((brand) => (
            <Card key={brand.name} className="overflow-hidden border-0 shadow-2xl group bg-white/90 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Brand Info */}
                  <div className="p-8 sm:p-12 lg:p-16 xl:p-20 flex flex-col justify-center">
                    <div className="flex items-center mb-8 sm:mb-12">
                      <div className="p-3 sm:p-4 bg-nutinova-pistachi/10 rounded-2xl mr-4 sm:mr-6">
                        <img 
                          src={brand.image} 
                          alt={brand.name}
                          className="h-12 w-auto sm:h-16"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-nutinova-asparagus">{brand.name}</h3>
                        <div className="inline-flex items-center px-2 sm:px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs sm:text-sm font-medium mt-2">
                          Lanzamiento 2024
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-12 leading-relaxed font-light">
                      {brand.description}
                    </p>

                    {/* Products */}
                    <div className="mb-8 sm:mb-12">
                      <h4 className="text-lg sm:text-xl font-semibold text-nutinova-moonstone mb-4 sm:mb-6">Productos Destacados:</h4>
                      <ul className="space-y-3 sm:space-y-4">
                        {brand.products.map((product, index) => (
                          <li key={index} className="flex items-center text-gray-700 text-base sm:text-lg group/item">
                            <div className="w-2 h-2 bg-nutinova-pistachi rounded-full mr-4 sm:mr-6 group-hover/item:scale-150 transition-transform duration-300"></div>
                            <span className="font-medium">{product}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Features */}
                    <div className="mb-8 sm:mb-12">
                      <div className="flex flex-wrap gap-3 sm:gap-4">
                        {brand.features.map((feature, index) => (
                          <span 
                            key={index}
                            className="px-4 py-2 sm:px-6 py-3 bg-gradient-to-r from-nutinova-beige to-nutinova-pistachi/30 text-nutinova-asparagus rounded-xl font-medium shadow-sm hover:shadow-md transition-shadow duration-300 text-sm sm:text-base"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button 
                      className="group bg-nutinova-asparagus hover:bg-nutinova-asparagus/90 text-white w-fit px-6 py-4 sm:px-8 py-6 text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                      size="lg"
                    >
                      Conoce Más sobre {brand.name}
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>

                  {/* Visual Section */}
                  <div className="bg-gradient-to-br from-nutinova-beige/50 via-nutinova-pistachi/20 to-nutinova-moonstone/20 p-8 sm:p-12 lg:p-16 xl:p-20 flex items-center justify-center relative overflow-hidden">
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0 bg-[url('/lovable-uploads/edf24085-7476-4901-b83b-42b6939ff9da.png')] bg-[length:200px_200px] bg-repeat"></div>
                    </div>
                    
                    <div className="text-center relative z-10">
                      <div className="relative mb-8 sm:mb-12 mx-auto">
                        <div className="w-32 h-32 sm:w-40 h-40 lg:w-48 h-48 bg-white rounded-3xl shadow-2xl flex items-center justify-center mx-auto relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                          <img 
                            src={brand.image} 
                            alt={brand.name}
                            className="h-16 w-auto sm:h-20 lg:h-28"
                          />
                        </div>
                        {/* Floating elements - hidden on mobile */}
                        <div className="hidden sm:block absolute -top-4 -right-4 w-8 h-8 lg:w-12 h-12 bg-nutinova-pistachi/30 rounded-full blur-xl animate-pulse"></div>
                        <div className="hidden sm:block absolute -bottom-4 -left-4 w-12 h-12 lg:w-16 h-16 bg-nutinova-moonstone/30 rounded-full blur-xl animate-pulse delay-1000"></div>
                      </div>
                      
                      <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-nutinova-asparagus mb-3 sm:mb-4">
                        Primera marca en el mercado
                      </h4>
                      <p className="text-nutinova-moonstone font-medium text-base sm:text-lg lg:text-xl">
                        Pioneros en alternativas lácteas veganas
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Future Brands Teaser */}
        <div className="mt-16 sm:mt-24 lg:mt-32 text-center">
          <Card className="bg-gradient-to-r from-nutinova-beige/50 to-nutinova-pistachi/30 border-0 shadow-xl overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-nutinova-pistachi via-nutinova-moonstone to-nutinova-asparagus"></div>
            <CardContent className="p-8 sm:p-12 lg:p-16">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-nutinova-asparagus mb-6 sm:mb-8">
                Más Marcas en Camino
              </h3>
              <p className="text-gray-600 text-base sm:text-lg lg:text-xl mb-8 sm:mb-12 font-light max-w-3xl mx-auto leading-relaxed">
                Nutinova Foods continúa innovando y expandiendo su portafolio de marcas. 
                Mantente al día con nuestros próximos lanzamientos.
              </p>
              <Button 
                variant="outline" 
                className="border-2 border-nutinova-asparagus text-nutinova-asparagus hover:bg-nutinova-asparagus hover:text-white px-6 py-4 sm:px-8 py-6 text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm"
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
