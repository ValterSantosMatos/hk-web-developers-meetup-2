import {Page} from 'ionic-angular';

import {TodoList} from './todos.service';


@Page({
  templateUrl: 'build/pages/todos/todos.html'
})
export class TodosPage {
    public todo: string;
    public todos: Array<string>;

    constructor(private _todoList: TodoList) {
    }

    ngOnInit() {
        this.todos = this._todoList.getTodos();
    }

    addTodo() {
        this._todoList.addTodo(this.todo);
        this.todo = '';
    }

    removeTodo(index: number) {
        this._todoList.removeTodo(index);
    }
}
