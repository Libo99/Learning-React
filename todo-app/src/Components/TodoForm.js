import React, { useState } from 'react';
import "../TodoForm.css";
import TodoList from './TodoList';


const TodoForm = () => {
const [todo, setTodo] = useState('');
const [todos, setTodos] = useState([]);

const Addtodo = () => {
setTodos([ ...todos,
    {
    id: todos.length,
    text: todo,
    completed: false

}])
}

const OnSubmit = (e) => {
e.preventDefault();
    setTodo("");
}

const IsCompleted = todoId => {
    const completedTodo = todos.map(todo => {
        return todoId === todo.id ? {completed: !todo.completed} : todo;
        
        
    });
    setTodo(completedTodo);
}

    return(
        <div className="container">
            <div className="form-container">
                <h2>Add a todo to the list</h2>
                <form onSubmit={OnSubmit}>
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