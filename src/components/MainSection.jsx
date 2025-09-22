import React from "react";
import Carousel from "./Carousel";
import "../styles/mainSection.css";

function MainSection() {
    return (
        <section className="mainSection">
            <div className="mainContent">
                <h1>Zen Tech</h1>
                <p>
                    Somos una empresa de soluciones tecnológicas,
                    comprometidos con la innovación y la calidad para impulsar
                    el crecimiento de tu negocio.
                </p>
            </div>
            <Carousel />
        </section>
    );
}

export default MainSection;
