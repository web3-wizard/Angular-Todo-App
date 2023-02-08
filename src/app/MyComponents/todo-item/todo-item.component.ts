import { Todo } from './../../Models/Todo';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo | undefined;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter(); 
  constructor() {}

  ngOnInit(): void {}

  onDelete(todo: Todo | undefined){
    this.todoDelete.emit(todo);
  }
}
