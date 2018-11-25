import { observable, action } from "mobx";

class TodoModel {
  store;
  @observable id;
  @observable title;
  @observable completed;

  constructor(store, title, completed, id) {
    this.title = title;
    this.completed = completed;
    this.id = id;
    this.store = store;
  }
  @action
  toggle() {
    this.completed = !this.completed;
  }

  // @action
  // updateId(){
  //   this.id = this.id;
  // }
}

export default TodoModel;