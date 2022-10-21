import "./ModalLogin.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getCadastros } from "../../Services/CadastrosApiService";
import { useEffect } from "react";

const ModalLogin = () => {
  const [emailLogin, setEmailLogin] = useState();
  const [senhaLogin, setSenhaLogin] = useState();
  const [cadastros, setCadastros] = useState([]);

  useEffect(() => {
    getCadastros().then((data) => {
      setCadastros(data);
    });
  }, []);

  const emailChangeHandler = (event) => {
    setEmailLogin(event.target.value);
  };

  const senhaChangeHandler = (event) => {
    setSenhaLogin(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const login = cadastros.filter((cadastro) => {
      if (cadastro.email === emailLogin && cadastro.senha === senhaLogin) {
        return cadastro;
      } else {
        return false;
      }
    });
    if(login != false) {
      console.log(login);
    } else {
      console.log("login inválido");
    }
  };

  return (
    <>
      <li className="nav-item">
        <a className="nav-link" type="button" data-bs-toggle="modal" data-bs-target="#login-modal">
          Entrar <i className="fa-solid fa-arrow-right-to-bracket"></i>
        </a>
      </li>
      {/*<!--Modal-->*/}
      <div className="modal fade" id="login-modal" tabIndex="-1" aria-labelledby="login-modalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="login-modalLabel">
                Entre com sua conta:
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={submitHandler} id="login-form">
                <div className="email-box">
                  <label htmlFor="email">E-mail:</label>
                  <input onChange={emailChangeHandler} type="email" name="email-login" id="email-login" />
                </div>
                <div className="password-box">
                  <label htmlFor="password">Senha:</label>
                  <input onChange={senhaChangeHandler} type="password" name="password" id="password" />
                </div>
                <div id="modal-footer">
                  <input type="submit" value="Entrar" className="btn-plus"></input>
                  <Link to="/cadastro" type="button" className="btn-shy">
                    <span data-bs-dismiss="modal">Cadastre-se</span>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalLogin;
