import "./Header.css";
import { Link } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Logo from "../../assets/logo.svg";

const Header = () => {
  const menuItems = [
    { label: "Home", link: "/" },
    { label: "Product", link: "/about" },
    { label: "Faq", link: "/about" },
    { label: "Contact", link: "/a" },
  ];

  return (
    <>
      <div className="menu">
        <BurgerMenu />
      </div>
      <header className="header">
        <img src={Logo} alt="Logo" />
        <div className="menu-items">
          {menuItems.map((item, index) => (
            <Link key={index} to={item.link}>
              {item.label}
            </Link>
          ))}
        </div>
      </header>
    </>
  );
};

export default Header;
