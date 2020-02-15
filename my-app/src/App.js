import React from 'react';
import logo from './logo.svg';
import TodoApp from './Input.js';
import './App.css';
import {AwesomeButton} from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
	<TodoApp listname="ingredients!"/>
	<TodoApp listname="adjectives"/>
        //insert button here - pass in two lists as props 
	<AwesomeButton 
		type="primary"
		>Submit
	</AwesomeButton>
    </header>
    </div>
  );
}

export default App;
