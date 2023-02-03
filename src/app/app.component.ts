import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  controlForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.controlForm = this.fb.group({
      email: ['', Validators.required],
      password: [''],
    });
  }

  submit(val: any) {
    console.log(val);
  }
}
