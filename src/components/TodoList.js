import React from 'react';
import './TodoList.css';
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filteredTodos }) => (
  <div className="todo-list">
    <ul>
      {filteredTodos.map((todo) => (
        <Todo
          setTodos={setTodos}
          todos={todos}
          key={todo.id}
          todo={todo}
          text={todo.text}
        />
      ))}
    </ul>
  </div>
);

export default TodoList;
