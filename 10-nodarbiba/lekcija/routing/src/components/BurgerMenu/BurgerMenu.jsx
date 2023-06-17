import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./BurgerMenu.css";

const BurgerMenu = () => {
  return (
    <Menu right>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </Menu>
  );
};

export default BurgerMenu;
