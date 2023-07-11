import React from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import "./Header.css";
import { NavLink } from "react-router-dom";
import logoImage from "../../assets/logoImage.jpg";

const Header = () => {
  return (
    <header className="header">
      <div>
        <BurgerMenu />
      </div>
      <div className="navigation">
        <img src={logoImage} alt="Logo" className="header__logo" />
        <div className="nav__container">
          <NavLink className="nav__link" to="/home">
            Home
          </NavLink>
          <NavLink className="nav__link" to="/product">
            Product
          </NavLink>
          <NavLink className="nav__link" to="/faq">
            Faq
          </NavLink>
          <NavLink className="nav__link" to="/contact">
            Contact
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
