import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="flex">
          {images.map((image, index) => (
            <div
              key={index}
              className={`w-full ${
                index === currentIndex ? "block" : "hidden"
              }`}
            >
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 focus:outline-none"
          onClick={prevSlide}
        >
          Previous
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 focus:outline-none"
          onClick={nextSlide}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
