import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular CRUD Operations';

  constructor(){}

  // openDialog(){
  //   let dialogRef = this.dialog.open(DialogExampleComponent);
  
  //   dialogRef.afterClosed().subscribe(result=>{
  //     console.log(`Dialog result : ${result}`);
  //   });
  // }


}
