import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import "./SlideMenu.css";

const SlideMenu = () => {
  return (
    <Menu right>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/product">Product</NavLink>
      <NavLink to="/faq">Faq</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </Menu>
  );
};
export default SlideMenu;