import React from "react";
import "./Header.css";
import logo from "../../assets/BellaLogo.png";
import { NavLink } from "react-router-dom";
import SlideMenu from "../SlideMenu/SlideMenu";

const Header = () => {
  return (
    <header className="header">
        <img src={logo} className="header__logo"></img>
        <SlideMenu />
        <div className="header__textMenu">
            <NavLink className="header__link" to="/">Home</NavLink>
            <NavLink className="header__link" to="/product">Product</NavLink>
            <NavLink className="header__link" to="/faq">Faq</NavLink>
            <NavLink className="header__link" to="/contact">Contact</NavLink>
        </div>
    </header>
  );
};

export default Header;