
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Leaf, Truck, Users, Shield } from 'lucide-react';

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('productos');

  const categories = [
    { id: 'productos', name: 'Productos', icon: Leaf },
    { id: 'distribucion', name: 'Distribución', icon: Truck },
    { id: 'sostenibilidad', name: 'Sostenibilidad', icon: Shield },
    { id: 'general', name: 'General', icon: Users }
  ];

  const faqs = {
    productos: [
      {
        question: '¿Todos los productos de Nutinova son veganos?',
        answer: 'Sí, todos nuestros productos son 100% veganos. No utilizamos ningún ingrediente de origen animal en nuestras formulaciones.'
      },
      {
        question: '¿Los productos son realmente libres de gluten?',
        answer: 'Absolutamente. Todos nuestros productos están certificados como libres de gluten y son seguros para personas con enfermedad celíaca.'
      },
      {
        question: '¿Cómo logran mantener el sabor sin azúcar?',
        answer: 'Utilizamos edulcorantes naturales y técnicas de formulación innovadoras que preservan el sabor auténtico sin comprometer la salud.'
      },
      {
        question: '¿Cuál es la vida útil de los productos?',
        answer: 'Nuestros productos tienen una vida útil de 12-18 meses, dependiendo del tipo de producto y las condiciones de almacenamiento.'
      }
    ],
    distribucion: [
      {
        question: '¿Cómo puedo convertirme en distribuidor de Nutinova?',
        answer: 'Contacta nuestro equipo de ventas a través del formulario de contacto seleccionando "Ventas y Distribución". Evaluaremos tu propuesta y te contactaremos.'
      },
      {
        question: '¿Cuáles son los volúmenes mínimos de pedido?',
        answer: 'Los volúmenes mínimos varían según el producto y la región. Nuestro equipo comercial te proporcionará información específica.'
      },
      {
        question: '¿Ofrecen soporte de marketing para distribuidores?',
        answer: 'Sí, proporcionamos materiales de marketing, capacitación del producto y soporte promocional para nuestros socios distribuidores.'
      },
      {
        question: '¿Cuáles son los tiempos de entrega?',
        answer: 'Los tiempos de entrega varían según la ubicación y el volumen, pero generalmente manejamos entregas de 5-10 días hábiles.'
      }
    ],
    sostenibilidad: [
      {
        question: '¿Qué prácticas sostenibles implementa Nutinova?',
        answer: 'Utilizamos empaques reciclables, ingredientes de origen sostenible, y procesos de producción que minimizan el impacto ambiental.'
      },
      {
        question: '¿Los empaques son reciclables?',
        answer: 'Sí, el 90% de nuestros empaques son reciclables. Estamos trabajando hacia el 100% de empaques sostenibles para 2025.'
      },
      {
        question: '¿Tienen certificaciones ambientales?',
        answer: 'Estamos en proceso de obtener certificaciones ISO 14001 y otras certificaciones ambientales relevantes.'
      },
      {
        question: '¿Cómo miden su impacto ambiental?',
        answer: 'Realizamos auditorías regulares de huella de carbono y trabajamos con consultores especializados para medir y reducir nuestro impacto.'
      }
    ],
    general: [
      {
        question: '¿Dónde está ubicada Nutinova Foods?',
        answer: 'Nuestra sede principal está en Guadalajara, México, y estamos expandiéndonos al mercado estadounidense.'
      },
      {
        question: '¿Cuándo fue fundada la empresa?',
        answer: 'Nutinova Foods fue fundada en 2024 con la misión de revolucionar la industria de alimentos saludables.'
      },
      {
        question: '¿Ofrecen oportunidades de carrera?',
        answer: 'Sí, estamos en constante crecimiento y siempre buscamos talento. Visita nuestra sección de Carreras para ver oportunidades actuales.'
      },
      {
        question: '¿Cómo puedo contactar al equipo de Nutinova?',
        answer: 'Puedes contactarnos a través de nuestro formulario de contacto, especificando el departamento que necesitas. Respondemos en 24-48 horas.'
      }
    ]
  };

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-modern-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-modern-gray-900 mb-6">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-modern-gray-600 max-w-2xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre nuestros productos y servicios
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Categories */}
          <div className="lg:col-span-3">
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-nutinova-asparagus text-white'
                      : 'bg-white text-modern-gray-700 hover:bg-modern-gray-100'
                  }`}
                >
                  <category.icon className="h-5 w-5 flex-shrink-0" />
                  <span className="font-medium">{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-9">
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {faqs[activeCategory as keyof typeof faqs].map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left text-lg font-medium text-modern-gray-900 hover:text-nutinova-asparagus">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-modern-gray-600 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
