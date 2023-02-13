import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpsalaryService } from './empsalary.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomsalary!: number;
  constructor(private salary: EmpsalaryService) {
    this.randomsalary = this.salary.getEmpSalary();
  }
}
