import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  ngOnInit(): void {
    console.log(localStorage.getItem('local'));
    console.log(sessionStorage.getItem('session'));
  }
}
