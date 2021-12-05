import './ToDoItem.css';
import React, { useState } from 'react';

function ToDoItem(props) {
  const [description, setDescription] = useState(props.description);

  function clickChangeDescriptionHandler() {
    console.log('Clicked');

    setDescription('Changed');
  }

  return (
    <div className="card mb-2">
      <h5 className="card-header">{props.title}</h5>
      <div class="card-body">
        <p>{description}</p>

        <input type="checkbox" />
        <button className="btn btn-danger">Delete</button>
        <button
          className="btn btn-sm btn-primary"
          onClick={clickChangeDescriptionHandler}
        >
          Change Description
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;
