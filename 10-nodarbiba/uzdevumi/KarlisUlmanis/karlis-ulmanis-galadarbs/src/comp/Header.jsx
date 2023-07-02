import Bella from '../assets/Bellalogo.svg'
import BurgerMenu from "./BurgerMenu.jsx"
import { Link } from 'react-router-dom'
import "./header.css"

const Header = () => {

    return (
        <>
        <div className="burger">
            <BurgerMenu />
        </div>
        <header className="head">
            <div className="logo">
                <img className="logo__img" src={Bella} alt="Bella Olonje logo" />
            </div>
            <div className="nav">
            <Link className="link" to="/"> Home </Link>
            <a className="link" href="/#howappwork"> Product </a>
            <Link className="link"to="/Faq"> Faq </Link>
            <a className="link"href="/#contactUs"> Contact </a>

                {/* <a className="link" href="/Home"> Home </a>
                <a className="link" href="/Product"> Product </a>
                <a className="link" href="/Faq"> Faq </a>
                <a className="link" href="/Contact"> Contact </a> */}
            </div>
        </header>
        </>
    )
}

export default Header