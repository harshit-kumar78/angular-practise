import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  constructor() {}

  getAddress() {
    return {
      address: 'shahpur jat,delhi',
    };
  }
}
