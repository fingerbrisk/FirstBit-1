import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

    eid!: number;
   employee: Employee = new Employee();

  //Provides access to information about a route associated with a component that is 
  //loaded in an outlet. Use to traverse the RouterState tree and extract information from nodes.
  constructor(private employeeService:EmployeeService,
    private router: ActivatedRoute,
    private route: Router,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.eid = this.router.snapshot.params['eid'];
    this.employeeService.getEmployeeById(this.eid).subscribe(data=>{
      this.employee=data;
    });
  }
  onSubmit(){
    this.employeeService.updateEmployee(this.eid,this.employee).subscribe(data => {
      this.goToEmployeeList();
    });    
  }
  goToEmployeeList(){
    this.route.navigate([`/employees`]);
  }

}
