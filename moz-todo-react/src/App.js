import React from 'react';
import logo from './img/logotipo.png';
import './css/reset.css';
import './css/root.css';
import './css/swiper.css';
import './css/layout.css';
import './css/product.css';

function App() {
  return (
    <div className="App">
      <div className="main">

        <div className="container">

          <header className="dtc">
            <div className="inHeader">

              <a href="index.html"><img className="logo" src={logo} alt="Logotipo" /></a>

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

              <button className="btn-m btn2 btn-toggle-subInfo"><span className="material-symbols-outlined">menu</span></button>

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



          <div className="wrapper dtc">
            {/* Section Hero START */}
            <section className="s-hero">

              <div className="swiper mySwiperHero">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">

                  </div>

                </div>
                {/* <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-pagination"></div> */}
              </div>

            </section>
            {/* Section Hero END */}



            <div className="content">
              <div className="open_close_menu">
                Filtrar busca
                <span className="material-symbols-outlined">
                  sort
                </span>
              </div>

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
                          <span className="material-symbols-outlined expand" aria-hidden="true">expand_more</span>
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
                          <span className="material-symbols-outlined expand" aria-hidden="true">expand_more</span>
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
                          <span className="material-symbols-outlined expand" aria-hidden="true">expand_more</span>
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



              <div className="sectionGroup">

                <section className="s-gallery">
                  <main>
                    <div className="inGallery">
                      <div className="swiper mySwiperGallery swp">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <a href="#">
                              <div className="main-image">
                                <img src="" alt="" />
                              </div>
                            </a>
                          </div>

                          <div className="swiper-slide">
                            <a href="#">
                              <div className="main-image">
                                <img src="" alt="" />
                              </div>
                            </a>
                          </div>

                          <div className="swiper-slide">
                            <a href="#">
                              <div className="main-image">
                                <img src="" alt="" />
                              </div>
                            </a>
                          </div>

                          <div className="swiper-slide">
                            <a href="#">
                              <div className="main-image">
                                <img src="" alt="" />
                              </div>
                            </a>
                          </div>
                        </div>

                        <div className="swiper-pagination"></div>
                      </div>
                    </div>

                  </main>
                </section>



                <section className="s-description">

                  <div className="inDescription">
                    <div className="infogame"></div>

                    <div className="system">
                      <div className="inSystem">

                        <div>
                          <h5>Mínimo</h5><br />

                          <p>
                            <span>Sistema Operacional Windows</span><br />
                            Windows 7, Windows 8.1 e Windows 10 de 64 bits
                          </p>

                          <p>
                            <span>Processador do Windows</span><br />
                            Intel i3 6300T ou equivalente
                          </p>

                          <p>
                            <span>Memória do Windows</span><br />
                            8 GB
                          </p>

                          <p>
                            <span>Armazenamento no Windows</span><br />
                            40 GB
                          </p>

                          <p>
                            <span>Windows DirectX</span><br />
                            11
                          </p>

                          <p>
                            <span>Placa de vídeo para Windows</span><br />
                            Placa de vídeo (NVIDIA): NVIDIA GeForce GTX 660 de 2 GB Placa
                            de
                            vídeo (AMD): AMD Radeon HD 7850 de 2 GB
                          </p>

                          <p>
                            <span>Logins</span><br />
                            Exige uma conta GameStore
                          </p>

                        </div>

                        <div>
                          <h5>Recomendado</h5><br />

                          <p>
                            <span>Sistema Operacional Windows:</span><br />
                            Windows 10 de 64 bits ou posterior
                          </p>

                          <p>
                            <span>Processador do WindowsProcessador (Intel):</span><br />
                            Intel i5 6600 ou equivalente
                          </p>

                          <p>
                            <span>Memória do Windows</span><br />
                            16 GB
                          </p>

                          <p>
                            <span>Armazenamento no Windows</span><br />
                            40 GB
                          </p>

                          <p>
                            <span>Windows DirectX</span><br />
                            11
                          </p>

                          <p>
                            <span>Placa de vídeo para Windows</span><br />
                            Placa de vídeo (NVIDIA): NVIDIA GeForce GTX 970 de 4 GB Placa
                            de
                            vídeo (AMD): AMD Radeon R9 290 de 4 GB
                          </p>

                        </div>
                      </div>
                    </div>

                  </div>

                </section>

              </div>
            </div>
          </div>

        </div>



        <footer className="dtc">
          <div className="inFooter">
            <img src="img/logotipo.png" alt="" />
            <ul>
              <li>
                <a href="#">Suporte</a>
                <a href="#">Política de privacidade</a>
                <a href="#">Termos de uso do site</a>
                <a href="#">Mapa do site</a>
                <a href="#">GameStore Studio</a>
                <a href="#">Conteúdo legal</a>
              </li>
              <li>
                <a href="#">Termos de serviço da GameStore</a>
                <a href="#">Política de cancelamento da GameStore</a>
                <a href="#">Avisos de saúde</a>
                <a href="#">Sobre as classificações</a>
              </li>
              <li>
                <a href="#">YouTube</a>
                <a href="#">Instagram</a>
                <a href="#">Twitter</a>
                <a href="#">Facebook</a>
                <a href="#">Aplicativo para Android</a>
                <a href="#">Aplicativo para iOS</a>
              </li>
            </ul>
          </div>

          <p><a href="#">© 2022 GameStore. Todos os direitos reservados.</a></p>
        </footer>

        <div className="modal"></div>


      </div>
    </div>
  );
}

export default App;
