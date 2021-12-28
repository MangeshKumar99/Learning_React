import React, { Component } from 'react'
class ToDoList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            toDoValue: "",
            toDoList: localStorage.getItem("toDoList") ? JSON.parse(localStorage.getItem("toDoList")) : [],
        }
    }
    addToDo = () => {
        const toDoList = [...this.state.toDoList]
        toDoList.push(this.state.toDoValue)
        this.setState({
            toDoValue: "",
            toDoList
        })

        localStorage.setItem("toDoList", JSON.stringify(toDoList))
    }
    toDoHandler = (event) => {
        this.setState({
            toDoValue: event.target.value
        })
    }
    deleteToDo = (item) => {
        const removeItem = this.state.toDoList.filter((todo) => {
            return todo !== item;
        });
        const toDoList = [...removeItem]
        this.setState({
            toDoList
        })
        localStorage.setItem("toDoList", JSON.stringify(toDoList))
    }
    render() {
        return (
            <div>
                <h3>TODO LIST</h3>
                <input value={this.state.toDoValue} type="text" placeholder="Write a TODO" onChange={this.toDoHandler} />
                <button onClick={() => this.addToDo()}>Add TODO</button>
                {
                    this.state.toDoList.map((todo) => <p>{todo}<button onClick={() => this.deleteToDo(todo)}>Delete TODO</button></p>)
                }
            </div>
        )
    }
}
export default ToDoList
