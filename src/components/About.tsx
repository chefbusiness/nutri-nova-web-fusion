
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';
import { Lightbulb, Leaf, Heart, Users } from 'lucide-react';

const About = () => {
  const [hoveredValue, setHoveredValue] = useState<string | null>(null);

  const values = [
    {
      id: 'innovacion',
      title: 'Innovación',
      icon: Lightbulb,
      description: 'Constante búsqueda de nuevas formas de mejorar y crear productos alimenticios alternativos.',
      examples: 'Desarrollo de alternativas veganas que mantienen sabor y textura excepcionales.'
    },
    {
      id: 'sostenibilidad',
      title: 'Sostenibilidad',
      icon: Leaf,
      description: 'Compromiso con prácticas que respetan el medio ambiente y reducen la huella de carbono.',
      examples: 'Uso de ingredientes orgánicos y procesos de producción eco-amigables.'
    },
    {
      id: 'salud',
      title: 'Salud y Bienestar',
      icon: Heart,
      description: 'Fomento de un estilo de vida saludable mediante productos nutritivos y deliciosos.',
      examples: 'Productos libres de gluten, azúcar y alérgenos comunes para todas las necesidades.'
    },
    {
      id: 'inclusividad',
      title: 'Inclusividad',
      icon: Users,
      description: 'Provisión de opciones para todos, independientemente de restricciones dietéticas.',
      examples: 'Líneas de productos aptas para veganos, celíacos y diabéticos.'
    }
  ];

  return (
    <section id="sobre" className="py-48 bg-gradient-to-br from-white via-nutinova-beige/10 to-white">
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Mission & Vision */}
        <div className="text-center mb-32 animate-fade-in">
          <div className="inline-flex items-center px-6 py-3 bg-nutinova-moonstone/10 border border-nutinova-moonstone/20 rounded-full mb-12">
            <span className="text-nutinova-moonstone font-medium text-lg">Sobre Nutinova Foods</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-nutinova-asparagus mb-16 leading-tight">
            Construyendo el 
            <span className="block bg-gradient-to-r from-nutinova-moonstone to-nutinova-pistachi bg-clip-text text-transparent">
              Futuro de la Alimentación
            </span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto mt-20">
            <Card className="group bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-nutinova-moonstone to-nutinova-pistachi"></div>
              <CardContent className="p-12">
                <h3 className="text-3xl font-bold text-nutinova-moonstone mb-8">Nuestra Misión</h3>
                <p className="text-gray-600 leading-relaxed text-xl font-light">
                  Proporcionar productos alimenticios saludables que promuevan el bienestar y la sostenibilidad, 
                  satisfaciendo las necesidades de consumidores que buscan opciones veganas y libres de alérgenos, 
                  manteniendo los más altos estándares de calidad.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-nutinova-asparagus to-nutinova-moonstone"></div>
              <CardContent className="p-12">
                <h3 className="text-3xl font-bold text-nutinova-moonstone mb-8">Nuestra Visión</h3>
                <p className="text-gray-600 leading-relaxed text-xl font-light">
                  Ser reconocida globalmente como pionera en la fabricación de alimentos saludables y alternativos, 
                  influyendo en la industria alimentaria hacia prácticas más sostenibles y conscientes, 
                  comenzando por el mercado estadounidense.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Corporate Values */}
        <div className="animate-slide-in mb-32">
          <h3 className="text-4xl font-bold text-center text-nutinova-asparagus mb-20">
            Nuestros Valores Corporativos
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={value.id} className="relative">
                <Card 
                  className="h-full cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl border-0 bg-white/80 backdrop-blur-sm shadow-lg group overflow-hidden"
                  onMouseEnter={() => setHoveredValue(value.id)}
                  onMouseLeave={() => setHoveredValue(null)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-nutinova-beige/30 via-transparent to-nutinova-pistachi/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-10 text-center h-full flex flex-col justify-center relative z-10">
                    <div className="flex justify-center mb-8">
                      <div className="p-4 bg-nutinova-asparagus/10 rounded-2xl group-hover:bg-nutinova-asparagus/20 transition-colors duration-300">
                        <value.icon className="h-10 w-10 text-nutinova-asparagus" />
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-nutinova-asparagus mb-6">{value.title}</h4>
                    <p className="text-gray-600 leading-relaxed text-lg font-light">{value.description}</p>
                  </CardContent>
                </Card>
                
                {/* Hover popup */}
                {hoveredValue === value.id && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-6 z-20 bg-nutinova-asparagus text-white p-6 rounded-xl shadow-2xl max-w-xs animate-fade-in">
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-nutinova-asparagus rotate-45"></div>
                    <p className="text-sm font-medium leading-relaxed">{value.examples}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Company Info */}
        <div className="text-center">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl max-w-5xl mx-auto overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-nutinova-pistachi via-nutinova-moonstone to-nutinova-asparagus"></div>
            <CardContent className="p-16">
              <h3 className="text-3xl font-bold text-nutinova-asparagus mb-8">Nuestra Presencia Global</h3>
              <p className="text-gray-600 leading-relaxed text-xl font-light">
                Con sede en <strong className="text-nutinova-moonstone">Guadalajara, México</strong>, Nutinova Foods está estableciendo una fuerte presencia 
                en el mercado estadounidense. Nos distinguimos por nuestra dedicación a la innovación y calidad, 
                ofreciendo productos que no comprometen el sabor ni la textura, siendo la opción preferida para 
                quienes buscan alternativas saludables y éticas.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
