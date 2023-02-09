import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css'],
})
export class EmployeedetailsComponent {
  employees: any;
  constructor(private empService: EmployeeService, private router: Router) {
    this.employees = this.empService.getEmpData();
    console.log(this.employees);
  }
  close() {
    this.router.navigate([{ outlets: { employeelist: null } }]);
  }
}
