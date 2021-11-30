import './TodoList.css';

const TodoList = () => {
  return (
    <div className="todo-list">
      <h1>Your Pending tasks:</h1>
      <ul>
        <li>Buy Milk</li>
        <li>Buy Eggs</li>
        <li>Buy Bread</li>
      </ul>
    </div>
  );
};

export default TodoList;
