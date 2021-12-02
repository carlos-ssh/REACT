import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case 'completed': {
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      }
      case 'uncompleted': {
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      }
      default: {
        setFilteredTodos(todos);
        break;
      }
    }
  };
  console.log(filteredTodos);
  return (
    <div className="App">
      <Nav />
      <div>
        <Form
          inputText={ inputText }
          todos={ todos }
          setTodos={ setTodos }
          setInputText={ setInputText }
          setStatus={ setStatus }
          />
        <TodoList
          filteredTodos={ filteredTodos }
          setTodos={ setTodos }
          todos={ todos }
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
