import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Models/Todo';
import { TodoServiceService } from 'src/app/Services/todo-service.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  timeElapsed = Date.now();
  today = new Date(this.timeElapsed);

  constructor(private service: TodoServiceService) {
    this.todos = [];
  }

  ngOnInit(): void {
    this.todos = this.service.getAllTodos();
  }

  onTodoDelete(todo: Todo) {
    this.service.deleteFromList(todo);
  }
}
