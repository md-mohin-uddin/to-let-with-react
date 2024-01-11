import React, { useState } from "react";
import { blogsData } from "../data";
import { Link } from "react-router-dom";
import { truncateString } from "../utils/utils";

const Blogs = () => {
  const [blogs, setBlogs] = useState(blogsData);

  return (
    <div>
      <h1>Blogs Page</h1>
      <section>
        {blogs.map((blog) => {
          const { id, title, desc } = blog;
          return (
            <article key={id}>
              <h3>{title}</h3>
              <p>{truncateString(desc, 100)}</p>
              <Link to={title}>Learn More </Link>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Blogs;
