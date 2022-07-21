function FooterComponent() {
  return (
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
  );
}

export default FooterComponent;