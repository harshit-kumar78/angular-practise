import { Component } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css'],
  providers: [DataService],
})
export class ComponentOneComponent {
  data: any;
  constructor(private dataservice: DataService) {
    this.data = this.dataservice.getuserdata();
  }
}
