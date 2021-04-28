import React from "react";

const Todo = ({ todos, deleteTodo, editTodo }) => {
  return (
    <ul className="todo__item">
      {todos.map((todo, index) => {
        return (
          <li key={Math.random()}>
            {todo}
            <button onClick={() => editTodo(index, todo)}>Edit</button>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Todo;
