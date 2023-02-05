import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  name!: string;
  id!: string;
  constructor(private route: ActivatedRoute) {
    // this.route.params.subscribe((params) => (this.name = params['username']));
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.name = params['username'];
      this.id = params['userid'];
      console.log(params);
    });
  }
}
