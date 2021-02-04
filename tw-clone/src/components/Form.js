import React from 'react';
import '../Form.css'


const Form = () =>{


    return (
      <div className="container">
          <h1>Say Hello</h1>
        <div className="form-container">
          <form>
            <label htmlFor="name" className="form-label">Name:</label>
            <input type="text" id="name" name="name" className="u-full-width"/>
            <label htmlFor="text" className="form-label">Text:</label>
            <textarea name="text" id="text" placeholder="Say something" className="u-full-width"></textarea>
            <button className="button-primary">Send</button>
          </form>
        </div>
      </div>
    );
}

export default Form;