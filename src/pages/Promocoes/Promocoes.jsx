import { useEffect, useState } from "react";
import PromoContinentCard from "../../components/PromoContinentCard/";
import { getPromocoes } from "../../Services/PromocoesApiService";
import "./Promocoes.css";

const Promocoes = () => {
  const [listaPromocoes, setListaPromocoes] = useState([]);

  useEffect(() => {
    getPromocoes().then((data) => {
      setListaPromocoes(data);
    });
  }, []);

  

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
              <PromoContinentCard
                continent="América do sul"
                collapse="AS"
                promocoes={listaPromocoes.filter((item) => {
                  return item.continente === "América do sul";
                })}
              />
              <PromoContinentCard
                continent="Europa"
                collapse="EU"
                promocoes={listaPromocoes.filter((item) => {
                  return item.continente === "Europa";
                })}
              />
              <PromoContinentCard
                continent="Ásia"
                collapse="A"
                promocoes={listaPromocoes.filter((item) => {
                  return item.continente === "Ásia";
                })}
              />
            </section>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Promocoes;
