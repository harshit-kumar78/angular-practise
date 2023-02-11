import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.css'],
})
export class CookieComponent implements OnInit {
  name!: string;
  email!: string;
  allCookies!: any;
  constructor(private cookieService: CookieService) {}

  ngOnInit(): void {
    this.name = this.cookieService.get('name');
    this.email = this.cookieService.get('email');
    this.allCookies = this.cookieService.getAll();
  }

  setCookie() {
    this.cookieService.set('name', 'harshit');
    this.cookieService.set('email', 'hk@gmail.com');
  }
  deleteCookie() {
    this.cookieService.delete('name');
  }
  deleteAllCookie() {
    this.cookieService.deleteAll();
  }
}
