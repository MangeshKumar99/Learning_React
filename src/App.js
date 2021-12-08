import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import React from 'react';
import Welcome from './components/Welcome';
import Counter from './components/Counter';
import Parent from './components/Parent';
import Condition from './components/Condition';
import List from './components/List';
import Car from './components/Car';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import LifecycleB from './components/LifecycleB';
import ParentComp from './components/ParentComp';
import Post from './components/Post';
import AllReactHooks from './components/AllReactHooks';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from './components/Home';
import Learn from './components/Learn';
import Course from './components/Course';
import Bundle from './components/Bundle';
import CourseId from './components/CourseId';
import Dasboard from './components/Dasboard';
import ComponentTwo from './components/ComponentTwo';



class App extends React.Component {
  render() {
    return (
      <div className="App">

        {/* <Parent/> */}
        {/* {/* <Greet name="Mangesh" superName="Kai">Kai X DarkShadow</Greet> */}
        {/* <Greet name="Divyanshu" superName="Penguin"/> 
         <Welcome name="Mangesh" superName="Kai"/>  */}
        {/* <Counter/> */}
        {/* <Welcome name="Mangesh" superName="Kai"/>
        <Condition/> */}
        {/* <List/>
        <Car primary={false}/>
      */}
        {/* <Form/>
      <LifecycleA/> */}
        {/* <ParentComp/> */}
        {/* <Post/> */}
        {/* <AllReactHooks/> */}

        {/* <Counter/> */}
        {/* <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dasboard/>}/ >
            <Route path="/learn" element={<Learn/>} >
              
              <Route path="course" element={<Course/>}>
                <Route path=":courseid" element={<CourseId/>}/>
       
              </Route>
              <Route path="bundle" element={<Bundle/>} />
            </Route>
            <Route path="/myapps" element={<Navigate replace to="/learn"/>} />
            
          </Routes>



        </Router> */}
        <ComponentTwo/>




      </div>
    )
  }
}


export default App;
