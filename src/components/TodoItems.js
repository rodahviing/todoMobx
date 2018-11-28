import React, { Component } from "react";
import {observer} from 'mobx-react'

import TodoItem from './TodoItem'
import TodoStore from '../stores/TodoStore'

@observer
class TodoItems extends Component {
  render() {
    return (
      <section className="main">
        <ul className="todo-list">
          {
            TodoStore.filter.map(todo=>{
              return(
                <TodoItem todo={todo}/>
              )
            })
          }
        </ul>
      </section>
    );
  }
}

export default TodoItems;
