import "./Hero.css"
import Buttons from "./buttons"

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero_h2">Food app</div>
            <div className="hero_h1">Why stay hungry when you can order form Bella Onojie</div>
            <div className="hero_h3">Download the bella onoje’s food app now on</div>
            <div className="btn">
                <Buttons text="Playstore" className="btn-primary"/>
                <Buttons text="App store" isSecondary/>
            </div>                
        </div>
                
    )
}

export default Hero