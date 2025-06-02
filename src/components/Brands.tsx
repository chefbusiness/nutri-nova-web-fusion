
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
    <section id="marcas" className="py-48 bg-gradient-to-br from-nutinova-beige/30 via-white to-nutinova-beige/20">
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-32 animate-fade-in">
          <div className="inline-flex items-center px-6 py-3 bg-nutinova-pistachi/10 border border-nutinova-pistachi/20 rounded-full mb-12">
            <Star className="h-5 w-5 text-nutinova-pistachi mr-2" />
            <span className="text-nutinova-pistachi font-medium text-lg">Nuestro Portfolio</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-nutinova-asparagus mb-12 leading-tight">
            Marcas que 
            <span className="block bg-gradient-to-r from-nutinova-moonstone to-nutinova-pistachi bg-clip-text text-transparent">
              Transforman Vidas
            </span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Cada marca bajo el paraguas de Nutinova Foods refleja nuestro compromiso con la calidad, 
            innovación y sostenibilidad, ofreciendo productos que transforman la experiencia alimentaria.
          </p>
        </div>

        <div className="grid gap-20">
          {brands.map((brand) => (
            <Card key={brand.name} className="overflow-hidden border-0 shadow-2xl group bg-white/90 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Brand Info */}
                  <div className="p-16 lg:p-20 flex flex-col justify-center">
                    <div className="flex items-center mb-12">
                      <div className="p-4 bg-nutinova-pistachi/10 rounded-2xl mr-6">
                        <img 
                          src={brand.image} 
                          alt={brand.name}
                          className="h-16 w-auto"
                        />
                      </div>
                      <div>
                        <h3 className="text-4xl font-bold text-nutinova-asparagus">{brand.name}</h3>
                        <div className="inline-flex items-center px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mt-2">
                          Lanzamiento 2024
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-xl text-gray-600 mb-12 leading-relaxed font-light">
                      {brand.description}
                    </p>

                    {/* Products */}
                    <div className="mb-12">
                      <h4 className="text-xl font-semibold text-nutinova-moonstone mb-6">Productos Destacados:</h4>
                      <ul className="space-y-4">
                        {brand.products.map((product, index) => (
                          <li key={index} className="flex items-center text-gray-700 text-lg group/item">
                            <div className="w-2 h-2 bg-nutinova-pistachi rounded-full mr-6 group-hover/item:scale-150 transition-transform duration-300"></div>
                            <span className="font-medium">{product}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Features */}
                    <div className="mb-12">
                      <div className="flex flex-wrap gap-4">
                        {brand.features.map((feature, index) => (
                          <span 
                            key={index}
                            className="px-6 py-3 bg-gradient-to-r from-nutinova-beige to-nutinova-pistachi/30 text-nutinova-asparagus rounded-xl font-medium shadow-sm hover:shadow-md transition-shadow duration-300"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button 
                      className="group bg-nutinova-asparagus hover:bg-nutinova-asparagus/90 text-white w-fit px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                      size="lg"
                    >
                      Conoce Más sobre {brand.name}
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>

                  {/* Visual Section */}
                  <div className="bg-gradient-to-br from-nutinova-beige/50 via-nutinova-pistachi/20 to-nutinova-moonstone/20 p-16 lg:p-20 flex items-center justify-center relative overflow-hidden">
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0 bg-[url('/lovable-uploads/edf24085-7476-4901-b83b-42b6939ff9da.png')] bg-[length:200px_200px] bg-repeat"></div>
                    </div>
                    
                    <div className="text-center relative z-10">
                      <div className="relative mb-12 mx-auto">
                        <div className="w-48 h-48 bg-white rounded-3xl shadow-2xl flex items-center justify-center mx-auto relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                          <img 
                            src={brand.image} 
                            alt={brand.name}
                            className="h-28 w-auto"
                          />
                        </div>
                        {/* Floating elements */}
                        <div className="absolute -top-4 -right-4 w-12 h-12 bg-nutinova-pistachi/30 rounded-full blur-xl animate-pulse"></div>
                        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-nutinova-moonstone/30 rounded-full blur-xl animate-pulse delay-1000"></div>
                      </div>
                      
                      <h4 className="text-3xl font-bold text-nutinova-asparagus mb-4">
                        Primera marca en el mercado
                      </h4>
                      <p className="text-nutinova-moonstone font-medium text-xl">
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
        <div className="mt-32 text-center">
          <Card className="bg-gradient-to-r from-nutinova-beige/50 to-nutinova-pistachi/30 border-0 shadow-xl overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-nutinova-pistachi via-nutinova-moonstone to-nutinova-asparagus"></div>
            <CardContent className="p-16">
              <h3 className="text-3xl font-bold text-nutinova-asparagus mb-8">
                Más Marcas en Camino
              </h3>
              <p className="text-gray-600 text-xl mb-12 font-light max-w-3xl mx-auto leading-relaxed">
                Nutinova Foods continúa innovando y expandiendo su portafolio de marcas. 
                Mantente al día con nuestros próximos lanzamientos.
              </p>
              <Button 
                variant="outline" 
                className="border-2 border-nutinova-asparagus text-nutinova-asparagus hover:bg-nutinova-asparagus hover:text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm"
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
