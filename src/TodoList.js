import React from "react";
import { useState } from "react";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const addTodo = () => {
    setTodo('')
    const tempTodos = [...todos]
    tempTodos.push(todo)
    setTodos(tempTodos);
    console.log(todos)
  };

  return (
    <div className="todo-lists">
      <input
        type="text"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button onClick={addTodo}>Add todo</button>
      <Todo todos={todos} />
    </div>
  );
};

export default TodoList;
