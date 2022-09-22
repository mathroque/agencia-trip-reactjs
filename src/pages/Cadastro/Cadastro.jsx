import "./Cadastro.css";

const Cadastro = () => {
  return (
    <main>
      <div className="width-1284">
        <section id="cadastro-container">
          <h1>Realize seu cadastro: </h1>
          <p>
            É seu primeiro acesso na <span className="brand-color">Trip</span>? Inscreva-se em nosso site para ter acesso a todas funcionalidades.
          </p>
          <form id="cadastro-form">
            <div className="input-pairs">
              <label htmlFor="cadastro-nome">Nome completo: </label>
              <input type="text" id="cadastro-nome" required />
            </div>
            <div className="input-pairs">
              <label htmlFor="cadastro-email">E-mail:</label>
              <input type="email" name="email" id="cadastro-email" required />
            </div>
            <div className="input-pairs">
              <label htmlFor="senha">Senha: </label>
              <input type="password" name="senha" id="senha" minLength="8" required />
            </div>
            <input type="submit" value="Cadastrar" className="btn-shy btn-cadastro" />
          </form>
        </section>
      </div>
    </main>
  );
};

export default Cadastro;
