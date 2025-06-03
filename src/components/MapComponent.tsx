
import { useEffect, useRef } from 'react';

const MapComponent = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only load leaflet on the client side
    const loadMap = async () => {
      if (!mapRef.current) return;

      try {
        // Dynamic import to avoid SSR issues
        const L = await import('leaflet');
        
        // Fix default icon issue
        delete (L.Icon.Default.prototype as any)._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
          iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        });

        // Guadalajara, Jalisco, México coordinates
        const position: [number, number] = [20.6597, -103.3496];

        // Create map
        const map = L.map(mapRef.current).setView(position, 13);

        // Add tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Add marker
        L.marker(position)
          .addTo(map)
          .bindPopup(`
            <div class="text-center p-2">
              <h3 class="font-semibold text-gray-900 mb-1">Nutinova Foods</h3>
              <p class="text-sm text-gray-600">Guadalajara, Jalisco, México</p>
            </div>
          `);

        // Disable scroll wheel zoom
        map.scrollWheelZoom.disable();
        map.doubleClickZoom.disable();

        // Add custom styles
        const style = document.createElement('style');
        style.textContent = `
          .leaflet-container {
            filter: grayscale(100%) contrast(1.1);
            border-radius: 12px;
            height: 100% !important;
            width: 100% !important;
          }
          .leaflet-control-zoom {
            border: none !important;
            border-radius: 8px !important;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;
          }
          .leaflet-control-zoom a {
            background-color: white !important;
            border: 1px solid #e5e7eb !important;
            color: #6b7280 !important;
            border-radius: 6px !important;
            font-weight: 600 !important;
          }
          .leaflet-control-zoom a:hover {
            background-color: #f9fafb !important;
            color: #374151 !important;
          }
          .leaflet-popup-content-wrapper {
            border-radius: 8px !important;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) !important;
          }
          .leaflet-popup-tip {
            background: white !important;
          }
        `;
        document.head.appendChild(style);

        // Cleanup function
        return () => {
          map.remove();
          if (document.head.contains(style)) {
            document.head.removeChild(style);
          }
        };
      } catch (error) {
        console.error('Error loading map:', error);
      }
    };

    loadMap();
  }, []);

  return (
    <div className="w-full h-full rounded-xl overflow-hidden">
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
};

export default MapComponent;
