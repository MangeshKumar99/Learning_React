import React, { Component } from 'react'
import PureComp from './PureComp'
import RegularComp from './RegularComp'

export class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Mangesh'
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState(()=>this.state.name='Mangesh')
        },2000)
    }
    
    render() {
        console.log('*****ParentComp*****')
        return (
            <div>
                ParentComp
                <PureComp name={this.state.name}/>
                <RegularComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComp
