import "./Header.css";
import ModalLogin from "../ModalLogin/ModalLogin";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-md">
        <Link to="/" className="navbar-brand">
          <img id="logo" src={require("../../assets/images/logo.png")} alt="logo" />
        </Link>
        <button className="navbar-toggler" id="navbar-toggler-mods" type="button" data-bs-toggle="collapse" data-bs-target="#mynav" aria-controls="navegacao" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" id="navbar-toggler-icon-mods"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="mynav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fa-solid fa-house"></i> Página Inicial
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/destinos" className="nav-link">
                <i className="fa-solid fa-map-location-dot" /> Destinos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/promocoes" className="nav-link">
                <i className="fa-solid fa-fire" /> Promoções
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contato" className="nav-link">
                <i className="fa-solid fa-phone" /> Contato
              </Link>
            </li>
            <ModalLogin />
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
