
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';

const About = () => {
  const [hoveredValue, setHoveredValue] = useState<string | null>(null);

  const values = [
    {
      id: 'innovacion',
      title: 'Innovación',
      icon: '💡',
      description: 'Constante búsqueda de nuevas formas de mejorar y crear productos alimenticios alternativos.',
      examples: 'Desarrollo de alternativas veganas que mantienen sabor y textura excepcionales.'
    },
    {
      id: 'sostenibilidad',
      title: 'Sostenibilidad',
      icon: '🌱',
      description: 'Compromiso con prácticas que respetan el medio ambiente y reducen la huella de carbono.',
      examples: 'Uso de ingredientes orgánicos y procesos de producción eco-amigables.'
    },
    {
      id: 'salud',
      title: 'Salud y Bienestar',
      icon: '❤️',
      description: 'Fomento de un estilo de vida saludable mediante productos nutritivos y deliciosos.',
      examples: 'Productos libres de gluten, azúcar y alérgenos comunes para todas las necesidades.'
    },
    {
      id: 'inclusividad',
      title: 'Inclusividad',
      icon: '🤝',
      description: 'Provisión de opciones para todos, independientemente de restricciones dietéticas.',
      examples: 'Líneas de productos aptas para veganos, celíacos y diabéticos.'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-nutinova-beige/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission & Vision */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-nutinova-asparagus mb-8">
            Sobre Nutinova Foods
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg smooth-hover">
              <h3 className="text-2xl font-bold text-nutinova-moonstone mb-4">Nuestra Misión</h3>
              <p className="text-gray-700 leading-relaxed">
                Proporcionar productos alimenticios saludables que promuevan el bienestar y la sostenibilidad, 
                satisfaciendo las necesidades de consumidores que buscan opciones veganas y libres de alérgenos, 
                manteniendo los más altos estándares de calidad.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg smooth-hover">
              <h3 className="text-2xl font-bold text-nutinova-moonstone mb-4">Nuestra Visión</h3>
              <p className="text-gray-700 leading-relaxed">
                Ser reconocida globalmente como pionera en la fabricación de alimentos saludables y alternativos, 
                influyendo en la industria alimentaria hacia prácticas más sostenibles y conscientes, 
                comenzando por el mercado estadounidense.
              </p>
            </div>
          </div>
        </div>

        {/* Corporate Values */}
        <div className="animate-slide-in">
          <h3 className="text-3xl font-bold text-center text-nutinova-asparagus mb-12">
            Nuestros Valores Corporativos
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.id} className="relative">
                <Card 
                  className="h-full cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 hover:border-nutinova-pistachi"
                  onMouseEnter={() => setHoveredValue(value.id)}
                  onMouseLeave={() => setHoveredValue(null)}
                >
                  <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h4 className="text-xl font-bold text-nutinova-asparagus mb-3">{value.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
                
                {/* Hover popup */}
                {hoveredValue === value.id && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-20 bg-nutinova-asparagus text-white p-4 rounded-lg shadow-xl max-w-xs animate-fade-in">
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-nutinova-asparagus rotate-45"></div>
                    <p className="text-sm font-medium">{value.examples}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Company Info */}
        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-nutinova-asparagus mb-6">Nuestra Presencia</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              Con sede en <strong>Guadalajara, México</strong>, Nutinova Foods está estableciendo una fuerte presencia 
              en el mercado estadounidense. Nos distinguimos por nuestra dedicación a la innovación y calidad, 
              ofreciendo productos que no comprometen el sabor ni la textura, siendo la opción preferida para 
              quienes buscan alternativas saludables y éticas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
