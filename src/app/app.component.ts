import { Component,Input } from '@angular/core';
import { TODO } from '../app/todos.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'deepanshTest';
  projectName = 'Deepansh Test Project';
  todos : TODO[];
  constructor(){
    
  }

  loadContent(){
    this.todos = [{
        id: 1,
        title: "Todo Test1",
        desc: "This is Todo Test1",
        status: 1
    },
    {
        id: 2,
        title: "Todo Test2",
        desc: "This is Todo Test2",
        status: 1
    },
    {
        id: 3,
        title: "Todo Test3",
        desc: "This is Todo Test3",
        status: 1
    },
    {
        id: 4,
        title: "Todo Test4",
        desc: "This is Todo Test4",
        status: 0
    }];
    console.log(this.todos);
  }

  flushContent(){
    this.todos = [];
    console.log(this.todos);
  }
 
}
