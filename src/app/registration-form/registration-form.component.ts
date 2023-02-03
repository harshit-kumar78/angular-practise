import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent implements OnInit {
  // registerForm!: any;
  user: any = {
    name: '',
    email: '',
    password: '',
  };
  contactForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.contactForm = fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  postData() {
    // console.log(this.contactForm);
    let name = this.contactForm.get('name')?.value;
    let email = this.contactForm.get('email')?.value;
    let password = this.contactForm.get('password')?.value;
    console.log(name, email, password);
  }

  setData() {
    this.contactForm.patchValue({
      name: 'hk',
      email: 'hk@gmail.com',
      // password: '12345',
    });
  }
  resetData() {
    this.contactForm.reset();
  }
  // contactForm = new FormGroup({
  //   name: new FormControl('pradeep'),
  //   email: new FormControl('p@gmail'),
  //   password: new FormControl('123456'),
  // });
  ngOnInit() {
    // this.registerForm = this.formBuilder.group({
    //   firstName: ['', Validators.required],
    //   lastName: ['', Validators.required],
    //   address: this.formBuilder.group({
    //     street: [],
    //     zip: [],
    //     city: [],
    //   }),
    // });
  }

  //formSubmit(val: any) {
  // let data = val.controls;
  // const name = data.name.value;
  // const email = data.email.value;
  // const password = data.password.value;
  // console.log(name, email, password);

  // second way
  // console.log(val);
  // let name = val.name;
  // let email = val.email;
  // let password = val.password;
  // console.log(name, email, password);
  // }
}
