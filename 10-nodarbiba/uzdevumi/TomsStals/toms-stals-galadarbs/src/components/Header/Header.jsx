import Logo from "../../assets/logo.png";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { Link } from "react-router-dom";
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
          <Link to="/">Contact</Link>
        </nav>
        <BurgerMenu />
      </div>
    </>
  );
};

export default Header;
