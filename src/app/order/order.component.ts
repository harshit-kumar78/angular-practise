import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  ngOnInit(): void {
    let rs = JSON.parse(localStorage.getItem('custdata')!);

    console.log(rs.name + '->' + rs.salary + '->' + rs.age);
  }
}
