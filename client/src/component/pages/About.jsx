import { Link } from 'react-router-dom';
import '../styles/About.css';

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">Sobre Nuestra Plataforma</h1>
      <p className="about-description">
        Este clon de Airbnb ha sido creado con pasión por los viajes, la cultura y la tecnología.
        Nuestra misión es ofrecerte una experiencia única para encontrar alojamientos en todo el mundo,
        con una estética que celebra la energía del Caribe colombiano y la calidez de México.
      </p>
      <p>
        Este proyecto fue creado con dedicación por dos desarrolladores apasionados.
      </p>
      <Link to="/creadores" className="link-creadores">
        Conoce a los creadores
      </Link>
      <div className="about-deco">
        <div className="palm"></div>
      </div>
    </div>
  );
}

export default About;
