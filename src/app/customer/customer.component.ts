import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  ngOnInit(): void {
    // localStorage.setItem('local', 'localvalue');
    // sessionStorage.setItem('session', 'sessionvalue');
    // console.log(localStorage.getItem('local'));
    // console.log(sessionStorage.getItem('session'));
    // localStorage.removeItem(key);
    // localStorage.clear();
    //same for session storage
    let data = { name: 'harshit', age: 34, salary: 45000 };
    localStorage.setItem('custdata', JSON.stringify(data));
    console.log(localStorage.getItem('custdata'));
  }
}
