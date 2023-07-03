import { useState, useEffect } from "react";
import Bella from '../assets/Bellalogo.svg'
import BurgerMenu from "./BurgerMenu.jsx"
import { Link } from 'react-router-dom'
import "./header.css"

const useScrollDirection = () => {
    const [scrollDirection, setScrollDirection] = useState(null);
  
    useEffect(() => {
      let lastScrollY = window.pageYOffset;
  
      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection); // add event listener
      return () => {
        window.removeEventListener("scroll", updateScrollDirection); // clean up
      }
    }, [scrollDirection]);
  
    return scrollDirection;
  };


const Header = () => {
    const scrollDirection = useScrollDirection();

    return (
        <>
        <header className={`head ${ scrollDirection === "down" ? "hide" : ""}`}>
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
            <div className="burger">
                <BurgerMenu />
            </div>
        </header>
        </>
    )
}

export default Header