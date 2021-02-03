import React, { useState } from 'react';
import "../TodoForm.css";
import TodoList from './TodoList';


const TodoForm = () => {
const [todo, setTodo] = useState('');
const [todos, setTodos] = useState([]);

const Addtodo = (e) => {
e.preventDefault();
setTodos([ ...todos,
    {
    id: todos.length,
    text: todo,

}])
}

    return(
        <div className="container">
            <div className="form-container">
                <h2>Add a todo to the list</h2>
                <form>
                    <label htmlFor="todo">Todo</label>
                    <input type="text" name="todo" id="todo" value={todo} onChange={e => setTodo(e.target.value)}/>
                    <button onClick={Addtodo}>Add Todo</button>
                </form>
            </div>
            <TodoList Todos={todos}/>
        </div>
    )
}


export default TodoForm;