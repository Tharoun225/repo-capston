import { Link } from 'react-router-dom';


function Nav() {
  return (
    <nav className="navbar">
      {/* Logo du restaurant */}
      <div className="logo">
        <img
          src="https://www.figma.com/community/resource/2666faf0-5570-454a-a5bf-82187247c74e/thumbnail"
          alt="Little Lemon Logo"
        />
      </div>

      {/* Liens de navigation */}
      <ul className="nav-links">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/about">À propos</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/booking">Réservation</Link></li>
        <li><Link to="/order">Commander</Link></li>
        <li><Link to="/login">Connexion</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
