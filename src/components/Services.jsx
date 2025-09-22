import React from "react";
import "../styles/services.css";
import mantenimietoSoftware from '../assets/homeImgs/manteniemientoSoftware.jpg';
import seguridadImg from '../assets/homeImgs/seguridadImg.png';
import { Link } from "react-router-dom";

function Services() {
    return (
        <section className="servicesContainer">
            <h3>Nuestros servicios destacados</h3>
            <div className="servicesGrid">
                <div className="grid-item1">
                    <img src={mantenimietoSoftware} alt="Imagen de servicio 1" />
                </div>
                <div className="grid-item2">
                    <img src={seguridadImg} alt="Imagen de servicio 2" />
                </div>
                <div className="serviceText">
                    <p>
                        En Zen Tech, ofrecemos una amplia gama de servicios
                        para cubrir todas tus necesidades digitales. Desde el
                        desarrollo de software a medida hasta consultoría de IA y
                        ciberseguridad.
                    </p>
                    <div className="catalogoLink">
                        <Link className="catalogoLinkButton" to="/catalogo">Catalogo de servicios</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
