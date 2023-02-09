import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent {
  employees: any;
  constructor(private empService: EmployeeService) {
    this.employees = this.empService.getEmpData();
    console.log(this.employees);
  }
}
