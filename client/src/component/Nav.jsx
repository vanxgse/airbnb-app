import { NavLink } from 'react-router-dom';
import './styles/Nav.css';

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Sobre Nosotros
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/mapa"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Mapa
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/destinos"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Destinos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Contacto
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Inicio de Sesión
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
