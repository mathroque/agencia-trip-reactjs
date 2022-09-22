const Carrossel = () => {


    
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <a href="destino.html">
            <img src={require("../../assets/images/carousel/foz.webp")} className="img-configs" alt="..." />
          </a>
        </div>
        <div className="carousel-item">
          <a href="destino.html">
            <img src={require("../../assets/images/carousel/veadeiros.jpg")} className="img-configs" alt="..." />
          </a>
        </div>
        <div className="carousel-item">
          <a href="destino.html">
            <img src={require("../../assets/images/carousel/fervedouro-tocantins-brazil.webp")} className="img-configs" alt="..." />
          </a>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <i className="fa-solid fa-angle-left seta-cor" aria-hidden="true"></i>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <i className="fa-solid fa-angle-right seta-cor" aria-hidden="true"></i>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carrossel;
