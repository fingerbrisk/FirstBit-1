import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todos';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  title!: string;
  description!: string;

  @Output()
   addTodo: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const todo={
      sr_no:8,
      title:this.title,
      desc:this.description,
      active:true
    }
    this.addTodo.emit(todo);
  }

}
