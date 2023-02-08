import { AddTodoComponent } from './MyComponents/add-todo/add-todo.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './MyComponents/todos/todos.component';

const routes: Routes = [
  {
    component: TodosComponent,
    path: 'home',
  },
  {
    component: AddTodoComponent,
    path: 'add',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
