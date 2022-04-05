import React from "react";
import "./styles.css";
import face from "../../assets/face.png";
import insta from "../../assets/insta.png";
import logo from "../../assets/logo.png";

export function Nav() {
  return (
    <section className="nav-sticky-container">
      <div className="nav-container">
        <div className="">
          <img src={logo} alt="logo logo" width={112} />
        </div>

        <div className="nav-options">
          <p className="nav-option">
            Avenida Zélia de Lima Rosa, 454.
            <strong> Boituva, SP</strong>
          </p>
          <p className="nav-option"> (11) 3242 9191</p>
          <div className="nav-flexible-options">
            <img src={face} alt="facebook logo" width={22} />
            <p className="nav-option">Cumaru móveis</p>
          </div>
          <div className="nav-flexible-options">
            <img src={insta} alt="instagram logo" width={22} />
            <p className="nav-option">@cumarumoveis</p>
          </div>
        </div>
      </div>
    </section>
  );
}
