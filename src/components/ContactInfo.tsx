
import { Card, CardContent } from '@/components/ui/card';
import { Building2, Handshake, Newspaper, Users } from 'lucide-react';

const ContactInfo = () => {
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
  );
};

export default ContactInfo;
