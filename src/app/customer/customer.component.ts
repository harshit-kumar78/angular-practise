import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  ngOnInit(): void {
    localStorage.setItem('local', 'localvalue');
    sessionStorage.setItem('session', 'sessionvalue');
    console.log(localStorage.getItem('local'));
    console.log(sessionStorage.getItem('session'));
  }
}
