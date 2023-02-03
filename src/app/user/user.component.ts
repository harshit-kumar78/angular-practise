import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  userId: number = 10;
  userStatus: string;

  constructor() {
    this.userStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
  getStatus(): string {
    return this.userStatus;
  }
  getColor() {
    if (this.userStatus === 'online') {
      return 'green';
    }
    return 'red';
  }
}
