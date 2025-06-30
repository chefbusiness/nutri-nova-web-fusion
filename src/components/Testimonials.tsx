import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useIsMobile } from '@/hooks/use-mobile';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const isMobile = useIsMobile();

  const testimonials = [
    {
      id: 1,
      name: 'María González',
      company: 'Distribuidora Saludable',
      role: 'Directora de Compras',
      content: 'Los productos de Nutinova han sido un éxito total en nuestras tiendas. La calidad es excepcional y nuestros clientes están encantados con las opciones veganas.',
      rating: 5,
      avatar: '/lovable-uploads/f5c09d0d-cd50-4e5b-94a4-344999cc4a9a.png'
    },
    {
      id: 2,
      name: 'Carlos Mendoza',
      company: 'SuperMercados del Norte',
      role: 'Gerente General',
      content: 'Nutinova Foods se ha convertido en nuestro socio estratégico para productos saludables. Su compromiso con la sostenibilidad coincide perfectamente con nuestros valores.',
      rating: 5,
      avatar: '/lovable-uploads/3bd9d1e4-5431-4a08-acea-2244baf4e44d.png'
    },
    {
      id: 3,
      name: 'Ana Fernández',
      company: 'Cadena Natural',
      role: 'Directora de Sostenibilidad',
      content: 'La innovación constante de Nutinova y su enfoque en productos sin gluten ha ampliado significativamente nuestro mercado objetivo.',
      rating: 5,
      avatar: '/lovable-uploads/24886d5c-3c35-41f3-8990-c62d7b08f1ac.png'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (isMobile) {
    return (
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-modern-gray-900 mb-6">
              Lo que dicen nuestros socios
            </h2>
            <p className="text-lg text-modern-gray-600 max-w-2xl mx-auto">
              Testimonios de distribuidores y socios que confían en Nutinova Foods
            </p>
          </div>

          {/* Mobile Carousel with Swipe */}
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <Card className="bg-modern-gray-50 border-0 shadow-lg mx-2">
                    <CardContent className="p-6">
                      <div className="text-center">
                        {/* Stars */}
                        <div className="flex justify-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>

                        {/* Quote */}
                        <blockquote className="text-lg text-modern-gray-700 font-medium leading-relaxed mb-6">
                          "{testimonial.content}"
                        </blockquote>

                        {/* Author */}
                        <div className="flex items-center justify-center space-x-3">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div className="text-left">
                            <div className="text-base font-bold text-modern-gray-900">{testimonial.name}</div>
                            <div className="text-sm text-modern-gray-600">{testimonial.role}</div>
                            <div className="text-sm text-nutinova-asparagus font-medium">{testimonial.company}</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>

          {/* Mobile swipe hint */}
          <div className="text-center mt-6">
            <p className="text-sm text-modern-gray-500">
              Desliza para ver más testimonios
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Desktop version (unchanged)
  const current = testimonials[currentTestimonial];

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-modern-gray-900 mb-6">
            Lo que dicen nuestros socios
          </h2>
          <p className="text-lg text-modern-gray-600 max-w-2xl mx-auto">
            Testimonios de distribuidores y socios que confían en Nutinova Foods
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-modern-gray-50 border-0 shadow-lg">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center mb-8">
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl lg:text-2xl text-modern-gray-700 font-medium leading-relaxed mb-8">
                  "{current.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-center space-x-4">
                  <img 
                    src={current.avatar} 
                    alt={current.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <div className="text-lg font-bold text-modern-gray-900">{current.name}</div>
                    <div className="text-sm text-modern-gray-600">{current.role}</div>
                    <div className="text-sm text-nutinova-asparagus font-medium">{current.company}</div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-center items-center space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevTestimonial}
                  className="rounded-full min-h-[44px] min-w-[44px]"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                {/* Dots */}
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center ${
                        index === currentTestimonial ? 'bg-nutinova-asparagus' : 'bg-modern-gray-300'
                      }`}
                    >
                      <span className={`w-2 h-2 rounded-full ${
                        index === currentTestimonial ? 'bg-white' : 'bg-modern-gray-300'
                      }`} />
                    </button>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextTestimonial}
                  className="rounded-full min-h-[44px] min-w-[44px]"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
