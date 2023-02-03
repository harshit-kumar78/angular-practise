import { Component } from '@angular/core';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css'],
})
export class CComponent {
  userStatus: string;
  userList: any = ['harsht', 'pankaj', 'manoj'];
  constructor() {
    this.userStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getColor() {
    if (this.userStatus == 'online') return 'green';
    else return 'red';
  }
}
