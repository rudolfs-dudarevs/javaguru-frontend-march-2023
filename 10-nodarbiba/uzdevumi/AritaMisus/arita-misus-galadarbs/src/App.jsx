import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import HowAppWorks from "./components/HowAppWorks/HowAppWorks";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <HowAppWorks />
    </>
  );
}

export default App;
