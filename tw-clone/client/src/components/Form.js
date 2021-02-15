import React, { useState } from "react";
import "../Form.css";
import Axios from "axios";

const Form = () => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const Post = {
    name: name,
    text: text,
  };
  const url = "https://obscure-retreat-25663.herokuapp.com/posts";

  const Addpost = async () => {
    await Axios.post(url, Post).then((post) => console.log(post));
  };

  const OnSubmit = (e) => {
    e.preventDefault();
    Addpost();
    setName("");
    setText("");
  };

  return (
    <div className="container">
      <h1>Say Hello</h1>
      <div className="form-container">
        <form onSubmit={OnSubmit}>
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="u-full-width"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <label htmlFor="text" className="form-label">
            Text:
          </label>
          <textarea
            name="text"
            id="text"
            placeholder="Say something"
            className="u-full-width"
            onChange={(e) => setText(e.target.value)}
            value={text}
          ></textarea>
          <button className="button-primary">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
