import "./HowAppWorks.css";
import phone1 from "../../assets/HowAppWorks1.png";
import phone2 from "../../assets/HowAppWorks2.png";

const HowAppWorks = () => {
    return (
        <div className="how-app-works">
            <div className="how-app-works__pictures">
                <img src={phone1} className="how-app-works__phone1"></img>
                <img src={phone2} className="how-app-works__phone2"></img>
            </div>
            <div className="how-app-works__container">
                <p className="how-app-works__text">How the app works</p>
                <hr className="how-app-works__hr"></hr>
            </div>
        </div>
    );
  };
  
  export default HowAppWorks;