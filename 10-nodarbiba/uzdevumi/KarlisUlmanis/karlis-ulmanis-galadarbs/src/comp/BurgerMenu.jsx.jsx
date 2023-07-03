import { slide as Menu } from "react-burger-menu"
import { Link } from "react-router-dom"
import "./BurgerMenu.css"

const BurgerMenu = () => {
    return (
        <Menu right >
                {/* <a className="link" href="/Home"> Home </a>
                <a className="link" href="/Product"> Product </a>
                <a className="link" href="/Faq"> Faq </a>
                <a className="link" href="/Contact"> Contact </a> */}

            <Link className="link" to="/"> Home </Link>
            <a className="link" href="/#howappwork"> Product </a>
            <Link className="link"to="/Faq"> Faq </Link>
            <a className="link"href="/#contactUs"> Contact </a>
        </Menu>
    );
};

export default BurgerMenu