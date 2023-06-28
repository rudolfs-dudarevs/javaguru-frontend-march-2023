import "./Hero.css";
import Button from "../Button/Button";

const Hero = () => {
    return (
        <div className="hero">
            <p className="hero__title">Food app</p>
            <h1 className="hero__text">Why stay hungry when you can order form Bella Onojie</h1>
            <p className="hero__description">Download the bella onoje's food app now on</p>
            <div className="hero__button-container">
                <Button text="Playstore" classNa="btn-primary hero__btn-space"/>
                <Button text="App store" classNa="btn-secondary"/>
            </div>
        </div>
    );
  };
  
  export default Hero;