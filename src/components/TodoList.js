import React from 'react';
import './TodoList.css';
import Todo from './Todo';

const TodoList = ({todos, setTodos}) => {
  return (
    <div className="todo-list">
      <ul>
        {todos.map((todo) => (
          <Todo
            setTodos={ setTodos }
            todos={ todos }
            text={ todo.text }
            todo={todo}
            key={ todo.id }
          />
          ))}
      </ul>
    </div>
  );
};

export default TodoList;
