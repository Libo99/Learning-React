import React, { useState, useEffect } from "react";
import "../List.css";

const List = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const url = "http://localhost:8205/post";

      const response = await fetch(url);
      const data = await response.json();
      setPost(data);
    };
    fetchApi();
  }, []);

  if (!post)
    return (
      <div>
        loadiiiing
      </div>
    );
    

  return (
    <div className="container">
      <ul>
        {post
          .map((post, index) => (
            <li key={index}>
              <div className="content">
                <h1 className="name">{post.name}</h1> <br />
                <p className="text"> {post.text}</p> <br />
                <small className="date">{post.created}</small>
              </div>
            </li>
          ))
          .reverse()}
      </ul>
    </div>
  );
};

export default List;
