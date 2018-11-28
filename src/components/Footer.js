import React, {Component} from "react";
import {observer} from 'mobx-react'

import TodoStore from '../stores/TodoStore'

@observer
class Footer extends Component {
    all = () => {
        TodoStore.filter = TodoStore.todos;

    };

    active = () => {
        TodoStore.filter = TodoStore.todos.filter(todo => todo.completed === false);

    };

    completed = () => {
        TodoStore.filter = TodoStore.todos.filter(todo => todo.completed === true);

    };

    removeCompleted = () => {
        TodoStore.removeCompleted()
    };

    render() {
        if (TodoStore.todos.filter(todo => todo.completed === false).length >= 0) {
            return (
                <footer className="footer">
                    <span className="todo-count">
                    <strong>{TodoStore.todos.filter(todo => todo.completed === false).length}</strong> item left
                </span>
                    <ul className="filters">
                        <li>
                            <a onClick={this.all} className="selected">
                                All
                            </a>
                        </li>
                        <li>
                            <a onClick={this.active}>Active </a>
                        </li>
                        <li>
                            <a onClick={this.completed}>Completed</a>
                        </li>
                    </ul>
                    <button onClick={this.removeCompleted} className="clear-completed">Clear completed</button>
                </footer>
            );
        } else {
            return (
                <footer className="footer">
                    <span className="todo-count">
                    <strong>{TodoStore.todos.filter(todo => todo.completed === false).length}</strong> item left
                </span>
                    <ul className="filters">
                        <li>
                            <a className="selected" href="/all">
                                All
                            </a>
                        </li>
                        <li>
                            <a href="/active">Active</a>
                        </li>
                        <li>
                            <a href="/completed">Completed</a>
                        </li>
                    </ul>
                </footer>
            );
        }

    }
}

export default Footer;
