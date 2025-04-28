import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="bg-gray-200 p-4">
      <ul className="flex space-x-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
