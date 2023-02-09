import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-jquerydemo',
  templateUrl: './jquerydemo.component.html',
  styleUrls: ['./jquerydemo.component.css'],
})
export class JquerydemoComponent implements OnInit {
  ngOnInit(): void {
    $(document).ready(function () {
      $('#hide').click(function () {
        $('p').hide();
      });
      $('#show').click(function () {
        $('p').show();
      });
    });
  }
}
