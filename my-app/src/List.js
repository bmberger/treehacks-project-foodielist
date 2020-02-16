import React from 'react';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>{this.props.listname}</h3>
        <ul>{this.props.listelems.map(item => <li key={item.key}>{item.name}</li>)}</ul>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>Add</button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    console.log("a")
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) return;
    this.props.updater(this.state.text);
    this.setState({ text: '' });
  }
}

export default List;