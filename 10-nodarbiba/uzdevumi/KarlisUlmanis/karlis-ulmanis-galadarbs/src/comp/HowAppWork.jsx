import "./HowAppWork.css"
import Phones from '../assets/phones.png'

const HowAppWork = () => {
    return (
        <div className="howappwork">
            <div className="phones">
                <img src={Phones} alt="phones with Bella Onojie app simulation" />
            </div>
            <div className="break-line">
                <></>
            </div>
            <div className="how_h1">
                How the app works
            </div>

        </div>
    )
}

export default HowAppWork