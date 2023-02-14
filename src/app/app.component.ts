import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpsalaryService } from './empsalary.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  address: any;
  ourText = 'learn angular by own ';
  website = {
    logo: 'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg',
  };
  loginTitle = 'customer login page';
  redText = 'redText';
  constructor() {}
  ngOnInit(): void {
    this.address = {
      street: 'vijay path',
      road: 'school gali',
      city: 'deoghar',
      state: 'jharkhand',
    };
  }
}
