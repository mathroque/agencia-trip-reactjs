import "./BarraBusca.css";

const BarraBusca = () => {
  return (
    <section className="barra-busca">
      <form>
        <h5>Para onde você deseja ir?</h5>
        <input type="text" name="" id="origem" placeholder="Origem" />
        <i className="fa-solid fa-plane"></i>
        <input type="text" name="" id="destino" placeholder="Destino" />
        <label htmlFor="data-ida">Ida:</label>
        <input type="date" name="" id="data-ida" />
        <label htmlFor="data-volta">Volta:</label>
        <input type="date" name="" id="data-volta" />
        <button type="submit" className="btn-plus" href="destino.html">
          Buscar
        </button>
      </form>
    </section>
  );
};

export default BarraBusca;
