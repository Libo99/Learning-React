import React, {useEffect, useState} from "react";


function App() {
  const [todo, setTodo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todo);
  }
 

  
  return (
    <div className="App">
      <header>
        <h1>Todos</h1>
      </header>

        <form onSubmit={handleSubmit}>
          <label htmlFor="todo">Add Todo</label>
          <input type="text" id="todo" onChange={e => setTodo(e.target.value)} value={todo}/>
          <button onClick>Submit</button>
        </form>

        <h2>
          {todo}
        </h2>
      </div>
  );
}


export default App;
