import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./BurgerMenu.css";
const BurgerMenu = () => {
  return (
    <>
      <Menu right>
        <Link to="/">Home</Link>
        <Link to="/">Product</Link>
        <Link to="/">Faq</Link>
        <Link to="/">Contact</Link>
      </Menu>
    </>
  );
};

export default BurgerMenu;
