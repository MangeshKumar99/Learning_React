import React from 'react'
import {useLocation} from 'react-router-dom'
function Dasboard() {
    const location=useLocation()
    return (
        <div>
           <h4> Price of the course i recieved is {location.state}</h4>
        </div>
    )
}

export default Dasboard
