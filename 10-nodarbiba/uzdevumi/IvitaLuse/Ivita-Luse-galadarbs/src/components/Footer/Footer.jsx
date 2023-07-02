import "./Footer.css";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import logo from "../../assets/logoImage.jpg";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} className="footer__logo"></img>
      <div className="footer__container">
        <a href="https://twitter.com/" target="_blank">
          <img src={twitter} className="footer__img"></img>
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <img src={facebook} className="footer__img"></img>
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <img src={instagram} className="footer__img"></img>
        </a>
      </div>
      <p className="footer__copyright">Copyright 2020 Bella Olonje.com</p>
    </footer>
  );
};

export default Footer;
