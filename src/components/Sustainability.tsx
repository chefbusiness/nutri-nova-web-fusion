
import { Card, CardContent } from '@/components/ui/card';

const Sustainability = () => {
  const initiatives = [
    {
      title: 'Ingredientes Orgánicos',
      description: 'Selección cuidadosa de ingredientes orgánicos certificados que respetan el medio ambiente.',
      icon: '🌿',
      metric: '95% ingredientes orgánicos'
    },
    {
      title: 'Reducción de Huella de Carbono',
      description: 'Procesos de producción optimizados para minimizar emisiones y consumo energético.',
      icon: '🌍',
      metric: '40% menos emisiones'
    },
    {
      title: 'Envases Sostenibles',
      description: 'Packaging biodegradable y reciclable que protege el producto y el planeta.',
      icon: '📦',
      metric: '100% reciclable'
    },
    {
      title: 'Agricultura Responsable',
      description: 'Apoyo a productores locales y prácticas agrícolas sostenibles.',
      icon: '🚜',
      metric: '80% proveedores locales'
    }
  ];

  return (
    <section id="sostenibilidad" className="py-20 pattern-overlay-teal">
      <div className="pattern-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-nutinova-asparagus mb-6">
            Compromiso con la Sostenibilidad
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Nuestro compromiso va más allá de crear productos deliciosos. Trabajamos activamente para 
            proteger el medio ambiente y construir un futuro más sostenible para las próximas generaciones.
          </p>
        </div>

        {/* Main Message */}
        <div className="mb-16">
          <Card className="bg-white/95 backdrop-blur-sm shadow-xl smooth-hover border border-nutinova-moonstone/30">
            <CardContent className="p-8 lg:p-12 text-center">
              <h3 className="text-3xl font-bold text-nutinova-moonstone mb-6">
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-slide-in">
          {initiatives.map((initiative, index) => (
            <Card key={index} className="bg-white/95 backdrop-blur-sm shadow-lg smooth-hover border-2 hover:border-nutinova-pistachi">
              <CardContent className="p-6 text-center h-full flex flex-col">
                <div className="text-4xl mb-4">{initiative.icon}</div>
                <h4 className="text-lg font-bold text-nutinova-asparagus mb-3">{initiative.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
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
            <CardContent className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-nutinova-asparagus mb-6">
                    Salud y Bienestar
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Nuestro enfoque en la salud va de la mano con la sostenibilidad. Cada producto 
                    está diseñado para nutrir el cuerpo mientras respeta el planeta, creando un 
                    círculo virtuoso de bienestar integral.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <span className="w-3 h-3 bg-nutinova-pistachi rounded-full mr-3"></span>
                      <span className="text-gray-700">Investigación en nutrición avanzada</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-3 h-3 bg-nutinova-pistachi rounded-full mr-3"></span>
                      <span className="text-gray-700">Productos libres de alérgenos comunes</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-3 h-3 bg-nutinova-pistachi rounded-full mr-3"></span>
                      <span className="text-gray-700">Alternativas saludables sin comprometer sabor</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <div className="text-3xl font-bold text-nutinova-moonstone">100%</div>
                      <div className="text-sm text-gray-600">Vegano</div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <div className="text-3xl font-bold text-nutinova-moonstone">0%</div>
                      <div className="text-sm text-gray-600">Gluten</div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <div className="text-3xl font-bold text-nutinova-moonstone">0%</div>
                      <div className="text-sm text-gray-600">Azúcar Añadido</div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg">
                      <div className="text-3xl font-bold text-nutinova-moonstone">100%</div>
                      <div className="text-sm text-gray-600">Natural</div>
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
