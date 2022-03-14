import React from "react";
import { Nav } from "../../components/Nav";
import { Parallax } from "react-parallax";
import "./styles.css";

export function Home() {
  return (
    <div>
      <Nav />
      <div className="home-contato">ZAP</div>
      <div className="home-text">
        <h1 className="home-headtext">Móveis para viver melhor.</h1>
        <p className="home-ptext">
          Texto aqui, algo para servir de referência e afins.
        </p>
      </div>
      <div className="home-image-container">
        <Parallax
          bgImage="https://images.unsplash.com/photo-1558442086-8ea19a79cd4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
          bgImageAlt="the furnitures"
          strength={300}
        >
          <p className="home-parallax"></p>
        </Parallax>
      </div>
      <div className="home-text">
        <h1 className="home-headtext">blablablabla kkk.</h1>
        <p className="home-ptext">
          Texto aqui, algo para servir de referência e afins.
        </p>
      </div>
    </div>
  );
}
