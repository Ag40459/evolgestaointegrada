import React, { useState, useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Link } from "react-scroll";
import "./navBar.css";
import logo from "../../assets/svgviewer-output.svg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeModal = () => {
    setIsMenuOpen(false);
  };

  const linkProps = {
    smooth: true,
    duration: 500,
    offset: -70,
    style: { cursor: "pointer" },
    onClick: closeModal,
  };

  return (
    <nav id="top" className={`navbar ${isDarkTheme ? "dark-theme" : ""}`}>
      <div className="nav-container">
        <div className="menu-container">
          <ul className="menu">
            <li>
              <Link id="link-about" to="about-section" {...linkProps}>
                Sobre
              </Link>
            </li>
            <li>
              <Link id="link-about" to="service-section" {...linkProps}>
                Serviços
              </Link>
            </li>
            <li>
              <Link id="link-about" to="skills-section" {...linkProps}>
                Skills
              </Link>
            </li>
            <li>
              <Link id="link-about" to="project-section" {...linkProps}>
                Projetos
              </Link>
            </li>
            <li>
              <Link id="link-about" to="contact-section" {...linkProps}>
                Contatos
              </Link>
            </li>
          </ul>
        </div>
        <div className="theme-toggle">
          <img
            onClick={toggleTheme}
            style={{ width: "3rem" }}
            src={isDarkTheme ? moon : sun}
            alt={isDarkTheme ? "Light Theme" : "Dark Theme"}
            className="theme-icon"
          />
        </div>
        <div className="hamburger">
          <div
            className={`hamburger-menu ${isMenuOpen ? "hamburger-rotate" : ""}`}
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
                    <Link id="link-about" to="about-section" {...linkProps}>
                      Sobre
                    </Link>
                  </li>
                  <li>
                    <Link id="link-about" to="service-section" {...linkProps}>
                      Serviços
                    </Link>
                  </li>
                  <li>
                    <Link id="link-about" to="skills-section" {...linkProps}>
                      Skills
                    </Link>
                  </li>
                  <li>
                    <Link id="link-about" to="project-section" {...linkProps}>
                      Projetos
                    </Link>
                  </li>
                  <li style={{ paddingBottom: "3rem" }}>
                    <Link id="link-about" to="contact-section" {...linkProps}>
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
                    className="theme-icon-menu"
                    id="toggleTheme-theme-icon"
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
