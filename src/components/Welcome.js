import React from "react"
class Welcome extends React.Component{
    constructor(){
        super()
        this.state={
            message:'Welcome visitor'
        }
    }
    changeMessage(){
        this.setState({
            message:'Thankyou for subscribing'
        })
    }
    render(){
        const {name,superName}=this.props
        return(
            
            <div>
                <h1>Welcome {name} a.k.a {superName}</h1>
                <h1>{this.state.message}</h1>
                {/* <button onClick={()=>{this.setState({message:'Thankyou for subscribing'})}} >Subscribe</button> */}
                <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}
export default Welcome
