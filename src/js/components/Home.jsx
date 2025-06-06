import React, { useState, useEffect } from "react";

const Home = () => {
  const [colorActivo, setColorActivo] = useState(null);

  useEffect(() => {
    if (colorActivo) {
      console.log(`Luz activa: ${colorActivo}`);
    }
  }, [colorActivo]);

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Semáforo by Shinoda</h1>

      <div className="bg-dark rounded py-4 px-3 mx-auto" style={{ width: "100px" }}>
        <div
          className={`luz luz-roja mb-3 ${colorActivo === "rojo" ? "activa" : ""}`}
          onClick={() => setColorActivo("rojo")}
        ></div>
        <div
          className={`luz luz-amarilla mb-3 ${colorActivo === "amarillo" ? "activa" : ""}`}
          onClick={() => setColorActivo("amarillo")}
        ></div>
        <div
          className={`luz luz-verde ${colorActivo === "verde" ? "activa" : ""}`}
          onClick={() => setColorActivo("verde")}
        ></div>
      </div>
    </div>
  );
};

export default Home;