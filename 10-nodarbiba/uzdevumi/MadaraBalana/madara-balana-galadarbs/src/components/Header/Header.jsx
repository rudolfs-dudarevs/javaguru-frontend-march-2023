import React from "react";
import { Link } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Logo from "../../assets/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div>
        <Link to="/">
          <img src={Logo} alt="Logo" className="logo" />
        </Link>
      <div className="menu">
          <BurgerMenu />
      </div>
        <div className="header_navigation">
          <Link className="header_link" to="/">Home</Link>
          <Link className="header_link" to="/product">Product</Link>
          <Link className="header_link" to="/faq">Faq</Link>
          <Link className="header_link" to="/contact">Contact</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;