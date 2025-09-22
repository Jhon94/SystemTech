import React from "react";
import "../styles/footer.css";
import logo1 from '../assets/homeImgs/logoFacebook.webp';
import logo2 from '../assets/homeImgs/logoInstagram.webp';
import logo3 from '../assets/homeImgs/logoX.webp';
import logo4 from '../assets/homeImgs/logoWhatssApp.webp';

function Footer() {
    return (
        <footer>
            <div className="footerContainer">
                <div className="footerSubscribe">
                    <h2>ZEN TECH</h2>
                    <h3>Suscribete</h3>
                    <div className="subscribeForm">
                        <input type="text" placeholder="ingresa tu Email" />
                        <button type="submit">Suscribete</button>
                    </div>
                </div>
                <div className="footerLinks">
                    <div className="linksSection1">
                        <h3>Productos</h3>
                        <ul>
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Item</a></li>
                        </ul>
                    </div>
                    <div className="linksSection2">
                        <h3>Servicios</h3>
                        <ul>
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Item</a></li>
                        </ul>
                    </div>
                    <div className="linksSection3">
                        <h3>Contactos</h3>
                        <ul>
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Item</a></li>
                            <li><a href="#">Item</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footerPolicies">
                    <h3>Politicas de Privacidad</h3>
                    <p>Protegemos tus datos; tu privacidad es nuestra prioridad.</p>
                    <div className="socialMediaIcons">
                        <a href="#"><img className="logo1" src={logo1} alt="Facebook" /></a>
                        <a href="#"><img className="logo2" src={logo2} alt="Instagram" /></a>
                        <a href="#"><img className="logo3" src={logo3} alt="X" /></a>
                        <a href="#"><img className="logo4" src={logo4} alt="WhatsApp" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
