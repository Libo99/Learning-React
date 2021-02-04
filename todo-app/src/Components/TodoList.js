import React from 'react';
import '../TodoList.css'

const TodoList = (props) => {



const {Todos} = props;
    return(
        <div className="list">
            <h2 className="list-header">List of todos</h2>
            <ul>
                {Todos.map(todo => <li key={todo.id}>Todo: {todo.text}</li>)}
            </ul>
            
        </div>
    )

}

export default TodoList;