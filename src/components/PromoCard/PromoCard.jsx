import "./PromoCard.css";

const PromoCard = (props) => {
  const desconto = props.item.desconto
  const valor = props.item.valor
  const valorConvertido = valor.toLocaleString("pt-BR", {style: "currency", currency: "BRL" })
  const valorAntigo = () => {
    let percent = 100 - desconto;
    const valorAntigo = ((valor * 100) / percent).toLocaleString("pt-BR", {style: "currency", currency: "BRL" });
    return valorAntigo
  }

  return (
    <div className="card">
      <img src={props.item.imagem} className="card-img-top" alt="Foto país" />
      <div className="card-body">
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger fs-6">
          -{desconto}%<span className="visually-hidden">porcentagem de desconto</span>
        </span>
        <h5 className="card-title">{props.item.cidade} ({props.item.pais})</h5>
        <span className="valor-antigo">De: {valorAntigo()}</span>
        <p className="valor"><span className="por">Por: </span>{valorConvertido}</p>
        <p className="texto">{props.item.ano}</p>
        <button  className="btn btn-primary">
          Comprar
        </button>
      </div>
    </div>
  );
};

export default PromoCard;
