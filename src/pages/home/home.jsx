import React, { useContext, useEffect, useState } from "react";
import Chat from "../../components/chat/chat";
import profile from "../../assets/profileAg1.jpeg";
import linkedin from "../../assets/linkedin.svg";
import mail from "../../assets/mail.svg";
import instagram from "../../assets/instagram.svg";
import whatsapp from "../../assets/whatsapp.svg";
import vector from "../../assets/vector.svg";
import smartphone from "../../assets/smartphone.svg";
import figma from "../../assets/figma.svg";
import javaScript from "../../assets/javaScript.svg";
import react from "../../assets/react.svg";
import nextJs from "../../assets/nextjs.svg";
import css from "../../assets/css.svg";
import postgresqlBlue from "../../assets/postgresqlBlue.svg";
import postgresqlGreen from "../../assets/postgresqlGreen.svg";
import beekeeper from "../../assets/beekeeper.svg";
import html5 from "../../assets/html5.svg";
import insomnia from "../../assets/insomnia.svg";
import gitHub from "../../assets/gitHub.svg";
import CurriculoAgenor from "../../assets/curriculoAgenor.pdf";
import mysql from "../../assets/mysql.svg";
import nodejs from "../../assets/nodejs.svg";
import python from "../../assets/python.svg";
import apiGif from "../../assets/api.gif";
import { Link } from "react-scroll";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./home.css";

