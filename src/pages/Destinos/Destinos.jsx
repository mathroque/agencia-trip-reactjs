import BarraBusca from "../../components/BarraBusca";
import "./Destinos.css";

const Destinos = () => {
  return (
    <main>
      <section className="d-flex flex-column">
        <section id="conteudo">
          <div className="width-1284">
            <BarraBusca/>
            <section className="infos">
              <img src="images/destinos/roma.webp" />
              <div className="infos-text">
                <h2>Pacotes exclusivos para Roma!</h2>
                <p>Viaje para Roma com segurança e tranquilidade.</p>
                <p>Inclui:</p>
                <ul>
                  <li>Recepção no aeroporto</li>
                  <li>Guia turístico</li>
                  <li>Visita ao Coliseu</li>
                </ul>
              </div>
            </section>
            <section className="infos">
              <img src="images/destinos/tailandia.jpg" />
              <div className="infos-text">
                <h2>Viaje para a Tailândia! </h2>
                <p>Conheça as ilhas tailandesas e suas praias.</p>
                <p>Inclui:</p>
                <ul>
                  <li>Ao menos três das principais ilhas inclusas no pacote</li>
                  <li>Guia turístico</li>
                </ul>
              </div>
            </section>

            <section className="infos">
              <img src="images/destinos/peru.webp" />
              <div className="infos-text">
                <h2>Pacotes para Roma!</h2>
                <p>Viaje para Roma com segurança e tranquilidade.</p>
                <p>Inclui:</p>
                <ul>
                  <li>Recepção no aeroporto</li>
                  <li>Guia turístico</li>
                  <li>Visita ao Coliseu</li>
                </ul>
              </div>
            </section>
            <section className="infos">
              <img src="images/destinos/australia.jpg" />
              <div className="infos-text">
                <h2>Viaje para a Tailândia! </h2>
                <p>Conheça as ilhas tailandesas e suas praias.</p>
                <p>Inclui:</p>
                <ul>
                  <li>Ao menos três das principais ilhas inclusas no pacote</li>
                  <li>Guia turístico</li>
                </ul>
              </div>
            </section>

            <section className="infos">
              <img src="images/destinos/grecia.webp" />
              <div className="infos-text">
                <h2>Pacotes para Roma!</h2>
                <p>Viaje para Roma com segurança e tranquilidade.</p>
                <p>Inclui:</p>
                <ul>
                  <li>Recepção no aeroporto</li>
                  <li>Guia turístico</li>
                  <li>Visita ao Coliseu</li>
                </ul>
              </div>
            </section>
            <section className="infos">
              <img src="images/destinos/alemanha.jpg" />
              <div className="infos-text">
                <h2>Viaje para a Tailândia! </h2>
                <p>Conheça as ilhas tailandesas e suas praias.</p>
                <p>Inclui:</p>
                <ul>
                  <li>Ao menos três das principais ilhas inclusas no pacote</li>
                  <li>Guia turístico</li>
                </ul>
              </div>
            </section>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Destinos;
