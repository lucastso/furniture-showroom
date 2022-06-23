import React from "react";
import "./styles.css";
import logo from "../../assets/logo2black.png";

export function Nav() {
  return (
    <section className="nav-sticky-container">
      <div className="nav-container">
        <div className="nav-logo">
          <img src={logo} alt="logo logo" width={300} />
        </div>
        <div className="nav-options">
          <p className="nav-option">
            Avenida Zélia de Lima Rosa, 454.
            <strong> Boituva, SP</strong>
          </p>
          <p className="nav-option"> (11) 3242 9191</p>
        </div>
      </div>
    </section>
  );
}
