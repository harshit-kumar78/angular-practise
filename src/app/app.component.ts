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
  isAuthenticated!: boolean;
  ourText = 'learn angular by own ';
  website = {
    logo: 'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg',
  };
  loginTitle = 'customer login page';
  redText = 'redText';
  yourName = 'Harshit';
  submitted = false;
  disabled = true;
  date = Date.now();
  constructor() {}
  ngOnInit(): void {
    this.address = {
      street: 789,
      road: 'school gali',
      city: 'deoghar',
      salary: 7800,
      state: 'jharkhand',
    };
  }
  username!: string;
  edit() {
    this.disabled = false;
  }
  onSubmit(username: string, password: string) {
    this.submitted = true;
    if (username == 'admin' && password == 'admin') {
      this.username = username;
      this.isAuthenticated = true;
    } else {
      console.log('failuremsg');
      this.isAuthenticated = false;
    }
  }
}
