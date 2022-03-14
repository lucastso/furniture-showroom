import React from "react";
import { Nav } from "../../components/Nav";

export function Home() {
  return (
    <div>
      <Nav />
      <div className="home-text">
        <h1 className="home-headtext">Móveis para viver melhor.</h1>
        <p className="home-ptext">
          Texto aqui, algo para servir de referência e afins.
        </p>
      </div>
    </div>
  );
}
