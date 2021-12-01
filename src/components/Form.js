import React from 'react';
import './Form.css';

const Form = ({ setInputText, todos, setTodos, inputText }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {text: inputText, completed: false, id: Math.random() * 1000},
    ]);
    setInputText('');
  };

  return (
    <div>
      <div>
        <h1>Form</h1>
      </div>
      <div>
        <form>
          <input
            value={ inputText }
            onChange={ inputTextHandler }
            type="text"
            name="task"
            placeholder="Task"
          />
          <button 
            onClick={ submitTodoHandler }
            type="submit"
            className="btn"
            placeholder="Add Task"
          >
            Add Task
          </button>
        </form>
        <div>
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Form;
