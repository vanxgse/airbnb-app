import { Link } from 'react-router-dom';
import '../styles/Login.css';

function Login() {
    return (
        <div className="login-container">
            <form className="login-box">
                <h2>Iniciar Sesión</h2>
                <input type="email" placeholder="Correo electrónico" required />
                <input type="password" placeholder="Contraseña" required />
                <button type="submit">Entrar</button>
                <p className="register-link">
                    ¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link>
                </p>

            </form>
        </div>
    );
}

export default Login;
