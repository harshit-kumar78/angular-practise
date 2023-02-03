import { Component } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css'],
})
export class AComponent {
  userId: Number = 10;
  userName: string = 'harshit';
  disabled: boolean = true;
  user: string = 'no user created';
  value: boolean = true;
  vInput: string;
  input_value: string;
  constructor() {
    setTimeout(() => {
      this.disabled = false;
    }, 3000);
  }
  clicked(event: Event) {
    console.log('button clicked');
    this.disabled = true;
    this.user = 'user created';
    console.log(event);
    console.log(event.target);
  }
  input(event: Event) {
    //this.vInput = (event.target as HTMLInputElement).value;
    this.vInput = (<HTMLInputElement>event.target).value;
  }
}
