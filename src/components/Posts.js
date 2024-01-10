import React from "react";
import Post from "./Post";

const Posts = () => {
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
      <Post />
    </div>
  );
};

export default Posts;
