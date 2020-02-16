import React from 'react';
import List from './List.js';
import './App.css';
import {AwesomeButton} from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			ingredients: [],
			adjectives: []
		}
	}
	addIngredient = ingredient => {
		const new_ingredient = {
			key: Date.now(),
			name: ingredient
		};
		this.setState({
			ingredients: [...this.state.ingredients, new_ingredient]
		});
	}
	addAdjective = adjective => {
		const new_adjective = {
			key: Date.now(),
			name: adjective
		};
		this.setState({
			adjectives: [...this.state.adjectives, new_adjective]
		});
	}
	render() { 
		return (
			<div className="App">
				<header className="App-header">
				<List listname="ingredients" listelems={this.state.ingredients} updater={this.addIngredient}/>
				<List listname="adjectives" listelems={this.state.adjectives} updater={this.addAdjective}/>
				<AwesomeButton
					type="primary"
					onPress={_ => console.log(this.state.ingredients, this.state.adjectives)}
				>
				Submit
				</AwesomeButton>
				</header>
			</div>
		);
	}
}

export default App;
