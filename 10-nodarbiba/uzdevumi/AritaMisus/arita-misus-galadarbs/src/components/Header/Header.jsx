import React from "react";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import Logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} className="logo" />
      <Navigation />
    </header>
  );
};

export default Header;
