import React from "react";
import "./styles.css";
import logo from "../../assets/logo2black.png";

export function NavMobile() {
  return (
    <div className="nav-mobile-container">
      <img src={logo} alt="logo logo" width={300} />
      <p className="nav-mobile-option">
        Avenida Zélia de Lima Rosa, 454.
        <strong> Boituva, SP</strong>
      </p>
      <p className="nav-mobile-option"> (15) 3264-9800</p>
    </div>
  );
}
