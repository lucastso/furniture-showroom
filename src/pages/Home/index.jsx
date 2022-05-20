import React from "react";
import { Nav } from "../../components/Nav";
import { Parallax } from "react-parallax";
import zap from "../../assets/zap.png";
import tele from "../../assets/tele.png";
import pin from "../../assets/pin.png";
import furni from "../../assets/furni.png";
import logo2 from "../../assets/logo2.png";
import "./styles.css";
import SmoothScroll from "../../components/SmoothScroll";
import face2 from "../../assets/face2.png";
import insta2 from "../../assets/insta2.png";
import { NavMobile } from "../../components/NavMobile";

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
              <h1 className="home-main-title">
                Beleza, delicadeza e elegância
              </h1>
              <p className="home-main-sub1">
                Toda casa precisa de uma atmosfera confortável. Consideramos
                todos os detalhes para criar um ambiente com um design dos
                sonhos e aconchegante, que você sentirá falta após um longo dia
                de trabalho. Faça seu cômodo moderno.
              </p>
            </div>
          </div>
          <div className="home-after-image2">
            <div className="home-main2">
              <h1 className="home-main-title">Nossa decoração</h1>
              <p className="home-main-sub2">
                Somos apaixonados em fazer nossa parte para nossos clientes
                terem uma vida melhor e mais tranquila. Conectamos pessoas e os
                produtos de uma forma indiscutível. Criamos histórias e cômodos
                para todos.
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
          <div className="home-after-image3">
            <div className="home-main3">
              <h1 className="home-main-title">A Cumaru</h1>
              <p className="home-main-sub2">
                Nossa loja oferece móveis marcantes, criados com uma combinação
                de conforto, funcionalidade e acessibilidade. Desde móveis para
                a sala de estar, a cozinha, o quarto e para o exterior, nossa
                coleção é decidida para criar um espaço que combine com o seu
                estilo de vida.
              </p>
            </div>
            <div className="home-main3">
              <h1 className="home-main-title">Para você</h1>
              <p className="home-main-sub2">
                Um ar de elegância e autenticidade é trazido para todo o espaço.
                Sinta-se, mais do que nunca, em casa.
              </p>
            </div>
          </div>
          <div className="home-photos">
            <div className="home-photo1">
              <div className="home-box-photo">
                <img src={furni} alt="furniture icon" width={16} />
                <p className="home-text-insidebox">
                  Poltrona bege com base de madeira
                </p>
              </div>
            </div>
            <div className="home-photo2">
              <div className="home-box-photo">
                <img src={furni} alt="furniture icon" width={16} />
                <p className="home-text-insidebox">
                  Criado mudo de madeira clara
                </p>
              </div>
            </div>
            <div className="home-photo3">
              <div className="home-box-photo">
                <img src={furni} alt="furniture icon" width={16} />
                <p className="home-text-insidebox">
                  Cadeira amarela industrial
                </p>
              </div>
            </div>
          </div>
          <footer className="home-footer">
            <img src={logo2} alt="logo" width={240} />
            <section className="home-contatos1">
              <div className="home-flexible-options">
                <img src={pin} alt="pin" width={12} />
                <p className="home-option">
                  Avenida Zélia de Lima Rosa, 454.
                  <strong> Boituva, SP</strong>
                </p>
              </div>
              <div className="home-flexible-options">
                <img src={tele} alt="tele" width={18} />
                <p className="home-option"> (11) 3242 9191</p>
              </div>
            </section>
            <section className="home-contatos2">
              <div className="home-flexible-options">
                <img src={face2} alt="facebook logo" width={22} />
                <p className="home-option">Cumaru móveis</p>
              </div>
              <div className="home-flexible-options">
                <img src={insta2} alt="instagram logo" width={22} />
                <p className="home-option">@cumarumoveis</p>
              </div>
            </section>
          </footer>
        </SmoothScroll>
      </section>

      {/* MOBILE SECTION */}

      <section className="home-mobile">
        <NavMobile />

        <div className="home-contato">
          <img src={zap} alt="whatsapp logo" width={36} />
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
          strength={400}
        >
          <p className="home-parallax"></p>
        </Parallax>
        <div className="home-after-image1">
          <div className="home-main-bg1"></div>
          <div className="home-main1">
            <h1 className="home-main-title">Beleza, delicadeza e elegância</h1>
            <p className="home-main-sub1">
              Toda casa precisa de uma atmosfera confortável. Consideramos todos
              os detalhes para criar um ambiente com um design dos sonhos e
              aconchegante, que você sentirá falta após um longo dia de
              trabalho. Faça seu cômodo moderno.
            </p>
          </div>
        </div>
        <div className="home-after-image2">
          <div className="home-main2">
            <h1 className="home-main-title">Nossa decoração</h1>
            <p className="home-main-sub2">
              Somos apaixonados em fazer nossa parte para nossos clientes terem
              uma vida melhor e mais tranquila. Conectamos pessoas e os produtos
              de uma forma indiscutível. Criamos histórias e cômodos para todos.
            </p>
          </div>
          <div className="home-main-bg2"></div>
        </div>
        <Parallax
          bgImageAlt="the furnitures"
          className="parallax2"
          strength={400}
        >
          <p className="home-parallax"></p>
        </Parallax>
        <div className="home-after-image3">
          <div className="home-main3">
            <h1 className="home-main-title">A Cumaru</h1>
            <p className="home-main-sub2">
              Nossa loja oferece móveis marcantes, criados com uma combinação de
              conforto, funcionalidade e acessibilidade. Desde móveis para a
              sala de estar, a cozinha, o quarto e para o exterior, nossa
              coleção é decidida para criar um espaço que combine com o seu
              estilo de vida.
            </p>
          </div>
          <div className="home-main3">
            <h1 className="home-main-title">Para você</h1>
            <p className="home-main-sub2">
              Um ar de elegância e autenticidade é trazido para todo o espaço.
              Sinta-se, mais do que nunca, em casa.
            </p>
          </div>
        </div>
        <div className="home-photos">
          <div className="home-photo1">
            <div className="home-box-photo">
              <img src={furni} alt="furniture icon" className="furni-icon" />
              <p className="home-text-insidebox">
                Poltrona bege com base de madeira
              </p>
            </div>
          </div>
          <div className="home-photo2">
            <div className="home-box-photo">
              <img src={furni} alt="furniture icon" className="furni-icon" />
              <p className="home-text-insidebox">
                Criado mudo de madeira clara
              </p>
            </div>
          </div>
          <div className="home-photo3">
            <div className="home-box-photo">
              <img src={furni} alt="furniture icon" className="furni-icon" />
              <p className="home-text-insidebox">Cadeira amarela industrial</p>
            </div>
          </div>
        </div>
        <footer className="home-footer">
          <img src={logo2} alt="logo" width={160} />
          <section className="home-contatos1">
            <div className="home-flexible-options">
              <img src={pin} alt="pin" width={12} />
              <p className="home-option">
                Avenida Zélia de Lima Rosa, 454.
                <strong> Boituva, SP</strong>
              </p>
            </div>
            <div className="home-flexible-options">
              <img src={tele} alt="tele" width={18} />
              <p className="home-option"> (11) 3242 9191</p>
            </div>
          </section>
          <section className="home-contatos2">
            <div className="home-flexible-options">
              <img src={face2} alt="facebook logo" width={22} />
              <p className="home-option">Cumaru móveis</p>
            </div>
            <div className="home-flexible-options">
              <img src={insta2} alt="instagram logo" width={22} />
              <p className="home-option">@cumarumoveis</p>
            </div>
          </section>
        </footer>
      </section>
    </section>
  );
}
