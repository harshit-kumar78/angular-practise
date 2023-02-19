import { Component } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css'],
})
export class OutputComponent {
  data: string[] = [];
  getValue(value: any) {
    // console.log(value);
    this.data = value;
  }
}
