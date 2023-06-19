// import React from "react";
// import "./Navigation.css";

// import Menu from "../../assets/menu.svg";
// import Close from "../../assets/close.svg";

const Navigation = () => {
  const OpenMenu = () => {
    const closeIcon = document.querySelector(".close");
    const menuIcon = document.querySelector(".menu");
    const navigation = document.querySelector(".navigation");
    const navigationList = document.querySelector(".navigation-list");
    const navigationListItem = document.querySelector(".nav-item");
    closeIcon.classList.add("active");
    menuIcon.classList.add("active");
    navigation.classList.add("active");
    navigationList.classList.add("active");
    navigationListItem.classList.add("active");
  };

  const CloseMenu = () => {
    const closeIcon = document.querySelector(".close");
    const menuIcon = document.querySelector(".menu");
    const navigation = document.querySelector(".navigation");
    const navigationList = document.querySelector(".navigation-list");
    const navigationListItem = document.querySelector(".nav-item");
    closeIcon.classList.remove("active");
    menuIcon.classList.remove("active");
    navigation.classList.remove("active");
    navigationList.classList.remove("active");
    navigationListItem.classList.remove("active");
  };

  return (
    <>
      <nav className="navigation">
        <img src={Close} className="close" onClick={CloseMenu} />
        <ul className="navigation-list">
          <li className="nav-item">
            <a href="#">Home</a>
          </li>
          <li className="nav-item">
            <a href="#">Product</a>
          </li>
          <li className="nav-item">
            <a href="#">FAQ</a>
          </li>
          <li className="nav-item">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <img src={Menu} className="menu" onClick={OpenMenu} />
    </>
  );
};

// export default Navigation;
