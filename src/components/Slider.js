import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = ({ photos }) => {
  return (
    <div className="slider">
      <Carousel
        autoPlay
        showArrows
        interval={5000}
        useKeyboardArrows
        swipeable
        transitionTime={500}
        infiniteLoop
      >
        {photos.map((photo) => (
          <div>
            <img src={photo.url} alt="1" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
