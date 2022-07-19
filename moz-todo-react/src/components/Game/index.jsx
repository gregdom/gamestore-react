import React from "react";
import { useParams } from "react-router-dom";
import Header from "../header";

const Game = () => {
  const { id } = useParams();
  const [jogo, setJogo] = React.useState("Nome do Jogo");

  React.useEffect(() => {
    if (id == 1) {
      setJogo("God of War");
    } else if (id == 2) {
      setJogo("Super ");
    }
  }, []);

  return (
    <>
      <Header></Header>
      <h1>{jogo}</h1>
    </>
  );
};

export default Game;
