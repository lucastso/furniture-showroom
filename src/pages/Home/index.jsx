import React from "react";
import { Nav } from "../../components/Nav";
import { Parallax } from "react-parallax";
import zap from "../../assets/zap.png";
import logo from "../../assets/logo.png";
import "./styles.css";
import SmoothScroll from "../../components/SmoothScroll";

export function Home() {
  return (
    <section>
      <section className="home-web">
        <Nav />
        <div className="home-contato">
          <img src={zap} alt="whatsapp logo" width={36} />
        </div>
        <SmoothScroll>
          <div className="home-text">
            <h1 className="home-headtext">
              Interiores{" "}
              <span
                style={{
                  background: "#1b1b1b",
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                  color: "white",
                }}
              >
                modernos.
              </span>
            </h1>
            <p className="home-ptext">
              Feitos com excelência. Transforme seu interior com móveis super
              agradáveis.
            </p>
          </div>
          <Parallax
            bgImage="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
            bgImageAlt="the furnitures"
            strength={250}
          >
            <p className="home-parallax"></p>
          </Parallax>
          <div className="home-after-image1">
            <div className="home-main-bg1"></div>
            <div className="home-main1">
              <h1 className="home-main-title">Lorem Ipsum</h1>
              <p className="home-main-sub1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur ducimus minus earum dolorem quos nostrum iure fugiat
                temporibus numquam mollitia? Recusandae sunt pariatur libero
                modi doloribus ullam aperiam est eius!
              </p>
            </div>
          </div>
          <div className="home-after-image2">
            <div className="home-main2">
              <h1 className="home-main-title">Lorem Ipsum</h1>
              <p className="home-main-sub2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur ducimus minus earum dolorem quos nostrum iure fugiat
                temporibus numquam mollitia? Recusandae sunt pariatur libero
                modi doloribus ullam aperiam est eius!
              </p>
            </div>
            <div className="home-main-bg2"></div>
          </div>
          <Parallax
            bgImage="https://images.unsplash.com/photo-1558442074-3c19857bc1dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
            bgImageAlt="the furnitures"
            strength={250}
          >
            <p className="home-parallax"></p>
          </Parallax>
          <div className="home-after-second-hero">
            container para servir de sobre para a loja, endereço e história.
          </div>
          <footer className="home-footer">
            <img src={logo} alt="logo logo" width={112} />
            <div>páginas</div>
            <div>contatos</div>
            <div>redes sociais</div>
          </footer>
        </SmoothScroll>
      </section>
      <section className="home-mobile">
        {/* #TODO: NAV PARA MOBILE */}

        <div className="home-contato-container">
          <div className="home-contato">
            <img src={zap} alt="whatsapp logo" width={36} />
          </div>
        </div>
        <div className="home-text">
          <h1 className="home-headtext">
            Interiores{" "}
            <span
              style={{
                background: "#1b1b1b",
                paddingLeft: "1rem",
                paddingRight: "1rem",
                color: "white",
              }}
            >
              modernos.
            </span>
          </h1>
          <p className="home-ptext">
            Feitos com excelência. Transforme seu interior com móveis super
            agradáveis.
          </p>
        </div>
        <Parallax
          bgImageAlt="the furnitures"
          className="parallax1"
          strength={250}
        >
          <p className="home-parallax"></p>
        </Parallax>
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
        <Parallax
          bgImageAlt="the furnitures"
          className="parallax2"
          strength={250}
        >
          <p className="home-parallax"></p>
        </Parallax>
        <div className="home-after-second-hero">
          container para servir de sobre para a loja, endereço e história.
        </div>
        <footer className="home-footer">
          <img src={logo} alt="logo logo" width={112} />
          <div>páginas</div>
          <div>contatos</div>
          <div>redes sociais</div>
        </footer>
      </section>
    </section>
  );
}
