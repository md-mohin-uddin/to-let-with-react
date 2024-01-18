import React from "react";
import Post from "./Post";

const propertyData = (e) => {
  console.log(e.target.value);
};
const Posts = ({ props }) => {
  return (
    <div>
      <h1
        style={{
          color: "black",
          backgroundColor: "goldenrod",
          margin: ".2rem",
          padding: ".5rem",
          textAlign: "left",
        }}
      >
        All Properties
      </h1>

      {/* Render the Post component */}

      <Post onAddProperty={propertyData} />
    </div>
  );
};

export default Posts;
