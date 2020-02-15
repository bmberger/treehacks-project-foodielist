import React from 'react';
import logo from './logo.svg';
import TodoApp from './Input.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
				<TodoApp listname="ingredients"/>
				<TodoApp listname="adjectives"/>
      </header>
    </div>
  );
}

export default App;
