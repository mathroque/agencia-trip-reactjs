import "./Contato.css";

const Contato = () => {
  return (
    <main>
      <section id="conteudo-contato">
        <div className="width-1284">
          <section id="infos-contato">
            <div id="suporte">
              <h4>Suporte</h4>
              <span>
                <i className="fa-solid fa-square-phone"></i> Telefone: +55 99 9999-9999
              </span>
              <span>
                <i className="fa-solid fa-square-envelope"></i> E-mail: agenciatripsuporte@trip.com
              </span>
              <p>Horário de atendimento: das 08:00 às 20:00.</p>
            </div>
            <div id="faq">
              <h4>FAQ</h4>
              <ol>
                <li>Desisti da viagem. Tenho direito a reembolso?</li>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, eius nisi voluptate non nobis quibusdam, amet distinctio facere adipisci quod nostrum soluta.</p>
                <li>Posso alterar o destino da minha viagem?</li>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, eius nisi voluptate non nobis quibusdam, amet distinctio facere adipisci quod nostrum soluta.</p>
                <li>Consigo reagendar o passeio com o guia?</li>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, eius nisi voluptate non nobis quibusdam, amet distinctio facere adipisci quod nostrum soluta.</p>
                <li>Posso utilizar duas formas de pagamento em uma mesma compra?</li>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, eius nisi voluptate non nobis quibusdam, amet distinctio facere adipisci quod nostrum soluta.</p>
                <li>Como consigo ajuda do suporte internacional da Trip?</li>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, eius nisi voluptate non nobis quibusdam, amet distinctio facere adipisci quod nostrum soluta.</p>
                <li>Quanto tempo tenho para utilizar meus créditos?</li>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, eius nisi voluptate non nobis quibusdam, amet distinctio facere adipisci quod nostrum soluta.</p>
              </ol>
            </div>
            <div id="newsletter">
              <h2>Inscreva-se em nossa Newsletter:</h2>
              <p>Dicas de roteiros, novidades do mundo turístico e promoções especiais direto na sua caixa de entrada, uma vez por semana. Faça parte!</p>
              <div>
                <i className="fa-solid fa-envelope fa-6x"></i>
                <input type="email" name="email" id="email" placeholder="Insira seu e-mail" />
                <button className="btn-plus">Inscrever-se</button>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default Contato;
