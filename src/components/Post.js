import React from "react";
import { blogsData } from "../data";
import style from "./post.module.css";
import image from "../assets/frontend/images/sample/bed (1).jpg";
import Card from "react-bootstrap/Card";
const Post = () => {
  return (
    <div>
      <article className={style.posts}>
        {blogsData.map((blog) => {
          const { location, district } = blog;
          return (
            <div className={style.post} key={blog.id}>
              <img className={style.postImage} src={image} alt="" />
              <h4>Location: {location}</h4>
              <div className={style.qmeta}>
                <p>Price: {blog.price}</p>
                <p>District: {district}</p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Enim, eaque!
                </p>
              </div>
              <button className={style.detailsBtn}>Details</button>
            </div>
          );
        })}
      </article>
    </div>
  );
};

export default Post;
