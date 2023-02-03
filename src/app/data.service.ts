import { Injectable } from '@angular/core';
import { AddressService } from './address.service';
@Injectable({
  providedIn: 'root',
})
// @Injectable()
export class DataService {
  address: string;
  constructor(private addresService: AddressService) {
    this.address = this.addresService.getAddress().address;
  }

  getuserdata() {
    return {
      name: 'harshit',
      email: 'hk@gmail.com',
      password: '12345',
      address: this.address,
    };
  }
}
