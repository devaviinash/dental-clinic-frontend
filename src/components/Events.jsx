import React, { useState, useEffect } from "react";

const Events = () => {
  const images = [
    "https://files.oaiusercontent.com/file-1HGMRRNuKQ9GcnfVqqLp7d?se=2025-01-20T04%3A44%3A13Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D68dc07f2-6785-4525-a619-d336a66fd2e1.webp&sig=wdRtJXv1tWL3UdR8pPW1opM80IKFE036g8MEglurQxc%3D",
    "https://files.oaiusercontent.com/file-1HGMRRNuKQ9GcnfVqqLp7d?se=2025-01-20T04%3A44%3A13Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D68dc07f2-6785-4525-a619-d336a66fd2e1.webp&sig=wdRtJXv1tWL3UdR8pPW1opM80IKFE036g8MEglurQxc%3D",
    "https://files.oaiusercontent.com/file-1HGMRRNuKQ9GcnfVqqLp7d?se=2025-01-20T04%3A44%3A13Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D68dc07f2-6785-4525-a619-d336a66fd2e1.webp&sig=wdRtJXv1tWL3UdR8pPW1opM80IKFE036g8MEglurQxc%3D",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [startTouch, setStartTouch] = useState(0);

  useEffect(() => {
    if (images.length > 1) {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 10000);

      return () => clearInterval(intervalId);
    }
  }, [images.length]);

  const handleTouchStart = (e) => {
    const touchStart = e.touches[0].clientX;
    setStartTouch(touchStart);
  };

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    if (startTouch - touchEnd > 20) {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    } else if (touchEnd - startTouch > 20) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <div
      name="events"
      id="events"
      className="relative w-full mb-10 overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Image Slider */}
      <div
        className={`flex transition-transform duration-700 ease-in-out ${
          images.length > 1 ? "" : "justify-center"
        }`}
        style={
          images.length > 1
            ? { transform: `translateX(-${currentIndex * 100}%)` }
            : {}
        }
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[90%] object-contain"
            />
          </div>
        ))}
      </div>

      {/* Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex
                  ? "bg-gray-800"
                  : "bg-gray-400 hover:bg-gray-500"
              }`}
            ></button>
          ))}
        </div>
      )}

      {/* WhatsApp Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => window.open("https://wa.me/+919730031147", "_blank")}
          className="bg-green-500 text-white py-3 px-8 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
        >
          WhatsApp Us
        </button>
      </div>
    </div>
  );
};

export default Events;
