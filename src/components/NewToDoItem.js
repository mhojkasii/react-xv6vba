import React, { useState } from 'react';

function NewToDoItem(props) {
  const [title, setTitle] = useState('');

  function titleChangeHandler(event) {
    console.log(event);
    setTitle(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    const newItem = {
      title: title,
      description: 'Description 4',
      id: 4,
    };
    props.onSaveForm(newItem);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={titleChangeHandler}
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <input type="description" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default NewToDoItem;
