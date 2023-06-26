import React from "react";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import Logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <a href="/" className="logo">
        <img src={Logo} className="logo" />
      </a>
      <Navigation />
    </header>
  );
};

export default Header;
