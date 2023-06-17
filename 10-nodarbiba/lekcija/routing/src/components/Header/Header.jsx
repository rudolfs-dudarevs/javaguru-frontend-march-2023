import React from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="title">
        Vārds Uzvārds
        <div className="subtitle">Frontend developer</div>
      </h1>
      <div className="menu">
        <BurgerMenu />
      </div>
      <div className="navigation">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/test">Test</Link>
      </div>
    </header>
  );
};

export default Header;
