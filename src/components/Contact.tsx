
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
    <section id="contacto" className="py-16 sm:py-24 lg:py-32 bg-modern-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-modern-gray-900 mb-6 leading-tight">
            Contacto
          </h2>
          <p className="text-lg text-modern-gray-600 leading-relaxed">
            Estamos aquí para escucharte. Ya sea que representes una empresa interesada en 
            distribución, un medio de comunicación, o simplemente quieras conocer más sobre nosotros.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <Card className="bg-white border-modern-gray-200 shadow-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-modern-gray-900 mb-8">
                Envíanos un Mensaje
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-modern-gray-700 mb-2">
                      Nombre *
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="border-modern-gray-200 focus:border-modern-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-modern-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="border-modern-gray-200 focus:border-modern-gray-400"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-modern-gray-700 mb-2">
                    Empresa/Organización
                  </label>
                  <Input
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="border-modern-gray-200 focus:border-modern-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-modern-gray-700 mb-2">
                    Departamento de Interés *
                  </label>
                  <Select onValueChange={(value) => handleInputChange('department', value)}>
                    <SelectTrigger className="border-modern-gray-200 focus:border-modern-gray-400">
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
                  <label className="block text-sm font-medium text-modern-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <Textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="border-modern-gray-200 focus:border-modern-gray-400"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-modern-gray-900 hover:bg-modern-gray-800 text-white"
                >
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-white border-modern-gray-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4">
                      <div className="p-2 bg-modern-gray-100 rounded-lg">
                        <info.icon className="h-5 w-5 text-modern-gray-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-modern-gray-900 mb-3">
                        {info.title}
                      </h4>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-modern-gray-600">
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
        <div className="mt-16 sm:mt-20">
          <Card className="bg-white border-modern-gray-200 shadow-sm">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-modern-gray-900 mb-8">
                Nuestra Ubicación
              </h3>
              <div className="bg-modern-gray-50 p-8 rounded-xl">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-modern-gray-200 rounded-xl">
                    <MapPin className="h-8 w-8 text-modern-gray-600" />
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-modern-gray-900 mb-3">
                  Guadalajara, Jalisco, México
                </h4>
                <p className="text-modern-gray-600">
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
