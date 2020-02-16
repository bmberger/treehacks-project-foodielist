import React from 'react';

const API = 'localhost:5000/api?query=';

class Fetch extends React.Component {
	constructor(props) {
		super(props);
	this.state = {
		hits : [],
	};
	}
	
	render() {
	{
	    const { hits } = this.state;

	    return (
	      <ul>
        	{hits.map(hit =>
       		   <li key={hit.objectID}>
        	    <a href={hit.url}>{hit.title}</a>
       		   </li>
       		 )}
     		 </ul>
  	  );
	  }

	}

	componentDidMount() {
		// fetch(API + 'cheese')
		// .then(response => response.json())
		// .then(data => this.setState({ hits: data.hits }));
	}
}
export default Fetch;
