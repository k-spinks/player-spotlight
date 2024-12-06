import React, { useState, useEffect } from 'react';
import { images } from '../data/data';

export default function Gallery() {
  // useState is used to manage the currently displayed image's index.
  // Initially, the first image in the array is displayed (index 0).
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect is used to automatically cycle through images at a fixed interval (5 seconds).
  // The interval is cleared when the component unmounts or when currentIndex changes.
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    // Cleanup function to clear the interval when the component is unmounted or updated.
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Function to switch to the next image in the array.
  // If the current index is the last image, it loops back to the first image (index 0).
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to switch to the previous image in the array.
  // If the current index is the first image, it loops back to the last image.
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <h2 className="section-heading">Gallery</h2>

      {/* Carousel that displays the current image and its description */}
      <div className="carousel">
        <img
          className="carousel-image"
          src={images[currentIndex].src}
          alt={`Slide ${currentIndex + 1}`}
        />
        <p className="carousel-description">{images[currentIndex].description}</p>
      </div>
      <div className="carousel-buttons">
        <button
          className="carousel-btn prev-btn"
          // Switches to the previous image when clicked.
          onClick={prevImage}
        >
          &#8592; Prev
        </button>
        <button
          className="carousel-btn next-btn"
           // Switches to the next image when clicked.
          onClick={nextImage}
        >
          Next &#8594;
        </button>
      </div>
    </div>
  );
}