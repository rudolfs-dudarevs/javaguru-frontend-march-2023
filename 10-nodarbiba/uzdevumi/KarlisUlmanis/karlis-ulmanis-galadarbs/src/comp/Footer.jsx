import "./Footer.css"
import TW from '../assets/twitter.svg'
import FB from '../assets/facebook.svg'
import insta from '../assets/instagram.svg'
import Bella from '../assets/Bellalogo.svg'

const Footer = () => {

    return (
        <>
        <footer className="foot">
           
            <div className="logo__foot">
                <img className="logo__img" src={Bella} alt="Bella Olonje logo" />
            </div>
           
            <div className="social">
                <a href="https://twitter.com/ulmens1" target="_blank"><img className="logo__social" src={TW} alt="Bella Olonje twitter social platfrom" /></a>
                <a href="https://www.facebook.com/gaismasabolis/" target="_blank"><img className="logo__social" src={FB} alt="Bella Olonje facebook social platfrom" /></a>
                <a href="https://www.instagram.com/gaismas_abolis/" target="_blank"><img className="logo__social" src={insta} alt="Bella Olonje instagram social platfrom" /></a>
            </div>
            
            <div className="copy">
                <div>Copywright 2020 Bella Onojie.com</div>
            </div>

        </footer>
        </>
    )
}

export default Footer