import React from "react";
import { useState } from "react";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  const [oldTodoIndex, setOldTodoIndex] = useState("");
  const [updatedTodo, setUpdatedTodo] = useState("");
  const addTodo = () => {
    const tempTodos = [...todos, todo];
    setTodos(tempTodos);
    setTodo("");
  };
  const deleteTodo = (id) => {
    const tempTodos = [...todos];
    tempTodos.splice(id, 1);
    setTodos(tempTodos);
  };
  const editTodo = (id, oldValue) => {
    setIsEditMode(true);
    setUpdatedTodo(oldValue);
    setOldTodoIndex(id);
  };
  const updateTodo = () => {
    const tempTodos = [...todos];
    tempTodos.splice(oldTodoIndex, 1, updatedTodo);
    setTodos(tempTodos);
    setUpdatedTodo("");
    setIsEditMode(false);
  };

  return (
    <div className="todo-lists">
      <h1>Todo List</h1>
      <input
        type="text"
        onChange={
          isEditMode
            ? (e) => setUpdatedTodo(e.target.value)
            : (e) => setTodo(e.target.value)
        }
        value={isEditMode ? updatedTodo : todo}
      />
      {isEditMode ? (
        <button onClick={updateTodo}>Update todo</button>
      ) : (
        <button onClick={addTodo}>Add todo</button>
      )}
      <Todo todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  );
};

export default TodoList;
