import { TodoServiceService } from 'src/app/Services/todo-service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  timeElapsed = Date.now();
  today = new Date(this.timeElapsed);

  title: string | undefined;
  desc: string | undefined;
  active: boolean | undefined;

  constructor(private service: TodoServiceService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    const todo = {
      sno: 1,
      title: this.title,
      desc: this.desc,
      active: this.active,
    };
    this.service.addTodoToList(todo);
    this.router.navigate(['home']);
  }
}
