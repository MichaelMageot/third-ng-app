import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  http = inject(HttpClient);
// todoItems: Array<Todo> = [
//   {
//   id: 0,
//   userId: 1,
//   title: 'groceries',
//   completed: false,
//   },
//   {
//     id: 1,
//     userId: 1,
//     title: 'car wash',
//     completed: false
//   }
// ];
getTodosFromApi() {
  const url = 'https://jsonplaceholder.typicode.com/todos';
  return this.http.get<Array<Todo>>(url);
}
}
