import BarraBusca from "../../components/BarraBusca";
import Carrossel from "../../components/Carrossel";
import "./Home.css";

const Home = () => {
  return (
    <main>
      <section className="d-flex flex-column">
        <section className="banner">
          <h1>Os melhores destinos nacionais!</h1>
          <p>
            Na <b className="brand-color">Trip</b> você encontra uma grande variadade de destinos com os melhores preços. Confira abaixo!
          </p>
          <Carrossel />
        </section>
        <section id="conteudo">
          <div className="width-1284">
            <BarraBusca/>
            <section className="infos">
              <img src={require("../../assets/images/italia.jpg")} alt="Italia foto" />
              <div className="infos-text">
                <h2>Destinos na Europa!</h2>
                <p>Você encontra os mais variados destinos do continente europeu aqui na Trip. Trabalhamos também com a possibilidade de um pacote "mochilão" para o viajante que desejar conhecer mais de um país.</p>
              </div>
            </section>
            <section className="infos">
              <img src={require("../../assets/images/edimburgo.webp")} alt="Edimburgo foto" />
              <div className="infos-text">
                <h2>Opções de parcelamento:</h2>
                <p>
                  Nós da Trip aceitamos diversas formas de pagamento, como dinheiro, cartão de débito, cartão de crédito, pix e, inclusive, parcelamento por boleto bancário. Nos importamos em oferecer escolhas que
                  melhor se adequem às necessidades de nossos clientes.
                </p>
              </div>
            </section>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Home;
