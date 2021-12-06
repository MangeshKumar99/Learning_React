import React from 'react'
import {
  
    Outlet
  
  } from 'react-router-dom'
function Course() {
    return (
        <div>
            <h2>Course list</h2>
            <h2>Course card</h2>
            <Outlet/>
        </div>
    )
}

export default Course
