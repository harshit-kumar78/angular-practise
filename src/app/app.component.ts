import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  controlForm!: FormGroup;

  constructor(private fb: FormBuilder, private routeR: Router) {
    this.controlForm = this.fb.group({
      email: ['', Validators.required],
      password: [''],
    });
  }
  onClick() {
    this.routeR.navigate(['signup']);
  }
  submit(val: any) {
    console.log(val);
  }
}
