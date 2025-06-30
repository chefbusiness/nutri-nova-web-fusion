
import { Wifi, WifiOff } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const OfflineFallback = () => {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:w-80">
      <Card className="bg-orange-50 border-orange-200 shadow-lg">
        <CardContent className="p-4">
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <WifiOff className="h-5 w-5 text-orange-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-orange-800">
                Sin conexión a internet
              </p>
              <p className="text-xs text-orange-600 mt-1">
                Algunas funciones pueden no estar disponibles
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OfflineFallback;
