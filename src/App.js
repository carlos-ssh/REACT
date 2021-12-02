import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <Nav />
      <div>
        <Form
          inputText={ inputText }
          todos={ todos }
          setTodos={ setTodos }
          setInputText={ setInputText }
        />
        <TodoList
          setTodos={ setTodos }
          todos={ todos }
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
