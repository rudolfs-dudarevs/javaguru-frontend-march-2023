import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import Navigation from "../Navigation/Navigation";
import Logo from "../../assets/logo.svg";

const Header = () => {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollPosition = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        (direction !== scrollDirection && scrollY - lastScrollY > 10) ||
        scrollY - lastScrollY < -10
      ) {
        setScrollDirection(direction);
      }

      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    console.log(lastScrollY);

    window.addEventListener("scroll", updateScrollPosition);
  }, [scrollDirection]);

  return (
    <header
      className={`header ${scrollDirection === "down" ? "hide" : "show"}`}
    >
      <Link to="/" className="logo">
        <img src={Logo} className="logo" />
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;
