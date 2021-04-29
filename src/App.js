import React from "react";
import { useState } from "react";

function App() {
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
    <div className="app">
      <div className="todo_lists">
        <h1>Todo List</h1>
        <div className="input_wrapper">
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
        </div>
        <ul className="todo__item">
          {todos.map((todo, index) => {
            return (
              <li key={Math.random()}>
                <p>{todo}</p>
                <button onClick={() => editTodo(index, todo)}>Edit</button>
                <button onClick={() => deleteTodo(index)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
