import React from "react";
import "./styles.css";

export function Nav() {
  return (
    <div className="nav-container">
      <div className="">logo</div>
      <div className="nav-options">
        <a href="#" className="nav-option">
          Sobre
        </a>
        <a href="#" className="nav-option">
          Serviços
        </a>
        <a href="#" className="nav-option">
          Projetos
        </a>
        <a href="#" className="nav-option">
          Contato
        </a>
      </div>
      <button className="nav-start">Começar</button>
    </div>
  );
}
