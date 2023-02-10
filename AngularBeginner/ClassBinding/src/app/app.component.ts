import { style } from '@angular/animations';
import { getCurrencySymbol } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:'<h2 class = "text-success">Class Binding</h2>\n<h2 [class] = "fontClass">ClassBinding</h2>\n<h2 [class] = "fontStyle">ClassBinding</h2>',
  styles:['.text-success{color:green; } .text-danger{color:red}.text-special{font-style: italic;}']
})
 
export class AppComponent {

  public fontClass = "text-danger";
  public fontStyle = "text-special";

  title = 'ClassBinding';

}
