import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";

import Menu from "../../assets/menu.svg";
import Close from "../../assets/close.svg";

const Navigation = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const [isDesktop, setIsDesktop] = useState(false);

 useEffect(() => {
  const handleResize = () => {
   setIsDesktop(window.innerWidth >= 768);
  };

  window.addEventListener("resize", handleResize);
  handleResize();

  return () => {
   window.removeEventListener("resize", handleResize);
  };
 }, []);

 const toggleMenu = () => {
  setIsMenuOpen((prevState) => !prevState);
 };

 const closeMenu = () => {
  setIsMenuOpen(false);
 };

 return (
  <>
   <nav className={`${isDesktop ? "navigation" : "navigation--mobile"} ${isMenuOpen && !isDesktop ? "active" : ""} `}>
    <img src={Close} className={`close`} onClick={toggleMenu} alt="Close Menu" />
    <ul className={`navigation-list`}>
     <Link to="/" className="nav-item" onClick={closeMenu}>
      Home
     </Link>
     <Link to="/Product" className="nav-item" onClick={closeMenu}>
      Product
     </Link>
     <Link to="/FAQ" className="nav-item" onClick={closeMenu}>
      FAQ
     </Link>
     <Link to="/Contact" className="nav-item" onClick={closeMenu}>
      Contact
     </Link>
    </ul>
   </nav>
   <img src={Menu} className={`menu`} onClick={toggleMenu} alt="Open Menu" />
  </>
 );
};

export default Navigation;
