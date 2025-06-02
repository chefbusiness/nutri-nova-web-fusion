
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
    <section id="sostenibilidad" className="py-48 bg-gradient-to-br from-white via-nutinova-moonstone/5 to-white">
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-32 animate-fade-in">
          <div className="inline-flex items-center px-6 py-3 bg-emerald-100/80 border border-emerald-200 rounded-full mb-12">
            <Leaf className="h-5 w-5 text-emerald-600 mr-2" />
            <span className="text-emerald-700 font-medium text-lg">Sostenibilidad</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-nutinova-asparagus mb-12 leading-tight">
            Compromiso con
            <span className="block bg-gradient-to-r from-emerald-600 to-nutinova-moonstone bg-clip-text text-transparent">
              Nuestro Planeta
            </span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed font-light">
            Nuestro compromiso va más allá de crear productos deliciosos. Trabajamos activamente para 
            proteger el medio ambiente y construir un futuro más sostenible para las próximas generaciones.
          </p>
        </div>

        {/* Main Message */}
        <div className="mb-32">
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 via-nutinova-moonstone to-nutinova-asparagus"></div>
            <CardContent className="p-16">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h3 className="text-4xl font-bold text-nutinova-moonstone mb-10">
                    Sostenibilidad Integral
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed mb-12 font-light">
                    En Nutinova Foods integramos prácticas sostenibles en cada aspecto de nuestro negocio, 
                    desde la selección de ingredientes hasta los procesos de fabricación, pasando por el 
                    bienestar de nuestros colaboradores y la transparencia en nuestras operaciones.
                  </p>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="text-center p-6 bg-nutinova-beige/30 rounded-2xl">
                      <div className="text-3xl font-bold text-nutinova-asparagus mb-2">2024</div>
                      <div className="text-sm text-gray-600 font-medium">Carbono Neutral</div>
                    </div>
                    <div className="text-center p-6 bg-nutinova-beige/30 rounded-2xl">
                      <div className="text-3xl font-bold text-nutinova-asparagus mb-2">100%</div>
                      <div className="text-sm text-gray-600 font-medium">Energía Renovable</div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-full h-80 bg-gradient-to-br from-emerald-100 to-nutinova-moonstone/20 rounded-3xl p-12 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0 bg-[url('/lovable-uploads/1aa32527-cf59-405f-9291-b1c45b89a8c2.png')] bg-[length:150px_150px] bg-repeat"></div>
                    </div>
                    <div className="text-center relative z-10">
                      <Globe className="h-24 w-24 text-nutinova-moonstone mx-auto mb-6" />
                      <h4 className="text-2xl font-bold text-nutinova-asparagus">
                        Impacto Positivo Global
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Initiatives Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-32 animate-slide-in">
          {initiatives.map((initiative, index) => (
            <Card key={index} className="group bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-transparent to-nutinova-moonstone/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-10 text-center h-full flex flex-col relative z-10">
                <div className="flex justify-center mb-8">
                  <div className="p-4 bg-emerald-100 rounded-2xl group-hover:bg-emerald-200 transition-colors duration-300">
                    <initiative.icon className="h-10 w-10 text-emerald-600" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-nutinova-asparagus mb-6">{initiative.title}</h4>
                <p className="text-gray-600 leading-relaxed flex-grow mb-8 text-lg font-light">
                  {initiative.description}
                </p>
                <div className="bg-gradient-to-r from-emerald-100 to-nutinova-beige p-4 rounded-xl">
                  <span className="text-nutinova-moonstone font-bold text-lg">{initiative.metric}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Health & Wellness Section */}
        <div>
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-nutinova-asparagus via-nutinova-pistachi to-nutinova-moonstone"></div>
            <CardContent className="p-16">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h3 className="text-4xl font-bold text-nutinova-asparagus mb-10">
                    Salud y Bienestar
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed mb-12 font-light">
                    Nuestro enfoque en la salud va de la mano con la sostenibilidad. Cada producto 
                    está diseñado para nutrir el cuerpo mientras respeta el planeta, creando un 
                    círculo virtuoso de bienestar integral.
                  </p>
                  <div className="space-y-8">
                    <div className="flex items-center group">
                      <div className="w-2 h-2 bg-nutinova-pistachi rounded-full mr-6 group-hover:scale-150 transition-transform duration-300"></div>
                      <span className="text-gray-600 text-lg font-light">Investigación en nutrición avanzada</span>
                    </div>
                    <div className="flex items-center group">
                      <div className="w-2 h-2 bg-nutinova-pistachi rounded-full mr-6 group-hover:scale-150 transition-transform duration-300"></div>
                      <span className="text-gray-600 text-lg font-light">Productos libres de alérgenos comunes</span>
                    </div>
                    <div className="flex items-center group">
                      <div className="w-2 h-2 bg-nutinova-pistachi rounded-full mr-6 group-hover:scale-150 transition-transform duration-300"></div>
                      <span className="text-gray-600 text-lg font-light">Alternativas saludables sin comprometer sabor</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="grid grid-cols-2 gap-8">
                    <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg p-8 group hover:shadow-xl transition-all duration-300">
                      <div className="text-4xl font-bold text-nutinova-moonstone mb-2">100%</div>
                      <div className="text-sm text-gray-600 font-medium uppercase tracking-wider">Vegano</div>
                    </Card>
                    <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg p-8 group hover:shadow-xl transition-all duration-300">
                      <div className="text-4xl font-bold text-nutinova-moonstone mb-2">0%</div>
                      <div className="text-sm text-gray-600 font-medium uppercase tracking-wider">Gluten</div>
                    </Card>
                    <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg p-8 group hover:shadow-xl transition-all duration-300">
                      <div className="text-4xl font-bold text-nutinova-moonstone mb-2">0%</div>
                      <div className="text-sm text-gray-600 font-medium uppercase tracking-wider">Azúcar Añadido</div>
                    </Card>
                    <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg p-8 group hover:shadow-xl transition-all duration-300">
                      <div className="text-4xl font-bold text-nutinova-moonstone mb-2">100%</div>
                      <div className="text-sm text-gray-600 font-medium uppercase tracking-wider">Natural</div>
                    </Card>
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
