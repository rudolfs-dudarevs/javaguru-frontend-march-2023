import React from "react";
import './Footer.css';

const Footer = () =>{
    return (
        <footer className="footer">
            <h2 className="footer__title">
                Footer
            </h2>
            <div className="footer__content">
                <div>
                    <a className="footer__link" href="/">
                        Services
                    </a>
                    <a className="footer__link" href="/">
                        Contact us
                    </a>
                    <a className="footer__link" href="/">
                        Shipping & Returns
                    </a>
                </div>
                <div>
                    <a className="footer__link" href="/">
                        Careers
                    </a>
                    <a className="footer__link" href="/">
                        Blog
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer