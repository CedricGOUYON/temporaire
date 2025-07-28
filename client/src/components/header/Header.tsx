// Header.jsx
import { Link } from "react-router-dom";
import "./Header.css";
import { constants } from "../../../../setup/constants";

function Header() {
  return (
    <header className="header">
      <div className="left-side">
        <h1>{constants.APP_NAME}</h1>

        <div className="user-info">
          <img src="/images/avatar_profil.png" alt="Profil utilisateur" />
          <span>Bienvenue, utilisateur</span>
        </div>
      </div>

      <div className="right-side">
        <form className="search">
          <input type="text" placeholder="Rechercher..." />
          <button type="button" title="Rechercher">
            🔍
          </button>
        </form>

        <Link to="/auth">Se connecter</Link>

        <div className="about-links">
          <span>À propos</span>
          <ul>
            <li>
              <Link to="/about" className="about-link">
                Qui sommes-nous
              </Link>
            </li>
            <li>
              <Link to="/legal" className="about-link">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link to="/cgu" className="about-link">
                CGU
              </Link>
            </li>
            <li>
              <Link to="/cgv" className="about-link">
                CGV
              </Link>
            </li>
            <li>
              <Link to="/contact" className="about-link">
                Nous contacter
              </Link>
            </li>
          </ul>
        </div>

        <button
          type="button"
          className="dark-toggle"
          onClick={() => {
            document.body.classList.toggle("dark-mode");
          }}
        >
          🌓
        </button>
      </div>
    </header>
  );
}

export default Header;
