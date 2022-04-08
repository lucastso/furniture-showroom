import React from "react";
import "./styles.css";
import logo from "../../assets/logo.png";

export function NavMobile() {
  return (
    <div className="nav-mobile-container">
      <img src={logo} alt="logo logo" width={160} />
      <p className="nav-mobile-option">
        Avenida Zélia de Lima Rosa, 454.
        <strong> Boituva, SP</strong>
      </p>
      <p className="nav-mobile-option"> (11) 3242 9191</p>
    </div>
  );
}