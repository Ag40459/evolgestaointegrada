import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
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

  return (
    <nav className={`navbar ${isDarkTheme ? "dark-theme" : ""}`}>
      <div className="nav-container">
        <div className="logo-container">
          <a href="#" className="logo">
            Logo
          </a>
        </div>
        <div className="menu-container">
          <ul className="menu">
            <li>
              <a href="/">About me</a>
            </li>
            <li>
              <a href="/about">Service</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
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
                    <a href="/">About me</a>
                  </li>
                  <li>
                    <a href="/about">Service</a>
                  </li>
                  <li>
                    <a href="/projects">Projects</a>
                  </li>
                  <li style={{ paddingBottom: "3rem" }}>
                    <a href="/contact">Contact</a>
                  </li>
                  <div className="theme-toggle">
                    <img
                      onClick={toggleTheme}
                      style={{ width: "3rem" }}
                      src={isDarkTheme ? sun : moon}
                      alt={isDarkTheme ? "Light Theme" : "Dark Theme"}
                      className="theme-icon"
                    />
                  </div>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
