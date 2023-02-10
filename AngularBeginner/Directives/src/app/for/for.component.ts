import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent implements OnInit {
 
  //@Input('parentData') public name;

  public colors = ["red","blue","yellow","orange"];

  constructor() { }

  ngOnInit(): void {
  }

}
