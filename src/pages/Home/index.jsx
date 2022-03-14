import React from "react";
import { Nav } from "../../components/Nav";
import { Parallax } from "react-parallax";
import zap from "../../assets/zap.png";
import "./styles.css";

export function Home() {
  return (
    <div>
      <Nav />
      <div className="home-contato">
        <img src={zap} alt="whatsapp logo" width={36} />
      </div>
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
      <div className="home-after-image1">
        <div className="home-main-bg1"></div>
        <div className="home-main1">
          <h1 className="home-main-title">Lorem Ipsum</h1>
          <p className="home-main-sub1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            ducimus minus earum dolorem quos nostrum iure fugiat temporibus
            numquam mollitia? Recusandae sunt pariatur libero modi doloribus
            ullam aperiam est eius!
          </p>
        </div>
      </div>
      <div className="home-after-image2">
        <div className="home-main2">
          <h1 className="home-main-title">Lorem Ipsum</h1>
          <p className="home-main-sub2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            ducimus minus earum dolorem quos nostrum iure fugiat temporibus
            numquam mollitia? Recusandae sunt pariatur libero modi doloribus
            ullam aperiam est eius!
          </p>
        </div>
        <div className="home-main-bg2"></div>
      </div>
      <div className="home-image-container">
        <Parallax
          bgImage="https://images.unsplash.com/photo-1558442074-3c19857bc1dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
          bgImageAlt="the furnitures"
          strength={300}
        >
          <p className="home-parallax"></p>
        </Parallax>
      </div>
      <div className="home-after-second-hero">
        container para servir de sobre para a loja, endereço e história.
      </div>
      <footer className="home-footer">
        <div>logo</div>
        <div>páginas</div>
        <div>contatos</div>
        <div>redes sociais</div>
      </footer>
    </div>
  );
}
