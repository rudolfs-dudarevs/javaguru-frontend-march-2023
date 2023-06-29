import "./header.css"
import Bella from '../assets/Bellalogo.svg'
import BurgerMenu from "./BurgerMenu.jsx"

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
                <a className="link" href="/Home"> Home </a>
                <a className="link" href="/Product"> Product </a>
                <a className="link" href="/Faq"> Faq </a>
                <a className="link" href="/Contact"> Contact </a>
            </div>
        </header>
        </>
    )
}

export default Header