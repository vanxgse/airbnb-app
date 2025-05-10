import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';

const customIcon = new L.Icon({
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  shadowSize: [41, 41],
});

function FlyToLocation({ coordinates }) {
  const map = useMap();

  useEffect(() => {
    if (coordinates) {
      map.flyTo([coordinates.lat, coordinates.lng], 13, { duration: 2 });
    }
  }, [coordinates]);

  return null;
}

function MapView({ coordinates }) {
  const defaultPosition = [6.2442, -75.5812]; // Medellín por defecto

  return (
    <div className="map-container" style={{ height: '500px', width: '100%' }}>
      <MapContainer center={defaultPosition} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
        />
        {coordinates && (
          <>
            <Marker position={[coordinates.lat, coordinates.lng]} icon={customIcon}>
              <Popup>¡Aquí está tu destino! 🧭</Popup>
            </Marker>
            <FlyToLocation coordinates={coordinates} />
          </>
        )}
      </MapContainer>
    </div>
  );
}

export default MapView;
