import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  name1!: string;
  id1!: string;
  name2!: string;
  id2!: string;
  constructor(private route: ActivatedRoute) {
    // this.route.params.subscribe((params) => (this.name = params['username']));
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.name1 = params['username'];
      this.id1 = params['userid'];
    });

    this.route.queryParams.subscribe((params) => {
      this.name2 = params['username'];
      this.id2 = params['userid'];
    });
  }
}
