import { useState } from 'react';
import MapView from '../MapView';
import { getCoordinates } from '../utils/geocoding';
import '../styles/Mapa.css'; 

function Mapa() {
  const [searchText, setSearchText] = useState('');
  const [location, setLocation] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault(); // evita recargar la página
    if (!searchText.trim()) return;

    const coords = await getCoordinates(searchText);
    if (coords) {
      setLocation(coords);
    } else {
      alert('Ubicación no encontrada 😢');
    }
  };

  return (
    <div className="mapa-wrapper">
      <h2 className="mapa-title">¡Encuentra tu lugar perfecto! 😎✨</h2>

      <form onSubmit={handleSearch} className="search-bar">
        <input
          type="text"
          placeholder="¿A dónde quieres ir? 🌍"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>

      <MapView coordinates={location} />
    </div>
  );
}

export default Mapa;
