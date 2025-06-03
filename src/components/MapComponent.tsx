
import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in react-leaflet
delete (Icon.Default.prototype as any)._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapComponent = () => {
  // Guadalajara, Jalisco, México coordinates
  const position: [number, number] = [20.6597, -103.3496];

  useEffect(() => {
    // Add custom CSS for grayscale filter
    const style = document.createElement('style');
    style.textContent = `
      .leaflet-container {
        filter: grayscale(100%) contrast(1.1);
        border-radius: 12px;
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

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="w-full h-full rounded-xl overflow-hidden">
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
        zoomControl={true}
        scrollWheelZoom={false}
        dragging={true}
        doubleClickZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup className="font-sans">
            <div className="text-center p-2">
              <h3 className="font-semibold text-modern-gray-900 mb-1">
                Nutinova Foods
              </h3>
              <p className="text-sm text-modern-gray-600">
                Guadalajara, Jalisco, México
              </p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
