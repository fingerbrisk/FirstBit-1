import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template:'<button (click) = "onClick()"> Event-Binding </button>{{greeting}}',
  styles: []
})
export class EventBindingComponent implements OnInit {

  public greeting = "";
  constructor() { }


  onClick(){
    console.log('EVENT BINDING');
    this.greeting ='Welcome to Event Binding';
  }

  ngOnInit(): void {
  }

}
