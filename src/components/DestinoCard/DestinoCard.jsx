import "./DestinoCard.css";

const DestinoCard = (props) => {
  const preco = props.item.valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  return (
    <section className="infos-destino">
      <img src={props.item.imagem} />
      <section className="destino-data">
        <h2 className="destino">{props.item.destino}</h2>
        <p className="origem">Saindo de {props.item.origem}</p>
      </section>
      <p className="preco-line">
        A partir de <span className="preco"> {preco}</span>
      </p>
    </section>
  );
};

export default DestinoCard;
