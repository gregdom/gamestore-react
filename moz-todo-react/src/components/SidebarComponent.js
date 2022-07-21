function SidebarComponent() {
  return (
      <div className="sidebar">
        <nav>
          <h2 className="title-t">Plataformas</h2>
          <ul className="accordion-menu">
            <li className="link">
              <div className="dropdown">
                Jogos PlayStation
                <span className="material-symbols-outlined expand" aria-hidden="true">expand_more</span>
              </div>
              <ul className="submenuItems">
                <a href="#">Jogos PS5</a>
                <a href="#">Jogos PS4</a>
                <a href="#">PS VR</a>
              </ul>
            </li>
            <li className="link">
              <div className="dropdown">
                Jogos Xbox
                <span className="material-symbols-outlined expand" aria-hidden="true">expand_more</span>
              </div>
              <ul className="submenuItems">
                <a href="#">Xbox Series X|S</a>
                <a href="#">Xbox One</a>
                <a href="#">PC com Xbox</a>
              </ul>
            </li>
            <li className="link">
              <div className="dropdown">
                Jogos Nintendo
                <span className="material-symbols-outlined expand" aria-hidden="true">expand_more</span>
              </div>
              <ul className="submenuItems">
                <a href="#">Nintendo Switch</a>
                <a href="#">Nintendo Wii</a>
              </ul>
            </li>
            <li className="link">
              <div className="dropdown">
                Jogos PC
                <span className="material-symbols-outlined expand" aria-hidden="true">expand_more</span>
              </div>
              <ul className="submenuItems">
                <li><a href="#">Steam</a></li>
                <li><a href="#">Good Old Games (GOG)</a></li>
                <li><a href="#">Origin</a></li>
                <li><a href="#">Battle.net</a></li>
                <li><a href="#">Epic Games Store</a></li>
                <li><a href="#">Microsoft Games</a></li>
                <li><a href="#">Game Jolt</a></li>
                <li><a href="#">itch.io</a></li>
              </ul>
            </li>
          </ul>
        </nav>

        <div className="filter">
          <h2>Refinar</h2>

          <div className="categories fdiv">
            <ul className="accordion-menu">
              <li className="link">
                <div className="dropdown">
                  <h3>
                    Categoria
                    <div>Ação e Aventura</div>
                  </h3>
                  <span className="material-symbols-outlined expand"
                    aria-hidden="true">expand_more</span>
                </div>
                <ul className="submenuItems">
                  <li>Ação e Aventura</li>
                  <li>Corrida e Aviação</li>
                  <li>Jogos de Tiro</li>
                  <li>RPG</li>
                  <li>Indie</li>
                  <li>Esporte</li>
                  <li>Luta</li>
                  <li>Simulador</li>
                  <li>Estratégia e Casual</li>
                </ul>
              </li>
            </ul>
          </div>


          <div className="date fdiv">
            <ul className="accordion-menu">
              <li className="link">
                <div className="dropdown">
                  <h3>
                    Lançamentos
                    <div>2018 - 2022</div>
                  </h3>
                  <span className="material-symbols-outlined expand"
                    aria-hidden="true">expand_more</span>
                </div>
                <ul className="submenuItems">
                  <li>2018 - 2022</li>
                  <li>2012 - 2017</li>
                  <li>2006 - 2011</li>
                  <li>2000 - 2005</li>
                </ul>
              </li>
            </ul>
          </div>


          <div className="age fdiv">
            <ul className="accordion-menu">
              <li className="link">
                <div className="dropdown">
                  <h3>
                    Faixa Etária
                    <div>Todas as Idades</div>
                  </h3>
                  <span className="material-symbols-outlined expand"
                    aria-hidden="true">expand_more</span>
                </div>
                <ul className="submenuItems">
                  <li>Todas as Idades</li>
                  <li>10 anos</li>
                  <li>12 anos</li>
                  <li>14 anos</li>
                  <li>16 anos</li>
                  <li>+18 anos</li>
                </ul>
              </li>
            </ul>
          </div>

        </div>
      </div>
  );
}

export default SidebarComponent;