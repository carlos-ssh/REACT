import React from 'react';
import { FaClipboard } from 'react-icons/fa';
import './TodoList.css';

const Nav = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul>
          <li>
            <FaClipboard className="atag icon" />
            <a href="/" className="atag"> TODO's</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav;
