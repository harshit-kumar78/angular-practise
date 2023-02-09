import { Injectable } from '@angular/core';
import { Employee } from './Employee';

const empdata: Employee[] = [
  { id: 1, name: 'harshit', email: 'hk@gmail.com', phone: 1234567890 },
  { id: 2, name: 'harshit', email: 'hk@gmail.com', phone: 1234567890 },
  { id: 3, name: 'harshit', email: 'hk@gmail.com', phone: 1234567890 },
  { id: 4, name: 'harshit', email: 'hk@gmail.com', phone: 1234567890 },
  { id: 5, name: 'harshit', email: 'hk@gmail.com', phone: 1234567890 },
];

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor() {}

  getEmpData() {
    return empdata;
  }
}
