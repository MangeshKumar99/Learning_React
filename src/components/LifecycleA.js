import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        console.log('LifecycleA constructor')
        super(props)
    
        this.state = {
             name:'Mangesh'
        }
    }
    static getDerivedStateFromProps(state,props){
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifecycleA componentDidMount')
    }
    
    render() {
        console.log('LifecycleA render')
        return (
            
            <div>
                LifecycleA
                <LifecycleB/>
                
            </div>
        )
    }
}

export default LifecycleA
