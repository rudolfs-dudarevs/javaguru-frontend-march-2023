import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <h1 className="header__title">
                Vārds Uzvārds
                <div className="header__subtitle">
                    Frontend developer
                </div>
            </h1>
        </header>
    )
}

export default Header