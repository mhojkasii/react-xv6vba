import './ToDoItem.css';

function ToDoItem() {
  const title = 'Title2';
  return (
    <>
      <p className="title">{title}</p>
      <input type="checkbox" />
    </>
  );
}

export default ToDoItem;
