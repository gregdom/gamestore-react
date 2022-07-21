
// EVERTON, ESSE CÓDIGO ESTAVA NO App.JS DO OUTRO PROJETO.

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainRoot from './Main';
import Produto from "./pages/produto";
import Entrar from "./pages/entrar";

const Routers = () => {
  return (
    <Router>
      <Route path="/" exact element={<MainRoot />} />
      <Route path="/entrar" element={<Entrar />} />
      <Route path="/produto" element={<Produto />} />
    </Router>
    // <MainRoot />
  );
}


export default Routers;