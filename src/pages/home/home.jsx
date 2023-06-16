import React, { useContext, useEffect } from "react";
import imgAbout from "../../assets/imgAboutMe.svg";
import smile from "../../assets/smile.svg";
import mail from "../../assets/mail.svg";
import instagram from "../../assets/instagram.svg";
import phone from "../../assets/phone.svg";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./home.css";

function Home() {
  const { isDarkTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.style.backgroundColor = isDarkTheme
      ? "var(--white-color)"
      : "var(--black-color)";
  }, [isDarkTheme]);

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
      <div className="about-section">
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quis
          repellendus delectus in exercitationem nam, magni modi laborum ullam?
          Nulla dolorum repudiandae quam consectetur atque deserunt, harum
          consequatur eos a similique in assumenda aut, deleniti odio
          perferendis? Atque eveniet modi iure vel corrupti ipsum cumque
          voluptates dicta, nam distinctio velit praesentium mollitia laboriosam
          perspiciatis placeat aliquid minima consequatur. Molestias, aut?
        </p>
      </div>
      <div className="contact-images">
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

        <div className="project-section">
          <h1>Projetos</h1>
          <div className="project-cards">
            {/* Card 1 */}
            <div className="project-card">
              <h3>Projeto 1</h3>
              <p>Descrição do Projeto 1</p>
            </div>

            {/* Card 2 */}
            <div className="project-card">
              <h3>Projeto 2</h3>
              <p>Descrição do Projeto 2</p>
            </div>

            {/* Card 3 */}
            <div className="project-card">
              <h3>Projeto 3</h3>
              <p>Descrição do Projeto 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
