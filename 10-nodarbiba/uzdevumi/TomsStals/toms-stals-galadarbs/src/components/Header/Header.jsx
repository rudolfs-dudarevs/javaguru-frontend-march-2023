import Logo from "../../assets/logo.png";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { HashLink as Link } from "react-router-hash-link";

import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="HeaderWrapper">
        <Link to="/">
          <img className="Logo" src={Logo} />
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/">Product</Link>
          <Link to="/">Faq</Link>
          <Link to="/#contact">Contact</Link>
        </nav>
        <BurgerMenu />
      </div>
    </>
  );
};

export default Header;
