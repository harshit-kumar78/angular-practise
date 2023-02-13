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
