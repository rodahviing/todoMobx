import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {observer} from "mobx-react";

import TodoEntry from "./components/TodoEntry";
import TodoItems from "./components/TodoItems";
import Footer from "./components/Footer";
import "./App.css";

@observer
class App extends Component {
    render() {
        return (
            <div className="todoapp">
                <TodoEntry/>
                <TodoItems/>
                <Footer/>
            </div>
        );
    }
}

export default App;
