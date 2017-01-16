import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {
  constructor(private _http: Http) {

  }

  getTodos() {
    return this._http.get('http://localhost:5000/api/todos')
      .map(res => res.json())
  }

  saveTodo(todo) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this._http.post('http://localhost:5000/api/todo/0', JSON.stringify(todo), {headers: headers})
      .map(res => res.json());
  }

  updateTodo(todo) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this._http.put('http://localhost:5000/api/todo/'+todo.id, JSON.stringify(todo), {headers: headers})
      .map(res => res.json());
  }

  deleteTodo(id) {
    return this._http.delete('http://localhost:5000/api/todo/'+id)
      .map(res => res.json());
  }
}
