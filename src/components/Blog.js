import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogsData } from "../data";
import style from "./blog.module.css";

const Blog = () => {
  const { id } = useParams();
  const [bodyData, setBodyData] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const blogData = blogsData.filter((blog) => blog.id === id);
    setBodyData(blogData[0].desc);
  }, []);
  return (
    <div>
      <button
        onClick={() => {
          navigate("/blogs");
        }}
      >
        Back to Blogs page
      </button>
      <div className={style.article}>
        <h1>{id} Page</h1>
        <p>{bodyData.slice(0, 500)}</p>
        <p>{bodyData.slice(501, 1000)}</p>
      </div>
    </div>
  );
};

export default Blog;
