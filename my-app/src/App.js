import React from 'react';
import logo from './logo.svg';
import TodoApp from './Input.js';
import './App.css';
import {AwesomeButton} from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import Fetch from './Fetch.js';

const ingrList = [];
const adjList = [];

function App() {
  return (
    <div className="App">
      <header className="App-header">
	<TodoApp listname="ingredients!" entryType = {ingrList}/>
	<TodoApp listname="adjectives" entryType = {adjList}/>
	<AwesomeButton
        	type="primary"
	onPress={() => {
		{console.log(ingrList);
		 console.log(adjList);}
	}}  
	>
	  Submit
	</AwesomeButton>
	<Fetch ingr= {ingrList} />

    </header>
    </div>
  );
}

export default App;
