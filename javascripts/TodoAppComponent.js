const { Component } = React;

class TodoList extends Component {
  render() {
    const createItem = (item) => {
      return <li key={item.id}>{item.text}</li>;
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
}

export default class TodoAppComponent extends Component {
  constructor() {
    super();
    this.state = {items: [], text: ''};
  }

  onChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const nextItems = this.state.items.concat([{text: this.state.text, id: Date.now()}]);
    const nextText = '';
    this.setState({items: nextItems, text: nextText});
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input onChange={this.onChange.bind(this)} value={this.state.text} />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    );
  }
}