function Home() {
  const { isDarkTheme } = useContext(ThemeContext);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = isDarkTheme
      ? "var(--white2-color)"
      : "var(--black-color)";
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
        <div className="portfolio-content">
          <div className="portfolio-content-presentation">
            <h1 className="highlight-text">
              Olá, sou o <br /> Agenor Torres :)
            </h1>
            <p>Desenvolvedor Full Stack</p>
            <div className="portfolio-buttons">
              <a
                href={CurriculoAgenor}
                download="CurriculoAgenor.pdf"
                className="green-button"
              >
                Download CV
              </a>
              <button
                className="transparent-button"
                onClick={() => setIsChatOpen(!isChatOpen)}
              >
                Entrar em contato
              </button>
              {isChatOpen && <Chat />}
            </div>
          </div>

          <img src={profile} alt="About Me" className="image-about" />
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
          Sou desenvolvedor full stack, com amor tanto pelo back-end quanto pelo
          front-end. <br />
          <br />
        </p>
      </div>
      <div id="contact-section" className="contact-images">
        <h1>Contatos</h1>
        <div>
          <div className="contact-images-icons">
            <div className="contact-icon" title="E-mail">
              <img src={mail} alt="Mail Icon" />
              <div className="contact-icon-text">
                <br />
                <h6>agenortorres10@gmail.com</h6>
              </div>
            </div>
            <a
              href="https://www.linkedin.com/in/agenor-torres-79bb7a132/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-icon" title="LinkedIn">
                <img src={linkedin} alt="linkedin Icon" />
                <div className="contact-icon-text">
                  <br />
                  <h6>Agenor Torres</h6>
                </div>
              </div>
            </a>
            <a
              href="https://www.github.com/Ag40459"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-icon" title="Git Hub">
                <img src={gitHub} alt="Git Hub Logo" />
                <div className="contact-icon-text">
                  <br />
                  <h6>agenortorres10</h6>
                </div>
              </div>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5581985967343"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-icon" title="Whatsapp">
                <img src={whatsapp} alt="whatsapp Icon" />
                <div className="contact-icon-text">
                  <br />
                  <h6>(81) 9 8596-7343</h6>
                </div>
              </div>
            </a>
            <a
              href="https://www.instagram.com/agenor.torres10/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-icon" title="Instagram">
                <img src={instagram} alt="Instagram Icon" />
                <div className="contact-icon-text">
                  <br />
                  <h6>@agenortorres10</h6>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div id="project-section" className="project-section">
        <h1>Projetos</h1>

        <div className="project-cards">
          <a
            href="https://github.com/Ag40459/projetoEcommerce-back"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-card">
              <div className="project-card-img">
                <img src={apiGif} alt="" />
              </div>
              <h3>Projeto Back-end</h3>
              <h3>API REST Projeto E-commerce</h3>
            </div>
          </a>
        </div>
        <div className="project-cards">
          <div className="project-card">
            <div className="project-card-img"></div>
            <h3>Projeto 1</h3>

            <h3>Descrição do Projeto 1</h3>
          </div>
        </div>
        <div className="project-cards">
          <div className="project-card">
            <div className="project-card-img"></div>
            <h3>Projeto 1</h3>

            <h3>Descrição do Projeto 1</h3>
          </div>
        </div>
        <div className="project-cards">
          <div className="project-card">
            <div className="project-card-img"></div>
            <h3>Projeto 1</h3>

            <h3>Descrição do Projeto 1</h3>
          </div>
        </div>
        <div className="project-cards">
          <div className="project-card">
            <div className="project-card-img"></div>
            <h3>Projeto 1</h3>

            <h3>Descrição do Projeto 1</h3>
          </div>
        </div>
      </div>
      <div id="service-section" className="project-section">
        <h1>Serviços</h1>

        <div className="project-section-card">
          <img
            style={{ width: "6rem" }}
            src={vector}
            alt="seta para esquerda/direita"
          />
          <h2>Criação de sites</h2>
          <div className="project-section-card-greenLine"></div>
        </div>

        <div className="project-section-card">
          <img
            style={{ width: "6rem" }}
            src={postgresqlGreen}
            alt="postgresql verde"
          />
          <h2>Construção de API</h2>
          <div className="project-section-card-greenLine"></div>
        </div>

        <div className="project-section-card">
          <img style={{ width: "6rem" }} src={smartphone} alt="Smartphone" />
          <h2>Sites responsivos</h2>
          <div className="project-section-card-greenLine"></div>
        </div>
      </div>
      <div id="skills-section" className="skills-section">
        <h1>Minhas Skills</h1>

        <div className="skills-card-img" title="JavaScript">
          <img src={javaScript} alt="JavaScript" />
          <div className="skills-card-text"></div>
        </div>

        <div className="skills-card-img" title="React">
          <img src={react} alt="React" />
          <div className="skills-card-text"></div>
        </div>

        <div className="skills-card-img" title="Next.js">
          <img src={nextJs} alt="Next.js" />
          <div className="skills-card-text"></div>
        </div>

        <div className="skills-card-img" title="CSS">
          <img src={css} alt="CSS" />
          <div className="skills-card-text"></div>
        </div>

        <div className="skills-card-img" title="Figma">
          <img src={figma} alt="Figma" />
          <div className="skills-card-text"></div>
        </div>

        <div className="skills-card-img" title="Beekeeper">
          <img src={beekeeper} alt="Beekeeper" />
          <div className="skills-card-text"></div>
        </div>

        <div className="skills-card-img" title="HTML5">
          <img src={html5} alt="HTML5" />
          <div className="skills-card-text"></div>
        </div>

        <div className="skills-card-img" title="Insomnia">
          <img src={insomnia} alt="Insomnia" />
          <div className="skills-card-text"></div>
        </div>

        <div className="skills-card-img" title="MySQL">
          <img src={mysql} alt="MySQL" />
          <div className="skills-card-text"></div>
        </div>

        <div className="skills-card-img" title="Node.js">
          <img src={nodejs} alt="Node.js" />
          <div className="skills-card-text"></div>
        </div>

        <div className="skills-card-img" title="Python">
          <img src={python} alt="Python" />
          <div className="skills-card-text"></div>
        </div>

        <div className="skills-card-img" title="Postgresql">
          <img src={postgresqlBlue} alt="Postgresql" />
          <div className="skills-card-text"></div>
        </div>
      </div>
      <Link to="top" smooth={true} duration={500} className="top-button">
        Topo
      </Link>
    </div>
  );
}

export default Home;
