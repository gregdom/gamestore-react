// EVERTON, ESSE CÓDIGO ESTAVA NO App.JS DO OUTRO PROJETO.

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainRoot from "./pages/Main";
import Produto from "./pages/produto";
import Entrar from "./pages/entrar";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

const Router = () => {
  return (
    <>
    <HeaderComponent />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainRoot />}></Route>
        <Route path="/entrar" element={<Entrar />}></Route>
        <Route path="/produto" element={<Produto />}></Route>
      </Routes>
    </BrowserRouter>
    <FooterComponent />
    </>
  );
};

export default Router;
