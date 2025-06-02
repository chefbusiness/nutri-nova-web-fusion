
import { Card, CardContent } from '@/components/ui/card';
import { Beaker, Wheat, Droplets, FlaskConical } from 'lucide-react';

const Innovation = () => {
  const researchAreas = [
    {
      title: 'Alternativas Lácteas',
      description: 'Desarrollo de productos lácteos veganos con textura y sabor excepcionales.',
      icon: Beaker,
      status: 'En producción'
    },
    {
      title: 'Tecnología sin Gluten',
      description: 'Innovación en procesos que garantizan productos 100% libres de gluten.',
      icon: Wheat,
      status: 'Implementado'
    },
    {
      title: 'Endulzantes Naturales',
      description: 'Investigación en alternativas naturales al azúcar refinado.',
      icon: Droplets,
      status: 'Investigación'
    },
    {
      title: 'Fermentación Avanzada',
      description: 'Técnicas de fermentación para mejorar sabor y valor nutricional.',
      icon: FlaskConical,
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
    <section id="innovacion" className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-modern-gray-100 rounded-full mb-6">
            <span className="text-modern-gray-700 text-sm font-medium">Innovación y Desarrollo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-modern-gray-900 mb-6 leading-tight">
            Transformando el futuro alimentario
          </h2>
          <p className="text-lg text-modern-gray-600 leading-relaxed">
            La innovación está en el corazón de Nutinova Foods. Nuestro enfoque en I+D nos permite 
            crear productos revolucionarios que satisfacen las necesidades cambiantes del mercado.
          </p>
        </div>

        {/* Research Areas */}
        <div className="mb-16 sm:mb-20">
          <h3 className="text-2xl font-bold text-modern-gray-900 mb-10">
            Áreas de Investigación
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchAreas.map((area, index) => (
              <Card key={index} className="bg-white border-modern-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6 text-center h-full flex flex-col">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-modern-gray-100 rounded-xl">
                      <area.icon className="h-6 w-6 text-modern-gray-600" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-modern-gray-900 mb-3">{area.title}</h4>
                  <p className="text-modern-gray-600 text-sm leading-relaxed flex-grow mb-4">
                    {area.description}
                  </p>
                  <div className="mt-auto">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      area.status === 'En producción' ? 'bg-emerald-100 text-emerald-700' :
                      area.status === 'Implementado' ? 'bg-blue-100 text-blue-700' :
                      area.status === 'Desarrollo' ? 'bg-amber-100 text-amber-700' :
                      'bg-purple-100 text-purple-700'
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
        <div className="mb-16 sm:mb-20">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-3">
              <div className="inline-flex items-center px-4 py-2 bg-modern-gray-100 rounded-full mb-6">
                <span className="text-modern-gray-700 text-sm font-medium">Filosofía</span>
              </div>
              <h3 className="text-2xl font-bold text-modern-gray-900 mb-6">
                Innovación con Propósito
              </h3>
              <p className="text-modern-gray-600 leading-relaxed mb-8">
                Creemos que la innovación debe tener un propósito: mejorar la vida de las personas 
                y proteger nuestro planeta. Cada desarrollo tecnológico en Nutinova Foods está 
                guiado por estos principios fundamentales.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-modern-gray-400 rounded-full mr-4 mt-2"></div>
                  <div>
                    <strong className="text-modern-gray-900 block mb-1">Investigación Aplicada</strong>
                    <span className="text-modern-gray-600">Soluciones prácticas para necesidades reales del mercado</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-modern-gray-400 rounded-full mr-4 mt-2"></div>
                  <div>
                    <strong className="text-modern-gray-900 block mb-1">Colaboración Científica</strong>
                    <span className="text-modern-gray-600">Partnerships con universidades y centros de investigación</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-modern-gray-400 rounded-full mr-4 mt-2"></div>
                  <div>
                    <strong className="text-modern-gray-900 block mb-1">Mejora Continua</strong>
                    <span className="text-modern-gray-600">Optimización constante de procesos y productos</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <Card className="bg-modern-gray-50 border-modern-gray-200 shadow-sm">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-modern-gray-200 rounded-2xl mb-6">
                    <FlaskConical className="h-8 w-8 text-modern-gray-600" />
                  </div>
                  <h4 className="text-xl font-bold text-modern-gray-900 mb-4">Centro de I+D</h4>
                  <p className="text-modern-gray-600 mb-8 leading-relaxed">
                    Nuestras instalaciones de investigación en Guadalajara están equipadas con 
                    tecnología de vanguardia para el desarrollo de productos alimentarios innovadores.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-modern-gray-900 mb-1">15+</div>
                      <div className="text-xs text-modern-gray-500 uppercase tracking-wider font-medium">Científicos</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-modern-gray-900 mb-1">50+</div>
                      <div className="text-xs text-modern-gray-500 uppercase tracking-wider font-medium">Proyectos</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div>
          <h3 className="text-2xl font-bold text-modern-gray-900 mb-10">
            Tecnologías de Fabricación
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <Card key={index} className="bg-white border-modern-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-modern-gray-900 mb-3">
                    {tech.name}
                  </h4>
                  <p className="text-modern-gray-600 leading-relaxed">
                    {tech.description}
                  </p>
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
