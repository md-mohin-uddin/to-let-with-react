import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image1 from "../assets/frontend/images/Cover/1.jpg";
import Image2 from "../assets/frontend/images/Cover/10.jpg";
import Image3 from "../assets/frontend/images/Cover/3.jpg";

const Header = () => {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img className="d-block w-100 h-50" src={Image1} alt="First slide" />
        <Carousel.Caption className="text-white">
          <h2>The best way to find your properties and trusted service!</h2>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 text-white"
          src={Image2}
          alt="Second slide"
        />
        <Carousel.Caption className="text-white">
          <h2>The best way to find your properties and trusted service!</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Image3} alt="Third slide" />
        <Carousel.Caption className="text-white">
          <h2>The best way to find your properties and trusted service!</h2>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Header;
