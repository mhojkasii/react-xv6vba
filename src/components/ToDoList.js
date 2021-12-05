import './ToDoList.css';
import React, { useState } from 'react';
import ToDoItem from './ToDoItem';

function ToDoList(props) {
  const [header, setHeader] = useState(props.listTitle);

  function clickHander() {
    setHeader('Home');
  }

  let items = props.items;
  return (
    <>
      <h2>{header}</h2>
      {/* <button onClick={clickHander}>Change header</button> */}
      <ToDoItem title={items[0].title} description={items[0].description} />
      <ToDoItem title={items[1].title} description={items[1].description} />
      <ToDoItem title={items[2].title} description={items[2].description} />
    </>
  );
}

export default ToDoList;
