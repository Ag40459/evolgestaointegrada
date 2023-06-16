import React, { useState, useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./navBar.css";
import logo from "../../assets/svgviewer-output.svg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeModal = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isDarkTheme ? "dark-theme" : ""}`}>
      <div className="nav-container">
        <div className="menu-container">
          <ul className="menu">
            <li>
              <Link
                to="about-section"
                smooth={true}
                duration={500}
                offset={-70}
                style={{ cursor: "pointer" }}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                to="service-section"
                smooth={true}
                duration={500}
                offset={-70}
                style={{ cursor: "pointer" }}
              >
                Serviços
              </Link>
            </li>
            <li>
              <Link
                to="skills-section"
                smooth={true}
                duration={500}
                offset={-70}
                style={{ cursor: "pointer" }}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="project-section"
                smooth={true}
                duration={500}
                offset={-70}
                style={{ cursor: "pointer" }}
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                to="contact-section"
                smooth={true}
                duration={500}
                offset={-70}
                style={{ cursor: "pointer" }}
              >
                Contatos
              </Link>
            </li>
          </ul>
        </div>
        <div className="theme-toggle">
          <button className="theme-button" onClick={toggleTheme}>
            <img
              style={{ width: "3rem" }}
              src={isDarkTheme ? moon : sun}
              alt={isDarkTheme ? "Light Theme" : "Dark Theme"}
              className="theme-icon"
            />
          </button>
        </div>
        <div className="hamburger">
          <div
            className={`hamburger-menu ${
              isMenuOpen ? "hamburger-rotate " : "hamburger-menu"
            }`}
            onClick={toggleMenu}
          >
            <img
              style={{ width: "3rem" }}
              src={logo}
              alt="Menu"
              className="hamburger-icon"
            />
          </div>
        </div>
        {isMenuOpen && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>

              <div className="menu-vertical">
                <ul>
                  <li>
                    <Link
                      id="teste"
                      to="about-section"
                      smooth={true}
                      duration={500}
                      offset={-70}
                      style={{ cursor: "pointer" }}
                      onClick={closeModal}
                    >
                      Sobre
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="service-section"
                      smooth={true}
                      duration={500}
                      offset={-70}
                      style={{ cursor: "pointer" }}
                      onClick={closeModal}
                    >
                      Serviços
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="skills-section"
                      smooth={true}
                      duration={500}
                      offset={-70}
                      style={{ cursor: "pointer" }}
                      onClick={closeModal}
                    >
                      Skills
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="project-section"
                      smooth={true}
                      duration={500}
                      offset={-70}
                      style={{ cursor: "pointer" }}
                      onClick={closeModal}
                    >
                      Projetos
                    </Link>
                  </li>
                  <li style={{ paddingBottom: "3rem" }}>
                    <Link
                      to="contact-section"
                      smooth={true}
                      duration={500}
                      offset={-70}
                      style={{ cursor: "pointer" }}
                      onClick={closeModal}
                    >
                      Contatos
                    </Link>
                  </li>
                </ul>
                <div className="theme-toggle">
                  <img
                    onClick={toggleTheme}
                    style={{ width: "3rem" }}
                    src={isDarkTheme ? moon : sun}
                    alt={isDarkTheme ? "Light Theme" : "Dark Theme"}
                    className="theme-icon"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
