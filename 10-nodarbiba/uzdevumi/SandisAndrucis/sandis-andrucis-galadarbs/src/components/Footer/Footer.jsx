import "./Footer.css";
import facebookIcon from "../../assets/FacebookIcon.png";
import twitterIcon from "../../assets/TwitterIcon.png";
import linkedInIcon from "../../assets/LinkedInIcon.png";
import logo from "../../assets/BellaLogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Link to="/">
        <img src={logo} className="footer__logo"></img>
      </Link>
      <div className="footer__icon-container">
        <a href="https://twitter.com/" target="_blank"><img src={twitterIcon} className="footer__icon"></img></a>
        <a href="https://www.facebook.com/" target="_blank"><img src={facebookIcon} className="footer__icon"></img></a>
        <a href="https://www.linkedin.com/" target="_blank"><img src={linkedInIcon} className="footer__icon"></img></a>
      </div>
      <p className="footer__copyright">Copywright 2020 Bella Onojie.com</p>
    </footer>
  );
};

export default Footer;