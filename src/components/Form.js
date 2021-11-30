import React from 'react';
import './Form.css';

const Form = () => {
  return (
    <div>
      <div>
        <h1>Form</h1>
      </div>
      <div>
        <form>
          <input type="text" name="task" placeholder="Task" />
          <button type="submit" className="btn" placeholder="Add Task">Add Task</button>
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
