import React from "react";
import "./Header.css";
import logo from "../../assets/BellaLogo.png";
import { NavLink } from "react-router-dom";
import SlideMenu from "../SlideMenu/SlideMenu";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

const Header = () => {

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true)
  
  const handleScroll = () => {
      const currentScrollPos = window.scrollY
  
      if(currentScrollPos > prevScrollPos){
          setVisible(false)
      }else{
          setVisible(true)
      }
  
      setPrevScrollPos(currentScrollPos)
  }
  
  useEffect( () => {
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll)
  })  

  return (
    <header className={`header ${visible ? "header__visible" : "header__hidden"}`}>
      <Link to="/">
        <img src={logo} className="header__logo"></img>
      </Link>
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