import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  @ViewChild('userInput') userinput: ElementRef;
  userList: any = [];

  constructor() {}
  addUser() {
    // console.log(userInput.value);
    this.userList.push(this.userinput.nativeElement.value);
    //
  }
  ngOnInit() {}
}
