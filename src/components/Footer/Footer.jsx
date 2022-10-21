import "./Footer.css";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {

  const navigate = useNavigate();

  return (
    <footer>
      <section className="empresa">
        <img src={require("../../assets/images/logo.png")} alt="logo" />
        <div>
          <span>A empresa:</span>
          <div className="links">
            <a>Quem somos</a>
            <Link to="/contato">Contato</Link>
            <a>Trabalhe conosco</a>
          </div>
        </div>
      </section>

      <section className="autor">
        <span>Feito por:</span>
        <br />
        <i>Matheus Roque</i>
        <br />
        <span>
          <a href="https://www.linkedin.com/in/matheus-roque-/" target="_blank">
            <i className="fa-brands fa-linkedin linkedin"></i>
          </a>
          &
          <a href="https://github.com/mathroque" target="_blank">
            <i className="fa-brands fa-github-square github"></i>
          </a>
        </span>
      </section>

      <section className="redes">
        <span>Siga-nos nas redes:</span>
        <div>
          <a>
            <i className="fa-brands fa-facebook facebook"></i>
          </a>
          <a>
            <i className="fa-brands fa-instagram instagram"></i>
          </a>
          <a>
            <i className="fa-brands fa-twitter twitter"></i>
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
