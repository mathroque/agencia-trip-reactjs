import PromoCard from "../../components/PromoCard";
import { useEffect, useState } from "react";
import { getPromocoes } from "../../Services/PromocoesApiService";


const PromoContinentCard = (props) => {
  const [listaPromocoes, setListaPromocoes] = useState([]);

  useEffect(() => {
    getPromocoes().then((data) => {
      setListaPromocoes(data);
    });
  }, []);

  return (
    <div className="continente">
      <a data-bs-toggle="collapse" href={"#" + (props.collapse)} role="button" aria-expanded="false" aria-controls="conteudocolapsado">
        <h4>{props.continent}</h4>
      </a>
      <div className="show" id={props.collapse}>
        <div className="cards">
          {listaPromocoes.map((item, i) => {
            return <PromoCard key={i} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default PromoContinentCard;
