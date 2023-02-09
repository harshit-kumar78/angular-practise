import { Injectable } from '@angular/core';
import { Employee } from './Employee';

const empdata: Employee[] = [
  { id: 1, name: 'harshit1', email: 'hk1@gmail.com', phone: 1234567890 },
  { id: 2, name: 'harshit2', email: 'hk2@gmail.com', phone: 1234567890 },
  { id: 3, name: 'harshit3', email: 'hk3@gmail.com', phone: 1234567890 },
  { id: 4, name: 'harshit4', email: 'hk4@gmail.com', phone: 1234567890 },
  { id: 5, name: 'harshit5', email: 'hk5@gmail.com', phone: 1234567890 },
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
