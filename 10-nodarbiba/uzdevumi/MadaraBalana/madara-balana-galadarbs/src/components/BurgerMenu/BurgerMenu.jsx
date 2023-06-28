import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./BurgerMenu.css";

const BurgerMenu = () => {
    return (
        <Menu right className=".bm-item">
            <Link to="/">Home</Link>
            <Link to="/product">Product</Link>
            <Link to="/faq">Faq</Link>
            <Link to="/contact">Contact</Link>
        </Menu>
    );
};

export default BurgerMenu;