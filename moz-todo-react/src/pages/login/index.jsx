import "./../../css/login-cadastro.css";

const Login = () => {
  return (
    <main>
      <div className="login">
        <h1>Login</h1>

        <div className="wrap-input100" data-validate="Email inválido: a@b.c">
          <input
            id="email"
            className="input100"
            type="text"
            autocomplete="off"
            name="email"
          />
          <span className="focus-input100" data-placeholder="Email"></span>
        </div>

        <div className="wrap-input100" data-validate="Colocar sua senha">
          <input
            id="password"
            className="input100"
            type="password"
            name="pass"
          />
          <span className="focus-input100" data-placeholder="Senha"></span>
        </div>

        <button className="btn" onclick="logar()">
          login
        </button>

        <div className="text-center p-t-115">
          <span className="txt1">Não possui cadastro ?</span>

          <a className="txt2" href="cadastro.html">
            Cadastre-se
          </a>
        </div>
      </div>
    </main>
  );
};

export default Login;
