import React, { Component } from "react";
import {observer} from 'mobx-react'

import todoStore from '../stores/TodoStore'

@observer
class TodoItem extends Component {

  onToggle = () => {
    this.props.todo.toggle()
  }

  onDestroy = (e) =>{
    // console.log(e.target.id);
    todoStore.removeTodo(e.target.id)
    // this.props.todo.updateId()
    
  }

  render() {
    const {todo} = this.props
    return (
        <li className={todo.completed ? 'completed' : ' '}>
        <div className="view">
          <input
            onChange = {this.onToggle}
            type="checkbox"
            className="toggle"
            value="on"
            defaultChecked={todo.completed}
          />
          <label>{todo.title}</label>
          <button id={todo.id}
            onClick={this.onDestroy}
            className="destroy" />
        </div>
      </li>
    );
  }
}

export default TodoItem;
