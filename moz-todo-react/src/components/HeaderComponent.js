import logotipo from "../img/logotipo.png";

function HeaderComponent() {
  return (
    <>
      <header className="dtc">
        <div className="inHeader">

          <a href="index.html"><img className="logo" src={logotipo} alt="" /></a>

          <div className="infoDesk">
            <div className="search">
              <input type="text" placeholder="Pesquisar" />
              <button><span className="material-symbols-outlined">search</span></button>
            </div>

            <ul>
              <li><a href="#">Loja</a></li>
              <li><a href="#">GCloud</a></li>
              <li><a href="#">Entrar</a></li>
              <li><a href="#">Cadastrar</a></li>
              <li><a href="#">Suporte</a></li>
            </ul>
          </div>

          <button className="btn-m btn2 btn-toggle-subInfo"><span
            className="material-symbols-outlined">menu</span></button>

          <div className="info">
            <a href="#"><span className="material-symbols-outlined">home</span>Loja</a>
            <a href="#"><span className="material-symbols-outlined">stadia_controller</span>GCloud</a>
            <a href="#"><span className="material-symbols-outlined">login</span>Entrar</a>
            <a href="#"><span className="material-symbols-outlined">app_registration</span>Cadastrar</a>
            <a href="#"><span className="material-symbols-outlined">info</span>Suporte</a>

            <div>
              <input type="text" placeholder="Faça uma busca" />
              <button><span className="material-symbols-outlined">search</span>Pesquisar</button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderComponent;