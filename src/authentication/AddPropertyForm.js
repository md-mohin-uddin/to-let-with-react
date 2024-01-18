// AddPropertyForm.js
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddPropertyForm = ({ onAddProperty }) => {
  const [propertyData, setPropertyData] = useState({
    title: "",
    price: "",
    location: "",
    images1: "",
    images2: "",
    images3: "",
    bedrooms: "",
    bathrooms: "",
    flatSize: "",
    description: "",
    balcony: "",
    floor: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPropertyData({
      ...propertyData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form data here if needed

    // Pass the property data to the parent component
    onAddProperty({ ...propertyData, id: Date.now() });

    // Clear the form after submission
    setPropertyData({
      title: "",
      price: "",
      location: "",
      images1: "",
      images2: "",
      images3: "",
      bedrooms: "",
      bathrooms: "",
      flatSize: "",
      description: "",
      balcony: "",
      floor: "",
    });
  };

  return (
    <Form onSubmit={handleSubmit} className="my-3">
      <h1>Add Property</h1>

      <div className="d-flex justify-content-evenly">
        <div>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={propertyData.title}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={propertyData.price}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </div>
        <div>
          <Form.Group controlId="location">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              name="location"
              value={propertyData.location}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="location">
            <Form.Label>Flat Size</Form.Label>
            <Form.Control
              type="number"
              name="flatSize"
              value={propertyData.flatSize}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="location">
            <Form.Label>Floor</Form.Label>
            <Form.Control
              type="number"
              name="floor"
              value={propertyData.floor}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </div>
        <div>
          <Form.Group controlId="location">
            <Form.Label>Bedrooms</Form.Label>
            <Form.Control
              type="number"
              name="bedrooms"
              value={propertyData.bedrooms}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="location">
            <Form.Label>Balcony</Form.Label>
            <Form.Control
              type="number"
              name="balcony"
              value={propertyData.balcony}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="location">
            <Form.Label>Bathrooms</Form.Label>
            <Form.Control
              type="number"
              name="bathrooms"
              value={propertyData.bathrooms}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </div>
      </div>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Write Details of The Flat.............."
          type="textarea"
          name="description"
          value={propertyData.description}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Button className="mt-2" variant="primary" type="submit">
        Add Property
      </Button>
    </Form>
  );
};

export default AddPropertyForm;
