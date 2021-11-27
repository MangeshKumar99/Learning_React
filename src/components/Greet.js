import React from 'react'

// function Greet(){
//     return <h1>Hello User</h1>
// }
const Greet=({name,superName})=>{
   
    return(
        <div>
            <h1>Hello {name} a.k.a {superName}</h1>
            {/* {props.children} */}
        </div>
    ) 
}
export default Greet