import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  //create an array of todos
  todos?:Todo[];

  //set up th ng model
  inputTodo:string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First todo',
        completed: false
      },
      {
        content: 'Second',
        completed: false
      },
      {
        content: 'Third',
        completed: false
      }

    ]
  }

  //inferring type - (strict: id has to be a number (utilizing TS))
  toggleDone(id: number):void{ //Don't need void here if returning nothing but we can have it
this.todos?.map((v,i) =>{
  if (i==id) v.completed = !v.completed;
  
  return v;
    })
  }

  //inferring type - (strict: id has to be a number (utilizing TS)) -- Deletes from List
  deleteTodo(id:number){ 
    this.todos = this.todos?.filter((v,i) => i !== id);
  }

  //add to our todos list
  addTodo(){
    this.todos?.push({
      content: this.inputTodo,
      completed: false
    });

    this.inputTodo =""; // set's input form text blank
  }
}
