import React, { Component } from 'react'

 class Counter extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              counter:0
         }
     }
    incrementCounter=()=>{
        this.setState({
            counter:this.state.counter+1
        })
    }
    decrementCounter=()=>{
        this.setState({
            counter:this.state.counter-1
        })
    }
    resetCounter=()=>{
        this.setState({
            counter:0
        })
    }
     
    render() {
        console.log("render")
        return (
            <div>
                <h1>Counter : {this.state.counter}</h1>
                <div>
                    <button onClick={this.incrementCounter}>Increment</button>
                    <button onClick={this.decrementCounter}>Decrement</button>
                    <button onClick={this.resetCounter}>Reset</button>
                </div>
                
            </div>
        )
    }
}

export default Counter
