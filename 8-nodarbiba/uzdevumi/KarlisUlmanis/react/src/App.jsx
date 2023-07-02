import React from "react";
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer";
import "./App.css";

const App = () => {
    const name = "Kārlis"
    const age = 22
    const greeteing = `Hello, ${name}, you are ${age} years on this planet`
    
    return (
        <main>
            <Header />
            <div>{greeteing}</div>
            <Footer />
        </main>
    )
}

export default App