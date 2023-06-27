import React from "react";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import SocialGrid from "./components/SocialGrid/SocialGrid.jsx";

import './App.css';

const App = () => {
    return (
        <>
            <Header />
            <main>
                <SocialGrid />
            </main>
            <Footer />
        </>
    )
}

export default App