import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    Link,
    Outlet
  } from "react-router-dom";
function Learn() {
    return (
        <div>
            <h1>Learn Code Online</h1>
            <h4>Here are the list of courses</h4>
            <Link to="/learn/course">Courses</Link>|
            <Link to="/learn/bundle">Bundle</Link>
            <Outlet/>
          
        </div>
    )
}

export default Learn
