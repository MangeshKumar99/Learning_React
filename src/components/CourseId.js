import React from 'react'

import {
    useParams,
    useNavigate
  } from 'react-router-dom'

function CourseId() {
    const {courseid}=useParams()
    const navigate=useNavigate()
    console.log(courseid)
    return (
        <div>
            <h1>Course id is : {courseid}</h1>
            <button onClick={()=>navigate("/dashboard",{state:"199"})}>Price</button>
        </div>
    )
}

export default CourseId
