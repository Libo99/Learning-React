import { useState } from "react";
import React from 'react';


const Form = () => {

const [todo, setTodo] = useState([]);

    return(
        <form>
            <label htmlFor="todo-name">Add Todos</label>
            <input type="text" name="todo-name"/>
            <button onClick={() => setTodo()}>Add todo</button>
        </form>
    )
}


export default Form;