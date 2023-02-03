import { Component } from '@angular/core';

@Component({
  selector: 'app-super',
  templateUrl: './super.component.html',
  styleUrls: ['./super.component.css'],
})
export class SuperComponent {
  name: string;
  constructor() {
    this.name = 'super class variable';
  }
}
