import React from "react";
import Slider from "react-slick";

// Import the styles for the react-slick library
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import { Box, Typography } from "@mui/material";
import FeaturedSection from "../../app/layout/FeaturedSection";

const HomePage = () => {
  // Create an array of images to display in the slide show
  const images = [
    "https://cdn.shopify.com/s/files/1/2351/6719/files/KOCHI4485_2048x.jpg?v=1660673926",
    "https://cdn.shopify.com/s/files/1/2351/6719/files/KOCHI4342.jpg_webb.jpg?v=1660673868",
    "https://cdn.shopify.com/s/files/1/2351/6719/files/1_c569f1d0-00fc-42f8-9fc2-06da8d8dd75d_2048x.jpg?v=1659420470",
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
    <>
      {/* Create the slide show using the react-slick component */}
      <Slider {...settings}>
        {images.map((image) => (
          <img
            src={image}
            alt="Product"
            style={{
              display: "block",
              width: "90%",
              maxHeight: 100,
              height: 100,
            }}
          />
        ))}
      </Slider>
      <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
        <Typography variant="h3">Welcome to our e-commerce site!</Typography>
      </Box>
      <Box>
        <FeaturedSection />
      </Box>
    </>
  );
};

export default HomePage;
