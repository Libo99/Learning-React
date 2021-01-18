import React from "react";

const License = (props) => {
  const { name, image, title, age } = props;

  const renderAge = () => {
    if (age < 24) {
      return `${age} years old Junior Developer`;
    }

    return `${age} years old senior Developer`;
  };
  return (
    <div className="card">
      <img src={image} alt="" style={{ width: "100%" }} />
      <h1>{name}</h1>
      <p className="title">Title: {title}</p>
      <div className="age">
        <p>{renderAge(age)}</p>
      </div>
    </div>
  );
};

export default License;
