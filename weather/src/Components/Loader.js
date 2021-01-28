import React from 'react';



const Loader = (props) => {
const {text} = props;
    return (
      <div className="ui active dimmer">
        <div className="ui big text loader">{text}</div>
      </div>
    );
};

Loader.defaultProps = {
  text: 'Loading....'
}


export default Loader;