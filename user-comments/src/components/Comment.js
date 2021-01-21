import React from 'react';


const Comment = (props) => {
    const {text, author, image, date} = props;
return(
    <div className="ui container comments">
      <div className="comment">
        <a className="avatar" href="/">
          <img alt="avatar" src={image} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {author}
          </a>
          <div className="metadata">
            <span className="date">{date}</span>
          </div>
          <div className="text">{text}</div>
        </div>
      </div>
    </div>
);
};

export default Comment;