import React from "react";
import Slider from "react-slick";

// Import the styles for the react-slick library
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
  // Create an array of images to display in the slide show
  const images = [
    "https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg",
  ];

  // Configure the settings for the slide show
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Loop the slide show
    speed: 500, // Transition speed (ms)
    slidesToShow: 1, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll
  };

  return (
    <div className="landing-page">
      {/* Create the slide show using the react-slick component */}
      <Slider {...settings}>
        {images.map((image) => (
          <img src={image} alt="Product image" />
        ))}
      </Slider>
      <h1>Welcome to our e-commerce site!</h1>
    </div>
  );
};

export default HomePage;
