import { BrowserRouter, Routes, Route } from "react-router-dom"
import Game from "./components/Game"
import Header from "./components/header"
import Login from "./pages/login"
import Produto from "./pages/produto"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' id={2} element={<Header />}></Route>
        <Route path='/produto' element={<Produto />}></Route>
        <Route path='/produtos/:id' element={<Game />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router