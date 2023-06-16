import React, { useContext, useEffect } from "react";
import imgAbout from "../../assets/imgAboutMe.svg";
import smile from "../../assets/smile.svg";
import mail from "../../assets/mail.svg";
import instagram from "../../assets/instagram.svg";
import phone from "../../assets/phone.svg";
import vector from "../../assets/vector.svg";
import figma from "../../assets/figma.svg";
import smartphone from "../../assets/smartphone.svg";
import javaScript from "../../assets/javaScript.svg";
import react from "../../assets/react.svg";
import nextJs from "../../assets/nextjs.svg";
import css from "../../assets/css.svg";
import { Link } from "react-scroll";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./home.css";

function Home() {
  const { isDarkTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.style.backgroundColor = isDarkTheme
      ? "var(--white-color)"
      : "var(--black-color)";

    document.body.style.color = isDarkTheme
      ? "var(--pure-black)"
      : "var(--white-color)";
  }, [isDarkTheme]);

  useEffect(() => {
    const handleScroll = () => {
      const topButton = document.querySelector(".top-button");
      if (window.pageYOffset > 100) {
        topButton.classList.add("active");
      } else {
        topButton.classList.remove("active");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`home-container ${isDarkTheme ? "dark-theme" : ""}`}>
      <div className="portfolio-section">
        <h1 className="portfolio-title">Portfólio</h1>

        <div className="portfolio-content">
          <div className="portfolio-content-presentation">
            <h1 className="highlight-text">
              Olá, sou o <br /> Agenor Torres :)
            </h1>
            <p>Desenvolvedor Full Stack</p>
            <div className="portfolio-buttons">
              <button className="green-button">Download CV</button>
              <button className="transparent-button">Entrar em contato</button>
            </div>
          </div>

          <img src={imgAbout} alt="About Me" className="image-about" />
        </div>
      </div>
      <div id="about-section" className="about-section">
        <h1>Sobre </h1>
        <p style={{ textAlign: "justify" }}>
          "Oi, sou o Agenor Torres, um desenvolvedor apaixonado por tecnologia e
          soluções criativas. Tenho experiência em JavaScript, NodeJS, HTML,
          CSS, Query SQL, MYSQL, GIT, ReactJS e API REST. <br />
          <br />
          Além das habilidades técnicas, sou conhecido por minha resiliência,
          compromisso e pontualidade. Trabalho bem em equipe e estou sempre em
          busca de resultados excepcionais. <br />
          <br />
          Busco oportunidades como desenvolvedor full stack, com amor tanto pelo
          back-end quanto pelo front-end. Quero alcançar a senioridade, gravar
          vídeos de aulas para ajudar novos desenvolvedores e fazer parte de uma
          comunidade em que sou embaixador (Comunicubos), produzindo conteúdo
          para alunos. <br />
          <br />
          Tenho um projeto de portfólio com 8 projetos incríveis, que servem
          como exemplo do meu trabalho e guia de estudo para outros. <br />
          <br />
          Estou pronto para somar valor à sua equipe. Vamos criar algo incrível
          juntos?"
        </p>
      </div>
      <div id="contact-section" className="contact-images">
        <h1>Contato</h1>
        <div>
          <div className="contact-images-icons">
            <div className="contact-icon">
              <img src={smile} alt="Smile Icon" />
              <div className="contact-icon-text">
                <h5>Linkedin</h5>
                <br />
                <h6>
                  <a href="https://www.linkedin.com/in/agenor-torres-79bb7a132/">
                    José Agenor
                  </a>
                </h6>
              </div>
            </div>
            <div className="contact-icon">
              <img src={mail} alt="Mail Icon" />
              <div className="contact-icon-text">
                <h5>E-mail</h5>
                <br />
                <h6>agenortorres10@gmail.com</h6>
              </div>
            </div>
            <div className="contact-icon">
              <img src={instagram} alt="Instagram Icon" />
              <div className="contact-icon-text">
                <h5>Instagram</h5>
                <br />
                <h6>@agenortorres10</h6>
              </div>
            </div>
            <div className="contact-icon">
              <img src={phone} alt="Phone Icon" />
              <div className="contact-icon-text">
                <h5>Telefone</h5>
                <br />
                <h6>(81) 9 8596-7343</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="project-section" className="project-section">
        <h1>Projetos</h1>
        <div className="project-cards">
          <div className="project-card">
            <div className="project-card-img"></div>
            <h3>Projeto 1</h3>

            <p>Descrição do Projeto 1</p>
          </div>
        </div>
        <div className="project-cards">
          <div className="project-card">
            <div className="project-card-img"></div>
            <h3>Projeto 1</h3>

            <p>Descrição do Projeto 1</p>
          </div>
        </div>
        <div className="project-cards">
          <div className="project-card">
            <div className="project-card-img"></div>
            <h3>Projeto 1</h3>

            <p>Descrição do Projeto 1</p>
          </div>
        </div>
        <div className="project-cards">
          <div className="project-card">
            <div className="project-card-img"></div>
            <h3>Projeto 1</h3>

            <p>Descrição do Projeto 1</p>
          </div>
        </div>
        <div className="project-cards">
          <div className="project-card">
            <div className="project-card-img"></div>
            <h3>Projeto 1</h3>

            <p>Descrição do Projeto 1</p>
          </div>
        </div>
      </div>
      <div id="service-section" className="project-section">
        <h1>Serviços</h1>

        <div className="project-card-img">
          <img
            style={{ width: "6rem" }}
            src={vector}
            alt="seta para esquerda/direita"
          />
          <span>Criação de sites</span>
          <div className="project-card-img-greenLine"></div>
        </div>

        <div className="project-card-img">
          <img
            style={{ width: "6rem" }}
            src={figma}
            alt="seta para esquerda/direita"
          />
          <span>Construção de API</span>
          <div className="project-card-img-greenLine"></div>
        </div>

        <div className="project-card-img">
          <img
            style={{ width: "6rem" }}
            src={smartphone}
            alt="seta para esquerda/direita"
          />
          <span>Sites responsivos</span>
          <div className="project-card-img-greenLine"></div>
        </div>
      </div>

      <div id="skills-section" className="skills-section">
        <h1>Minhas Skills</h1>

        <div className="skills-card-img">
          <img src={javaScript} alt="javaScript" />
        </div>

        <div className="skills-card-img">
          <img src={react} alt="react" />
        </div>

        <div className="skills-card-img">
          <img src={nextJs} alt="nextJs" />
        </div>

        <div className="skills-card-img">
          <img src={css} alt="Css" />
        </div>
      </div>

      <Link to="top" smooth={true} duration={500} className="top-button">
        Topo
      </Link>
    </div>
  );
}

export default Home;
