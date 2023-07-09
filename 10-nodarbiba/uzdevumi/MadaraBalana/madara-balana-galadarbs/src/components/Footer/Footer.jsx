import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Twitter from "../../assets/twitter.png"
import Facebook from "../../assets/facebook.png"
import Instagram from "../../assets/instagram.png"
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div>
          <Link to="/">
            <img src={Logo} alt="Logo" className="logo_footer" />
          </Link>
        </div>
        <div className="social_media">
          <Link to="https://twitter.com">
            <img src={Twitter} alt="Twitter" />
          </Link>
          <Link to="https://www.facebook.com/">
            <img src={Facebook} alt="Facebook" />
          </Link>
          <Link to="https://www.instagram.com/">
            <img src={Instagram} alt="Instagram" />
          </Link>
        </div>
        <p className="copy_right">Copywright 2020 Bella Onojie.com</p>
        <p className="subtitle">Just type what's on your mind and we'll </p>
    </footer>
  );
};

export default Footer;
