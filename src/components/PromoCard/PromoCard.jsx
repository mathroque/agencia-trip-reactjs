import "./PromoCard.css";

const PromoCard = (props) => {
  return (
    <div className="card">
      <img src={props.item.image} className="card-img-top" alt="Foto país" />
      <div className="card-body">
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger fs-6">
          -{props.item.discount}%<span className="visually-hidden">porcentagem de desconto</span>
        </span>
        <h5 className="card-title">{props.item.country}</h5>
        <p className="card-text">{props.item.description}</p>
        <button  className="btn btn-primary">
          Comprar
        </button>
      </div>
    </div>
  );
};

export default PromoCard;
