import React from "react";
import "./Footer.css";
import Logo from "../../assets/logo.svg";
import Twitter from "../../assets/icon-twitter.svg";
import Facebook from "../../assets/icon-facebook.svg";
import Linkedin from "../../assets/icon-linkedin.svg";
import Instagram from "../../assets/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <a href="/" className="logo">
        <img src={Logo} className="logo desktop-only" />
      </a>
      <div className="media-icon-wrapper">
        <a href="/">
          <img src={Twitter} className="media-icon" />
        </a>
        <a href="/">
          <img src={Facebook} className="media-icon" />
        </a>
        <a href="/" className="mobile-only">
          <img src={Linkedin} className="media-icon" />
        </a>
        <a href="/" className="desktop-only">
          <img src={Instagram} className="media-icon" />
        </a>
      </div>
      <p className="copyright">Copyright 2020 Bella Onojie.com</p>
    </footer>
  );
};

export default Footer;
