import { useState } from "react";
import { useEffect } from "react";
import DestinoCard from "../../components/DestinoCard";
import { getDestinos } from "../../Services/DestinosApiService";
import "./Destinos.css";

const Destinos = () => {
  const [listaDestinos, setListaDestinos] = useState([]);
  const [pais, setPais] = useState("");

  useEffect(() => {
    getDestinos().then((data) => {
      setListaDestinos(data);
    });
  }, []);

  const paisChangeHandler = (event) => {
    setPais(event.target.value.trim());
  };

  return (
    <main>
      <section className="d-flex flex-column">
        <section id="conteudo">
          <div id="destinos-container" className="width-1284">
            <section className="barra-pais">
              <img src={require("../../assets/images/favicon.png")} alt="logo" width={50} />
              <label htmlFor="pais-input">
                <h1>Para onde deseja ir?</h1>
              </label>
              <input className="pais-input" placeholder="ex.: Roma" onChange={paisChangeHandler} type="text" name="pais-input" id="pais-input" />
            </section>
            <section className="destinos">
              {listaDestinos.map((item) => {
                if (pais) {
                  return item.destino.toLowerCase().includes(pais.toLowerCase()) && <DestinoCard key={item.id} item={item} />;
                }
                return <DestinoCard key={item.id} item={item} />;
              })}
            </section>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Destinos;
