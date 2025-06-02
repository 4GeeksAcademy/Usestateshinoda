import React, { useState } from "react";

const Home = () => {
  const [contador, setContador] = useState(0);

  const manejarClick = () => {
    setContador(contador + 1);
  };

  return (
    <div className="contenedor-contador">
      <h1>Contador: {contador}</h1>
      <button className="boton-contar" onClick={manejarClick}>
        Contar
      </button>
    </div>
  );
};

export default Home;