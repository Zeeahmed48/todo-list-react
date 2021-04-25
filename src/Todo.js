import React from 'react'

const Todo = ({todos}) => {
    return (
        <div>
            {/* <ul>
        {todo.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul> */}
      <ul className="todo__item">
          {todos.map(todo => <li key={Math.random()}>{todo}</li>)}
      </ul>
        </div>
    )
}

export default Todo
