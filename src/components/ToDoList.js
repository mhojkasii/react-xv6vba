import './ToDoList.css';
import React from 'react';

function ToDoList() {
  const title = 'Title2';
  return (
    <>
      <p className="title">{title}</p>
      <input type="checkbox" />
    </>
  );
}

export default ToDoList;
