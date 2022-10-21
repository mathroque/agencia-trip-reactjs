import "./Cadastro.css";
import CadastroModel from "../../models/CadastroModel";
import { postCadastro } from "../../Services/CadastrosApiService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [feedBackMessage, setfeedBackMessage] = useState("Preencha corretamente os campos abaixo:");
  const navigate = useNavigate();

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const newCadastro = new CadastroModel(email, password, name);
    postCadastro(newCadastro).then(() => {
      setfeedBackMessage(<span className="success-message">Cadastro realizado com sucesso!</span>);
    }).catch((data) => {setfeedBackMessage(<span className="fail-message">{data}</span>)});
    setName("");
    setEmail("");
    setPassword("");
    //navigate("/")
  };

  return (
    <main>
      <div className="width-1284">
        <section id="cadastro-container">
          <h1>Realize seu cadastro: </h1>
          <p>
            É seu primeiro acesso na <span className="brand-color">Trip</span>? Inscreva-se em nosso site para ter acesso a todas funcionalidades.
          </p>
          {feedBackMessage}
          <form onSubmit={submitHandler} id="cadastro-form">
            <div className="input-pairs">
              <label htmlFor="cadastro-nome">Nome completo: </label>
              <input onChange={nameChangeHandler} value={name} type="text" id="cadastro-nome" required />
            </div>
            <div className="input-pairs">
              <label htmlFor="cadastro-email">E-mail:</label>
              <input onChange={emailChangeHandler} value={email} type="email" name="email" id="cadastro-email" required />
            </div>
            <div className="input-pairs">
              <label htmlFor="senha">Senha: </label>
              <input onChange={passwordChangeHandler} value={password} type="password" name="senha" id="senha" minLength="8" required />
            </div>
            <input type="submit" value="Cadastrar" className="btn-shy btn-cadastro" />
          </form>
        </section>
      </div>
    </main>
  );
};

export default Cadastro;
