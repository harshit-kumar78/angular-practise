import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-api-data',
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.css'],
})
export class ApiDataComponent {
  // userdata: any;
  userdata$!: Observable<any>;

  constructor(private apiService: ApiService) {
    // this.apiService.getUserData().subscribe((data) => {
    //   this.userdata = data;
    //   console.log(this.userdata);
    // });

    let data = this.apiService.getUserData();
    this.userdata$ = data;
    // console.log(this.userdata$);
  }
}
