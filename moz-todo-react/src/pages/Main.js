import React from "react";
import SidebarComponent from "./../components/SidebarComponent";

import imgHero from "./../img/farcry1920.jpg";

function MainRoot() {
  return (
    <div className="container">

      {/* wrapper START */}
      <div className="wrapper dtc">

        {/* Section Hero START */}
        <section className="s-hero">
          <div className="swiper mySwiperHero">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img className="logo" src={imgHero} alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* Section Hero END */}

        {/* content START */}
        <div className="content">
          <div className="open_close_menu">
            Filtrar busca
            <span className="material-symbols-outlined">
              sort
            </span>
          </div>

          <SidebarComponent />

          {/* sectionGroup START */}
          <div className="sectionGroup">

            <section className="s-gallery">
              <main>
                <div className="inGallery">
                  <div className="swiper mySwiperGallery swp">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <a href="#">
                          <div className="main-image">
                            <img src="https://compass-ssl.xbox.com/assets/60/e2/60e22cd1-fa41-444f-a974-67a7914bbaa7.jpg?n=Far-Cry-6_Gallery_1350x759_02.jpg" alt="" />
                          </div>
                        </a>
                      </div>

                      <div className="swiper-slide">
                        <a href="#">
                          <div className="main-image">
                            <img src="https://compass-ssl.xbox.com/assets/69/bc/69bc3ed0-a26f-4f1e-81de-05d84f23a44c.jpg?n=Far-Cry-6_Gallery_1350x759_01.jpg" alt="" />
                          </div>
                        </a>
                      </div>

                      <div className="swiper-slide">
                        <a href="#">
                          <div className="main-image">
                            <img src="https://compass-ssl.xbox.com/assets/19/bc/19bc52bc-d31c-47a1-8400-1861e562fd4b.jpg?n=Far-Cry-6_Gallery_1350x759_03.jpg" alt="" />
                          </div>
                        </a>
                      </div>

                      <div className="swiper-slide">
                        <a href="#">
                          <div className="main-image">
                            <img src="https://store-images.s-microsoft.com/image/apps.59845.13991923467761409.c293ba7a-fc26-41d3-918c-3cd85c486a36.b7dd9d6c-9304-4f78-9ee2-377ceda19dde?q=90&w=320&h=180" alt="" />
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
                <div className="infogame">

                  <h4>BEM-VINDO A YARA</h4>

                  <p>
                    Bem-vindo a Yara, um paraíso tropical parado no tempo. Far Cry® 6 leva os jogadores ao mundo cheio de adrenalina de
                    uma revolução moderna de guerrilha. Como ditador de Yara, Antón Castillo está empenhado em restaurar sua nação de
                    volta à sua antiga glória por qualquer meio, com seu filho, Diego, obedientemente ao seu lado. Torne-se um
                    guerrilheiro e destrua o regime deles.
                  </p>

                  <p>
                    Mergulhe em uma experiência de sucesso como um Yaran local defendendo seu país do governo de um tirano. Torne-se um
                    guerrilheiro moderno e libere sua nação.
                  </p>

                  <div className="pack">
                    <p>Novo Pacote de Expansão "Implacáveis".</p>
                    <button>Incluir na compra<span className="material-symbols-outlined">
                      add_circle
                    </span></button>
                  </div>

                  <p>
                    Lute contra as tropas de Antón no maior terreno de Far Cry até hoje, em selvas, praias e Esperanza, a capital de
                    Yara e o primeiro cenário urbano de Far Cry.
                  </p>

                  <p>
                    Em uma luta em que você deve usar o que tem para fazer o que precisa, use um arsenal de novas armas, veículos e
                    companheiros animais únicos e surpreendentes para destruir totalmente o regime implacável de Antón.
                  </p>

                </div>

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
          {/* sectionGroup END */}

        </div>
        {/* content END */}

      </div>
      {/* wrapper END */}

    </div>
  );
}

export default MainRoot;