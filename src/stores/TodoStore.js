import { observable, action } from "mobx";
import TodoModel from "./TodoModel";
class TodoStore {
  @observable todos = [];
  lastID = 0;

  @action
  addTodo(title) {
    this.todos.push(new TodoModel(this, title, false, this.lastID++));
  }

  @action
  removeTodo(id) {
    if (this.todos.length === 1) {
      this.todos = [];
    }
    for (let i = 0; i < this.todos.length; i++) {
      console.log("todo item is :" + this.todos[i].id);
      console.log("passed id: " + id);
      // let index = todo.indexOf(id);
      if (this.todos[i].id === parseInt(id, 10)) {
        let idx = this.todos.indexOf(this.todos[i]);
       // console.log("idx: " + idx);
        this.todos.splice(idx, 1);
      }
    }
    //alert('id: ' + id)
  }
}
const store = new TodoStore();
export default store;
