
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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
    <section id="marcas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-nutinova-asparagus mb-6">
            Nuestras Marcas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cada marca bajo el paraguas de Nutinova Foods refleja nuestro compromiso con la calidad, 
            innovación y sostenibilidad, ofreciendo productos que transforman la experiencia alimentaria.
          </p>
        </div>

        <div className="grid gap-12">
          {brands.map((brand) => (
            <Card key={brand.name} className="overflow-hidden shadow-xl smooth-hover border-2 hover:border-nutinova-pistachi">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Brand Info */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center mb-6">
                      <img 
                        src={brand.image} 
                        alt={brand.name}
                        className="h-16 w-auto mr-4"
                      />
                      <h3 className="text-3xl font-bold text-nutinova-asparagus">{brand.name}</h3>
                    </div>
                    
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      {brand.description}
                    </p>

                    {/* Products */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-nutinova-moonstone mb-3">Productos:</h4>
                      <ul className="space-y-2">
                        {brand.products.map((product, index) => (
                          <li key={index} className="flex items-center text-gray-700">
                            <span className="w-2 h-2 bg-nutinova-pistachi rounded-full mr-3"></span>
                            {product}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <div className="flex flex-wrap gap-2">
                        {brand.features.map((feature, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-nutinova-beige text-nutinova-asparagus rounded-full text-sm font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button 
                      className="bg-nutinova-asparagus hover:bg-nutinova-asparagus/90 text-white w-fit"
                      size="lg"
                    >
                      Conoce Más sobre {brand.name}
                    </Button>
                  </div>

                  {/* Visual Section */}
                  <div className="bg-gradient-to-br from-nutinova-beige via-nutinova-pistachi/20 to-nutinova-moonstone/20 p-8 lg:p-12 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center mb-6 mx-auto">
                        <img 
                          src={brand.image} 
                          alt={brand.name}
                          className="h-20 w-auto"
                        />
                      </div>
                      <h4 className="text-2xl font-bold text-nutinova-asparagus mb-2">
                        Primera marca en el mercado
                      </h4>
                      <p className="text-nutinova-moonstone font-medium">
                        Lanzamiento 2024
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Future Brands Teaser */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-nutinova-beige to-nutinova-pistachi/30 border-2 border-nutinova-pistachi/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-nutinova-asparagus mb-4">
                Más Marcas en Camino
              </h3>
              <p className="text-gray-700 text-lg mb-6">
                Nutinova Foods continúa innovando y expandiendo su portafolio de marcas. 
                Mantente al día con nuestros próximos lanzamientos.
              </p>
              <Button 
                variant="outline" 
                className="border-nutinova-asparagus text-nutinova-asparagus hover:bg-nutinova-asparagus hover:text-white"
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
