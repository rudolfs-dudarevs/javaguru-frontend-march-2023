import React from "react";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Counter from "./components/Counter/Counter.jsx";
import './App.css';

const App = () => {
    return (
        <>
            <Header />
            <main>
                <Counter />
            </main>
            <Footer />
        </>
    )
}

export default App