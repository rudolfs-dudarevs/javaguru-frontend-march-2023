import React from "react";
import "./Footer.css";
import Logo from "../../assets/logo.svg";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="footer__social">
        <a href="https://www.twitter.com">
          <FaTwitter />
        </a>
        <a href="https://www.facebook.com">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com">
          <FaInstagram />
        </a>
      </div>
      <p className="footer__copyright">
      Copyright &copy; {new Date().getFullYear()} Bella Onojie.com
      </p>
    </footer>
  );
};

export default Footer;
