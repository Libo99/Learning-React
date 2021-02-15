import React from "react";
import "../List.css";

const List = (props) => {
  const { post } = props;

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
