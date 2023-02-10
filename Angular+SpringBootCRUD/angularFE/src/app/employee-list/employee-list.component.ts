import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[];

  constructor(private employeeService: EmployeeService,
    private router: Router,
    public dialog : MatDialog) { }

  ngOnInit(): void {
     //this.employees=[{

     // "eid": 1234,
      //"ename": "Amit",
     // "email": "amit@gmail.com"
  // }]
    this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    });
  }

  updateEmployee(eid:number){
    this.router.navigate(['update-employee',eid]);
  }

  //dialog method
  
  

}
