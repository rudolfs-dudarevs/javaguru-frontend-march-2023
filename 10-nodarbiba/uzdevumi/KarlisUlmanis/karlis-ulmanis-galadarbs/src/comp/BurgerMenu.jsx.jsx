import { slide as Menu } from "react-burger-menu"
// import { Link } from "react-router-dom"
import "./BurgerMenu.css"

const BurgerMenu = () => {
    return (
        <Menu right >
                <a className="link" href="/Home"> Home </a>
                <a className="link" href="/Product"> Product </a>
                <a className="link" href="/Faq"> Faq </a>
                <a className="link" href="/Contact"> Contact </a>

            {/* <Link to="/Home"> Home </Link>
            <Link to="/Product"> Product </Link>
            <Link to="/Faq"> Faq </Link>
            <Link to="/Contact"> Contact </Link> */}
        </Menu>
    );
};

export default BurgerMenu