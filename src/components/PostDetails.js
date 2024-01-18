import React, { useEffect, useState } from "react";
import { Card, Carousel } from "react-bootstrap";
import { useParams } from "react-router-dom";
import image from "../assets/frontend/images/sample/bed (1).jpg";
import image1 from "../assets/frontend/images/sample/bed (2).jpg";
import image2 from "../assets/frontend/images/sample/bed (3).jpg";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState({
    title: "",
    price: 0,
    flatSize: 0,
    bedrooms: 0,
    balcony: 0,
    bathrooms: 0,
    description: "",
  });

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:8000/listings");
      const data = await res.json();

      setPost(data.find((post) => post.id === id) || post);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div>
      {post && (
        <Card>
          <Carousel>
            <Carousel.Item className="slide">
              <img
                className="d-block mx-auto img-fluid w-50"
                src={image}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item className="slide">
              <img
                className="d-block mx-auto img-fluid w-50"
                src={image1}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item className="slide">
              <img
                className="d-block mx-auto img-fluid w-50"
                src={image2}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          {/* <Card.Img
            variant="top"
            src={image}
            className="d-block mx-auto img-fluid w-50"
          /> */}
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <div className="d-flex justify-content-evenly">
              <div>
                <p>Rent: {post.price}</p>
                <p>Flat Size: {post.flatSize}</p>
              </div>
              <div>
                <p>Bedrooms: {post.bedrooms}</p>
                <p>Balcony: {post.balcony}</p>
              </div>
              <div>
                <p>Bathrooms: {post.bathrooms}</p>
              </div>
            </div>
            <Card.Text>{post.description}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default PostDetails;
