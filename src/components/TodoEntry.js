import React, { Component } from "react";
import todoStore from '../stores/TodoStore'

class TodoEntry extends Component {
  state = {
    value: ""
  }

  handleKeyDonw = event => {
    if(event.keyCode !==13 || this.state.value === ''){
      return;
    }
    event.preventDefault()
    todoStore.addTodo(this.state.value)
    this.setState({
      value:''
    })
  }

  getCount = () => {
    return todoStore.count;
  }

  render() {
    return (
      <header className="header">
        <h1>todo</h1>
        <input
          value={this.state.value}
          onChange={event =>this.setState({value: event.target.value})}
          onKeyDown={
            event => this.handleKeyDonw(event)
          }
          type="text"
          className="new-todo"
          placeholder="what needs to be done?"
        />
      </header>
    );
  }
}

export default TodoEntry;
