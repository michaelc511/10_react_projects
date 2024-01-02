import React, { useState } from "react";
import "./style.css";

function generateId() {
  return Math.floor(Math.random() * 10);
}

function Todo() {
  // 1. state for todos of an empty array and input
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // 2. handleSubmit to set todos use concat() to add to the array and return a new array
  const handleSubmit = () => {
    setTodos((todos) =>
      todos.concat({
        text: input,
        id: generateId(),
      })
    );
    setInput("");
  };

  // 3. removeTodos by using filter() to revmove it and return a new array 
  const removeTodo = (id) =>
    setTodos((todos) => todos.filter((t) => t.id !== id));

  return (
    <div className="container">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="New Todo"
      />

      <button onClick={handleSubmit}>Submit</button>

      {/* 3. Loop through the todos with the map  */}
      <ul className="todos-list">
        {todos.map(({ text, id }) => (
          <li key={id} className="todo">
            <span>{text}</span>
            <button className="close" onClick={() => removeTodo(id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;