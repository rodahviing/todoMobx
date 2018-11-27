import { observable, action } from "mobx";
import TodoModel from "./TodoModel";
class TodoStore {
  @observable todos = [];
  @observable count =0;
  lastID = 0;

  @action
  addTodo(title) {
    this.todos.push(new TodoModel(this, title, false, this.lastID++));
    // this.completed ? this.count-- : this.count++;
    this.count++
  }

  @action
  removeTodo(id) {
    if (this.todos.length === 1) {
      this.todos = [];
      this.count=0;
    }
    for (let i = 0; i < this.todos.length; i++) {
      console.log("todo item is :" + this.todos[i].id);
      console.log("passed id: " + id);
      // let index = todo.indexOf(id);
      if (this.todos[i].id === parseInt(id, 10)) {
        let idx = this.todos.indexOf(this.todos[i]);
       // console.log("idx: " + idx);
        this.todos.splice(idx, 1);
        this.count--;
      }
    }
    //alert('id: ' + id)
  }
}
const store = new TodoStore();
export default store;
