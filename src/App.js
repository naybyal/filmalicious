// import logo from './logo.svg';
import './App.css';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { props } from react;
const name = 'React';
// const isNameDisplayed = false;
const Person = () => {
  return (
    <>
      <h1>Name : {this.props.name}</h1>
      <h2>LName : {this.props.lname}</h2>
      <h2>Age : 22</h2>
    </>
  )
}
const App = () => {
  return (
    <div className="App">
      <h1>Hello, { name }!</h1>
      <Person name='Rosetta' lname='Stoned' />
    </div>
  );
}

export default App;
