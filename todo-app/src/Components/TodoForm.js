import React from 'react';
import "../TodoForm.css";


const TodoForm = () => {


    return(
        <div className="form-container">
            <div className="form">
                <form>
                    <label htmlFor="todo">Add Todo</label>
                    <input type="text" name="todo" id="todo"/>
                </form>
            </div>
        </div>
    )
}


export default TodoForm;