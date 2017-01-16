import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private _todoService: TodoService) {

  }

  ngOnInit() {
    this.todos = [];
    this._todoService.getTodos()
      .subscribe(todos => {
        this.todos = todos.todos;
      })
  }

  addTodo(event, todoText) {
    var result;
    var newTodo = {
      text: todoText.value,
      completed: false
    }

    result = this._todoService.saveTodo(newTodo)
    result.subscribe(todo => {
      this.todos.push(todo);
      todoText.value = '';
    });
  }

  setEditState(todo, state) {
    if(state) {
      todo.isEditMode = state;
    } else {
      delete todo.isEditMode;
    }
  }

  updateStatus(todo) {
    var _todo = {
      id: todo.id,
      text: todo.text,
      completed: !todo.completed
    };

    this._todoService.updateTodo(_todo)
      .subscribe(data => {
        todo.completed = !todo.completed;
      });
  }

  updateTodoText(event, todo) {
    if(event.which == 13) {
      todo.text = event.target.value;
      var _todo = {
        id: todo.id,
        text: todo.text,
        completed: todo.completed
      };

      this._todoService.updateTodo(_todo)
        .subscribe(data => {
          this.setEditState(todo, false);
        });
    }
  }

  deleteTodo(todo) {
    var todos = this.todos;
    //console.log(todos);
    this._todoService.deleteTodo(todo.id)
      .subscribe(data => {
          if(data.n == 1) {
            for (var i = 0; i < todos.length; i++) {
              if (todos[i].id == todo.id) {
                todos.splice(i, 1);
              }
            }
          }
      });
  }
}
