import React from 'react';

const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    console.log(todo);
    setTodos(todos.filter(el => el.id !== todo.id));
  };

  return (
    <div className="todo">
      <li className="todo-item">{ text }</li>
      <button className="done">Complete</button>
      <button onClick={ deleteHandler } className="del">Remove</button>
    </div>
  );
}

export default Todo;
