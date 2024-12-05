import React, { useState, useEffect } from 'react';
import { images } from '../data/data';


export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <h2 className="section-heading">Gallery</h2>
      <div className="carousel">
        <img
          className="carousel-image"
          src={images[currentIndex].src}
          alt={`Slide ${currentIndex + 1}`}
        />
        <p className="carousel-description">{images[currentIndex].description}</p>
      </div>
      <div className="carousel-buttons">
        <button className="carousel-btn prev-btn" onClick={prevImage}>
          &#8592; Prev
        </button>
        <button className="carousel-btn next-btn" onClick={nextImage}>
          Next &#8594;
        </button>
      </div>
    </div>
  );
}

