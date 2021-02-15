import React, { useState, useEffect } from "react";
import "../List.css";
import Loading from "./LoadingSpinner";

const List = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      const url = "https://obscure-retreat-25663.herokuapp.com/posts";

      const response = await fetch(url);
      const data = await response.json();
      setPost(data);
      setLoading(false);
    };
    fetchApi();
  }, []);

  return (
    <div className="container">
      {loading ? (
        <Loading />
      ) : (
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
      )}
    </div>
  );
};

export default List;
