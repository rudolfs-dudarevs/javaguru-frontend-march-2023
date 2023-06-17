import React from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        Vārds Uzvārds
        <div className="header__subtitle">Frontend developer</div>
      </h1>
      <div className="header__menu">
        <BurgerMenu />
      </div>
    </header>
  );
};

export default Header;
