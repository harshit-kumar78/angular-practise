import { Component } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-api-data',
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.css'],
})
export class ApiDataComponent {
  userdata: any;
  constructor(private apiService: ApiService) {
    this.apiService.getUserData().subscribe((data) => {
      this.userdata = data;
      console.log(this.userdata);
    });
  }
}
