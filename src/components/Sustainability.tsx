
import { Card, CardContent } from '@/components/ui/card';
import { Sprout, Globe, Package, Truck } from 'lucide-react';

const Sustainability = () => {
  const initiatives = [
    {
      title: 'Ingredientes Orgánicos',
      description: 'Selección cuidadosa de ingredientes orgánicos certificados que respetan el medio ambiente.',
      icon: Sprout,
      metric: '95% ingredientes orgánicos'
    },
    {
      title: 'Reducción de Huella de Carbono',
      description: 'Procesos de producción optimizados para minimizar emisiones y consumo energético.',
      icon: Globe,
      metric: '40% menos emisiones'
    },
    {
      title: 'Envases Sostenibles',
      description: 'Packaging biodegradable y reciclable que protege el producto y el planeta.',
      icon: Package,
      metric: '100% reciclable'
    },
    {
      title: 'Agricultura Responsable',
      description: 'Apoyo a productores locales y prácticas agrícolas sostenibles.',
      icon: Truck,
      metric: '80% proveedores locales'
    }
  ];

  return (
    <section id="sostenibilidad" className="py-32 pattern-overlay-teal">
      <div className="pattern-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-nutinova-asparagus mb-8">
            Compromiso con la Sostenibilidad
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Nuestro compromiso va más allá de crear productos deliciosos. Trabajamos activamente para 
            proteger el medio ambiente y construir un futuro más sostenible para las próximas generaciones.
          </p>
        </div>

        {/* Main Message */}
        <div className="mb-20">
          <Card className="bg-white/95 backdrop-blur-sm shadow-xl smooth-hover border border-nutinova-moonstone/30">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl font-bold text-nutinova-moonstone mb-8">
                Sostenibilidad Ambiental, Social y de Gobernanza
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                En Nutinova Foods integramos prácticas sostenibles en cada aspecto de nuestro negocio, 
                desde la selección de ingredientes hasta los procesos de fabricación, pasando por el 
                bienestar de nuestros colaboradores y la transparencia en nuestras operaciones.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Initiatives Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 animate-slide-in">
          {initiatives.map((initiative, index) => (
            <Card key={index} className="bg-white/95 backdrop-blur-sm shadow-lg smooth-hover border-2 hover:border-nutinova-pistachi">
              <CardContent className="p-8 text-center h-full flex flex-col">
                <div className="flex justify-center mb-6">
                  <initiative.icon className="h-12 w-12 text-nutinova-asparagus" />
                </div>
                <h4 className="text-lg font-bold text-nutinova-asparagus mb-4">{initiative.title}</h4>
                <p className="text-gray-600 leading-relaxed flex-grow mb-6">
                  {initiative.description}
                </p>
                <div className="bg-nutinova-beige p-3 rounded-lg">
                  <span className="text-nutinova-moonstone font-bold text-sm">{initiative.metric}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Health & Wellness Section */}
        <div>
          <Card className="bg-white/95 backdrop-blur-sm border-2 border-nutinova-asparagus/20 shadow-xl">
            <CardContent className="p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-nutinova-asparagus mb-8">
                    Salud y Bienestar
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    Nuestro enfoque en la salud va de la mano con la sostenibilidad. Cada producto 
                    está diseñado para nutrir el cuerpo mientras respeta el planeta, creando un 
                    círculo virtuoso de bienestar integral.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <span className="w-3 h-3 bg-nutinova-pistachi rounded-full mr-4"></span>
                      <span className="text-gray-700 text-lg">Investigación en nutrición avanzada</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-3 h-3 bg-nutinova-pistachi rounded-full mr-4"></span>
                      <span className="text-gray-700 text-lg">Productos libres de alérgenos comunes</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-3 h-3 bg-nutinova-pistachi rounded-full mr-4"></span>
                      <span className="text-gray-700 text-lg">Alternativas saludables sin comprometer sabor</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                      <div className="text-3xl font-bold text-nutinova-moonstone">100%</div>
                      <div className="text-sm text-gray-600 mt-2">Vegano</div>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                      <div className="text-3xl font-bold text-nutinova-moonstone">0%</div>
                      <div className="text-sm text-gray-600 mt-2">Gluten</div>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                      <div className="text-3xl font-bold text-nutinova-moonstone">0%</div>
                      <div className="text-sm text-gray-600 mt-2">Azúcar Añadido</div>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                      <div className="text-3xl font-bold text-nutinova-moonstone">100%</div>
                      <div className="text-sm text-gray-600 mt-2">Natural</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
