import React, { Component } from 'react'
import Child from './Child'
 class Parent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'Parent'
        }
    }
    greetParent=(childName)=>{
        alert("Hello" +" " + this.state.message + " "+ "from" +" " +childName)
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <Child greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default Parent
