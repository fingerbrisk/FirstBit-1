import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-interpolation',
  template:'<h2>Welcome to {{name}}</h2>',
  styleUrls: ['./test-interpolation.component.css']
})
export class TestInterpolationComponent implements OnInit {

  public name = "Pune";

  constructor() { }

  ngOnInit(): void {
  }

}
