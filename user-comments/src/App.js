import React from "react";
import faker from 'faker'
import Comment from './components/Comment'

function App() {
  return (
    <div className="comments">
      <Comment auhtor="Liban" image={faker.image.image()} date={new Date().toLocaleTimeString()} text="nice post"/>
      <Comment auhtor="Liban" image={faker.image.image()} date={new Date().toLocaleTimeString()} text="nice post"/>
      <Comment auhtor="Liban" image={faker.image.image()} date={new Date().toLocaleTimeString()} text="nice post"/>
    </div>

  );
}

export default App;
