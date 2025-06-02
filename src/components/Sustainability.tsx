
import { Card, CardContent } from '@/components/ui/card';
import { Sprout, Globe, Package, Truck, Leaf } from 'lucide-react';

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
    <section id="sostenibilidad" className="py-16 sm:py-24 lg:py-32 bg-modern-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-modern-gray-100 rounded-full mb-6">
            <Leaf className="h-4 w-4 text-modern-gray-600 mr-2" />
            <span className="text-modern-gray-700 text-sm font-medium">Sostenibilidad</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-modern-gray-900 mb-6 leading-tight">
            Compromiso con nuestro planeta
          </h2>
          <p className="text-lg text-modern-gray-600 leading-relaxed">
            Nuestro compromiso va más allá de crear productos deliciosos. Trabajamos activamente para 
            proteger el medio ambiente y construir un futuro más sostenible.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16 sm:mb-20">
          {/* Left: Sustainability Message */}
          <div className="order-2 lg:order-1">
            <Card className="bg-white border-modern-gray-200 shadow-sm h-full">
              <CardContent className="p-8 lg:p-10">
                <h3 className="text-2xl font-bold text-modern-gray-900 mb-6">
                  Sostenibilidad Integral
                </h3>
                <p className="text-modern-gray-600 leading-relaxed mb-8">
                  En Nutinova Foods integramos prácticas sostenibles en cada aspecto de nuestro negocio, 
                  desde la selección de ingredientes hasta los procesos de fabricación.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-modern-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-modern-gray-900 mb-1">2024</div>
                    <div className="text-xs text-modern-gray-500 font-medium uppercase tracking-wider">Carbono Neutral</div>
                  </div>
                  <div className="text-center p-4 bg-modern-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-modern-gray-900 mb-1">100%</div>
                    <div className="text-xs text-modern-gray-500 font-medium uppercase tracking-wider">Energía Renovable</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right: Visual Element */}
          <div className="order-1 lg:order-2">
            <div className="aspect-[4/3] bg-modern-gray-100 rounded-2xl p-8 flex items-center justify-center relative overflow-hidden">
              <div className="text-center relative z-10">
                <Globe className="h-16 w-16 text-modern-gray-400 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-modern-gray-700">
                  Impacto Positivo Global
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* Initiatives Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 sm:mb-20">
          {initiatives.map((initiative, index) => (
            <Card key={index} className="bg-white border-modern-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-modern-gray-100 rounded-xl">
                    <initiative.icon className="h-6 w-6 text-modern-gray-600" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-modern-gray-900 mb-3">{initiative.title}</h4>
                <p className="text-modern-gray-600 text-sm leading-relaxed mb-4">
                  {initiative.description}
                </p>
                <div className="bg-modern-gray-50 px-3 py-2 rounded-lg">
                  <span className="text-modern-gray-700 font-medium text-sm">{initiative.metric}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Health & Wellness Section */}
        <Card className="bg-white border-modern-gray-200 shadow-sm">
          <CardContent className="p-8 lg:p-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-modern-gray-900 mb-6">
                  Salud y Bienestar
                </h3>
                <p className="text-modern-gray-600 leading-relaxed mb-8">
                  Nuestro enfoque en la salud va de la mano con la sostenibilidad. Cada producto 
                  está diseñado para nutrir el cuerpo mientras respeta el planeta.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-modern-gray-400 rounded-full mr-4"></div>
                    <span className="text-modern-gray-600">Investigación en nutrición avanzada</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-modern-gray-400 rounded-full mr-4"></div>
                    <span className="text-modern-gray-600">Productos libres de alérgenos comunes</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-modern-gray-400 rounded-full mr-4"></div>
                    <span className="text-modern-gray-600">Alternativas saludables sin comprometer sabor</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-modern-gray-50 border-0 p-6 text-center">
                  <div className="text-2xl font-bold text-modern-gray-900 mb-1">100%</div>
                  <div className="text-xs text-modern-gray-500 font-medium uppercase tracking-wider">Vegano</div>
                </Card>
                <Card className="bg-modern-gray-50 border-0 p-6 text-center">
                  <div className="text-2xl font-bold text-modern-gray-900 mb-1">0%</div>
                  <div className="text-xs text-modern-gray-500 font-medium uppercase tracking-wider">Gluten</div>
                </Card>
                <Card className="bg-modern-gray-50 border-0 p-6 text-center">
                  <div className="text-2xl font-bold text-modern-gray-900 mb-1">0%</div>
                  <div className="text-xs text-modern-gray-500 font-medium uppercase tracking-wider">Azúcar Añadido</div>
                </Card>
                <Card className="bg-modern-gray-50 border-0 p-6 text-center">
                  <div className="text-2xl font-bold text-modern-gray-900 mb-1">100%</div>
                  <div className="text-xs text-modern-gray-500 font-medium uppercase tracking-wider">Natural</div>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Sustainability;
