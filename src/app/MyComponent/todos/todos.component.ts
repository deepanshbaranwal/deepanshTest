import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
 @Input() contents: [];
 text = [];
  constructor() { }
  
  showContent(content){
    this.text = content;
    console.log(content);
  }

  ngOnInit(): void {
  }
}
