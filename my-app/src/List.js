import React from 'react';

class TodoApp extends React.Component {
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
        <TodoList items={this.props.listelems} />
        <form onSubmit={this.handleSubmit}>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    this.props.updater(this.state.text);
    }
}

const TodoList = (props) => {
  return (
    <ul>
      {
        props.items.map(item => <li key={Date.now()}>{item.name}</li>)
      }
    </ul>
  );
}

export default TodoApp;
