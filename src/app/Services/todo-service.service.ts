import { Injectable } from '@angular/core';
import { Todo } from '../Models/Todo';

@Injectable({
  providedIn: 'root',
})
export class TodoServiceService {
  todos: Todo[];
  localItems: string | null;
  SNO: number = Math.floor(Math.random() * 1001);

  constructor() {
    this.localItems = localStorage.getItem('todos');
    if (this.localItems == null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localItems);
      this.SNO += this.todos.length;
    }
  }

  getAllTodos() {
    return this.todos;
  }

  addTodoToList(todo: Todo) {
    todo.sno = ++this.SNO;
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  deleteFromList(todo: Todo) {
    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
