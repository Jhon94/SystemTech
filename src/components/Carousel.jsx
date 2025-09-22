import React, { useState } from "react";
import "../styles/carousel.css";

// homeImgs
import img1 from "../assets/homeImgs/SLIDER.png";

// catalogoServiciosImgs
import img2 from "../assets/catalogoServiciosImgs/sharedimage15.jpg";
import img3 from "../assets/catalogoServiciosImgs/sharedimage2.jpg";
import img4 from "../assets/catalogoServiciosImgs/sharedimage8.jpg";

const images = [
  img1,
  img2,
  img3,
  img4,
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            className="carousel-slide"
            src={src}
            alt={`Imagen ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="carousel-button carousel-button-prev"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="carousel-button carousel-button-next"
      >
        ▶
      </button>
    </div>
  );
}

export default Carousel;
