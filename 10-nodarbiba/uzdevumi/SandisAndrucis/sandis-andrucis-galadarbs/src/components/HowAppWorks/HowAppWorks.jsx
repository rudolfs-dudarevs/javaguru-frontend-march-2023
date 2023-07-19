import "./HowAppWorks.css";
import phones from "../../assets/test.png";

const HowAppWorks = () => {
    return (
        <div className="how-app-works">
            <div className="how-app-works__picture-container">
                <img src={phones} className="how-app-works__picture"></img>
            </div>
            <div className="how-app-works__container">
                <p className="how-app-works__text">How the app works</p>
                <div className="how-app-works__divider"></div>
            </div>
        </div>
    );
  };
  
  export default HowAppWorks;