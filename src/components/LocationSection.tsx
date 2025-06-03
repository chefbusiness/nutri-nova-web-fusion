
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

const LocationSection = () => {
  return (
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
  );
};

export default LocationSection;
