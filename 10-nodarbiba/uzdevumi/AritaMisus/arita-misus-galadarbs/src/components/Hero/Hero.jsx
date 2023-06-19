import React from "react";
import "./Hero.css";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h3 className="hero-title">Food app</h3>
          <h1 className="hero-title">
            Why stay hungry when you can order form Bella Onojie
          </h1>
          <p className="hero-text">
            Download the Bella Onoje's food app now on
          </p>
          <div className="buttons">
            <Button text="Playstore" isPrimary />
            <Button text="App store" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
