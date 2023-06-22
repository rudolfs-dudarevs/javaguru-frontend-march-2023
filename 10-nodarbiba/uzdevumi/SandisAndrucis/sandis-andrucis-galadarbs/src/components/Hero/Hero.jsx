import "./Hero.css";
import Button from "../Button/Button";

const Hero = () => {
    return (
        <div className="hero">
            <h5 className="hero__h5">Food app</h5>
            <p className="hero__text">Why stay hungry when you can order form Bella Onojie</p>
            <h4 className="hero__h4">Download the bella onoje's food app now on</h4>
            <Button text="Playstore" type="btn-primary"/>
            <Button text="App store" type="btn-secondary"/>
        </div>
    );
  };
  
  export default Hero;