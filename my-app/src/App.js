import React from 'react';
import List from './List.js';
import './App.css';
import {AwesomeButton} from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import Fetch from './Fetch.js';

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
		this.state.ingredients.push(new_ingredient);
		this.setState({
			ingredients: this.state.ingredients
		});
	}
	addAdjective = adjective => {
		const new_adjective = {
			key: Date.now(),
			name: adjective
		};
		this.state.adjectives.push(new_adjective);
		this.setState({
			adjectives: this.state.adjectives
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
				<Fetch ingr= {this.state.ingredients} />
				</header>
			</div>
		);
	}
}

export default App;
