import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./BurgerMenu.css";

const BurgerMenu = () => {
  return (
    <div className="menu">
      <Menu right>
        <Link to="/"></Link>
        <Link to="/home">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/faq">Faq</Link>
        <Link to="/contact">Contact</Link>
      </Menu>
    </div>
  );
};

export default BurgerMenu;
