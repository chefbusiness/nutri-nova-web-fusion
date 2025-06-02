
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Building2, Handshake, Newspaper, Users, MapPin } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    department: '',
    message: ''
  });

  console.log('Contact component rendered');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    setFormData({ name: '', email: '', company: '', department: '', message: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      title: 'Sede Corporativa',
      details: [
        'Guadalajara, México',
        'contacto@nutinovafoods.com',
        '+52 (33) 1234-5678'
      ],
      icon: Building2
    },
    {
      title: 'Ventas y Distribución',
      details: [
        'ventas@nutinovafoods.com',
        'Partnerships comerciales',
        'Oportunidades de distribución'
      ],
      icon: Handshake
    },
    {
      title: 'Prensa y Medios',
      details: [
        'prensa@nutinovafoods.com',
        'Kit de prensa disponible',
        'Solicitudes de entrevistas'
      ],
      icon: Newspaper
    },
    {
      title: 'Recursos Humanos',
      details: [
        'rrhh@nutinovafoods.com',
        'Oportunidades laborales',
        'Desarrollo profesional'
      ],
      icon: Users
    }
  ];

  return (
    <section id="contacto" className="py-32 bg-nutinova-beige/30 pattern-overlay-teal">
      <div className="pattern-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-nutinova-asparagus mb-8">
            Contacto
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Estamos aquí para escucharte. Ya sea que representes una empresa interesada en 
            distribución, un medio de comunicación, o simplemente quieras conocer más sobre nosotros.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="shadow-xl smooth-hover">
            <CardContent className="p-10">
              <h3 className="text-2xl font-bold text-nutinova-asparagus mb-8">
                Envíanos un Mensaje
              </h3>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Nombre *
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="border-nutinova-beige focus:border-nutinova-asparagus h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Email *
                    </label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="border-nutinova-beige focus:border-nutinova-asparagus h-12"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Empresa/Organización
                  </label>
                  <Input
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="border-nutinova-beige focus:border-nutinova-asparagus h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Departamento de Interés *
                  </label>
                  <Select onValueChange={(value) => handleInputChange('department', value)}>
                    <SelectTrigger className="border-nutinova-beige focus:border-nutinova-asparagus h-12">
                      <SelectValue placeholder="Selecciona un departamento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ventas">Ventas y Distribución</SelectItem>
                      <SelectItem value="prensa">Prensa y Medios</SelectItem>
                      <SelectItem value="rrhh">Recursos Humanos</SelectItem>
                      <SelectItem value="inversores">Relaciones con Inversores</SelectItem>
                      <SelectItem value="general">Consulta General</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Mensaje *
                  </label>
                  <Textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="border-nutinova-beige focus:border-nutinova-asparagus"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-nutinova-asparagus hover:bg-nutinova-asparagus/90 text-white py-4 h-12"
                >
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="shadow-lg smooth-hover border-l-4 border-nutinova-moonstone">
                <CardContent className="p-8">
                  <div className="flex items-start">
                    <div className="mr-6">
                      <info.icon className="h-8 w-8 text-nutinova-asparagus" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-nutinova-asparagus mb-4">
                        {info.title}
                      </h4>
                      <div className="space-y-2">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600 text-lg">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <Card className="shadow-xl">
            <CardContent className="p-12 text-center">
              <h3 className="text-2xl font-bold text-nutinova-asparagus mb-8">
                Nuestra Ubicación
              </h3>
              <div className="bg-gradient-to-r from-nutinova-beige to-nutinova-pistachi/30 p-10 rounded-lg">
                <div className="flex justify-center mb-6">
                  <MapPin className="h-16 w-16 text-nutinova-moonstone" />
                </div>
                <h4 className="text-xl font-semibold text-nutinova-moonstone mb-4">
                  Guadalajara, Jalisco, México
                </h4>
                <p className="text-gray-700 text-lg">
                  En el corazón de México, nuestra sede opera como centro de innovación 
                  y producción para toda América del Norte.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
