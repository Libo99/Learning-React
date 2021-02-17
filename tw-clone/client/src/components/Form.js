import React, { useState, useEffect } from "react";
import "../Form.css";
import Axios from "axios";
import List from "./List";
import Loading from "./LoadingSpinner";


const Form = () => {
  const [post, setPost] = useState([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const {REACT_APP_API_URL} = process.env;
  const url = REACT_APP_API_URL;

  const [loading, setLoading] = useState(true);

  const fetchApi = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPost(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Post = {
    name: name,
    text: text,
  };

  const Addpost = async () => {
    await Axios.post(url, Post)
    .then((post) => console.log(post.data))
    .catch(err => console.log(err));
  };

  const OnSubmit = (e) => {
    e.preventDefault();
    Addpost();
    setName("");
    setText("");
    setLoading(true);
    setTimeout(() => {
      fetchApi();
    }, 500);
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
      {loading ? <Loading /> : <List post={post} />}
    </div>
  );
};

export default Form;
