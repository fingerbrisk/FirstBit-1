import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = 'http://localhost:9010/api/a1/employees';
  constructor(private httpClient: HttpClient) { }

  public getEmployeesList(): Observable<Employee[]>{

    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
    
  }

  public createEmployee(employee:Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,employee);

  }

  public getEmployeeById(eid :number) : Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${eid}`);
  }

  public updateEmployee(eid:number, employee:Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${eid}`,employee);
  }
  
}
