import React from 'react';
import { BsCheckCircleFill, BsFillTrashFill } from 'react-icons/bs';
import './TodoList.css';

const Todo = ({
  text, todo, todos, setTodos,
}) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(todos.map((item) => {
      if (item.id === todo.id) {
        return {
          ...item, completed: !item.completed,
        };
      }
      console.log(item);
      return item;
    }));
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? 'active' : ''}`}>{ text }</li>
      <button onClick={completeHandler} className="done">
        <BsCheckCircleFill />
      </button>
      <button onClick={deleteHandler} className="del">
        <BsFillTrashFill />
      </button>
    </div>
  );
};

export default Todo;
