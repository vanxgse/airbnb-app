export const getCoordinates = async (placeName) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(placeName)}`
      );
      const data = await response.json();
      if (data && data.length > 0) {
        return {
          lat: parseFloat(data[0].lat),
          lng: parseFloat(data[0].lon),
        };
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error al buscar ubicación:", error);
      return null;
    }
  };
  