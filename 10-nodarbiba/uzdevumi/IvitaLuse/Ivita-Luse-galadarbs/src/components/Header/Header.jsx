import React from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import logoImage from "../../assets/logoImage.jpg";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  return (
    <header className="header">
      <div>
        <BurgerMenu />
      </div>
      <div className="navigation">
        <div>
          <img src={logoImage} alt="Logo" className="header__logo" />
        </div>
        <Link
          className={`nav__link ${activeLink === "home" ? "active" : ""}`}
          to="/home"
          onClick={() => setActiveLink("home")}
        >
          Home
        </Link>
        <Link
          className={`nav__link ${activeLink === "product" ? "active" : ""}`}
          to="/product"
          onClick={() => setActiveLink("product")}
        >
          Product
        </Link>
        <Link
          className={`nav__link ${activeLink === "faq" ? "active" : ""}`}
          to="/faq"
          onClick={() => setActiveLink("faq")}
        >
          Faq
        </Link>
        <Link
          className={`nav__link ${activeLink === "contact" ? "active" : ""}`}
          to="/contact"
          onClick={() => setActiveLink("contact")}
        >
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Header;
