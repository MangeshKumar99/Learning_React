import React, { Component } from 'react'
import ComponentOne from './ComponentOne'

class ComponentTwo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isPDFGenerated:false,
    
        }
    }
    changeState=()=>{

        this.setState({
            isPDFGenerated:!this.state.isPDFGenerated
        })

    }
    
    render() {

        return (
            <div>
                <h3>This is ComponentTwo</h3>
                <button onClick={this.changeState}>Export to PDF</button>
                <ComponentOne data={this.state.isPDFGenerated}/>
            </div>
        )
    }
}

export default ComponentTwo
