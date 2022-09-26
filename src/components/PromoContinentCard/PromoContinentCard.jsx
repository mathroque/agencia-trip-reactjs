import PromoCard from "../../components/PromoCard";
import { useEffect, useState } from "react";
import { getPromocoes } from "../../Services/PromocoesApiService";
import "./PromoContinentCard.css"


const PromoContinentCard = (props) => {
  const promocoes = props.promocoes;



  

  return (
    <div className="continente">
      <a data-bs-toggle="collapse" href={"#" + (props.collapse)} role="button" aria-expanded="false" aria-controls="conteudocolapsado">
        <h4>{props.continent}</h4>
      </a>
      <div className="show" id={props.collapse}>
        <div className="cards">
          {promocoes.map((item) => {
            return <PromoCard key={item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default PromoContinentCard;
