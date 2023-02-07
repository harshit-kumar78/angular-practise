import { Component } from '@angular/core';
import { Emp } from '../empInterface';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css'],
})
export class ThreeComponent {
  getdata() {
    let empdata: Emp = {
      name: 'harshit',
      age: 45,
      email: 'harshit@gmail.com',
      phone: 9999999999,
    };
  }
}
