import '../styles/Creadores.css';

function Creadores() {
  return (
    <div className="creadores-container">
      <h2>Conoce a los Creadores</h2>
      <div className="creadores-info">
        <div className="creador">
          <img src="/yurle.PNG" alt="Yurleidis López Fuentes" />
          <h3>Yurleidis López Fuentes</h3>
          <p>Desarrolladora Frontend | Colombia</p>
          <a
            href="https://portafolio-rpersonal.vercel.app/" // ← Pon aquí tu portafolio real
            target="_blank"
            rel="noopener noreferrer"
            className="btn-portafolio"
          >
            Ver Portafolio
          </a>
        </div>

        <div className="creador">
          <img src="/ivan.PNG" alt="Iván Uriel González" />
          <h3>Iván Uriel González</h3>
          <p>Desarrollador Backend | México</p>
          <a
            href="https://suportafolio.com" // ← Portafolio de ivan
            target="_blank"
            rel="noopener noreferrer"
            className="btn-portafolio"
          >
            Ver Portafolio
          </a>
        </div>
      </div>
    </div>
  );
}

export default Creadores;
