import React, { Component } from 'react'

 class Condition extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:true
        }
    }
    
    render() {
        return (
            this.state.isLoggedIn?<div>Welcome Hacker</div>:<div>Welcome Guest</div>
        )
    }
}

export default Condition
