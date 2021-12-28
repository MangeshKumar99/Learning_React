import React, { useState } from 'react'

function ToDoF() {
    const [toDoValue, setToDoValue] = useState("")
    const [toDoListArray, setToDoListArray] = useState([])
    function changeToDoValue(event) {
        setToDoValue(event.target.value)
    }
    const addToDoValue = () => {
        setToDoListArray([...toDoListArray, toDoValue])
        setToDoValue("")
    }
    const deleteToDo = (item) => {
        const removeItem = toDoListArray.filter((todo) => {
            return todo !== item;
        });
        setToDoListArray(removeItem)
    }
    return (

        <div>
            <h3>TODO LIST</h3>
            <input value={toDoValue} type="text" placeholder="Write a TODO" onChange={changeToDoValue} />
            <button onClick={addToDoValue}>Add TODO</button>
            {
                toDoListArray.map((todo) => <p>{todo}<button onClick={() => deleteToDo(todo)}>Delete TODO</button></p>)
            }
        </div>
    )
}

export default ToDoF
