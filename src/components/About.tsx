
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, Leaf, Heart, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      title: 'Innovación',
      icon: Lightbulb,
      description: 'Desarrollo constante de alternativas alimentarias que mantienen sabor excepcional.'
    },
    {
      title: 'Sostenibilidad',
      icon: Leaf,
      description: 'Prácticas eco-amigables y reducción de huella de carbono en cada proceso.'
    },
    {
      title: 'Salud',
      icon: Heart,
      description: 'Productos nutritivos libres de gluten, azúcar y alérgenos comunes.'
    },
    {
      title: 'Inclusividad',
      icon: Users,
      description: 'Opciones para todos, sin importar restricciones dietéticas.'
    }
  ];

  return (
    <section id="sobre" className="py-24 lg:py-32 bg-modern-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-modern-gray-900 mb-6">
            Construyendo el futuro de la alimentación
          </h2>
          <p className="text-lg sm:text-xl text-modern-gray-600 max-w-3xl mx-auto leading-relaxed">
            Empresa mexicana pionera en productos veganos, sin gluten y sin azúcar, 
            comprometida con la innovación y sostenibilidad.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 mb-16 lg:mb-24">
          
          {/* Mission - Large Card */}
          <Card className="lg:col-span-8 bg-white border-0 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8 lg:p-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-modern-gray-900 mb-6">Nuestra Misión</h3>
              <p className="text-lg text-modern-gray-600 leading-relaxed mb-8">
                Proporcionar productos alimenticios saludables que promuevan el bienestar y la sostenibilidad, 
                satisfaciendo las necesidades de consumidores que buscan opciones veganas y libres de alérgenos.
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-nutinova-asparagus">100%</div>
                  <div className="text-sm text-modern-gray-500">Vegano</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-nutinova-asparagus">0%</div>
                  <div className="text-sm text-modern-gray-500">Gluten</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-nutinova-asparagus">0%</div>
                  <div className="text-sm text-modern-gray-500">Azúcar</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-nutinova-asparagus">100%</div>
                  <div className="text-sm text-modern-gray-500">Natural</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Vision - Medium Card */}
          <Card className="lg:col-span-4 bg-nutinova-asparagus text-white border-0 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8 lg:p-12 h-full flex flex-col justify-center">
              <h3 className="text-xl lg:text-2xl font-bold mb-4">Nuestra Visión</h3>
              <p className="text-white/90 leading-relaxed">
                Ser reconocida globalmente como pionera en alimentos saludables y alternativos, 
                comenzando por el mercado estadounidense.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6 lg:p-8 text-center">
                <div className="w-12 h-12 bg-modern-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-nutinova-asparagus/10 transition-colors duration-300">
                  <value.icon className="h-6 w-6 text-modern-gray-600 group-hover:text-nutinova-asparagus transition-colors duration-300" />
                </div>
                <h4 className="text-lg font-bold text-modern-gray-900 mb-3">{value.title}</h4>
                <p className="text-modern-gray-600 text-sm leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Info */}
        <div className="mt-16 lg:mt-24 text-center">
          <Card className="bg-white border-0 shadow-sm max-w-4xl mx-auto">
            <CardContent className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-modern-gray-900 mb-6">Guadalajara, México</h3>
              <p className="text-lg text-modern-gray-600 leading-relaxed">
                Con sede en Guadalajara, Nutinova Foods está estableciendo una fuerte presencia 
                en el mercado estadounidense, siendo la opción preferida para quienes buscan 
                alternativas saludables y éticas.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
