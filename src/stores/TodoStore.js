import {observable, action} from "mobx";
import TodoModel from "./TodoModel";

class TodoStore {
    @observable todos = [];
    @observable filter = [];
    @observable count = 0;
    lastID = 0;

    @action
    addTodo(title) {
        this.todos.push(new TodoModel(this, title, false, this.lastID++));
        this.count++;
        this.filter = this.todos;
    }

    @action
    removeTodo(id) {
        if (this.todos.length === 1) {
            this.todos = [];
            this.count = 0;
            this.filter = this.todos;
        }
        for (let i = 0; i < this.todos.length; i++) {
            if (this.todos[i].id === parseInt(id, 10)) {
                let idx = this.todos.indexOf(this.todos[i]);

                this.todos.splice(idx, 1);
                this.count--;
            }
        }
        this.filter = this.todos;
    }

    @action
    removeCompleted() {
        for (let j = 0; j < this.todos.length; j++) {
            for (let i = 0; i < this.todos.length; i++) {
                if (this.todos[i].completed) {
                    let idx = this.todos.indexOf(this.todos[i]);
                    this.todos.splice(idx, 1);
                    this.count--;
                }
            }
            this.filter = this.todos;
        }
    }
}

const store = new TodoStore();
export default store;
