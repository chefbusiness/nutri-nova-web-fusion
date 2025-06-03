
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Globe } from 'lucide-react';
import MapComponent from './MapComponent';

const LocationSection = () => {
  return (
    <div className="mt-16 sm:mt-20">
      <Card className="bg-white border-modern-gray-200 shadow-sm overflow-hidden">
        <CardContent className="p-0">
          {/* Top: Location Info */}
          <div className="p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-modern-gray-100 rounded-xl">
                <MapPin className="h-8 w-8 text-modern-gray-600" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-modern-gray-900 mb-4">
              Nuestra Ubicación
            </h3>
            
            <h4 className="text-xl font-semibold text-modern-gray-900 mb-3">
              Guadalajara, Jalisco, México
            </h4>
            
            <p className="text-modern-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto">
              En el corazón de México, nuestra sede opera como centro de innovación 
              y producción para toda América del Norte.
            </p>
            
            <div className="flex items-center justify-center text-sm text-modern-gray-500">
              <Globe className="h-4 w-4 mr-2" />
              <span>Centro de operaciones principal</span>
            </div>
          </div>
          
          {/* Bottom: Map */}
          <div className="h-64 sm:h-80 lg:h-96 w-full">
            <MapComponent />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LocationSection;
