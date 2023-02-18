import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  data!: string;
  passValue({ target }: any) {
    const { value } = target;
    this.data = value;
  }
}
