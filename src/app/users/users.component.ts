import { Component } from '@angular/core';

@Component({
  // selector: 'app-users',
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  allowUser: boolean = true;
  isButtonClicked: boolean = false;
  inVal: string = '';
  users: any = ['user1', 'user2', 'user3'];

  constructor() {
    setTimeout(() => {
      this.allowUser = false;
    }, 5000);
  }
  isButtonClickedByUser() {
    this.isButtonClicked = true;
    this.users.push('user');
    console.log(this.users);
  }
  captureInput(event: Event) {
    // this.inVal = (event.target as HTMLInputElement).value;
    this.inVal = (<HTMLInputElement>event.target).value;
  }
  captureInput2(event: Event) {
    // this.inVal = (event.target as HTMLInputElement).value;
    this.inVal = (<HTMLInputElement>event.target).value;
  }
}
