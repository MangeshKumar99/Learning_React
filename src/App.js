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


class App extends React.Component{
  render(){
    return(
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
      <Post/>
      

  

      </div>
    )
  }
}


export default App;
