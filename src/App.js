import React, { useState } from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import NewToDoItem from './components/NewToDoItem';

const item = {
  title: 'Title1',
  description: 'Description 1',
  id: 1,
};
const item2 = {
  title: 'Title 2',
  description: 'Description 2',
  id: 12,
};
const item3 = {
  title: 'Title 3',
  description: 'Description 3',
  id: 3,
};

const itemList = [item, item2, item3];

function App() {
  const [items, setItems] = useState(itemList);

  function onSaveFormHandler(newItem) {
    console.log(newItem);

    const newArray = [...items];

    newArray.push(newItem);

    setItems(newArray);
  }

  return (
    <div className="App">
      <h1>Training application</h1>
      <NewToDoItem onSaveForm={onSaveFormHandler} />
      <ToDoList listTitle="Work" items={items} />
    </div>
  );
}

export default App;

// create new component ToDoList
// contentn of this component <ToDoItem />
//
