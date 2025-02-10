import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  
  const [todo, setTodo] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event){

    const newValue = event.target.value;

    setTodo(newValue);

  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, todo];
    });
    setTodo("");
  }
  
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} value={todo} type="text" />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map( todoItem => (
          <ToDoItem text={todoItem}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
