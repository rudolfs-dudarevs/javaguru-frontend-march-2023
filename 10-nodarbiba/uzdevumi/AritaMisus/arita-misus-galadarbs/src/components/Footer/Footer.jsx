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
      <img src={Logo} className="logo desktop-only" />
      <div className="media-icon-wrapper">
        <img src={Twitter} className="media-icon" />
        <img src={Facebook} className="media-icon" />
        <img src={Linkedin} className="media-icon mobile-only" />
        <img src={Instagram} className="media-icon desktop-only" />
      </div>
      <p className="copyright">Copyright 2020 Bella Onojie.com</p>
    </footer>
  );
};

export default Footer;
