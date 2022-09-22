import PromoContinentCard from "../../components/PromoContinentCard/";
import "./Promocoes.css";

const Promocoes = () => {
  return (
    <main>
      <section className="d-flex flex-column">
        <section>
          <div className="width-1284">
            <section id="promo-header">
              <i className="fa-solid fa-fire fa-5x promo-icon"></i>
              <div className="promo-header-text">
                <h1>Ofertas Trip</h1>
                <p>Aproveite os preços promocionais por tempo limitado! Pacotes diversos a preços incríveis. </p>
              </div>
            </section>
            <section id="promo-body">
              <PromoContinentCard continent="América do Sul" collapse="AS" />
              <PromoContinentCard continent="Europa" collapse="EU" />
              <PromoContinentCard continent="Ásia" collapse="A" />
            </section>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Promocoes;
