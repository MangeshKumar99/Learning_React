import React, { Component } from 'react'

 class Form extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              firstName:'',
              lastName:'',
              email:''
         }
     }
     nameChangeHandler=(event)=>{
         this.setState({
             firstName:event.target.value
         })
     }
     lastNameChangeHandler=(event)=>{
        this.setState({
            lastName:event.target.value
        })
    }
    emailChangeHandler=(event)=>{
        this.setState({
            email:event.target.value
        })
    }
  submitFormDetails=event=>{
      alert(this.state.firstName + " " + this.state.lastName + " " + this.state.email  )
      event.preventDefault()
  }
    render() {
        return (
            <div>
                <form onSubmit={this.submitFormDetails}>
                    FirstName:
                    <input type="text" value={this.state.firstName} onChange={this.nameChangeHandler}/>
                    <br/>
                    LastName:
                    <input type="text" value={this.state.lastName} onChange={this.lastNameChangeHandler}/>
                    <br/>
                    Email:
                    <input type="text" value={this.state.email} onChange={this.emailChangeHandler}/>
                    <br/>
                    <button type="submit">Submit details</button>
                </form>
            </div>
        )
    }
}

export default Form
