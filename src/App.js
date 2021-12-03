import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <h1>Training application</h1>
      <ToDoList />
      {/* <ToDoItem />
      <ToDoItem />
      <ToDoItem /> */}
    </div>
  );
}

export default App;

// create new component ToDoList
// contentn of this component <ToDoItem />
//
