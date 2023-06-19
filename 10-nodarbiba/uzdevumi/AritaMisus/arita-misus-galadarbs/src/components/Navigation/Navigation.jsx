import React, { useState } from "react";
import "./Navigation.css";

import Menu from "../../assets/menu.svg";
import Close from "../../assets/close.svg";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      <nav className={`navigation ${isMenuOpen ? "active" : ""}`}>
        <img
          src={Close}
          className={`close ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          alt="Close Menu"
        />
        <ul className={`navigation-list ${isMenuOpen ? "active" : ""}`}>
          <li className="nav-item">
            <a href="#">Home</a>
          </li>
          <li className="nav-item">
            <a href="#">Product</a>
          </li>
          <li className="nav-item">
            <a href="#">FAQ</a>
          </li>
          <li className="nav-item">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <img
        src={Menu}
        className={`menu ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
        alt="Open Menu"
      />
    </>
  );
};

export default Navigation;
