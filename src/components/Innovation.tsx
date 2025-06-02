
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
    <section id="innovacion" className="py-48 bg-gradient-to-br from-white via-nutinova-beige/20 to-white">
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-32 animate-fade-in">
          <div className="inline-flex items-center px-6 py-3 bg-nutinova-asparagus/10 border border-nutinova-asparagus/20 rounded-full mb-8">
            <span className="text-nutinova-asparagus font-medium text-lg">Innovación y Desarrollo</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-nutinova-asparagus mb-12 leading-tight">
            Transformando el
            <span className="block bg-gradient-to-r from-nutinova-moonstone to-nutinova-pistachi bg-clip-text text-transparent">
              Futuro Alimentario
            </span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed font-light">
            La innovación está en el corazón de Nutinova Foods. Nuestro enfoque en I+D nos permite 
            crear productos revolucionarios que satisfacen las necesidades cambiantes del mercado.
          </p>
        </div>

        {/* Research Areas - Modern Grid */}
        <div className="mb-32">
          <h3 className="text-4xl font-bold text-center text-nutinova-moonstone mb-20">
            Áreas de Investigación
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-slide-in">
            {researchAreas.map((area, index) => (
              <Card key={index} className="group relative overflow-hidden bg-white/60 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-nutinova-beige/30 via-transparent to-nutinova-pistachi/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-10 text-center h-full flex flex-col relative z-10">
                  <div className="flex justify-center mb-8">
                    <div className="p-4 bg-nutinova-asparagus/10 rounded-2xl group-hover:bg-nutinova-asparagus/20 transition-colors duration-300">
                      <area.icon className="h-10 w-10 text-nutinova-asparagus" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-nutinova-asparagus mb-6">{area.title}</h4>
                  <p className="text-gray-600 leading-relaxed flex-grow mb-8 text-lg">
                    {area.description}
                  </p>
                  <div className="mt-auto">
                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                      area.status === 'En producción' ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' :
                      area.status === 'Implementado' ? 'bg-blue-100 text-blue-700 border border-blue-200' :
                      area.status === 'Desarrollo' ? 'bg-amber-100 text-amber-700 border border-amber-200' :
                      'bg-purple-100 text-purple-700 border border-purple-200'
                    }`}>
                      {area.status}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Innovation Philosophy - Asymmetric Layout */}
        <div className="mb-32">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            <div className="lg:col-span-3">
              <div className="inline-flex items-center px-4 py-2 bg-nutinova-moonstone/10 border border-nutinova-moonstone/20 rounded-full mb-8">
                <span className="text-nutinova-moonstone font-medium">Filosofía</span>
              </div>
              <h3 className="text-4xl font-bold text-nutinova-asparagus mb-8 leading-tight">
                Innovación con Propósito
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-12 font-light">
                Creemos que la innovación debe tener un propósito: mejorar la vida de las personas 
                y proteger nuestro planeta. Cada desarrollo tecnológico en Nutinova Foods está 
                guiado por estos principios fundamentales.
              </p>
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="w-2 h-2 bg-nutinova-moonstone rounded-full mr-6 mt-3 group-hover:scale-150 transition-transform duration-300"></div>
                  <div>
                    <strong className="text-nutinova-asparagus text-xl block mb-2">Investigación Aplicada</strong>
                    <span className="text-gray-600 text-lg font-light">Soluciones prácticas para necesidades reales del mercado</span>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="w-2 h-2 bg-nutinova-moonstone rounded-full mr-6 mt-3 group-hover:scale-150 transition-transform duration-300"></div>
                  <div>
                    <strong className="text-nutinova-asparagus text-xl block mb-2">Colaboración Científica</strong>
                    <span className="text-gray-600 text-lg font-light">Partnerships con universidades y centros de investigación</span>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="w-2 h-2 bg-nutinova-moonstone rounded-full mr-6 mt-3 group-hover:scale-150 transition-transform duration-300"></div>
                  <div>
                    <strong className="text-nutinova-asparagus text-xl block mb-2">Mejora Continua</strong>
                    <span className="text-gray-600 text-lg font-light">Optimización constante de procesos y productos</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-12 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-nutinova-moonstone to-nutinova-pistachi rounded-2xl mb-8">
                    <FlaskConical className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-nutinova-moonstone mb-6">Centro de I+D</h4>
                  <p className="text-gray-600 mb-10 text-lg font-light leading-relaxed">
                    Nuestras instalaciones de investigación en Guadalajara están equipadas con 
                    tecnología de vanguardia para el desarrollo de productos alimentarios innovadores.
                  </p>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-nutinova-asparagus mb-2">15+</div>
                      <div className="text-sm text-gray-500 uppercase tracking-wider font-medium">Científicos</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-nutinova-asparagus mb-2">50+</div>
                      <div className="text-sm text-gray-500 uppercase tracking-wider font-medium">Proyectos</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Technologies - Modern Cards */}
        <div>
          <h3 className="text-4xl font-bold text-center text-nutinova-moonstone mb-20">
            Tecnologías de Fabricación
          </h3>
          <div className="grid md:grid-cols-3 gap-10">
            {technologies.map((tech, index) => (
              <Card key={index} className="group bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-nutinova-pistachi via-nutinova-moonstone to-nutinova-asparagus"></div>
                <CardContent className="p-10">
                  <h4 className="text-xl font-bold text-nutinova-asparagus mb-6 group-hover:text-nutinova-moonstone transition-colors duration-300">
                    {tech.name}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-lg font-light">
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
