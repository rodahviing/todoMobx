import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { observer } from "mobx-react";

import TodoEntry from "./components/TodoEntry";
import TodoItems from "./components/TodoItems";
import TodoStore from "./stores/TodoStore";
import "./App.css";

@observer
class App extends Component {
  ALL_TODOS = "all";
  ACTIVE_TODOS = "active";
  COMPLETED_TODOS = "completed";

  componentDidMount = () => {
    // var setState = this.setState;
    // var router = Router({
    //   "/": setState.bind(this, { nowShowing: App.ALL_TODOS }),
    //   "/active": setState.bind(this, { nowShowing: App.ACTIVE_TODOS }),
    //   "/completed": setState.bind(this, { nowShowing: App.COMPLETED_TODOS })
    // });
    // router.init("/");
  };

  render() {
    return (
      <div className="todoapp">
        <TodoEntry />
        <TodoItems />
        <footer class="footer">
          {/* <!-- This should be `0 items left` by default --> */}
          <span class="todo-count">
            <strong>{TodoStore.count}</strong> item left
          </span>
          {/* <!-- Remove this if you don't implement routing --> */}
          <ul class="filters">
            <li>
              <a class="selected" href="#/">
                All
              </a>
            </li>
            <li>
              <a href="#/active">Active</a>
            </li>
            <li>
              <a href="#/completed">Completed</a>
            </li>
          </ul>
          {/* <!-- Hidden if no completed items are left ↓ --> */}
          <button class="clear-completed">Clear completed</button>
        </footer>
      </div>
    );
  }
}

export default App;
