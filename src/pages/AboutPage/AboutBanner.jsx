import { useEffect, useRef, useState } from "react";
import "../../styles/aboutbanner.css";

const ImageCarousel = () => {
  const images = [
    "/office1.jpg",
    "/office2.jpg",
    "/office3.png",
    "/office4.png",
    "/office5.png",
    "/office6.png",
    "/office7.png",
  ];

  const carouselRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
  }, [index]);

  return (
    <div className="mt-5 mb-5 lg:mb-10">
      <div className="carousel-container relative">
        <p className="absolute z-20 font-normal text-white text-sm lg:text-3xl top-[20px] left-1/2 -translate-x-1/2 bg-[#0000007a] px-2 py-1 rounded-sm">
          Explore Our Workspace
        </p>
        <button className="prev-btn" onClick={prevSlide}>
          <img src="/left.png" alt="" />
        </button>
        <div className="carousel" ref={carouselRef}>
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Slide ${i}`}
              className="carousel-image"
            />
          ))}
        </div>
        <button className="next-btn" onClick={nextSlide}>
          <img src="right.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
