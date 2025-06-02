
import { Card, CardContent } from '@/components/ui/card';

const Innovation = () => {
  const researchAreas = [
    {
      title: 'Alternativas Lácteas',
      description: 'Desarrollo de productos lácteos veganos con textura y sabor excepcionales.',
      icon: '🥛',
      status: 'En producción'
    },
    {
      title: 'Tecnología sin Gluten',
      description: 'Innovación en procesos que garantizan productos 100% libres de gluten.',
      icon: '🌾',
      status: 'Implementado'
    },
    {
      title: 'Endulzantes Naturales',
      description: 'Investigación en alternativas naturales al azúcar refinado.',
      icon: '🍯',
      status: 'Investigación'
    },
    {
      title: 'Fermentación Avanzada',
      description: 'Técnicas de fermentación para mejorar sabor y valor nutricional.',
      icon: '🧪',
      status: 'Desarrollo'
    }
  ];

  const technologies = [
    {
      name: 'Procesamiento en Frío',
      description: 'Preserva nutrientes y sabores naturales'
    },
    {
      name: 'Fermentación Controlada',
      description: 'Mejora digestibilidad y perfil nutricional'
    },
    {
      name: 'Extracción Enzimática',
      description: 'Obtención de compuestos bioactivos'
    }
  ];

  return (
    <section id="innovacion" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-nutinova-asparagus mb-6">
            Innovación y Desarrollo
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            La innovación está en el corazón de Nutinova Foods. Nuestro enfoque en I+D nos permite 
            crear productos revolucionarios que satisfacen las necesidades cambiantes del mercado.
          </p>
        </div>

        {/* Research Areas */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-nutinova-moonstone mb-12">
            Áreas de Investigación
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-in">
            {researchAreas.map((area, index) => (
              <Card key={index} className="bg-gradient-to-br from-nutinova-beige/50 to-white shadow-lg smooth-hover border-2 hover:border-nutinova-moonstone">
                <CardContent className="p-6 text-center h-full flex flex-col">
                  <div className="text-4xl mb-4">{area.icon}</div>
                  <h4 className="text-lg font-bold text-nutinova-asparagus mb-3">{area.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
                    {area.description}
                  </p>
                  <div className="mt-auto">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      area.status === 'En producción' ? 'bg-green-100 text-green-800' :
                      area.status === 'Implementado' ? 'bg-blue-100 text-blue-800' :
                      area.status === 'Desarrollo' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {area.status}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Innovation Philosophy */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-nutinova-asparagus/10 to-nutinova-pistachi/20 shadow-xl">
            <CardContent className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-nutinova-asparagus mb-6">
                    Filosofía de Innovación
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Creemos que la innovación debe tener un propósito: mejorar la vida de las personas 
                    y proteger nuestro planeta. Cada desarrollo tecnológico en Nutinova Foods está 
                    guiado por estos principios fundamentales.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="w-3 h-3 bg-nutinova-moonstone rounded-full mr-3 mt-2"></span>
                      <div>
                        <strong className="text-nutinova-asparagus">Investigación Aplicada:</strong>
                        <span className="text-gray-700 ml-1">Soluciones prácticas para necesidades reales</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="w-3 h-3 bg-nutinova-moonstone rounded-full mr-3 mt-2"></span>
                      <div>
                        <strong className="text-nutinova-asparagus">Colaboración Científica:</strong>
                        <span className="text-gray-700 ml-1">Partnerships con universidades y centros de investigación</span>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="w-3 h-3 bg-nutinova-moonstone rounded-full mr-3 mt-2"></span>
                      <div>
                        <strong className="text-nutinova-asparagus">Mejora Continua:</strong>
                        <span className="text-gray-700 ml-1">Optimización constante de procesos y productos</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <h4 className="text-2xl font-bold text-nutinova-moonstone mb-4">Centro de I+D</h4>
                    <p className="text-gray-600 mb-6">
                      Nuestras instalaciones de investigación en Guadalajara están equipadas con 
                      tecnología de vanguardia para el desarrollo de productos alimentarios innovadores.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-nutinova-asparagus">15+</div>
                        <div className="text-sm text-gray-600">Científicos</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-nutinova-asparagus">50+</div>
                        <div className="text-sm text-gray-600">Proyectos</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Technologies */}
        <div>
          <h3 className="text-3xl font-bold text-center text-nutinova-moonstone mb-12">
            Tecnologías de Fabricación
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <Card key={index} className="bg-white shadow-lg smooth-hover border-l-4 border-nutinova-pistachi">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-nutinova-asparagus mb-3">{tech.name}</h4>
                  <p className="text-gray-600 leading-relaxed">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;
