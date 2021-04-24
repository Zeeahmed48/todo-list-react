import React from "react";
import { useState } from "react";
import Todo from "./Todo";

const TodoList = () => {
  const [todo, setTodo] = useState([]);
  const handleSetTodo = () => {
    console.log(todo);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="todo-lists">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button onClick={handleSetTodo}>Add todo</button>
        <Todo todo={todo} />
      </form>
    </div>
  );
};

export default TodoList;
