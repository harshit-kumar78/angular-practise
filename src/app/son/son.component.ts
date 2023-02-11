import { Component } from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css'],
})
export class SonComponent {
  salary: number = 0;
  message: string = '';
  constructor() {}

  incrementSalary() {
    this.salary = this.salary + 500;
    this.message = 'salary incremented';
  }

  decrementSalary() {
    this.salary = this.salary - 500;
    this.message = 'salary decremented';
  }
}
