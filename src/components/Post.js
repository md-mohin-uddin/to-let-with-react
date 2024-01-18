import React, { useEffect, useState } from "react";
import { Card, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "./post.module.css";
import image from "../assets/frontend/images/sample/bed (1).jpg";
import AddPropertyForm from "../authentication/AddPropertyForm";
import { v4 as uuidv4 } from "uuid";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/listings")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);
  // Function to add a new property to the list
  const handleAddProperty = (newProperty) => {
    const id = uuidv4();
    setPosts([...posts, newProperty, id]);
  };
  return (
    <div>
      {/* Render the AddPropertyForm component and pass the handleAddProperty function */}
      <AddPropertyForm onAddProperty={handleAddProperty} />
      <div className={style.card}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          posts.map((post) => {
            const {
              id,
              title,
              price,
              flatSize,
              bedrooms,
              bathrooms,
              description,
            } = post;
            return (
              <Container key={id}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={image} />
                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <div className="d-flex justify-content-evenly">
                      <div>
                        <p>Rent: {price}</p>
                        <p>Flat Size: {flatSize}</p>
                      </div>
                      <div>
                        <p>Bedrooms: {bedrooms}</p>
                        <p>Bathrooms: {bathrooms}</p>
                      </div>
                    </div>
                    <Card.Text>{description}</Card.Text>
                    <Link to={`/post/${id}`} state={{ ...post }}>
                      <Button variant="primary">See Details</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Container>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Post;
